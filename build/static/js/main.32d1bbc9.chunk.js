(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[4],{11:function(e,t,a){"use strict";a.r(t),a.d(t,"USER_ERROR",(function(){return r})),a.d(t,"CLEAR_USER_ERROR",(function(){return s})),a.d(t,"AUTH_LOADING",(function(){return n})),a.d(t,"SIGNUP",(function(){return c})),a.d(t,"LOGIN",(function(){return o})),a.d(t,"LOGOUT",(function(){return i})),a.d(t,"CREATE_POST",(function(){return l})),a.d(t,"DELETE_POST",(function(){return u})),a.d(t,"POST_ERROR",(function(){return O})),a.d(t,"FETCH_POSTS",(function(){return j})),a.d(t,"POST_LOADING",(function(){return d})),a.d(t,"LIKE_POST",(function(){return b})),a.d(t,"RETWEET_POST",(function(){return p})),a.d(t,"UNRETWEET_POST",(function(){return f})),a.d(t,"RETWEET_LOADING",(function(){return g})),a.d(t,"REPLY_TO_POST",(function(){return m})),a.d(t,"VIEW_SINGLE_POST",(function(){return I})),a.d(t,"FOLLOW_USER",(function(){return E})),a.d(t,"CHANGE_PROFILE_PIC",(function(){return P})),a.d(t,"CHANGE_COVER_PHOTO",(function(){return _})),a.d(t,"PIN_POST",(function(){return S})),a.d(t,"FETCH_USERS",(function(){return T})),a.d(t,"USERS_LOADING",(function(){return h}));var r="USER_ERROR",s="CLEAR_USER_ERROR",n="AUTH_LOADING",c="SIGNUP",o="LOGIN",i="LOGOUT",l="CREATE_POST",u="DELETE_POST",O="POST_ERROR",j="FETCH_POSTS",d="POST_LOADING",b="LIKE_POST",p="RETWEET_POST",f="UNRETWEET_POST",g="RETWEET_LOADING",m="REPLY_TO_POST",I="VIEW_SINGLE_POST",E="FOLLOW_USER",P="CHANGE_PROFILE_PIC",_="CHANGE_COVER_PHOTO",S="PIN_POST",T="FETCH_USERS",h="USERS_LOADING"},12:function(e,t,a){"use strict";var r=a(7);t.a=Object(r.a)()},28:function(e,t,a){"use strict";var r=a(2);a(0),a(81);t.a=function(e){var t=e.width;return Object(r.jsx)("div",{className:"loader",style:{width:t,height:t},children:"Loading..."})}},29:function(e,t,a){"use strict";var r=a(44),s=a.n(r),n=a(12),c=s.a.create({baseURL:"/"});!function(e){var t=e.interceptors.response.use((function(e){return e}),(function(a){return a.response&&403===a.response.status&&(n.a.push("/login"),localStorage.removeItem("accessToken"),localStorage.removeItem("email"),localStorage.removeItem("userName"),localStorage.removeItem("firstName"),localStorage.removeItem("lastName"),localStorage.removeItem("profilePic")),e.interceptors.response.eject(t),Promise.reject(a)}))}(c),t.a=c},52:function(e,t,a){},53:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(0),n=a(18),c=a.n(n),o=a(21),i=a.n(o),l=a(27),u=a(5),O=(a(52),a(13)),j=(a(53),a(12)),d=a(16),b=a(11),p=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.user})).userDetails;return Object(r.jsxs)("header",{className:"col-md-1",children:[Object(r.jsx)("div",{className:"navItem",children:Object(r.jsx)(O.a,{to:"/",children:Object(r.jsx)("i",{className:"fab fa-twitter"})})}),Object(r.jsx)("div",{className:"navItem",children:Object(r.jsx)(O.a,{to:"/",children:Object(r.jsx)("i",{className:"fa fa-home"})})}),Object(r.jsx)("div",{className:"navItem",children:Object(r.jsx)(O.a,{to:"/search",children:Object(r.jsx)("i",{className:"fa fa-search"})})}),Object(r.jsxs)("div",{className:"navItem",children:[Object(r.jsx)(O.a,{to:"/",children:Object(r.jsx)("i",{className:"fa fa-bell"})}),Object(r.jsx)("span",{className:"no",children:"0"})]}),Object(r.jsx)("div",{className:"navItem",onClick:function(){j.a.push("/profile/".concat(t.username||localStorage.getItem("userName")))},children:Object(r.jsx)(O.a,{to:"/",children:Object(r.jsx)("i",{className:"fa fa-user"})})}),Object(r.jsx)("div",{className:"navItem",children:Object(r.jsx)("button",{onClick:function(){localStorage.removeItem("accessToken"),localStorage.removeItem("email"),localStorage.removeItem("userName"),localStorage.removeItem("firstName"),localStorage.removeItem("lastName"),localStorage.removeItem("profilePic"),j.a.push("/login"),e({type:b.LOGOUT})},children:Object(r.jsx)("i",{className:"fa fa-sign-out-alt"})})})]})},f=a(29),g=a(30),m=a(28),I=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,122))})),E=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,123))})),P=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(1),a.e(8)]).then(a.bind(null,125))})),_=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,124))})),S=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(13),a.e(1),a.e(12)]).then(a.bind(null,126))})),T=Object(s.lazy)((function(){return Promise.all([a.e(2),a.e(9)]).then(a.bind(null,127))})),h=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(1),a.e(7)]).then(a.bind(null,128))})),L=function(e){var t=Object(u.f)(),a=Object(d.b)(),n=t.pathname;return Object(s.useEffect)((function(){localStorage.getItem("accessToken")&&localStorage.getItem("email")&&function(){var e=Object(l.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/user/getUserByToken",{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}});case 3:t=e.sent,r=t.data,localStorage.setItem("email",r.email),localStorage.setItem("userName",r.username),localStorage.setItem("firstName",r.firstName),localStorage.setItem("lastName",r.lastName),localStorage.setItem("profilePic",r.profilePic),a({type:b.LOGIN,token:localStorage.getItem("accessToken"),userDetails:r}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),j.a.push("/login");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(r.jsxs)("div",{className:"container-fluid",style:{backgroundColor:"/login"===n||"/signup"===n?"#0099ff":"white"},children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"allParent row",style:{justifyContent:"/login"===n||"/signup"===n?"center":null},children:["/login"!==n&&"/signup"!==n?Object(r.jsx)(p,{}):null,Object(r.jsx)(s.Suspense,{fallback:Object(r.jsx)(m.a,{}),children:Object(r.jsx)("main",{className:"col-md-9",style:{display:"/login"===n||"/signup"===n?"flex":"block",flexDirection:"/login"===n||"/signup"===n?"column":null,justifyContent:"/login"===n||"/signup"===n?"center":null},children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/signup",component:E}),Object(r.jsx)(u.a,{path:"/login",component:I}),Object(r.jsx)(u.a,{path:"/post/:postId",component:_}),Object(r.jsx)(u.a,{path:"/profile/:username/follow",exact:!0,component:T}),Object(r.jsx)(u.a,{path:"/profile/:username",exact:!0,component:S}),Object(r.jsx)(u.a,{path:"/search",exact:!0,component:h}),Object(r.jsx)(u.a,{path:"/",exact:!0,component:P})]})})}),"/login"!==n&&"/signup"!==n&&Object(r.jsx)("div",{className:"empty col-md-2"})]})}),Object(r.jsx)(g.a,{autoClose:4e3})]})},N=a(15),v=a(4),D=a(1),R=a(11),w=R.CREATE_POST,U=R.FETCH_POSTS,x=R.POST_ERROR,A=R.LIKE_POST,C=R.DELETE_POST,k=R.RETWEET_POST,y=R.UNRETWEET_POST,G=R.RETWEET_LOADING,H=R.REPLY_TO_POST,W=R.POST_LOADING,z={posts:[],currentPage:1,pageSize:30,pages:1,totalItemsCount:10,errorMessage:null,postActionLoading:{postId:null,postLoading:!1},retweetActionLoading:{postId:null,postLoading:!1},postLoading:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(D.a)(Object(D.a)({},e),{},{posts:[t.post].concat(Object(v.a)(e.posts)),errorMessage:null});case W:return Object(D.a)(Object(D.a)({},e),{},{postLoading:!0});case U:return Object(D.a)(Object(D.a)({},e),{},{posts:Object(v.a)(t.posts),errorMessage:null,postLoading:!1,currentPage:t.currentPage,pageSize:t.pageSize,pages:t.pages,totalItemsCount:t.totalItemsCount});case A:var a=Object(v.a)(e.posts);if(a.length>0){var r=a.findIndex((function(e){return e._id===t.postId}));if(r>-1){var s=a[r].likes.findIndex((function(e){return e.username===t.like.username}));s>-1?a[r].likes.splice(s,1):a[r].likes.push(t.like);var n=a.find((function(e){return e._id===t.originalPostId}));if(n&&n.replies&&n.replies.length>0){var c=n.replies.find((function(e){return e._id===t.postId})),o=c.likes.findIndex((function(e){return e.username===t.like.username}));o>-1?c.likes.splice(o,1):c.likes.push(t.like)}}}return Object(D.a)(Object(D.a)({},e),{},{posts:a,postActionLoading:{postId:null,postLoading:!1}});case x:return Object(D.a)(Object(D.a)({},e),{},{errorMessage:t.errorMessage,postLoading:!1});case G:return Object(D.a)(Object(D.a)({},e),{},{retweetActionLoading:{postId:t.postId,postLoading:!0}});case k:var i=Object(v.a)(e.posts);if(i.length>0){var l=i.map((function(e){return e.retweetData?e.retweetData._id===t.postId||e._id===t.postId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:[t.postedBy].concat(Object(v.a)(e.retweetUsers))}):Object(D.a)({},e):e._id===t.postId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:[t.postedBy].concat(Object(v.a)(e.retweetUsers))}):Object(D.a)({},e)}));return Object(D.a)(Object(D.a)({},e),{},{posts:[t.newlyAddedPost].concat(Object(v.a)(l)),errorMessage:null,retweetActionLoading:{postId:null,postLoading:!1}})}return Object(D.a)(Object(D.a)({},e),{},{posts:Object(v.a)(e.posts),errorMessage:null,retweetActionLoading:{postId:null,postLoading:!1}});case y:var u=Object(v.a)(e.posts),O=u.filter((function(e){return e._id!==t.deletedPostId})),j=O.map((function(e){return e.retweetData?e.retweetData._id===t.originalPostId||e._id===t.originalPostId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:e.retweetUsers.filter((function(e){return e.username!==localStorage.getItem("userName")}))}):Object(D.a)({},e):e._id===t.originalPostId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:e.retweetUsers.filter((function(e){return e.username!==localStorage.getItem("userName")}))}):Object(D.a)({},e)}));return Object(D.a)(Object(D.a)({},e),{},{posts:j,retweetActionLoading:{postId:null,postLoading:!1}});case H:var d=Object(v.a)(e.posts),b=t.post.replyTo?t.post.replyTo.originalPost._id:t.originalPostId,p=d.findIndex((function(e){return e._id===b}));return p>-1&&d[p].replies.push(t.post),Object(D.a)(Object(D.a)({},e),{},{posts:e.posts.length>0?[t.post].concat(Object(v.a)(d)):Object(v.a)(e.posts)});case C:var f=Object(v.a)(e.posts);if(t.originalPostId){var g=f.findIndex((function(e){return e._id===t.originalPostId}));g>-1&&(f[g].replies=f[g].replies.filter((function(e){return e._id!==t.postId})))}var m=f.filter((function(e){return e._id!==t.postId}));return Object(D.a)(Object(D.a)({},e),{},{posts:m});default:return e}},F=a(11),B=F.LOGIN,V=F.USER_ERROR,K=F.CLEAR_USER_ERROR,Y=F.RETWEET_POST,J=F.UNRETWEET_POST,X=F.LOGOUT,q=F.FOLLOW_USER,Q=F.AUTH_LOADING,Z=F.CHANGE_PROFILE_PIC,$=F.CHANGE_COVER_PHOTO,ee=F.PIN_POST,te=F.LIKE_POST,ae={isAuthenticated:!1,errorMessage:null,token:null,userDetails:null,authLoading:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(D.a)(Object(D.a)({},e),{},{token:t.token,isAuthenticated:!0,errorMessage:null,userDetails:t.userDetails,authLoading:!1});case Q:return Object(D.a)(Object(D.a)({},e),{},{authLoading:!0});case V:return Object(D.a)(Object(D.a)({},e),{},{errorMessage:t.errorMessage,authLoading:!1});case K:return Object(D.a)(Object(D.a)({},e),{},{errorMessage:null});case Y:if(e.userDetails&&e.userDetails.pinnedPost&&e.userDetails.pinnedPost._id===t.postId){var a=[Object(D.a)({},e.userDetails.pinnedPost)].map((function(e){return e.retweetData?e.retweetData._id===t.postId||e._id===t.postId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:[t.postedBy].concat(Object(v.a)(e.retweetUsers))}):Object(D.a)({},e):e._id===t.postId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:[t.postedBy].concat(Object(v.a)(e.retweetUsers))}):Object(D.a)({},e)}));return Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{retweets:[t.retweet].concat(Object(v.a)(e.userDetails.retweets)),pinnedPost:a[0]})})}return Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{retweets:[t.retweet].concat(Object(v.a)(e.userDetails.retweets))})});case J:if(e.userDetails&&e.userDetails.pinnedPost&&e.userDetails.pinnedPost._id===t.originalPostId){var r=[Object(D.a)({},e.userDetails.pinnedPost)].map((function(e){return e.retweetData?e.retweetData._id===t.originalPostId||e._id===t.originalPostId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:e.retweetUsers.filter((function(e){return e.username!==localStorage.getItem("userName")}))}):Object(D.a)({},e):e._id===t.originalPostId?Object(D.a)(Object(D.a)({},e),{},{retweetUsers:e.retweetUsers.filter((function(e){return e.username!==localStorage.getItem("userName")}))}):Object(D.a)({},e)}));return Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{retweets:Object(v.a)(e.userDetails.retweets.filter((function(e){return e!==t.deletedPostId}))),pinnedPost:r[0]})})}return Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{retweets:Object(v.a)(e.userDetails.retweets.filter((function(e){return e!==t.deletedPostId})))})});case X:return Object(D.a)(Object(D.a)({},e),{},{isAuthenticated:!1,errorMessage:null,token:null,userDetails:null,authLoading:!1});case q:var s=t.newfollowingUser,n=Object(v.a)(e.userDetails.following),c=n.findIndex((function(e){return e.username===s.username}));return console.log(c),c>-1?n.splice(c,1):n.push(t.newfollowingUser),Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{following:n})});case Z:return Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{profilePic:t.profilePic})});case te:if(!e.userDetails||!e.userDetails.pinnedPost||e.userDetails.pinnedPost._id!==t.postId)return Object(D.a)({},e);var o=Object(D.a)({},e.userDetails.pinnedPost),i=o.likes.findIndex((function(e){return e.username===t.like.username}));return i>-1?o.likes.splice(i,1):o.likes.push(t.like),Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{pinnedPost:o})});case $:return Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{coverPhoto:t.coverPhoto})});case ee:return"add"===t.pintype?Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{pinnedPost:t.pinnedPost})}):Object(D.a)(Object(D.a)({},e),{},{userDetails:Object(D.a)(Object(D.a)({},e.userDetails),{},{pinnedPost:null})});default:return e}},se={users:[],currentPageUser:1,pageSizeUser:30,pagesUser:1,totalItemsCountUser:10,userLoading:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.USERS_LOADING:return Object(D.a)(Object(D.a)({},e),{},{userLoading:!0});case b.FETCH_USERS:return Object(D.a)(Object(D.a)({},e),{},{users:Object(v.a)(t.userDetails),userLoading:!1,currentPageUser:t.currentPageUser,pageSizeUser:t.pageSizeUser,pagesUser:t.pagesUser,totalItemsCountUser:t.totalItemsCountUser});default:return e}},ce=Object(N.c)({user:re,post:M,userSearch:ne}),oe=a(45),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d,le=Object(N.e)(ce,ie(Object(N.a)(oe.a))),ue=Object(r.jsx)(d.a,{store:le,children:Object(r.jsx)(u.b,{history:j.a,children:Object(r.jsx)(L,{})})});c.a.render(ue,document.getElementById("root"))}},[[82,5,6]]]);
//# sourceMappingURL=main.32d1bbc9.chunk.js.map