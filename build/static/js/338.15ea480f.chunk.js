(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[338,403],{9790:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(1413),o=a(885),n=a(6946),d=a(7313),i=a(600),s=a.n(i),u=a(487),g=a(3144),l=a(5671),m=a(136),c=a(8505),p=a(9380),C=function(e){(0,m.Z)(a,e);var t=(0,c.Z)(a);function a(){return(0,l.Z)(this,a),t.apply(this,arguments)}return(0,g.Z)(a)}(a.n(p)()),y=a(6417);s().setLanguage("ko"),s().applyTheme("default",{cell:{rowHeader:{background:"#1d1d1d",text:"#adadad"},header:{background:"#1d1d1d",text:"#adadad"},normal:{background:"#2b2b2b",text:"#adadad"},editable:{background:"#2b2b2b",text:"#adadad"},required:{background:"#2b2b2b",text:"#adadad"}},area:{header:{background:"#2b2b2b"},body:{background:"#2b2b2b"},summary:{background:"#2b2b2b"}},scrollbar:{background:"#2b2b2b",emptySpace:"#1d1d1d"},heightResizeHandle:{background:"#1d1d1d"}});var b=function(e,t){var a=e.data,i=e.columns,s=e.columnOptions,g=e.keyColumnName,l=e.width,m=e.bodyHeight,c=void 0===m?"auto":m,p=e.heightResizable,b=void 0===p||p,h=e.minBodyHeight,v=e.rowHeight,x=e.minRowHeight,f=e.scrollX,k=e.scrollY,w=e.editingEvent,T=e.tabMode,O=e.rowHeaders,H=void 0===O?[]:O,M=e.summary,A=e.useClientSort,S=e.selectionUnit,R=e.showDummyRows,B=e.copyOptions,I=e.pageOptions,N=e.treeColumnOptions,L=e.header,D=e.usageStatistics,E=e.disabled,Z=void 0!==E&&E,z=e.draggable,P=void 0===z||z,j=e.contextMenu,G=(0,u.bp)().store,U=(0,d.useState)(null===G||void 0===G?void 0:G.renderCount),F=(0,o.Z)(U,2),J=F[0],W=F[1];return(0,d.useEffect)((function(){W(null===G||void 0===G?void 0:G.renderCount)}),[null===G||void 0===G?void 0:G.renderCount]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n.Z,{}),J===(null===G||void 0===G?void 0:G.renderCount)&&(0,y.jsx)(C,{ref:t,data:a,columns:i,columnOptions:(0,r.Z)({resizable:!0},s),keyColumnName:g,width:l,bodyHeight:c,heightResizable:b,minBodyHeight:h,rowHeight:v,minRowHeight:x,scrollX:f,scrollY:k,editingEvent:w,tabMode:T,rowHeaders:H||["rowNum","draggable"],summary:M,useClientSort:A,selectionUnit:S,showDummyRows:R,copyOptions:(0,r.Z)({useListItemText:!0},B),pageOptions:I,treeColumnOptions:N,header:(0,r.Z)({align:"center"},L),usageStatistics:D,disabled:Z,draggable:P,contextMenu:j,oneTimeBindingProps:["data","columns"]})]})},h=d.memo((0,d.forwardRef)(b)),v=a(9403),x=function(){var e=(0,d.useRef)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(h,{ref:e,data:v.DATA,columns:v.COLUMN_META,rowHeight:25,bodyHeight:"auto",heightResizable:!0,rowHeaders:["rowNum","checkbox"]})})}},9403:function(e,t,a){"use strict";a.r(t),a.d(t,{DATA:function(){return r},COLUMN_META:function(){return o}});var r=[{name:"Beautiful Lies",artist:"Birdy",typeCode:"1",genreCode:"1",grade:"2"},{name:"X",artist:"Ed Sheeran",typeCode:"1",genreCode:"1",grade:"3"},{name:"Moves Like Jagger",artist:"Maroon5",typeCode:"3",genreCode:"1,2",grade:"2"},{name:"A Head Full Of Dreams",artist:"Coldplay",typeCode:"1",genreCode:"2",grade:"3"},{name:"21",artist:"Adele",typeCode:"1",genreCode:"1,3",grade:"3"},{name:"Warm On A Cold Night",artist:"HONNE",typeCode:"1",genreCode:"3,4",grade:"2"},{name:"Take Me To The Alley",artist:"Gregory Porter",typeCode:"1",genreCode:"5",grade:"3"},{name:"Make Out",artist:"LANY",typeCode:"2",genreCode:"4",grade:"2"},{name:"Get Lucky",artist:"Daft Punk",typeCode:"3",genreCode:"1,5",grade:"3"},{name:"Valtari",artist:"Sigur R\xf3s",typeCode:"3",genreCode:"2",grade:"3"},{name:"Bush",artist:"Snoop Dogg",typeCode:"2",genreCode:"5",grade:"3"},{name:"2",artist:"Beyonc\xe9",typeCode:"1",genreCode:"1",grade:"3"},{name:"I Won't Give Up",artist:"Jason Mraz",typeCode:"3",genreCode:"1",grade:"2"},{name:"Following My Intuition",artist:"Craig David",typeCode:"1",genreCode:"3,4",grade:"3"},{name:"Blue Skies",artist:"Lenka",typeCode:"3",genreCode:"1,2",grade:"3"},{name:"This Is Acting",artist:"Sia",typeCode:"2",genreCode:"1",grade:"3"},{name:"Blurryface",artist:"Twenty One Pilots",typeCode:"2",genreCode:"2",grade:"2"},{name:"I'm Not The Only One",artist:"Sam Smith",typeCode:"3",genreCode:"1,3",grade:"2"},{name:"The Magic Whip",artist:"Blur",typeCode:"2",genreCode:"2",grade:"3"},{name:"Chaos And The Calm",artist:"James Bay",typeCode:"2",genreCode:"1,2",grade:"3"}],o=[{header:"Name",name:"name",editor:{type:"text"},validation:{required:!0}},{header:"Artist",name:"artist",editor:{type:"text",options:{maxLength:10}}},{header:"Type",name:"typeCode",formatter:"listItemText",editor:{type:"select",options:{listItems:[{text:"Deluxe",value:"1"},{text:"EP",value:"2"},{text:"Single",value:"3"}]}}},{header:"Genre",name:"genreCode",formatter:"listItemText",editor:{type:"checkbox",options:{listItems:[{text:"Pop",value:"1"},{text:"Rock",value:"2"},{text:"R&B",value:"3"},{text:"Electronic",value:"4"},{text:"etc.",value:"5"}]}}},{header:"Grade",name:"grade",copyOptions:{useListItemText:!0},formatter:"listItemText",editor:{type:"radio",options:{listItems:[{text:"\u2605\u2606\u2606",value:"1"},{text:"\u2605\u2605\u2606",value:"2"},{text:"\u2605\u2605\u2605",value:"3"}]}}}]},5382:function(){},2095:function(){},1219:function(){}}]);