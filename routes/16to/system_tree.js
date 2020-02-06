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
  T20[0]={'name': '图片', 'value': 'http://16to.com/search?s=总结-图片'};
  T20[1]={'name': '图标', 'value': 'http://16to.com/search?s=总结-图标'};
  T20[2]={'name': '字体', 'value': 'http://16to.com/search?s=总结-字体'};
  T20[3]={'name': '视频', 'value': 'http://16to.com/search?s=总结-视频'};
  T20[4]={'name': '音频', 'value': 'http://16to.com/search?s=总结-音频'};
  T20[5]={'name': '动画', 'value': 'http://16to.com/search?s=总结-动画'};
  T20[6]={'name': '响应式设计', 'value': 'http://16to.com/search?s=总结-响应式设计'};
  T20[7]={'name': '媒体查询', 'value': 'http://16to.com/search?s=总结-媒体查询'};
  T20[8]={'name': '网格', 'value': 'http://16to.com/search?s=总结-网格'};
  T20[9]={'name': '像素单位', 'value': 'http://16to.com/search?s=总结-像素单位'};

  // 构建生态
  const T21 =[];
  T21[0]={'name': 'grunt开发环境', 'value': 'http://16to.com/search?s=总结-grunt'};
  T21[1]={'name': 'gulp开发环境', 'value': 'http://16to.com/search?s=总结-gulp'};
  T21[2]={'name': 'webpack打包工具', 'value': 'http://16to.com/search?s=总结-webpack'};
  T21[3]={'name': 'npm/bower/yarn包管理', 'value': 'http://16to.com/search?s=总结-npm'};

  // 移动开发
  const T22 =[];
  T22[0]={'name': 'Hybrid开发', 'value': 'http://16to.com/search?s=总结-Hybrid'};
  T22[1]={'name': 'ReactNative开发', 'value': 'http://16to.com/search?s=总结-ReactNative'};
  T22[2]={'name': 'Weex开发', 'value': 'http://16to.com/search?s=总结-Weex'};
  T22[3]={'name': 'Flutter开发', 'value': 'http://16to.com/search?s=总结-Flutter'};

  // 全栈开发
  const T23 =[];
  T23[0]={'name': 'Nodejs', 'value': 'http://16to.com/search?s=总结-Nodejs'};
  T23[1]={'name': 'Express', 'value': 'http://16to.com/search?s=总结-Express'};
  T23[2]={'name': 'Koa/Egg', 'value': 'http://16to.com/search?s=总结-Egg'};
  T23[3]={'name': 'Mysql', 'value': 'http://16to.com/search?s=总结-Mysql'};
  T23[4]={'name': 'Mongodb', 'value': 'http://16to.com/search?s=总结-Mongodb'};
  T23[5]={'name': 'PHP', 'value': 'http://16to.com/search?s=总结-PHP'};
  T23[6]={'name': 'Python', 'value': 'http://16to.com/search?s=总结-Python'};
  T23[7]={'name': 'Nginx', 'value': 'http://16to.com/search?s=总结-Nginx'};
  T23[8]={'name': 'Apache', 'value': 'http://16to.com/search?s=总结-Apache'};
  T23[9]={'name': 'RESTful', 'value': 'http://16to.com/search?s=总结-RESTful'};
  T23[10]={'name': 'Linux/Shell', 'value': 'http://16to.com/search?s=总结-Shell'};

  // 前端框架
  const T24 =[];
  T24[0]={'name': 'AngularJS', 'value': 'http://16to.com/search?s=总结-AngularJS'};
  T24[1]={'name': 'Backbone', 'value': 'http://16to.com/search?s=总结-Backbone'};
  T24[2]={'name': 'React', 'value': 'http://16to.com/search?s=总结-React'};
  T24[3]={'name': 'Vue', 'value': 'http://16to.com/search?s=总结-Vue'};

  // UI框架
  const T25 =[];
  T25[0]={'name': 'Bootstrap', 'value': 'http://16to.com/search?s=总结-Bootstrap'};
  T25[1]={'name': 'ElementUI', 'value': 'http://16to.com/search?s=总结-ElementUI'};
  T25[2]={'name': 'jQueryUI', 'value': 'http://16to.com/search?s=总结-jQueryUI'};
  T25[3]={'name': 'Ant Design', 'value': 'http://16to.com/search?s=总结-Ant Design'};
  T25[4]={'name': 'LayUI', 'value': 'http://16to.com/search?s=总结-LayUI'};

  // 组件模块库
  const T26 =[];
  T26[0]={'name': 'jQuery', 'value': 'http://16to.com/search?s=总结-jQuery'};
  T26[1]={'name': 'Zepto', 'value': 'http://16to.com/search?s=总结-Zepto'};
  T26[2]={'name': 'Echarts', 'value': 'http://16to.com/search?s=总结-Echarts'};
  T26[3]={'name': 'CommonJS/AMD/CMD', 'value': 'http://16to.com/search?s=总结-CommonJS'};
  T26[4]={'name': 'ES6 Modules', 'value': 'http://16to.com/search?s=总结-ES6'};
  T26[5]={'name': 'RequireJS', 'value': 'http://16to.com/search?s=总结-RequireJS'};
  // T26[6]={'name': 'seaJS', 'value': 'http://16to.com/search?s=总结-seaJS'};
  // T26[7]={'name': 'extJS', 'value': 'http://16to.com/search?s=总结-extJS'};

  // 工具和调试
  const T27 =[];
  T27[0]={'name': 'wireshark', 'value': 'http://16to.com/search?s=总结-wireshark'};
  T27[1]={'name': 'fiddler+willow', 'value': 'http://16to.com/search?s=总结-fiddler'};
  T27[2]={'name': 'mockjs', 'value': 'http://16to.com/search?s=总结-mockjs'};
  T27[3]={'name': 'supervior/inspector/nodemon', 'value': 'http://16to.com/search?s=总结-supervior'};
  T27[4]={'name': 'Sublime', 'value': 'http://16to.com/search?s=总结-Sublime'};
  T27[5]={'name': 'VSCode', 'value': 'http://16to.com/search?s=总结-VSCode'};

  // 分析和监控
  const T28 =[];
  T28[0]={'name': 'pv/uv/vv/ip', 'value': 'http://16to.com/search?s=总结-pv'};
  T28[1]={'name': 'clickHeat/heatMap', 'value': 'http://16to.com/search?s=总结-clickHeat'};
  T28[2]={'name': 'badjs', 'value': 'http://16to.com/search?s=总结-badjs'};

  // 前端测试
  const T29 =[];
  T29[0]={'name': 'selenium', 'value': 'http://16to.com/search?s=总结-selenium'};
  T29[1]={'name': 'phantomjs', 'value': 'http://16to.com/search?s=总结-phantomjs'};
  // T29[2]={'name': 'mocha', 'value': 'http://16to.com/search?s=总结-mocha'};
  // T29[3]={'name': 'Qunit', 'value': 'http://16to.com/search?s=总结-Qunit'};
  // T29[4]={'name': 'karma', 'value': 'http://16to.com/search?s=总结-karma'};
  // T29[5]={'name': 'Jasmine', 'value': 'http://16to.com/search?s=总结-Jasmine'};

  // 项目管理
  const T210 =[];
  T210[0]={'name': '开发规范', 'value': 'http://16to.com/search?s=总结-开发规范'};
  T210[1]={'name': '开发方案', 'value': 'http://16to.com/search?s=总结-开发方案'};
  T210[2]={'name': '测试方案', 'value': 'http://16to.com/search?s=总结-测试方案'};
  T210[3]={'name': '项目部署', 'value': 'http://16to.com/search?s=总结-项目部署'};

  // 技术趋势
  const T211 =[];
  T211[0]={'name': 'PWA', 'value': 'http://16to.com/search?s=总结-PWA'};
  T211[1]={'name': 'WebAssembly', 'value': 'http://16to.com/search?s=总结-WebAssembly'};
  T211[2]={'name': 'Serverless', 'value': 'http://16to.com/search?s=总结-Serverless'};
  T211[3]={'name': 'AMP', 'value': 'http://16to.com/search?s=总结-AMP'};

  // 相关网站
  const T212 =[];
  T212[0]={'name': 'w3cschool.cn/runoob.com', 'value': 'http://16to.com/search?s=总结-w3cschool'};
  T212[1]={'name': 'imooc.com/nowcoder.com', 'value': 'http://16to.com/search?s=总结-imooc'};
  T212[2]={'name': '杭js/前端圈/前端之巅', 'value': 'http://16to.com/search?s=总结-前端之巅'};
  T212[3]={'name': 'segmentfault/stackoverflow', 'value': 'http://16to.com/search?s=总结-segmentfault'};

  // 其他技能
  const T213 =[];
  T213[0]={'name': 'axure', 'value': 'http://16to.com/search?s=总结-axure'};
  T213[1]={'name': 'xmind', 'value': 'http://16to.com/search?s=总结-xmind'};
  T213[2]={'name': 'can i use', 'value': 'http://16to.com/search?s=总结-can i use'};
  T213[3]={'name': 'github', 'value': 'http://16to.com/search?s=总结-github'};
  T213[4]={'name': '团队管理', 'value': 'http://16to.com/search?s=总结-团队管理'};
  T213[5]={'name': '知识管理', 'value': 'http://16to.com/search?s=总结-知识管理'};
  T213[6]={'name': '编程思维', 'value': 'http://16to.com/search?s=总结-编程思维'};

  // 前端优化
  const T214 =[];
  T214[0]={'name': 'yslow/pagespeed', 'value': 'http://16to.com/search?s=总结-yslow'};
  T214[1]={'name': 'SEO', 'value': 'http://16to.com/search?s=总结-SEO'};
  T214[2]={'name': 'CDN', 'value': 'http://16to.com/search?s=总结-CDN'};
  T214[3]={'name': '网络/资源/协议/存储', 'value': 'http://16to.com/search?s=总结-网络'};

  // 安全
  const T215 =[];
  T215[0]={'name': 'Sandbox', 'value': 'http://16to.com/search?s=总结-Sandbox'};
  T215[1]={'name': 'XSS', 'value': 'http://16to.com/search?s=总结-XSS'};
  T215[2]={'name': 'CORS/CSRF', 'value': 'http://16to.com/search?s=总结-CORS'};
  T215[3]={'name': 'sql注入', 'value': 'http://16to.com/search?s=总结-sql注入'};
  T215[4]={'name': 'https', 'value': 'http://16to.com/search?s=总结-https'};

  // CSS预处理器
  const T216 =[];
  T216[0]={'name': 'LESS', 'value': 'http://16to.com/search?s=总结-LESS'};
  T216[1]={'name': 'SASS', 'value': 'http://16to.com/search?s=总结-SASS'};

  // 代码质量
  const T217 =[];
  T217[0]={'name': 'JSLint/JSHint', 'value': 'http://16to.com/search?s=总结-JSLint'};
  T217[1]={'name': 'ESLint', 'value': 'http://16to.com/search?s=总结-ESLint'};
  T217[2]={'name': 'TSLint', 'value': 'http://16to.com/search?s=总结-TSLint'};
  // T217[1]={'name': 'jscs/Closure Linter', 'value': 'http://16to.com/search?s=总结-jscs'};

  // 浏览器和引擎
  const T218 =[];
  T218[0]={'name': 'IE/Trident/JScript', 'value': 'http://16to.com/search?s=总结-IE'};
  T218[1]={'name': 'Chrome/Webkit/V8', 'value': 'http://16to.com/search?s=总结-Chrome'};
  T218[2]={'name': 'Firefox/Gecko/SpiderMonkey', 'value': 'http://16to.com/search?s=总结-Firefox'};
  T218[3]={'name': 'Safari/Webkit/Nitro', 'value': 'http://16to.com/search?s=总结-Safari'};
  T218[4]={'name': 'Opera/Presto/V8', 'value': 'http://16to.com/search?s=总结-Opera'};
  T218[5]={'name': 'Edge/EdgeHTML/Chakra', 'value': 'http://16to.com/search?s=总结-Edge'};

  // HTTP协议
  const T219 =[];
  T219[0]={'name': 'URI', 'value': 'http://16to.com/search?s=总结-URI'};
  T219[1]={'name': 'Session', 'value': 'http://16to.com/search?s=总结-Session'};
  T219[2]={'name': 'Authentication', 'value': 'http://16to.com/search?s=总结-Authentication'};
  T219[3]={'name': 'Request', 'value': 'http://16to.com/search?s=总结-Request'};
  T219[4]={'name': 'Response', 'value': 'http://16to.com/search?s=总结-Response'};
  T219[5]={'name': 'compression', 'value': 'http://16to.com/search?s=总结-compression'};
  T219[6]={'name': 'Server Push', 'value': 'http://16to.com/search?s=总结-Server Push'};
  T219[7]={'name': 'WebSocket', 'value': 'http://16to.com/search?s=总结-WebSocket'};

  // W3C标准
  const T220 =[];
  T220[0]={'name': 'HTML4.01/HTML5/XHTML1.0', 'value': 'http://16to.com/search?s=总结-HTML'};
  T220[1]={'name': 'CSS2.0/CSS3.0', 'value': 'http://16to.com/search?s=总结-CSS'};

  // 前端模板
  const T221 =[];
  T221[0]={'name': 'Handlebars(MUI和AmazeUI)', 'value': 'http://16to.com/search?s=总结-Handlebars'};
  T221[1]={'name': 'artTemplate(腾讯)', 'value': 'http://16to.com/search?s=总结-artTemplate'};
  T221[2]={'name': 'juicer(淘宝)', 'value': 'http://16to.com/search?s=总结-juicer'};
  T221[3]={'name': 'baiduTemplate(百度)', 'value': 'http://16to.com/search?s=总结-baiduTemplate'};
  T221[4]={'name': 'EJS', 'value': 'http://16to.com/search?s=总结-EJS'};
  T221[5]={'name': 'Jade', 'value': 'http://16to.com/search?s=总结-Jade'};

  // JS编译语言
  const T222 =[];
  T222[0]={'name': 'CoffeeScript', 'value': 'http://16to.com/search?s=总结-CoffeeScript'};
  T222[1]={'name': 'TypeScript', 'value': 'http://16to.com/search?s=总结-TypeScript'};
  T222[2]={'name': 'JSX', 'value': 'http://16to.com/search?s=总结-JSX'};
  T222[3]={'name': 'ES6', 'value': 'http://16to.com/search?s=总结-ES6'};

  // 桌面开发
  const T223 =[];
  T223[0]={'name': 'electron', 'value': 'http://16to.com/search?s=总结-electron'};
  T223[1]={'name': 'NW', 'value': 'http://16to.com/search?s=总结-NW'};

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
