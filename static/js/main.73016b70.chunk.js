(this["webpackJsonpreceipt-app"]=this["webpackJsonpreceipt-app"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(17),r=c.n(s),i=(c(46),c(20)),j=c(8),o=(c(47),c(68)),b=c(69),l=c(67),d=c(3),h=function(){return Object(d.jsxs)(o.a,{bg:"light",expand:"lg",children:[Object(d.jsx)(o.a.Brand,{as:i.b,to:"/",children:"Receipt App"}),Object(d.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(b.a,{className:"mr-auto",children:[Object(d.jsx)(b.a.Link,{as:i.b,to:"/",children:"Home"}),Object(d.jsxs)(l.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(d.jsx)(l.a.Item,{href:"#action/3.1",children:"Add one"}),Object(d.jsx)(l.a.Item,{href:"#action/3.2",children:"Graphs"}),Object(d.jsx)(l.a.Item,{href:"#action/3.3",children:"Something"}),Object(d.jsx)(l.a.Divider,{}),Object(d.jsx)(l.a.Item,{href:"#action/3.4",children:"Separated link"})]}),Object(d.jsx)(b.a.Link,{as:i.b,to:"/about",children:"About me"})]})})]})},p=c(40),O=c.p+"static/media/logo.6ce24c58.svg",u=c(66),x=c(70),m=c(71),f=function(e){var t=e.receipts;return Object(d.jsx)(u.a,{children:t.map((function(e,t){return Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsxs)(x.a.Toggle,{as:m.a.Header,eventKey:t.toString(),children:[e.superMarket,Object(d.jsx)("span",{children:" - "}),e.date]}),Object(d.jsx)(x.a.Collapse,{eventKey:t.toString(),children:Object(d.jsx)(d.Fragment,{children:e.products.map((function(e){return Object(d.jsx)(m.a.Body,{children:e.name})}))})})]})})}))})},g=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("./Receipts.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return new Promise((function(t){setTimeout((function(){t(e)}),2e3)}))})).then((function(e){a(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-center",children:"Your Receipts"}),Object(d.jsx)("hr",{}),0===c.length?Object(d.jsx)("img",{src:O,className:"App-logo",alt:"logo"}):Object(d.jsx)(f,{receipts:c})]})},v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/about",children:"About me"}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(g,{})})]})]})};c(60);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(v,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.73016b70.chunk.js.map