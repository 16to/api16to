const express = require('express');
const router = express.Router();
router.basePath='/16to/es6_tree';

router.get('/', (req, res) => {
  res.send(T1());
});

// 一级目录
function T1() {
  const T1 = { 'name': 'ES6', 'children': T2() };
  return T1;
}

// 二级目录
function T2() {
  const T2 = [];
  T2.push({ 'name': 'let/const', 'value': 'http://16to.com/' });
  T2.push({ 'name': '解构赋值', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Symbol', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Map/Set', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Proxy', 'value': 'http://16to.com/' });
  T2.push({ 'name': '字符串', 'value': 'http://16to.com/' });
  T2.push({ 'name': '数值', 'value': 'http://16to.com/' });
  T2.push({ 'name': '数组', 'value': 'http://16to.com/' });
  T2.push({ 'name': '对象', 'value': 'http://16to.com/' });
  T2.push({ 'name': '函数', 'value': 'http://16to.com/' });
  T2.push({ 'name': '迭代器', 'value': 'http://16to.com/' });
  T2.push({ 'name': '模块', 'value': 'http://16to.com/' });
  T2.push({ 'name': '类', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Promise', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Generator', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'async', 'value': 'http://16to.com/' });
  return T2;
}

module.exports = router;