// /video 获取下载地址
const express = require('express');
const getList = require('../../core/get80s');
const router = express.Router();
router.basePath='/video';

// 返回电影列表?s=庆余年第一季
router.get('/', async (req, res) => {
  // 搜索的字符串
  const s = req.query.s;
  const list =await getList.get80sList(s);
  // console.log(list);
  res.send(list);
});

module.exports = router;
