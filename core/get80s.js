/* eslint-disable no-unused-vars */
const rp = require('request-promise');
const cheerio = require('cheerio');
const process = require('child_process');

// 获取搜索页面
async function getSearchHtml(url, keyword) {
  return rp({
    url: url,
    method: 'POST',
    form: {'keyword': keyword}, // 表单数据
    resolveWithFullResponse: true, // 返回体带所有内容
  })
      .then((response) => {
        return response.body;
      })
      .catch((error) => {
      // console.log(error);
        return '';
      });
}

// 解析搜索页面
function analysisSearchHtml(html) {
  const $ = cheerio.load(html, {decodeEntities: false});
  const arr = [];
  // cheerio可以像使用jQuery一样获取元素
  $('#pin-wrap a').each((index, item) => {
    const url = $(item).attr('href');
    const title = $(item).find('h4').text().replace(/\s+/g, '');
    // console.log(title, ':', url);
    arr.push(url);
  });
  // 默认返回第一个搜索结果
  return arr[0] || '';
}

// 获取详情页面
async function getDetailHtml(url) {
  return rp({
    url: url,
    method: 'GET',
    resolveWithFullResponse: true, // 返回体带所有内容
  })
      .then((response) => {
        return response.body;
      })
      .catch((error) => {
      // console.log(error);
        return '';
      });
}

// 解析详情页面
function analysisDetailHtml(html) {
  const $ = cheerio.load(html, {decodeEntities: false});
  const arr = [];
  // 和使用jQuery一样获取元素了
  $('#formats4 .btn_dl').each((index, item) => {
    const url = $(item).attr('href');
    const tmp = decodeThunder(url);
    // console.log('资源地址:', tmp);
    arr.push(tmp);
  });
  return arr;
}

// 解码迅雷地址
function decodeThunder(url) {
  // 替换掉字符串thunder://
  let tmp = url.replace('thunder://', '');
  // 解码地址
  tmp = Buffer.from(tmp, 'base64').toString('utf8');
  // 去除头尾AA和ZZ
  tmp = tmp.substring(2, tmp.length - 2);
  return tmp;
}

// 下载链接地址
function downloadMovie(url) {
  const tmp = url.split('/');
  const pathname = tmp[tmp.length - 1];
  // 单个执行下载，如果批量改成exec即可，调用系统命令实现
  try {
    process.execSync('wget -q ' + url);
  } catch (e) {
    console.log(pathname, '下载失败');
  } finally {
    // console.log(pathname, '下载成功');
  }
}

// 执行
async function get80sList(name) {
  const searchHtml = await getSearchHtml('http://m.8080s.net/search', name);
  if (searchHtml === '') {
    return '视频网站搜索挂了';
  }
  const detailUrl = analysisSearchHtml(searchHtml);
  if (detailUrl === '') {
    return '没有搜索到影片';
  }
  const detailHtml = await getDetailHtml(detailUrl);
  if (searchHtml === '') {
    return '视频网站下载挂了';
  }
  const downloadUrls = analysisDetailHtml(detailHtml);
  if (downloadUrls.length === 0) {
    return '没有下载地址';
  }
  return downloadUrls;
}

exports.get80sList = get80sList;
