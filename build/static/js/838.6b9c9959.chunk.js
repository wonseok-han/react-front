"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[838,143,171,929],{8838:function(t,n,e){e.r(n),e.d(n,{usePageContext:function(){return s}});var o=e(885),i=e(7313),a=e(7143),u=e(7171),c=e(7929),l=e(6417),r=(0,i.createContext)({}),s=function(){return(0,i.useContext)(r)};n.default=function(t){var n=t.children,e=(0,i.useState)(a.initial),s=(0,o.Z)(e,2),f=s[0],d=s[1],C=(0,u.default)({state:f,setState:d});return(0,c.default)({state:f,setState:d,actions:C}),(0,l.jsx)(r.Provider,{value:{state:f,setState:d,actions:C},children:n})}},7143:function(t,n,e){e.r(n),e.d(n,{initial:function(){return o}});var o={masterAxiosConfig:"123",detailAxiosConfig:"456"}},7171:function(t,n,e){e.r(n);var o=e(1413),i=e(487);n.default=function(t){var n=t.state,e=t.setState,a=(0,i.bp)().dispatch,u=i.Nw.showAlert;return{handleSearchButtonClick:function(){console.log("\uc870\ud68c",n),e((function(t){return(0,o.Z)((0,o.Z)({},t),{},{detailAxiosConfig:"345"})}))},handleAddButtonClick:function(){a(u({body:"\uac1c\ubc1c \uc911"}))},handleDeleteButtonClick:function(t){console.log("\uc0ad\uc81c",t)},handleSaveButtonClick:function(t){console.log("\uc800\uc7a5",t)},handleExcelButtonClick:function(t){console.log("\uc5d1\uc140",t)},handleReportButtonClick:function(t){console.log("\ub808\ud3ec\ud2b8",t)}}}},7929:function(t,n,e){e.r(n);var o=e(1413),i=e(7313);n.default=function(t){var n=t.state,e=t.setState;(0,i.useEffect)((function(){e((function(t){return(0,o.Z)((0,o.Z)({},t),{},{masterAxiosConfig:"000"})}))}),[n.detailAxiosConfig])}}}]);