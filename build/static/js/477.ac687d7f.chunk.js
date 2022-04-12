"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[477,838,143,171,929],{8291:function(e,n,i){i.d(n,{Z:function(){return f}});var s=i(8563),l=i(7313),a=i(1413),t=i(5987),r=i(6123),c=i.n(r),d=i(8524),o=i(6417),h=["bsPrefix","size","vertical","className","as"],x=l.forwardRef((function(e,n){var i=e.bsPrefix,s=e.size,l=e.vertical,r=e.className,x=e.as,u=void 0===x?"div":x,j=(0,t.Z)(e,h),Z=(0,d.vE)(i,"btn-group"),m=Z;return l&&(m="".concat(Z,"-vertical")),(0,o.jsx)(u,(0,a.Z)((0,a.Z)({},j),{},{ref:n,className:c()(r,m,s&&"".concat(Z,"-").concat(s))}))}));x.displayName="ButtonGroup",x.defaultProps={vertical:!1,role:"group"};var u=x,j=function(e){var n=e.search,i=void 0!==n&&n,l=e.add,a=void 0!==l&&l,t=e.remove,r=void 0!==t&&t,c=e.save,d=void 0!==c&&c,h=e.excel,x=void 0!==h&&h,j=e.report,Z=void 0!==j&&j,m=e.handleSearchButtonClick,v=e.handleAddButtonClick,f=e.handleDeleteButtonClick,C=e.handleSaveButtonClick,k=e.handleExcelButtonClick,g=e.handleReportButtonClick;return(0,o.jsxs)(o.Fragment,{children:[i&&(0,o.jsx)(u,{className:"me-1",children:(0,o.jsx)(s.Z,{onClick:m,children:"\uc870\ud68c"})}),a&&(0,o.jsx)(u,{className:"me-1",children:(0,o.jsx)(s.Z,{onClick:v,children:"\ucd94\uac00"})}),r&&(0,o.jsx)(u,{className:"me-1",children:(0,o.jsx)(s.Z,{onClick:f,children:"\uc0ad\uc81c"})}),d&&(0,o.jsx)(u,{className:"me-1",children:(0,o.jsx)(s.Z,{onClick:C,children:"\uc800\uc7a5"})}),x&&(0,o.jsx)(u,{className:"me-1",children:(0,o.jsx)(s.Z,{onClick:k,children:"\uc5d1\uc140"})}),Z&&(0,o.jsx)(u,{children:(0,o.jsx)(s.Z,{onClick:g,children:"\ub808\ud3ec\ud2b8"})})]})},Z=l.memo(j),m=i(200),v=i(1616),f=function(e){var n=e.info,i=e.handleSearchButtonClick,s=e.handleAddButtonClick,l=e.handleDeleteButtonClick,a=e.handleSaveButtonClick,t=e.handleExcelButtonClick,r=e.handleReportButtonClick,c=n.search,d=n.add,h=n.remove,x=n.save,u=n.excel,j=n.report;return(0,o.jsxs)("div",{children:[(0,o.jsx)(m.Z,{xs:"auto",style:{justifyContent:"end"},children:(0,o.jsx)(v.Z,{xs:"auto",children:(0,o.jsx)(Z,{search:c,add:d,remove:h,save:x,excel:u,report:j,handleSearchButtonClick:i,handleAddButtonClick:s,handleDeleteButtonClick:l,handleSaveButtonClick:a,handleExcelButtonClick:t,handleReportButtonClick:r})})}),(0,o.jsx)("hr",{})]})}},8838:function(e,n,i){i.r(n),i.d(n,{usePageContext:function(){return o}});var s=i(885),l=i(7313),a=i(7143),t=i(7171),r=i(7929),c=i(6417),d=(0,l.createContext)({}),o=function(){return(0,l.useContext)(d)};n.default=function(e){var n=e.children,i=(0,l.useState)(a.initial),o=(0,s.Z)(i,2),h=o[0],x=o[1],u=(0,t.default)({state:h,setState:x});return(0,r.default)({state:h,setState:x,actions:u}),(0,c.jsx)(d.Provider,{value:{state:h,setState:x,actions:u},children:n})}},7143:function(e,n,i){i.r(n),i.d(n,{initial:function(){return s}});var s={masterAxiosConfig:"123",detailAxiosConfig:"456"}},7171:function(e,n,i){i.r(n);var s=i(1413),l=i(487);n.default=function(e){var n=e.state,i=e.setState,a=(0,l.bp)().dispatch,t=l.Nw.showAlert;return{handleSearchButtonClick:function(){console.log("\uc870\ud68c",n),i((function(e){return(0,s.Z)((0,s.Z)({},e),{},{detailAxiosConfig:"345"})}))},handleAddButtonClick:function(){a(t({body:"\uac1c\ubc1c \uc911"}))},handleDeleteButtonClick:function(e){console.log("\uc0ad\uc81c",e)},handleSaveButtonClick:function(e){console.log("\uc800\uc7a5",e)},handleExcelButtonClick:function(e){console.log("\uc5d1\uc140",e)},handleReportButtonClick:function(e){console.log("\ub808\ud3ec\ud2b8",e)}}}},7929:function(e,n,i){i.r(n);var s=i(1413),l=i(7313);n.default=function(e){var n=e.state,i=e.setState;(0,l.useEffect)((function(){i((function(e){return(0,s.Z)((0,s.Z)({},e),{},{masterAxiosConfig:"000"})}))}),[n.detailAxiosConfig])}},2477:function(e,n,i){i.r(n);var s=i(1413),l=i(885),a=i(8563),t=i(510),r=i(9638),c=i(2837),d=i(1198),o=i(4834),h=i(3507),x=i(7579),u=i(8291),j=i(7623),Z=i(200),m=i(6656),v=i(6091),f=i(7313),C=i(7021),k=i(2237),g=i(6904),p=i(8838),B=i(6417),y=[{code:"Y",name:"\uc0ac\uc6a9"},{code:"N",name:"\ubbf8\uc0ac\uc6a9"}],S=[{code:"00",name:"\uc0ac\uc6d0"},{code:"01",name:"\ub300\ub9ac"},{code:"02",name:"\uacfc\uc7a5"},{code:"03",name:"\ucc28\uc7a5"},{code:"04",name:"\ubd80\uc7a5"},{code:"05",name:"\uc774\uc0ac"},{code:"06",name:"\uc0ac\uc7a5"}],w=[{code:"00",name:"JavaScript"},{code:"01",name:"Java"},{code:"02",name:"Python"}],A=[{code:"00",name:"\ubd80\uc0b0"},{code:"01",name:"\uc11c\uc6b8"}],N={name:"\ud55c\uc6d0\uc11d",email:"oshan1112@gmail.com",position:"01",skills:"00,02",join_date:"2018-07-02",register_date:"2022-02-22 13:00",use_yn:"Y",location:"01",comment:""},F=function(e){var n=e.info,i=(0,p.usePageContext)().actions,s=i.handleSearchButtonClick,F=i.handleAddButtonClick,P=i.handleDeleteButtonClick,E=i.handleSaveButtonClick,_=i.handleExcelButtonClick,R=i.handleReportButtonClick,b=(0,g.Z)(N),D=(0,l.Z)(b,2),T=D[0],J=D[1],L=(0,f.useState)(!0),M=(0,l.Z)(L,2),O=M[0],z=M[1];return setTimeout((function(){return z(!1)}),2e3),(0,f.useEffect)((function(){return function(){return z(!1)}}),[]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h4",{children:"\uacf5\ud1b5\ubc84\ud2bc\uadf8\ub8f9"}),(0,B.jsx)(u.Z,{info:n,handleSearchButtonClick:s,handleAddButtonClick:F,handleDeleteButtonClick:P,handleSaveButtonClick:E,handleExcelButtonClick:_,handleReportButtonClick:R}),(0,B.jsx)("h4",{children:"Button"}),(0,B.jsxs)(Z.Z,{xs:"auto",style:{justifyContent:"space-around"},children:[(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"primary",children:"primary"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"secondary",children:"secondary"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"success",children:"success"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"warning",children:"warning"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"danger",children:"danger"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"info",children:"info"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"light",children:"light"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"dark",children:"dark"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"link",children:"link"})})]}),(0,B.jsxs)(Z.Z,{xs:"auto",style:{justifyContent:"space-around",marginTop:"10px"},children:[(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-primary",children:"primary"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-secondary",children:"secondary"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-success",children:"success"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-warning",children:"warning"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-danger",children:"danger"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-info",children:"info"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-light",children:"light"})}),(0,B.jsx)(r.Z,{children:(0,B.jsx)(a.Z,{variant:"outline-dark",children:"dark"})})]}),(0,B.jsx)("hr",{}),(0,B.jsx)(Z.Z,{children:JSON.stringify(T)}),(0,B.jsx)("hr",{}),(0,B.jsx)("h4",{children:"InputBox"}),(0,B.jsxs)(d.Z,{children:[(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",required:!0,children:"\uc131\uba85"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(o.Z,{name:"name",placeholder:"\uc131\uba85",isValid:!1,value:T.name,handleChangeField:J})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\uc774\uba54\uc77c"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(o.Z,{name:"email",prefix:"pre",postfix:"post",value:T.email,handleChangeField:J})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\ud328\uc2a4\uc6cc\ub4dc"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(o.Z,{name:"password",isPassword:!0,placeholder:"Password"})})]})]}),(0,B.jsx)("hr",{}),(0,B.jsx)("h4",{children:"Textarea"}),(0,B.jsx)(d.Z,{xs:"1",sm:"2",md:"2",lg:"2",xl:"2",xxl:"2",children:(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\ube44\uace0"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(v.Z,{name:"comment",value:T.comment,handleChangeField:J})})]})}),(0,B.jsx)("hr",{}),(0,B.jsx)("h4",{children:"SelectBox"}),(0,B.jsxs)(d.Z,{children:[(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\uc9c1\uc704"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(m.Z,{name:"position",choices:S,selectOption:"choose",value:T.position,handleChangeField:J})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\uc5b8\uc5b4"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(m.Z,{name:"skills",choices:w,selectOption:"all",multiple:!0,value:T.skills,handleChangeField:J})})]})]}),(0,B.jsx)("hr",{}),(0,B.jsx)("h5",{children:"Date/TimePicker"}),(0,B.jsxs)(d.Z,{children:[(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\uc785\uc0ac\uc77c\uc790"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(c.Z,{name:"join_date",value:T.join_date,handleChangeField:J})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\ud604\uc7ac\ub144\ub3c4"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(c.Z,{name:"year",type:"year",value:(0,k.Ux)("year")})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\ud604\uc7ac\ub144\uc6d4"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(c.Z,{name:"yearMonth",type:"yearMonth",value:(0,k.Ux)("yearMonth")})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\ub4f1\ub85d\uc77c\uc2dc"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(c.Z,{name:"register_date",type:"datetime",value:T.register_date,handleChangeField:J})})]})]}),(0,B.jsx)("hr",{}),(0,B.jsx)("h5",{children:"Check/Radio Box"}),(0,B.jsxs)(d.Z,{children:[(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\uc0ac\uc6a9\uc5ec\ubd80"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(t.Z,{name:"use_yn",choices:y,value:T.use_yn,handleChangeField:J,style:{marginLeft:10}})})]}),(0,B.jsxs)(C.Z,{as:Z.Z,children:[(0,B.jsx)(h.Z,{sm:"4",children:"\uc9c0\uc5ed"}),(0,B.jsx)(r.Z,{sm:"8",children:(0,B.jsx)(j.Z,{name:"location",choices:A,value:T.location,handleChangeField:J,style:{marginLeft:10}})})]})]}),(0,B.jsx)("hr",{}),(0,B.jsx)("h5",{children:"Loading"}),(0,B.jsx)(x.Z,{loading:O})]})},P=function(e){return(0,B.jsx)(p.default,{children:(0,B.jsx)(F,(0,s.Z)({},e))})};n.default=f.memo(P)}}]);