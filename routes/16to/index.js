// /16to
const express = require('express');
const db = require('../../core/db');
const router = express.Router();
const config = require('./config');
router.basePath='/16to';

// 获取所有技术总结
function skill_all() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  r=db.Select('xx_skill', $con);
  return r;
}
// 获取所有技术TAG
function skill_tag() {
  return config.skillTag;
}
// 获取所有技术TYPE
function skill_type() {
  return config.skillType;
}
// 获取所有技术总结前5个
function skill_all_5() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  con['limit']='5';
  r=db.Select('xx_skill', $con);
  return r;
}
// 获取所有技术总结前10个
function skill_all_10() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  con['limit']='10';
  r=db.Select('xx_skill', $con);
  return r;
}
// 获取所有技术by tag
function skill_all_tag($tag) {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  con['tag']=$tag;
  r=db.Select('skill', $con);
  return r;
}
// 获取所有技术by type
function skill_all_type($type) {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  con['type']=$type;
  r=db.Select('skill', $con);
  return r;
}
// 获取所有技术by hot
function skill_all_hot() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by click desc,addtime desc';
  r=db.Select('skill', $con);
  return r;
}
// 获取详细技术总结
function skill_detail($id) {
  const temp = [];
  let r = {};
  db.SetInc('skill', 'click', 'id='.$id);
  temp=db.Query('skill', 'id=\'{$id}\'');
  r=temp[0];
  return r;
}
// 所有的搜索结果
function search_all($s) {
  let r = [];
  r=db.Query('skill', `title like '%${s.trim()}%' or content like '%${s.trim()}%'`);
  return r;
}
// 获取所有的专题
function special_all() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  r=db.Select('special', con);
  return r;
}
// 获取所有的专题前4
function special_all_4() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by click desc,sort desc';
  con['limit']='4';
  r=db.Select('special', con);
  return r;
}
// 获取所有的专题
function special_all_type($type) {
  const con = [];
  let r = [];
  con=array();
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  con['type']=$type;
  r=db.Select('special', con);
  return r;
}
// 获取详细专题
function special_detail($id) {
  const temp=[];
  let r = {};
  db.SetInc('special', 'click', 'id='.$id);
  temp=db.Query('special', 'id=\'{$id}\'');
  r=temp[0];
  return r;
}
// 获取workall
function works_all() {
  const con = [];
  let r = [];
  con['1']=1;
  con['order']='by sort desc,addtime desc';
  r=db.Select('works', con);
  return r;
}
