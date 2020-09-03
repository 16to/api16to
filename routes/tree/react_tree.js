const express = require('express');
const router = express.Router();
router.basePath = '/16to/react_tree';

router.get('/', (req, res) => {
  res.send(T1());
});

function T1() {
  // 一级目录
  T1 = { 'name': 'React', 'children': T2() };
  return T1;
}

function T2() {
  // 二级目录
  const T2 = [];
  T2.push({ 'name': 'JSX', 'value': 'http://16to.com/' });
  T2.push({ 'name': '生命周期', 'value': 'http://16to.com/' });
  T2.push({ 'name': '虚拟DOM', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'diff算法', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'flux思想', 'value': 'http://16to.com/' });
  T2.push({ 'name': '高阶组件', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Hooks', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Fiber', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Redux', 'value': 'http://16to.com/' });
  T2.push({ 'name': 'Refs', 'value': 'http://16to.com/' });
}

module.exports = router;