"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[732],{8732:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(885),i=t(6123),c=t.n(i),o=t(7313),r=t(7569),l=t(560),u=t(233),d=t(4510),s=t(487),v=t(6417),f=function(e){var n=e.navInfo,t=e.activeKey,i=e.handleBeforeActivateTab,f=e.handleActivateTab,h=(0,s.TC)().store,m=(0,o.useState)(t||n[0].key||void 0),k=(0,a.Z)(m,2),y=k[0],b=k[1];return(0,o.useEffect)((function(){b(t)}),[t]),(0,v.jsxs)(r.Z,{activeKey:y,onSelect:function(e){var t=n.find((function(n){return n.key===e}));i?null!==i&&void 0!==i&&i(n.find((function(e){return e.key===y})))?(null===f||void 0===f||f(t),b(e||void 0)):b(y):(null===f||void 0===f||f(t),b(e||void 0))},children:[(0,v.jsx)(l.Z,{className:"custom-nav",variant:"tabs",navbar:!0,children:n.map((function(e){return(0,v.jsx)(l.Z.Item,{style:{cursor:"pointer"},children:(0,v.jsx)(l.Z.Link,{className:c()("custom-nav-link",{darkMode:null===h||void 0===h?void 0:h.darkMode}),eventKey:e.key,children:e.name})},"Nav".concat(e.key))}))}),(0,v.jsx)("div",{style:{overflow:"auto",height:"100%",marginTop:"10px"},children:(0,v.jsx)(u.Z,{children:n.map((function(e){return(0,v.jsx)(d.Z,{eventKey:e.key,title:e.name,children:e.element},"Tab".concat(e.key))}))})})]})},h=o.memo(f),m=function(){var e=(0,o.useState)(""),n=(0,a.Z)(e,2),t=n[0],i=n[1],c=[{key:"01",name:"Tab01",element:(0,v.jsx)("div",{children:"TabPage 01"})},{key:"02",name:"Tab02",element:(0,v.jsx)("div",{children:"TabPage 02"})},{key:"03",name:"Tab03",element:(0,v.jsx)("div",{children:"TabPage 03"})}];(0,o.useEffect)((function(){i("01")}),[]);return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(h,{navInfo:c,activeKey:t,handleActivateTab:function(e){console.log("active::",e)},handleBeforeActivateTab:function(e){return console.log("before::",e),!0}})})}}}]);