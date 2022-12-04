/*! For license information please see 708.3ddd31e1.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[708],{3708:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return J}});var t=r(5671),o=r(3144),i=r(136),u=r(5716),s=r(2791),a=r(364),l=r(1315),c=r(5987),f=r(4942),p=r(885),g="Paginator_paginator__welsm",h="Paginator_pageNumber__LlPaJ",d="Paginator_selectedPage__NGsYE",v="Paginator_disable__2u9pQ",y=r(1694),m=r.n(y),P=r(184),w=function(n){for(var e=n.isFetching,r=n.totalItemsCount,t=n.pageSize,o=n.currentPage,i=n.onPageChanged,u=n.portionSize,a=void 0===u?10:u,l=Math.ceil(r/t),c=[],y=1;y<=l;y++)c.push(y);var w=Math.ceil(l/a),j=(0,s.useState)(1),x=(0,p.Z)(j,2),b=x[0],C=x[1],S=(b-1)*a+1,_=b*a;return(0,P.jsxs)("div",{className:"".concat(g," ").concat(e&&v),children:[b>1&&(0,P.jsx)("button",{onClick:function(){C(b-1)},children:"PREV"}),c.filter((function(n){return n>=S&&n<=_})).map((function(n,e){return(0,P.jsx)("span",{className:m()((0,f.Z)({},d,o===n),h),onClick:function(){i(n)},children:n},e)})),w>b&&(0,P.jsx)("button",{onClick:function(){C(b+1)},children:"NEXT"})]})},j="Users_userPhoto__dkIRG",x="Users_disable__283HL",b=r(7516),C=r(1523),S=function(n){var e=n.user,r=n.followingInProgress,t=n.unFollow,o=n.follow,i=n.isFetching;return(0,P.jsxs)("div",{className:"".concat(i&&x),children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:(0,P.jsx)(C.OL,{to:"/profile/"+e.id,children:(0,P.jsx)("img",{src:null!==e.photos.small?e.photos.small:b,className:j,alt:""})})}),(0,P.jsx)("div",{children:e.followed?(0,P.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){t(e.id)},children:"Unfollow"}):(0,P.jsx)("button",{disabled:r.some((function(n){return n===e.id})),onClick:function(){o(e.id)},children:"Follow"})})]}),(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:e.name}),(0,P.jsx)("div",{children:e.status})]}),(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:"user.location.country"}),(0,P.jsx)("div",{children:"user.location.city"})]})]})},_=["totalUsersCount","pageSize","currentPage","onPageChanged","users"],F=function(n){var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,i=n.users,u=(0,c.Z)(n,_);return(0,P.jsxs)("div",{children:[(0,P.jsx)(w,{currentPage:t,onPageChanged:o,pageSize:r,totalItemsCount:e,portionSize:10,isFetching:u.isFetching}),i.map((function(n){return(0,P.jsx)(S,{user:n,followingInProgress:u.followingInProgress,follow:u.follow,unFollow:u.unFollow,isFetching:u.isFetching})}))]})},k=r(6159),z=r(7781),I="NOT_FOUND";var O=function(n,e){return n===e};function U(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?O:t,i=r.maxSize,u=void 0===i?1:i,s=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),l=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:I},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return I}return{get:t,put:function(e,o){t(e)===I&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,a);function c(){var e=l.get(arguments);if(e===I){if(e=n.apply(null,arguments),s){var r=l.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return c.clearCache=function(){return l.clear()},c}function A(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function Z(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(s=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var l=s,c=l.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=A(t),h=n.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),d};return o}var E=Z(U),N=E((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),q=function(n){return n.usersPage.pageSize},R=function(n){return n.usersPage.totalUsersCount},D=function(n){return n.usersPage.currentPage},L=function(n){return n.usersPage.isFetching},M=function(n){return n.usersPage.followingInProgress},T="UsersContainer_preloader__4be6K",G=function(n){(0,i.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){var r=n.props,t=r.setCurrentPage,o=r.pageSize;(0,r.requestUsers)(e,o),t(e)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;(0,n.requestUsers)(e,r)}},{key:"render",value:function(){return(0,P.jsxs)(P.Fragment,{children:[this.props.isFetching?(0,P.jsx)("div",{className:T,children:(0,P.jsx)(k.p,{})}):null,(0,P.jsx)(F,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress,onPageChanged:this.onPageChanged,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching})]})}}]),r}(s.Component),J=(0,z.qC)((0,a.$j)((function(n){return{users:N(n),pageSize:q(n),totalUsersCount:R(n),currentPage:D(n),isFetching:L(n),followingInProgress:M(n)}}),{setCurrentPage:l.D4,toggleIsFollowingProgress:l.Ar,requestUsers:l.D7,follow:l.ZN,unFollow:l.IJ}))(G)},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&n.push(u)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&n.push(s);else n.push(r.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},7516:function(n,e,r){"use strict";n.exports=r.p+"static/media/anonymous-user-flat-icon-vector-18958259.0cacfde43ad9f20a156f.png"},5987:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(3366);function o(n,e){if(null==n)return{};var r,o,i=(0,t.Z)(n,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(o=0;o<u.length;o++)r=u[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}},885:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],u=!0,s=!1;try{for(r=r.call(n);!(u=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);u=!0);}catch(a){s=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return i}}(n,e)||(0,t.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=708.3ddd31e1.chunk.js.map