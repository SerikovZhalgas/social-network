"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[773],{9773:function(e,t,r){r.r(t),r.d(t,{default:function(){return se}});var s=r(5671),o=r(3144),n=r(136),i=r(5716),a=r(2791),l=r(7503),c="MyPosts_postsBlock__l6-8N",u="MyPosts_posts__Qgrk3",d="MyPosts_addPost__9Ve4Q",f="Post_posts__8Gd5n",h="Post_img__O-H5G",p="Post_post__KzV3Z",m="Post_likes__moalk",v=r(184),x=function(e){return(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("img",{src:e.photo,alt:"avatar",className:h}),e.message]}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("span",{children:"\u2764 "}),e.likesCount]})]})},_=r(6139),j=r(704),P=r(5298),b=r(6854),g=(0,P.D)(100),y=a.memo((function(e){var t=e.profilePage.posts,r=e.profilePage.profile,s=t.map((function(e,t){return(0,v.jsx)(x,{message:e.message,likesCount:e.likesCount,photo:null===r||void 0===r?void 0:r.photos.large},t)}));return(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("h3",{children:"My posts"}),(0,v.jsx)("div",{children:(0,v.jsx)(k,{onSubmit:function(t){e.addMyPost(t.newPostText)}})}),(0,v.jsx)("div",{className:u,children:s})]})})),k=(0,j.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,v.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,v.jsx)("div",{children:(0,v.jsx)(_.Z,{component:b.gx,name:"newPostText",validate:[P.C,g],placeholder:"Post message"})}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{className:d,children:"Add post"})})]})})),N=r(364),S=(0,N.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addMyPost:function(t){e((0,l.Wl)(t))}}}))(y),Z=r(885),I="ProfileInfo_descriptionBlockRead__y9VbD",C="ProfileInfo_descriptionBlockEdit__vZTMv",F="ProfileInfo_descriptionBlock__ApKsI",A="ProfileInfo_photoBlock__7GN2k",M="ProfileInfo_uploadPhoto__KWMuS",B="ProfileInfo_mainPhoto__NkNex",w="ProfileInfo_contact__ObFof",D="ProfileInfo_preloader__iQ6E0",U="ProfileInfo_disable__OFgSQ",O="ProfileInfo_profileDataBlock__pmRhf",E="ProfileInfo_fullNameBlock__Pahnk",G="ProfileInfo_editButton__t7HaE",T=r(6159),J=r(7516),Q="ProfileDataForm_profileDataFormBlock__K77ql",V="ProfileDataForm_contact__ZAPMa",q="ProfileDataForm_formSummaryError__ZhSpF",z="ProfileDataForm_saveButtonBlock__Iobpe",K="ProfileDataForm_saveButton__gbAPC",R=(0,j.Z)({form:"edit-profile"})((function(e){var t=e.handleSubmit,r=e.profile,s=e.error;return(0,v.jsxs)("form",{onSubmit:t,className:Q,children:[s&&(0,v.jsx)("div",{className:q,children:s}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Full name:"})," ",(0,b.Gr)("Full name","fullName",[],b.II)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking for a job:"}),(0,b.Gr)("","lookingForAJob",[],b.II,{type:"checkbox"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills:"})," ",(0,b.Gr)("My professional skills","lookingForAJobDescription",[],b.gx)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"About me:"})," ",(0,b.Gr)("About me","aboutMe",[],b.gx)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Contacts:"})," ",Object.keys(r.contacts).map((function(e,t){return(0,v.jsxs)("div",{className:V,children:[(0,v.jsxs)("b",{children:[e,": "]})," ",(0,b.Gr)(e,"contacts."+e,[],b.II)]},t)}))]}),(0,v.jsx)("div",{className:z,children:(0,v.jsx)("button",{className:K,children:(0,v.jsx)("b",{children:"Save"})})})]})})),H=function(e){var t=(0,a.useState)(!1),r=(0,Z.Z)(t,2),s=r[0],o=r[1],n=(0,a.useState)(e.status),i=(0,Z.Z)(n,2),l=i[0],c=i[1];(0,a.useEffect)((function(){c(e.status)}),[e.status]);return(0,v.jsx)("div",{children:s?(0,v.jsx)("div",{children:(0,v.jsx)("input",{autoFocus:!0,value:l,onBlur:function(){o(!s),e.updateUserStatus(l)},onChange:function(e){c(e.currentTarget.value)}})}):(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Status: "}),(0,v.jsx)("span",{onDoubleClick:function(){o(!s)},children:e.status})]})})},L=function(e){var t=e.isOwner,r=e.profile,s=e.status,o=e.updateUserStatus,n=e.savePhoto,i=e.saveProfile,l=(0,a.useState)(!1),c=(0,Z.Z)(l,2),u=c[0],d=c[1],f=(0,a.useRef)(null);if(!r)return(0,v.jsx)("div",{className:D,children:(0,v.jsx)(T.p,{})});return(0,v.jsx)("div",{className:"".concat(!r&&U," ").concat(u?C:I),children:u?(0,v.jsx)(R,{initialValues:r,profile:r,onSubmit:function(e){i(e).then((function(){d(!u)}))}}):(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)(W,{profile:r,isOwner:t,goToEditMode:function(){return d(!u)}}),(0,v.jsxs)("div",{className:A,children:[(0,v.jsx)("img",{src:r.photos.large||J,alt:"ava",className:B}),t&&(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){var e;f&&(null===(e=f.current)||void 0===e||e.click())},className:M,children:"upload file"}),(0,v.jsx)("input",{style:{display:"none"},ref:f,type:"file",onChange:function(e){var t;null!==(t=e.target.files)&&void 0!==t&&t.length&&n(e.target.files[0])}})]}),(0,v.jsx)(H,{status:s,updateUserStatus:o})]})]})})},W=function(e){var t=e.profile,r=e.isOwner,s=e.goToEditMode;return(0,v.jsxs)("div",{className:O,children:[(0,v.jsxs)("div",{className:E,children:[(0,v.jsx)("b",{children:t.fullName}),r&&(0,v.jsx)("button",{onClick:s,className:G,children:(0,v.jsx)("b",{children:"Edit"})})]}),(0,v.jsx)("div",{children:t.aboutMe}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills"}),": ",t.lookingForAJobDescription]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(e,r){return t.contacts[e]&&(0,v.jsx)($,{contactTitle:e,contactValue:t.contacts[e]},r)}))]})]})},$=function(e){var t=e.contactTitle,r=e.contactValue;return(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("b",{children:t}),": ",r]})},X="Profile_profileBlock__CANGv",Y=function(e){return(0,v.jsxs)("div",{className:X,children:[(0,v.jsx)(L,{isOwner:e.isOwner,status:e.status,profile:e.profile,updateUserStatus:e.updateUserStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),(0,v.jsx)(S,{})]})},ee=r(9271),te=r(7781),re=function(e){(0,n.Z)(r,e);var t=(0,i.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)("div",{children:(0,v.jsx)(Y,{isOwner:!this.props.match.params.userId,status:this.props.status,profile:this.props.profile,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),r}(a.Component),se=(0,te.qC)((0,N.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:l.et,getUserStatus:l.Tq,updateUserStatus:l.OL,savePhoto:l.Ju,saveProfile:l.Ii}),ee.EN)(re)},6854:function(e,t,r){r.d(t,{gx:function(){return f},II:function(){return h},Gr:function(){return p}});var s=r(1413),o=r(5987),n=(r(2791),r(9058)),i=r(6139),a=r(184),l=["touched","error"],c=["input","meta","child"],u=["input","meta","child"],d=function(e){e.input;var t=e.meta,r=t.touched,s=t.error,i=((0,o.Z)(t,l),e.children),c=r&&s;return(0,a.jsxs)("div",{className:n.Z.formControl+" "+(c?n.Z.error:""),children:[(0,a.jsx)("div",{children:i}),c&&(0,a.jsx)("span",{children:s})]})},f=function(e){var t=e.input,r=(e.meta,e.child,(0,o.Z)(e,c));return(0,a.jsx)(d,(0,s.Z)((0,s.Z)({},e),{},{children:(0,a.jsx)("textarea",(0,s.Z)((0,s.Z)({},t),r))}))},h=function(e){var t=e.input,r=(e.meta,e.child,(0,o.Z)(e,u));return(0,a.jsx)(d,(0,s.Z)((0,s.Z)({},e),{},{children:(0,a.jsx)("input",(0,s.Z)((0,s.Z)({className:n.Z.inputStyle},t),r))}))},p=function(e,t,r,o){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,a.jsxs)("div",{className:n.Z.fieldStyle,children:[(0,a.jsx)(i.Z,(0,s.Z)({placeholder:e,name:t,validate:r,component:o},l)),c]})}},5298:function(e,t,r){r.d(t,{C:function(){return s},D:function(){return o}});var s=function(e){if(!e)return"Field is required"},o=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},9058:function(e,t){t.Z={formControl:"FormControls_formControl__A6Htx",error:"FormControls_error__ilB5R",formSummaryError:"FormControls_formSummaryError__BPQTm",inputStyle:"FormControls_inputStyle__xO+zB",fieldStyle:"FormControls_fieldStyle__uqjQG"}},7516:function(e,t,r){e.exports=r.p+"static/media/anonymous-user-flat-icon-vector-18958259.0cacfde43ad9f20a156f.png"},885:function(e,t,r){r.d(t,{Z:function(){return o}});var s=r(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var s,o,n=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return n}}(e,t)||(0,s.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=773.80cb33d8.chunk.js.map