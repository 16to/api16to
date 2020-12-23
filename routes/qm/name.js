// /video 获取下载地址
const express = require('express');
const getSameName = require('../../core/getSameName');
const router = express.Router();
router.basePath = '/qm';

// 返回电影列表?s=庆余年第一季
router.get('/', async (req, res) => {
  // 搜索的字符串
  const s = req.query.s;
  const obj = await getSameName.getSameName(s);
  res.send(obj);
});

module.exports = router;
