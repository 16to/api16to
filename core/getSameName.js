const rp = require('request-promise');
const cheerio = require('cheerio');

// 获取同名页面
async function getNameHtml(url, keyword) {
  return rp({
    url: url,
    method: 'POST',
    form: {'wd': keyword, 'action': 'test'}, // 表单数据
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

// 解析同名页面
function analysisNameHtml(html) {
  const $ = cheerio.load(html, {decodeEntities: false});
  let all = $('.red').text().trim();
  // 多了一个单位，删除人
  all = parseInt(all);
  // 获取男性
  let man = $('p:contains("男性: ")').text();
  let feman = $('p:contains("女性: ")').text();
  man = man.split(' ');
  feman = feman.split(' ');
  man = man[man.length-1];
  feman = feman[feman.length-1];
  man = parseInt(man);
  feman = parseInt(feman);
  return {
    all: all || 1,
    man: man || 50,
    feman: feman || 50,
  };
}

// 执行
async function getSameName(name) {
  const nameHtml = await getNameHtml('https://www.buyiju.com/cm/tong/', name);
  if (nameHtml === '') {
    return '依赖网站挂了';
  }
  const result = analysisNameHtml(nameHtml);
  if (result === '') {
    return '没有该名字的统计';
  }
  return result;
}

exports.getSameName = getSameName;
