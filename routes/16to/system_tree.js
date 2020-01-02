// 16to/system_tree
const express = require('express');
const router = express.Router();
router.basePath='/16to/system_tree';

router.get('/', (req, res) => {
  res.send(systemTree());
});

function systemTree() {
  // 页面重构
  const T20 =[];
  T20[0]={'name': '图片', 'value': 'https://www.baidu.com'};
  T20[1]={'name': '图标'};
  T20[2]={'name': '字体'};
  T20[3]={'name': '视频'};
  T20[4]={'name': '音频'};
  T20[5]={'name': '响应式设计'};
  T20[6]={'name': '媒体查询'};
  T20[7]={'name': '动画'};
  T20[8]={'name': '网格'};
  T20[9]={'name': 'em/rem实现'};

  // 构建生态
  const T21 =[];
  T21[0]={'name': 'grunt/gulp/panto开发环境'};
  T21[1]={'name': 'r.js/browserify/webpack打包工具'};
  T21[2]={'name': 'npm/jspm/bower包管理'};
  T21[3]={'name': 'fis3构建'};

  // 移动开发
  const T22 =[];
  T22[0]={'name': 'Hybrid移动开发'};
  T22[1]={'name': 'ReactNative开发'};
  T22[2]={'name': 'Weex开发'};
  T22[3]={'name': 'android/ios'};

  // 全栈开发
  const T23 =[];
  T23[0]={'name': 'nodejs'};
  T23[1]={'name': 'express/koa'};
  T23[2]={'name': 'mongodb'};
  T23[3]={'name': 'restful'};
  T23[4]={'name': 'PHP/JAVA/Python'};
  T23[5]={'name': 'dockor/nginx/apache'};
  T23[6]={'name': 'Linux/Shell'};

  // 前端框架
  const T24 =[];
  T24[0]={'name': 'AngularJS'};
  T24[1]={'name': 'Backbone'};
  T24[2]={'name': 'Ember'};
  T24[3]={'name': 'React'};
  T24[4]={'name': 'Vue'};

  // UI框架
  const T25 =[];
  T25[0]={'name': 'Bootstrap'};
  T25[1]={'name': 'Foundation'};
  T25[2]={'name': 'AmazeUI'};
  T25[3]={'name': 'EasyUI'};
  T25[4]={'name': 'jQueryUI'};
  T25[5]={'name': 'Ant Design'};
  T25[6]={'name': 'LayUI'};
  T25[7]={'name': 'ionic'};
  T25[8]={'name': 'WeUI'};
  T25[9]={'name': 'jQuery Mobile'};

  // 组件模块库
  const T26 =[];
  T26[1]={'name': 'jQuery'};
  T26[2]={'name': 'Zepto'};
  T26[3]={'name': 'Echarts'};
  T26[4]={'name': 'commonJS/AMD/CMD'};
  T26[5]={'name': 'ES6 Modules'};
  T26[6]={'name': 'RequireJS'};
  T26[7]={'name': 'seaJS'};
  T26[8]={'name': 'extJS'};

  // 工具和调试
  const T27 =[];
  T27[1]={'name': 'fiddler+willow/wireshark'};
  T27[2]={'name': 'Weinre/vorlon/chrome inspect'};
  T27[3]={'name': 'mockjs/FMS'};
  T27[4]={'name': 'supervior/inspector/nodemon'};
  T27[5]={'name': 'sublime/VSCode/WebStorm'};

  // 分析和监控
  const T28 =[];
  T28[1]={'name': 'pv/uv/vv/ip'};
  T28[2]={'name': 'clickHeat/heatMap'};
  T28[3]={'name': 'badjs'};

  // 前端测试
  const T29 =[];
  T29[1]={'name': 'mocha'};
  T29[2]={'name': 'Qunit'};
  T29[3]={'name': 'phantomjs'};
  T29[4]={'name': 'karma'};
  T29[5]={'name': 'selenium'};
  T29[6]={'name': 'Jasmine'};

  // 项目管理
  const T210 =[];
  T210[1]={'name': '开发规范'};
  T210[2]={'name': '开发方案'};
  T210[3]={'name': '测试方案'};
  T210[4]={'name': '项目部署'};

  // 技术趋势
  const T211 =[];
  T211[1]={'name': 'PWA'};
  T211[2]={'name': 'WebAssembly'};
  T211[3]={'name': 'AMP'};

  // 相关网站
  const T212 =[];
  T212[1]={'name': 'w3cschool.cn/runoob.com'};
  T212[2]={'name': 'imooc.com/nowcoder.com'};
  T212[3]={'name': '杭js/前端圈/前端之巅'};
  T212[4]={'name': 'segmentfault/stackoverflow'};

  // 其他技能
  const T213 =[];
  T213[1]={'name': 'axure'};
  T213[2]={'name': 'xmind'};
  T213[3]={'name': 'can i use'};
  T213[4]={'name': 'github'};
  T213[5]={'name': '团队管理'};
  T213[6]={'name': '知识管理'};
  T213[7]={'name': '编程思维'};

  // 前端优化
  const T214 =[];
  T214[1]={'name': 'yslow/pagespeed'};
  T214[2]={'name': 'SEO'};
  T214[3]={'name': 'CDN'};
  T214[4]={'name': '网络/资源/协议/存储'};

  // 安全
  const T215 =[];
  T215[1]={'name': 'Sandbox'};
  T215[2]={'name': 'XSS'};
  T215[3]={'name': 'CORS/CSRF'};
  T215[4]={'name': 'sql注入'};
  T215[5]={'name': 'https'};

  // CSS预处理器
  const T216 =[];
  T216[1]={'name': 'LESS'};
  T216[2]={'name': 'Sass'};
  T216[3]={'name': 'Stylus'};

  // 代码质量
  const T217 =[];
  T217[1]={'name': 'JSLint/JSHint/ESLint'};
  T217[2]={'name': 'jscs/Closure Linter'};

  // 浏览器和引擎
  const T218 =[];
  T218[1]={'name': 'IE/Trident/JScript'};
  T218[2]={'name': 'Chrome/Webkit/V8'};
  T218[3]={'name': 'Firefox/Gecko/SpiderMonkey'};
  T218[4]={'name': 'Safari/Webkit/Nitro'};
  T218[5]={'name': 'Opera/Presto/V8'};
  T218[6]={'name': 'Edge/EdgeHTML/Chakra'};

  // HTTP协议
  const T219 =[];
  T219[1]={'name': 'URI'};
  T219[2]={'name': 'Session'};
  T219[3]={'name': 'Authentication'};
  T219[4]={'name': 'Request'};
  T219[5]={'name': 'Response'};
  T219[6]={'name': 'compression'};
  T219[7]={'name': 'Server Push'};
  T219[8]={'name': 'WebSocket'};

  // W3C标准
  const T220 =[];
  T220[1]={'name': 'HTML4.01/HTML5/XHTML1.0'};
  T220[2]={'name': 'CSS2.0/CSS3.0'};

  // 前端模板
  const T221 =[];
  T221[0]={'name': 'Handlebars(MUI和AmazeUI)'};
  T221[1]={'name': 'artTemplate(腾讯)'};
  T221[2]={'name': 'juicer(淘宝)'};
  T221[3]={'name': 'baiduTemplate(百度)'};
  T221[4]={'name': 'EJS'};
  T221[5]={'name': 'Jade'};

  // JS编译语言
  const T222 =[];
  T222[0]={'name': 'CoffeeScript'};
  T222[1]={'name': 'TypeScript'};
  T222[2]={'name': 'JSX(facebook)'};

  // 桌面开发
  const T223 =[];
  T223[0]={'name': 'electron'};
  T223[1]={'name': 'NW'};

  // 二级目录
  const T2 =[];
  T2[0]={'name': '页面重构', 'children': T20};
  T2[1]={'name': '构建生态', 'children': T21};
  T2[2]={'name': '移动开发', 'children': T22};
  T2[3]={'name': '全栈开发', 'children': T23};
  T2[4]={'name': '前端框架', 'children': T24};
  T2[5]={'name': 'UI框架', 'children': T25};
  T2[6]={'name': '组件库', 'children': T26};
  T2[7]={'name': '工具和调试', 'children': T27};
  T2[8]={'name': '分析和监控', 'children': T28};
  T2[9]={'name': '前端测试', 'children': T29};
  T2[10]={'name': '项目管理', 'children': T210};
  T2[11]={'name': '技术趋势', 'children': T211};
  T2[12]={'name': '相关网站', 'children': T212};
  T2[13]={'name': '其他技能', 'children': T213};
  T2[14]={'name': '前端优化', 'children': T214};
  T2[15]={'name': '安全', 'children': T215};
  T2[16]={'name': 'CSS预处理器', 'children': T216};
  T2[17]={'name': '代码质量', 'children': T217};
  T2[18]={'name': '浏览器和引擎', 'children': T218};
  T2[19]={'name': 'HTTP协议', 'children': T219};
  T2[20]={'name': 'W3C标准', 'children': T220};
  T2[21]={'name': '前端模板', 'children': T221};
  T2[22]={'name': 'JS编译语言', 'children': T222};
  T2[23]={'name': '桌面开发', 'children': T223};

  // 一级目录
  T1 = {'name': '前端技术体系', 'children': T2};

  // 展示
  return T1;
}

module.exports = router;
