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
  con['state']=1;
  con['orderBy']='sort desc,click desc';
  con['limit']='4';
  db.Select('xx_special', con, (err, response) => {
    res.send(response);
  }, 'id,img,title,type,click,addtime');
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
  con['state']=1;
  const s = req.query.s;
  if (s==='type0') {
    con['type']=0;
  } else if (s==='type1') {
    con['type']=1;
  } else if (s==='type2') {
    con['type']=2;
  }
  con['orderBy']='sort desc,addtime desc';
  db.Select('xx_special', con, (err, response) => {
    res.send(response);
  }, 'id,img,title,type,click,addtime');
});

// 获取所有技术TAG
router.get('/skill_tag', (req, res) => {
  res.send(config.skillTag);
});

// 获取所有技术Type
router.get('/skill_type', (req, res) => {
  res.send(config.skillType);
});

// 获取所有专题Type
router.get('/special_type', (req, res) => {
  res.send(config.specialType);
});

// 获取所有作品Type
router.get('/works_type', (req, res) => {
  res.send(config.worksType);
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
  }, 'id,title');
});

// 获取所有技术总结
router.get('/skill_all', (req, res) => {
  const con = [];
  con['1']=1;
  const s = req.query.s;
  const i = req.query.i;
  if (s==='type') {
    con['type']=i;
  } else if (s==='tag') {
    con['tag']=i;
  } else if (s==='type2') {
    con['type']=2;
  }
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
  const con1 = [];
  con['1']=1;
  con1['1']=1;
  con1['state']=1;
  // eslint-disable-next-line max-len
  con['like'] = `title like '%${req.query.s}%' or content like '%${req.query.s}%'`;
  con['orderBy']='addtime desc';
  db.Select('xx_skill', con, (err, response) => {
    const skillSearch = response;
    // eslint-disable-next-line max-len
    con1['like']=`title like '%${req.query.s}%' or content like '%${req.query.s}%'`;
    con1['orderBy']='addtime desc';
    db.Select('xx_special', con1, (err1, response1) => {
      const specialSearch = response1;
      const allSearch=specialSearch.concat(skillSearch);
      res.send(allSearch);
    });
  });
});

// 获取技术结果
router.get('/search/skill', (req, res) => {
  const con = [];
  con['1']=1;
  // eslint-disable-next-line max-len
  con['like'] = `title like '%${req.query.s}%' or content like '%${req.query.s}%'`;
  con['orderBy']='addtime desc';
  db.Select('xx_skill', con, (err, response) => {
    res.send(response);
  });
});

// 获取总结结果
router.get('/search/special', (req, res) => {
  const con = [];
  con['1']=1;
  con['state']=1;
  // eslint-disable-next-line max-len
  con['like'] = `title like '%${req.query.s}%' or content like '%${req.query.s}%'`;
  con['orderBy']='addtime desc';
  db.Select('xx_special', con, (err, response) => {
    res.send(response);
  });
});

module.exports = router;
