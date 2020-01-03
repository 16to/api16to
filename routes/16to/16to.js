// /16to
const express = require('express');
const db = require('../../core/db');
const router = express.Router();
const config = require('../../config');
router.basePath='/16to';

// 获取所有的专题前4
router.get('/special_list', (req, res) => {
  const con = [];
  con['1']=1;
  con['orderBy']='click desc,sort desc';
  con['limit']='4';
  db.Select('xx_special', con, (err, response) => {
    res.send(response);
  });
});

// 获取详细专题
router.get('/special_detail/:id', (req, res) => {
  const con = [];
  const updateCon = [];
  con['id'] = parseInt(req.params.id, 10) || 0;
  updateCon['addStep'] = 'click=click+1';
  db.Update('xx_special', updateCon, con);
  db.Select('xx_special', con, (err, response) => {
    res.send(response[0] || {});
  });
});

// 获取所有的专题
router.get('/special_all', (req, res) => {
  const con = [];
  con['1']=1;
  con['orderBy']='sort desc,addtime desc';
  db.Select('xx_special', con, (err, response) => {
    res.send(response);
  });
});

// 获取所有技术TAG
router.get('/skill_tag', (req, res) => {
  res.send(config.skillTag);
});

// 获取所有技术TAG
router.get('/skill_type', (req, res) => {
  res.send(config.skillType);
});

// 获取所有技术总结前5个
router.get('/skill_list', (req, res) => {
  const con = [];
  con['1']=1;
  con['orderBy']='sort desc,addtime desc';
  con['limit']='5';
  db.Select('xx_skill', con, (err, response) => {
    res.send(response);
  });
});

// 获取所有技术总结前10个
router.get('/skill_list10', (req, res) => {
  const con = [];
  con['1']=1;
  con['orderBy']='sort desc,addtime desc';
  con['limit']='10';
  db.Select('xx_skill', con, (err, response) => {
    res.send(response);
  });
});

// 获取所有技术总结
router.get('/skill_all', (req, res) => {
  const con = [];
  con['1']=1;
  con['orderBy']='sort desc,addtime desc';
  db.Select('xx_skill', con, (err, response) => {
    res.send(response);
  });
});

// 获取详细技术总结
router.get('/skill_detail/:id', (req, res) => {
  const con = [];
  const updateCon = [];
  con['id'] = parseInt(req.params.id, 10) || 0;
  updateCon['addStep'] = 'click=click+1';
  db.Update('xx_skill', updateCon, con);
  db.Select('xx_skill', con, (err, response) => {
    res.send(response[0] || {});
  });
});

// 获取所有项目信息
router.get('/works_all', (req, res) => {
  const con = [];
  con['1']=1;
  con['orderBy']='sort desc,addtime desc';
  db.Select('xx_works', con, (err, response) => {
    res.send(response);
  });
});

// 获取所有搜索结果
router.get('/search', (req, res) => {
  const con = [];
  con['1']=1;
  // eslint-disable-next-line max-len
  con['like'] = `title like '%${req.query.s}%' or content like '%${req.query.s}%'`;
  db.Select('xx_works', con, (err, response) => {
    res.send(response);
  });
});

module.exports = router;