(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1251:function(e,n,t){var a=t(1252);"string"===typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t(28)(a,l);a.locals&&(e.exports=a.locals)},1252:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".login-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  line-height: 80px;\n  background: rgba(21, 20, 13, 0.9);\n}\n.login-header .login-logo {\n  padding-left: 100px;\n  font-size: 20px;\n  color: white;\n}\n.login-header .login-logo img {\n  height: 40px;\n  margin-right: 15px;\n}\n.login-content-wrap {\n  min-height: 550px;\n  height: calc(100vh);\n  background: url(https://media.xiaohuali.com/ebike-fc/login/banner.jpg) no-repeat center;\n  background-size: cover;\n}\n.login-content-wrap .login-content {\n  position: relative;\n  top: 50%;\n  display: -webkit-flex;\n  display: flex;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n.login-content-wrap .login-content .word {\n  -webkit-flex: 7 1;\n          flex: 7 1;\n  line-height: 1.4;\n  color: #fff;\n  font-size: 64px;\n  font-weight: bold;\n}\n.login-content-wrap .login-content .login-box {\n  position: relative;\n  -webkit-flex: 4 1;\n          flex: 4 1;\n  height: 390px;\n  padding: 40px 30px 20px 30px;\n  background: #fff;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.login-content-wrap .login-content .login-box .title {\n  line-height: 1;\n  margin-bottom: 50px;\n  font-size: 35px;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.login-content-wrap .login-content .login-button {\n  margin-bottom: 10px;\n  margin-right: 15px;\n}\n",""])},1254:function(e,n,t){"use strict";t.r(n);t(56);var a=t(15),l=(t(65),t(12)),i=(t(208),t(83)),o=(t(154),t(68)),r=(t(207),t(8)),c=(t(99),t(46)),s=t(16),g=t(18),p=t(20),m=t(19),d=t(21),u=(t(128),t(36)),h=t(0),f=t.n(h),x=t(47),b=t(121),w=t(1255),v=t(170),E=(t(1251),u.a.Item),k=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(p.a)(this,Object(m.a)(n).call(this,e))).handleSubmit=function(e){var n=t.props.dispatch;e.preventDefault();var a=t.props.form.getFieldsValue();t.props.form.validateFields(function(e,t){e||x.a.login({url:"/login",data:{userName:a.userName,pwd:a.userPwd}}).then(function(e){c.a.success("\u767b\u5f55\u6210\u529f\uff01"),n(Object(v.a)(e.result.data.token)),localStorage.setItem("token",JSON.stringify(e.result.data.token))})})},t}return Object(d.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this.props.token,n=this.props.form.getFieldDecorator;return e?f.a.createElement(w.a,{to:"/home"}):f.a.createElement(h.Fragment,null,f.a.createElement("div",{className:"login-page"},f.a.createElement("header",{className:"login-header"},f.a.createElement("div",{className:"login-logo"},f.a.createElement("img",{src:"/assets/logo-ant.svg",alt:"\u5171\u4eab\u5355\u8f66\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),"\u5171\u4eab\u5355\u8f66\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf")),f.a.createElement("div",{className:"login-content-wrap"},f.a.createElement("div",{className:"login-content"},f.a.createElement("div",{className:"word"},"\u5171\u4eab\u51fa\u884c",f.a.createElement("br",null),"\u5f15\u9886\u57ce\u5e02\u65b0\u7ecf\u6d4e"),f.a.createElement("div",{className:"login-box"},f.a.createElement("div",{className:"title"},"\u6b22\u8fce\u4f60\uff0c\u8bf7\u5148\u767b\u5f55"),f.a.createElement(a.a,null,f.a.createElement(u.a,{style:{width:260}},f.a.createElement(E,null,n("userName",{initialValue:"",rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u4e3a\u7a7a"},{min:5,max:10,message:"\u7528\u6237\u540d\u957f\u5ea6\u4e0d\u5728\u8303\u56f4\u5185"},{pattern:new RegExp("^\\w+$","g"),message:"\u7528\u6237\u540d\u5fc5\u987b\u4e3a\u5b57\u6bcd\u6216\u8005\u6570\u5b57"}]})(f.a.createElement(o.a,{prefix:f.a.createElement(r.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),f.a.createElement(E,null,n("userPwd",{initialValue:"",rules:[{required:!0,message:"\u5bc6\u7801\u4e0d\u4e3a\u7a7a"}]})(f.a.createElement(o.a,{type:"password",prefix:f.a.createElement(r.a,{type:"lock"}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),f.a.createElement(E,null,n("remember",{valuePropName:"checked",initialValue:!1,rules:[]})(f.a.createElement(i.a,null,"\u8bb0\u4f4f\u5bc6\u7801")),f.a.createElement("a",{href:"#/login",style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),f.a.createElement(E,null,f.a.createElement(l.a,{type:"primary",block:!0,onClick:this.handleSubmit},"\u767b\u5f55")))))))))}}]),n}(h.Component);n.default=Object(b.b)(function(e){return{token:e.token}},null)(u.a.create()(k))}}]);
//# sourceMappingURL=LoginPage.51ec2b5e.chunk.js.map