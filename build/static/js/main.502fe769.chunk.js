(this.webpackJsonpshopping_421=this.webpackJsonpshopping_421||[]).push([[0],{241:function(e,t,r){"use strict";r.r(t);var a=r(6),n=r(0),c=r.n(n),i=r(26),s=r.n(i),o=(r(147),r(70)),l=r(68),d=r(134),j=r(24),p=r(28),h=r.n(p),u=r(42),b=r(32),O=r(245),x=r(249),g=r(244),m=r(252),f=r(248),v=r(243),y=r(69),w=r(40),k=r(246),S=r(247),C=r(250),P=(r(54),r(148).default),D="https://core.stupidarnob.com/xxyyzz",T={ax_get:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=D+""+r,e.next=4,P.get(a);case 4:return e.next=6,e.sent.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ax_post:function(){var e=Object(u.a)(h.a.mark((function e(t){var r,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=t.params,n=D+""+r,e.next=4,P.post(n,a);case 4:return e.next=6,e.sent.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=r(251);var F=function(e){var t=e.pageView,r=Object(n.useState)(!1),c=Object(b.a)(r,2),i=c[0],s=c[1],o=function(){s(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{type:"default",size:"large",onClick:function(){s(!0)},block:!0,children:"View"}),Object(a.jsxs)(H.a,{placement:"right",closable:!0,onClose:o,visible:i,width:"100%",children:[Object(a.jsx)("iframe",{src:t,width:"100%",height:"90%",frameBorder:"0",style:{marginTop:40}}),Object(a.jsx)("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",padding:"10px 16px",background:"#fff",textAlign:"right",borderTop:"1px solid #ebebeb"},children:Object(a.jsx)(l.a,{type:"primary",block:!0,onClick:o,children:"Close"})})]})]})};O.a.Meta;var z=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)("0"),s=Object(b.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)(!0),j=Object(b.a)(d,2),p=j[0],P=j[1],D=Object(n.useState)(Number(new Date)),H=Object(b.a)(D,2),z=(H[0],H[1]);function L(){return(L=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),c([]),e.next=4,T.ax_get({path:"/list"});case 4:(t=e.sent).status&&c(t.return),P(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){L.apply(this,arguments)}()}),[]),Object(a.jsxs)(n.Fragment,{children:[Object(a.jsxs)("center",{children:[Object(a.jsx)(g.a,{title:"42-1",style:{borderBottom:"1px solid #e9e9e9",maxWidth:1400},extra:[]}),Object(a.jsx)(m.b,{}),Object(a.jsx)("div",{style:{margin:20,maxWidth:1400},children:Object(a.jsx)(f.a,{active:!0,loading:p})})]}),!p&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("center",{children:Object(a.jsx)(v.a,{layout:"vertical",style:{padding:10},children:Object(a.jsxs)(y.a,{gutter:16,style:{maxWidth:1200},children:[Object(a.jsx)(w.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:Object(a.jsx)(v.a.Item,{label:"Search",children:Object(a.jsx)(k.a,{placeholder:"Search Product Name",style:{width:"100%"},onChange:function(){var e=Object(u.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.ax_post({path:"/search",params:{type:"search",name:t.target.value}});case 2:r=e.sent,c(r.return);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),size:"large"})})}),Object(a.jsx)(w.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:Object(a.jsx)(v.a.Item,{label:"Product Type",children:Object(a.jsxs)(S.a,{value:o,size:"large",placeholder:"Select Product Type",style:{width:"100%"},onChange:function(){var e=Object(u.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.b.destroy(),x.b.loading("Please wait...",0),c([]),z(Number(new Date)),P(!0),l("0"),e.next=8,T.ax_post({path:"/search",params:{type:"product",name:t}});case 8:r=e.sent,x.b.destroy(),x.b.destroy(),z(Number(new Date)),c(r.return),l(t),P(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(a.jsx)(S.a.Option,{value:"0",disabled:!0,children:"Select Product Type"},"0"),Object(a.jsx)(S.a.Option,{value:"headphone",children:"Headphone"},"1"),Object(a.jsx)(S.a.Option,{value:"keyboards",children:"Keyboards"},"2"),Object(a.jsx)(S.a.Option,{value:"micro-sd-card",children:"Micro/SD card"},"3"),Object(a.jsx)(S.a.Option,{value:"microphone",children:"Microphone"},"4"),Object(a.jsx)(S.a.Option,{value:"casing",children:" Casing "},"5"),Object(a.jsx)(S.a.Option,{value:"casing-cooler",children:"Casing Cooler "},"6"),Object(a.jsx)(S.a.Option,{value:"power-supply",children:"Power Supply "},"7"),Object(a.jsx)(S.a.Option,{value:"water-or-liquid-cooling",children:" Water or Liquid Cooling"},"8"),Object(a.jsx)(S.a.Option,{value:"processor",children:"Processor "},"9"),Object(a.jsx)(S.a.Option,{value:"CPU-Cooler",children:"CPU Cooler "},"10"),Object(a.jsx)(S.a.Option,{value:"motherboard",children:" Motherboard"},"11"),Object(a.jsx)(S.a.Option,{value:"graphics-card",children:"Graphics Card "},"12"),Object(a.jsx)(S.a.Option,{value:"portable-hard-disk-drive",children:"Portable Hard Disk Drive "},"13"),Object(a.jsx)(S.a.Option,{value:"hard-disk-drive",children:"Hard Disk Drive "},"14"),Object(a.jsx)(S.a.Option,{value:"SSD-Hard-Disk",children:" SSD Hard Disk"},"15"),Object(a.jsx)(S.a.Option,{value:"ram",children:"Ram "},"16"),Object(a.jsx)(S.a.Option,{value:"laptop-ram",children:"Laptop Ram "},"17"),Object(a.jsx)(S.a.Option,{value:"portable-ssd-hard-disk",children:"Portable SSD Hard Disk "},"18"),Object(a.jsx)(S.a.Option,{value:"sound-card",children:"Sound Card "},"19"),Object(a.jsx)(S.a.Option,{value:"optical-hdd",children:" Optical Hdd"},"20"),Object(a.jsx)(S.a.Option,{value:"stabilizer",children:" Stabilizer"},"21"),Object(a.jsx)(S.a.Option,{value:"vertical-graphics-card-holder",children:"Vertical Graphics Card Holder "},"22"),Object(a.jsx)(S.a.Option,{value:"monitor",children:"Monitor "},"23"),Object(a.jsx)(S.a.Option,{value:"server-networking",children:" Server Networking"},"24")]})})})]})})}),0===r.length&&Object(a.jsx)(C.a,{status:"warning",title:"No Product Found"}),Object(a.jsx)("center",{children:Object(a.jsx)(y.a,{gutter:24,style:{marginLeft:0,marginRight:0,paddingTop:10,maxWidth:1200,marginBottom:100},hidden:0===r.length,children:r.map((function(e){return Object(a.jsx)(w.a,{xs:12,sm:10,md:8,lg:6,xl:6,style:{paddingTop:10},children:Object(a.jsxs)(O.a,{title:"startech"===e.source?Object(a.jsx)("img",{src:"https://www.startech.com.bd/image/catalog/logo.png",style:{height:32,width:85,float:"left"}}):"ryanscomputers"===e.source?Object(a.jsx)("img",{src:"https://www.ryanscomputers.com/assets/website/img/ryans-computers.svg",style:{height:32,width:85,float:"left"}}):"",style:{minHeight:400,marginTop:20,marginBottom:20,overflow:"hidden"},cover:Object(a.jsx)("img",{style:{padding:8,width:120,height:120,marginTop:5},alt:e.name,src:e.img}),children:[Object(a.jsx)("b",{children:e.name}),Object(a.jsx)("div",{style:{position:"absolute",right:0,bottom:44,width:"100%"},children:Object(a.jsx)(F,{pageView:e.url})}),Object(a.jsx)("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",padding:"10px 16px",background:"#426184",textAlign:"right",borderTop:"1px solid #fff"},children:Object(a.jsxs)("b",{style:{color:"#fff"},children:["Price: ",e.price]})})]})})}))})})]})]})};function L(){return Object(a.jsx)(d.a,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/",children:Object(a.jsx)(z,{})}),Object(a.jsx)(j.a,{path:"*",children:Object(a.jsx)(M,{})})]})})}function M(){return Object(a.jsx)(o.a,{image:"https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Page.gif",description:Object(a.jsx)("span",{children:"Link not found"}),children:Object(a.jsx)(l.a,{type:"primary",onClick:function(){return window.location.href="/"},children:"Go To Home"})})}var _=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,253)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),_()}},[[241,1,2]]]);
//# sourceMappingURL=main.502fe769.chunk.js.map