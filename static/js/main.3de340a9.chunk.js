(this["webpackJsonpawetosis-topic-widget"]=this["webpackJsonpawetosis-topic-widget"]||[]).push([[0],{23:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(17),c=a.n(i),l=(a(28),a(18)),u={breakpoints:["40em","52em","64em"],colors:{text:"#000",background:"#fff",primary:"#07c",secondary:"#30c",destructive:"#C00",muted:"#f6f6f9",gray:"#dddddf",highlight:"hsla(205, 100%, 40%, 0.125)"},fonts:{body:"system-ui, sans-serif",heading:"inherit",monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,48,64,96],fontWeights:{body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.25},space:[0,4,8,16,32,64,128,256,512],sizes:{avatar:48},radii:{default:4,circle:99999},shadows:{card:"0 0 4px rgba(0, 0, 0, .125)"},text:{heading:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},display:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading",fontSize:[5,6,7]},caps:{textTransform:"uppercase",letterSpacing:"0.1em"}},variants:{avatar:{width:"avatar",height:"avatar",borderRadius:"circle"},card:{p:2,bg:"background",boxShadow:"card"},link:{color:"primary"},nav:{fontSize:1,fontWeight:"bold",display:"inline-block",p:2,color:"inherit",textDecoration:"none",":hover,:focus,.active":{color:"primary"}}},buttons:{primary:{variant:"text.caps",fontSize:2,fontWeight:"bold",color:"background",bg:"primary",borderRadius:"default"},outline:{variant:"buttons.primary",color:"primary",bg:"transparent",boxShadow:"inset 0 0 2px"},secondary:{variant:"buttons.primary",color:"background",bg:"secondary"},destructive:{variant:"buttons.primary",color:"background",bg:"destructive",fontWeight:"normal"}},styles:{root:{fontFamily:"body",fontWeight:"body",lineHeight:"body"}}},d=function(e){var t=e.children;return o.a.createElement(l.a,{theme:u},t)},m=a(6),s=a(3),p=function(){return o.a.createElement(s.d,{px:2,color:"background",bg:"primary",alignItems:"center"},o.a.createElement(s.e,{width:[1,.75],mx:"auto",p:2,fontWeight:"bold"},"Awetosis Topics Builder"))},h=a(10),b=a(22);!function(e){e.MILLISECONDS="MILLISECONDS",e.SECONDS="SECONDS",e.MINUTES="MINUTES",e.HOURS="HOURS"}(n||(n={}));var f=function(e){return 0===e.length?e:"".concat(e.substring(0,1).toUpperCase()).concat(e.substring(1).toLowerCase())},g=function(e){var t,a=e.setTopics,i=Object(b.a)(),c=i.handleSubmit,l=i.register,u=Object(r.useState)(1),d=Object(m.a)(u,2),p=d[0],g=d[1],y=c((function(e){for(var t=[],n=1;n<=p;n+=1)t.push({text:e["topic-".concat(n,"-text")],amount:e["topic-".concat(n,"-amount")],unit:e["topic-".concat(n,"-unit")]});a(t)})),E=Object(r.useCallback)((function(){g((function(e){return e+1}))}),[]);return o.a.createElement(s.a,{as:"form",onSubmit:y,px:2},(t=p,Array.from({length:t},(function(e,t){return t+1}))).map((function(e){var t="topic-".concat(e),a="".concat(t,"-text"),r="".concat(t,"-amount"),i="".concat(t,"-unit");return o.a.createElement(s.c,{key:t,my:2,bg:"white"},o.a.createElement(s.d,{flexWrap:"wrap",px:2,py:2},o.a.createElement(s.a,{width:[1,.5],pr:[0,2]},o.a.createElement(h.b,{htmlFor:a},"Name"),o.a.createElement(h.a,{id:a,name:a,placeholder:"Topic Text Goes Here","data-idx":e,type:"text",ref:l})),o.a.createElement(s.a,{width:[1,.25],px:[0,2],py:[2,0]},o.a.createElement(h.b,{htmlFor:r},"Amount"),o.a.createElement(h.a,{id:r,name:r,defaultValue:"0",type:"number","data-idx":e,ref:l})),o.a.createElement(s.a,{width:[1,.25],px:[0,2],py:[2,0]},o.a.createElement(h.b,{htmlFor:i},"Unit"),o.a.createElement(h.c,{id:i,name:i,defaultValue:f(n.MINUTES),"data-idx":e,ref:l},Object.keys(n).map((function(e){return o.a.createElement("option",{key:e.toLowerCase()},f(e))}))))))})),o.a.createElement(s.d,{flexWrap:"wrap",py:2},o.a.createElement(s.e,{pb:2,width:1},"Leave the name field blank to have the builder ignore a topic."),o.a.createElement(s.a,{width:[1,"auto"]},o.a.createElement(s.b,{onClick:E,type:"button",width:[1,"auto"]},"Add Topic")),o.a.createElement(s.a,{pl:[0,2],py:[2,0],width:[1,"auto"]},o.a.createElement(s.b,{onClick:y,width:[1,"auto"]},"Submit"))))},y=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2)[1],a=Object(r.useCallback)((function(e){t(e.map((function(e){return{text:e.text,amount:Number(e.amount),unit:e.unit}})).filter((function(e){return e.text&&e.amount})))}),[]);return o.a.createElement(s.a,null,o.a.createElement(p,null),o.a.createElement(s.a,{width:[1,.75],mx:"auto"},o.a.createElement(g,{setTopics:a})))},E=function(){return o.a.createElement(d,null,o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3de340a9.chunk.js.map