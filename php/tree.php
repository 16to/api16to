<?php
function system_tree(){
	//四级目录
	//三级目录
	//页面重构
	$T20[0]=array('name'=>"图片",'value'=>"https://www.baidu.com");
	$T20[1]=array('name'=>"图标");
	$T20[2]=array('name'=>"字体");
	$T20[3]=array('name'=>"视频");
	$T20[4]=array('name'=>"音频");
	$T20[5]=array('name'=>"响应式设计");
	$T20[6]=array('name'=>"媒体查询");
	$T20[7]=array('name'=>"动画");
	$T20[8]=array('name'=>"网格");
	$T20[9]=array('name'=>"em/rem实现");

	//构建生态
	$T21[0]=array('name'=>"grunt/gulp/panto开发环境");
	$T21[1]=array('name'=>"r.js/browserify/webpack打包工具");
	$T21[2]=array('name'=>"npm/jspm/bower包管理");
	$T21[3]=array('name'=>"fis3构建");

	//移动开发
	$T22[0]=array('name'=>"Hybrid移动开发");
	$T22[1]=array('name'=>"ReactNative开发");
	$T22[2]=array('name'=>"Weex开发");
	$T22[3]=array('name'=>"android/ios");

	//全栈开发
	$T23[0]=array('name'=>"nodejs");
	$T23[1]=array('name'=>"express/koa");
	$T23[2]=array('name'=>"mongodb");
	$T23[3]=array('name'=>"restful");
	$T23[4]=array('name'=>"PHP/JAVA/Python");
	$T23[5]=array('name'=>"dockor/nginx/apache");
	$T23[6]=array('name'=>"Linux/Shell");

	//前端框架
	$T24[0]=array('name'=>"AngularJS");
	$T24[1]=array('name'=>"Backbone");
	$T24[2]=array('name'=>"Ember");
	$T24[3]=array('name'=>"React");
	$T24[4]=array('name'=>"Vue");

	//UI框架
	$T25[0]=array('name'=>"Bootstrap");
	$T25[1]=array('name'=>"Foundation");
	$T25[2]=array('name'=>"AmazeUI");
	$T25[3]=array('name'=>"EasyUI");
	$T25[4]=array('name'=>"jQueryUI");
	$T25[5]=array('name'=>"Ant Design");
	$T25[6]=array('name'=>"LayUI");
	$T25[7]=array('name'=>"ionic");
	$T25[8]=array('name'=>"WeUI");
	$T25[9]=array('name'=>"jQuery Mobile");

	//组件模块库
	$T26[]=array('name'=>"jQuery");
	$T26[]=array('name'=>"Zepto");
	$T26[]=array('name'=>"Echarts");
	$T26[]=array('name'=>"commonJS/AMD/CMD");
	$T26[]=array('name'=>"ES6 Modules");
	$T26[]=array('name'=>"RequireJS");
	$T26[]=array('name'=>"seaJS");
	$T26[]=array('name'=>"extJS");

	//工具和调试
	$T27[]=array('name'=>"fiddler+willow/wireshark");
	$T27[]=array('name'=>"Weinre/vorlon/chrome inspect");
	$T27[]=array('name'=>"mockjs/FMS");
	$T27[]=array('name'=>"supervior/inspector/nodemon");
	$T27[]=array('name'=>"sublime/VSCode/WebStorm");

	//分析和监控
	$T28[]=array('name'=>"pv/uv/vv/ip");
	$T28[]=array('name'=>"clickHeat/heatMap");
	$T28[]=array('name'=>"badjs");

	//前端测试
	$T29[]=array('name'=>"mocha");
	$T29[]=array('name'=>"Qunit");
	$T29[]=array('name'=>"phantomjs");
	$T29[]=array('name'=>"karma");
	$T29[]=array('name'=>"selenium");
	$T29[]=array('name'=>"Jasmine");

	//项目管理
	$T210[]=array('name'=>"开发规范");
	$T210[]=array('name'=>"开发方案");
	$T210[]=array('name'=>"测试方案");
	$T210[]=array('name'=>"项目部署");

	//技术趋势
	$T211[]=array('name'=>"PWA");
	$T211[]=array('name'=>"WebAssembly");
	$T211[]=array('name'=>"AMP");

	//相关网站
	$T212[]=array("name"=>"w3cschool.cn/runoob.com");
	$T212[]=array("name"=>"imooc.com/nowcoder.com");
	$T212[]=array("name"=>"杭js/前端圈/前端之巅");
	$T212[]=array("name"=>"segmentfault/stackoverflow");

	//其他技能
	$T213[]=array("name"=>"axure");
	$T213[]=array("name"=>"xmind");
	$T213[]=array("name"=>"can i use");
	$T213[]=array("name"=>"github");
	$T213[]=array("name"=>"团队管理");
	$T213[]=array("name"=>"知识管理");
	$T213[]=array("name"=>"编程思维");

	//前端优化
	$T214[]=array("name"=>"yslow/pagespeed");
	$T214[]=array("name"=>"SEO");
	$T214[]=array("name"=>"CDN");
	$T214[]=array("name"=>"网络/资源/协议/存储");

	//安全
	$T215[]=array("name"=>"Sandbox");
	$T215[]=array("name"=>"XSS");
	$T215[]=array("name"=>"CORS/CSRF");
	$T215[]=array("name"=>"sql注入");
	$T215[]=array("name"=>"https");

	//CSS预处理器
	$T216[]=array("name"=>"LESS");
	$T216[]=array("name"=>"Sass");
	$T216[]=array("name"=>"Stylus");

	//代码质量
	$T217[]=array("name"=>"JSLint/JSHint/ESLint");
	$T217[]=array("name"=>"jscs/Closure Linter");

	//浏览器和引擎
	$T218[]=array("name"=>"IE/Trident/JScript");
	$T218[]=array("name"=>"Chrome/Webkit/V8");
	$T218[]=array("name"=>"Firefox/Gecko/SpiderMonkey");
	$T218[]=array("name"=>"Safari/Webkit/Nitro");
	$T218[]=array("name"=>"Opera/Presto/V8");
	$T218[]=array("name"=>"Edge/EdgeHTML/Chakra");

	//HTTP协议
	$T219[]=array("name"=>"URI");
	$T219[]=array("name"=>"Session");
	$T219[]=array("name"=>"Authentication");
	$T219[]=array("name"=>"Request");
	$T219[]=array("name"=>"Response");
	$T219[]=array("name"=>"compression");
	$T219[]=array("name"=>"Server Push");
	$T219[]=array("name"=>"WebSocket");

	//W3C标准
	$T220[]=array("name"=>"HTML4.01/HTML5/XHTML1.0");
	$T220[]=array("name"=>"CSS2.0/CSS3.0");

	//前端模板
	$T221[0]=array('name'=>"Handlebars(MUI和AmazeUI)");
	$T221[1]=array('name'=>"artTemplate(腾讯)");
	$T221[2]=array('name'=>"juicer(淘宝)");
	$T221[3]=array('name'=>"baiduTemplate(百度)");
	$T221[4]=array('name'=>"EJS");
	$T221[5]=array('name'=>"Jade");

	//JS编译语言
	$T222[0]=array('name'=>"CoffeeScript");
	$T222[1]=array('name'=>"TypeScript");
	$T222[2]=array('name'=>"JSX(facebook)");

	//桌面开发
	$T223[0]=array('name'=>"electron");
	$T223[1]=array('name'=>"NW");

	//二级目录
	$T2[0]=array('name'=>"页面重构",'children'=>$T20);
	$T2[1]=array('name'=>"构建生态",'children'=>$T21);
	$T2[2]=array('name'=>"移动开发",'children'=>$T22);
	$T2[3]=array('name'=>"全栈开发",'children'=>$T23);
	$T2[4]=array('name'=>"前端框架",'children'=>$T24);
	$T2[5]=array('name'=>"UI框架",'children'=>$T25);
	$T2[6]=array('name'=>"组件库",'children'=>$T26);
	$T2[7]=array('name'=>"工具和调试",'children'=>$T27);
	$T2[8]=array('name'=>"分析和监控",'children'=>$T28);
	$T2[9]=array('name'=>"前端测试",'children'=>$T29);
	$T2[10]=array('name'=>"项目管理",'children'=>$T210);
	$T2[11]=array('name'=>"技术趋势",'children'=>$T211);
	$T2[12]=array('name'=>"相关网站",'children'=>$T212);
	$T2[13]=array('name'=>"其他技能",'children'=>$T213);
	$T2[14]=array('name'=>"前端优化",'children'=>$T214);
	$T2[15]=array('name'=>"安全",'children'=>$T215);
	$T2[16]=array('name'=>"CSS预处理器",'children'=>$T216);
	$T2[17]=array('name'=>"代码质量",'children'=>$T217);
	$T2[18]=array('name'=>"浏览器和引擎",'children'=>$T218);
	$T2[19]=array('name'=>"HTTP协议",'children'=>$T219);
	$T2[20]=array('name'=>"W3C标准",'children'=>$T220);
	$T2[21]=array('name'=>"前端模板",'children'=>$T221);
	$T2[22]=array('name'=>"JS编译语言",'children'=>$T222);
	$T2[23]=array('name'=>"桌面开发",'children'=>$T223);


	//一级目录
	$T1 = array('name'=>"前端技术体系",'children'=>$T2);

	//展示
	echo json_encode($T1);
}
?>