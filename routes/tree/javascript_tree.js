// 16to/javascript_tree
const express = require('express');
const router = express.Router();
router.basePath = '/16to/javascript_tree';

router.get('/', (req, res) => {
  res.send(T1());
});

function T1() {
  // 一级目录
  T1 = { 'name': '数据结构与算法', 'children': T2() };
  return T1;
}

function T2() {
  // 二级目录
  const T2 = [];

  T2.push(
    { 'name': '数组', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '列表', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '栈', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '队列', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '链表', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '字典', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '集合', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '二叉树', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '图', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '排序算法', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '检索算法', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '动态规划', 'value': 'http://16to.com/' }
  );

  T2.push(
    { 'name': '贪心算法', 'value': 'http://16to.com/' }
  );

  return T2;
}

module.exports = router;