"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[187],{5187:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var a=r(3412),s=(r(2791),"Dialogs_dialogs__yaJjR"),i="Dialogs_dialogsItems__wYroA",t="Dialogs_dialog__5ldIV",o="Dialogs_active__oGqcY",c="Dialogs_messages__oiImn",u="Dialogs_messagesMe__j-wNh",l="Dialogs_messagesAnother__8wsZc",d="Dialogs_messagesAvatar__ximmo",m="Dialogs_friendImg__TEjiM",g=r(1523),h=r(184),f=function(e){var n="/dialogs/"+e.id;return(0,h.jsxs)("div",{className:t+" "+o,children:[(0,h.jsx)("img",{className:m,src:e.avatar,alt:"avatar"}),(0,h.jsx)(g.OL,{to:n,children:e.name})]})},v=function(e){var n=e.myMessage?(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("span",{children:e.message}),(0,h.jsx)("img",{className:d,src:e.avatar,alt:"MyAvatar"})]}):(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{className:d,src:e.avatar,alt:"AnotherAvatar"}),(0,h.jsx)("span",{children:e.message})]});return(0,h.jsx)("div",{className:c,children:n})},x=r(6139),_=r(704),j=r(6854),Z=r(5298),p=(0,Z.D)(50),y=(0,_.Z)({form:"dialogAddMessageForm"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(x.Z,{component:j.gx,name:"newMessageBody",placeholder:"Enter your message",validate:[Z.C,p]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Send"})})]})})),D=function(e){var n=e.messagePage,r=n.dialogsData.map((function(e){return(0,h.jsx)(f,{id:e.id,name:e.name,avatar:e.avatar})})),a=n.messageData.map((function(e){return(0,h.jsx)(v,{id:e.id,message:e.message,myMessage:e.myMessage,avatar:e.avatar})}));return(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("div",{className:i,children:r}),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("div",{children:a}),(0,h.jsx)(y,{onSubmit:function(n){e.sendMessage(n.newMessageBody)}})]})]})},A=r(364),M=r(7781),N=r(1413),C=r(5987),w=r(9271),b=["isAuth"],I=function(e){return{isAuth:e.auth.isAuth}};var S=(0,M.qC)((0,A.$j)((function(e){return{messagePage:e.messagePage}}),(function(e){return{sendMessage:function(n){e((0,a.X)(n))}}})),(function(e){return(0,A.$j)(I)((function(n){var r=n.isAuth,a=(0,C.Z)(n,b);return r?(0,h.jsx)(e,(0,N.Z)({},a)):(0,h.jsx)(w.l_,{to:"login"})}))}))(D)},6854:function(e,n,r){r.d(n,{gx:function(){return m},II:function(){return g},Gr:function(){return h}});var a=r(1413),s=r(5987),i=(r(2791),r(9058)),t=r(6139),o=r(184),c=["touched","error"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var n=e.meta,r=n.touched,a=n.error,t=((0,s.Z)(n,c),e.children),u=r&&a;return(0,o.jsxs)("div",{className:i.Z.formControl+" "+(u?i.Z.error:""),children:[(0,o.jsx)("div",{children:t}),u&&(0,o.jsx)("span",{children:a})]})},m=function(e){var n=e.input,r=(e.meta,e.child,(0,s.Z)(e,u));return(0,o.jsx)(d,(0,a.Z)((0,a.Z)({},e),{},{children:(0,o.jsx)("textarea",(0,a.Z)((0,a.Z)({},n),r))}))},g=function(e){var n=e.input,r=(e.meta,e.child,(0,s.Z)(e,l));return(0,o.jsx)(d,(0,a.Z)((0,a.Z)({},e),{},{children:(0,o.jsx)("input",(0,a.Z)((0,a.Z)({},n),r))}))},h=function(e,n,r,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,o.jsxs)("div",{children:[(0,o.jsx)(t.Z,(0,a.Z)({placeholder:e,name:n,validate:r,component:g},i)),c]})}},5298:function(e,n,r){r.d(n,{C:function(){return a},D:function(){return s}});var a=function(e){if(!e)return"Field is required"},s=function(e){return function(n){if(n.length>e)return"Max length is ".concat(e," symbols")}}},9058:function(e,n){n.Z={formControl:"FormControls_formControl__A6Htx",error:"FormControls_error__ilB5R",formSummaryError:"FormControls_formSummaryError__BPQTm"}}}]);
//# sourceMappingURL=187.19f6cee4.chunk.js.map