(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[12],{111:function(e,t,r){},112:function(e,t,r){},114:function(e,t,r){},126:function(e,t,r){"use strict";r.r(t);var a=r(2),o=r(21),n=r.n(o),s=r(27),i=r(83),c=r(4),l=r(1),u=r(0),p=(r(111),r(29)),d=r(28),f=(r(112),r(95)),g=(r(113),r(87)),m=function(e,t){var r=6e4,a=36e5,o=864e5,n=2592e6,s=31536e6,i=e-t;return i<r?i/1e3<30?"Just Now":Math.round(i/1e3)+" seconds ago":i<a?Math.round(i/r)+" minutes ago":i<o?Math.round(i/a)+" hours ago":i<n?Math.round(i/o)+" days ago":i<s?Math.round(i/n)+" months ago":Math.round(i/s)+" years ago"},b=function(e){var t=e.posts,r=e.deletePostReqGoHome,o=e.retweetReq,n=e.viewSinglePostReq,s=e.likePostReq,i=e.postActionLoading,c=e.retweetActionLoading,l=e.selectTabIndex,u=e.goToProfile,p=e.submitReplyReq,d=e.disableReply,b=e.pinPost,j=e.pinnedPostId,h=t.map((function(e){return Object(a.jsx)(g.a,{postId:e._id,firstName:e.postedBy.firstName,lastName:e.postedBy.lastName,username:e.postedBy.username,content:e.content,createdAt:m(new Date,new Date(e.content?e.createdAt:e.retweetData.createdAt)),profilePic:e.postedBy.profilePic,likePostReq:s,likes:e.likes,postActionLoading:i,loggedInUsername:localStorage.getItem("userName"),retweetReq:o,retweetActionLoading:c,retweetUsers:e.retweetUsers,retweetData:e.retweetData,combineretweetsAndPosts:!0,replyTo:e.replyTo||null,replyToUsername:e.replyTo&&e.replyTo.originalPost?e.replyTo.originalPost.postedBy.username:null,replyPostTypeReplyToUsername:e.postedBy.username,viewSinglePostReq:function(){return n(e._id,e.replyTo?e.replyTo.originalPost._id:null)},deletePost:r,goToProfile:u,disableReply:d,pinPost:function(){return b(e._id)},pinnedPostId:j,submitReplyReq:p},e._id)}));return Object(a.jsxs)(f.d,{onSelect:l,children:[Object(a.jsxs)(f.b,{children:[Object(a.jsx)(f.a,{children:"Posts"}),Object(a.jsx)(f.a,{children:"Replies"})]}),Object(a.jsx)(f.c,{children:h}),Object(a.jsx)(f.c,{children:h})]})},j=r(16),h=r(12),O=r(85),w=r(11),P=(r(114),r(115)),x=r.n(P),y=(r(116),function(e){var t,r,o=e.closeUploadModal,n=e.uploadProfilePic,s=e.photoType,c=Object(u.useState)(),l=Object(i.a)(c,2),p=l[0],d=l[1],f=Object(u.useRef)(null),g=Object(u.useRef)(null),m=Object(u.useState)({unit:"%",width:30,aspect:"profilePic"===s?1:16/9}),b=Object(i.a)(m,2),j=b[0],h=b[1],O=Object(u.useState)(null),w=Object(i.a)(O,2),P=w[0],y=w[1],v=Object(u.useCallback)((function(e){f.current=e}),[]);return Object(u.useEffect)((function(){if(P&&g.current&&f.current){var e=f.current,t=g.current,r=P,a=e.naturalWidth/e.width,o=e.naturalHeight/e.height,n=t.getContext("2d"),s=window.devicePixelRatio;t.width=r.width*s,t.height=r.height*s,n.setTransform(s,0,0,s,0,0),n.imageSmoothingQuality="high",n.drawImage(e,r.x*a,r.y*o,r.width*a,r.height*o,0,0,r.width,r.height)}}),[P]),Object(a.jsx)("div",{className:"backdrop",children:Object(a.jsxs)("div",{className:"replyModal",children:[Object(a.jsxs)("div",{className:"titleP",children:[Object(a.jsxs)("h2",{children:["Upload A new ","profilePic"===s?"Profile Picture":"Cover Photo"]}),Object(a.jsx)("i",{className:"fa fa-times",onClick:o})]}),Object(a.jsxs)("div",{className:"fileInput",children:[Object(a.jsx)("input",{type:"file",name:"image",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return d(t.result)})),t.readAsDataURL(e.target.files[0])}}}),Object(a.jsx)("canvas",{ref:g,style:{width:Math.round(null!==(t=null===P||void 0===P?void 0:P.width)&&void 0!==t?t:0),height:Math.round(null!==(r=null===P||void 0===P?void 0:P.height)&&void 0!==r?r:0)}}),Object(a.jsx)(x.a,{src:p,onImageLoaded:v,crop:j,onChange:function(e){return h(e)},onComplete:function(e){return y(e)}})]}),Object(a.jsxs)("div",{className:"btnActions",children:[Object(a.jsx)("button",{className:"btn btn-primary upload",disabled:!j||!g.current,onClick:function(){n(g.current.toDataURL(),s),o()},children:"Upload"}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:o,children:"Cancel"})]})]})})}),v=r(121),N=r(84),R=r(30),I={userLoading:!1,profile:null,error:null,combinedPostsAndRetweets:[],followLoading:!1,imageUploadProgressRunning:!1,imageUploadProgress:0},k=function(e,t){switch(t.type){case"user_loading":return Object(l.a)(Object(l.a)({},e),{},{userLoading:!0,error:null});case"fetch_user":return Object(l.a)(Object(l.a)({},e),{},{userLoading:!1,profile:t.profile,combinedPostsAndRetweets:[].concat(Object(c.a)(t.profile.posts),Object(c.a)(t.profile.retweets)),followLoading:!1});case"user_error":return Object(l.a)(Object(l.a)({},e),{},{error:t.error,userLoading:!1,followLoading:!1});case"retweet":var r=Object(c.a)(e.combinedPostsAndRetweets),a=r.findIndex((function(e){return e._id===t.postId})),o=Object(c.a)(r[a].retweetUsers);return o.findIndex((function(e){return e.username===localStorage.getItem("userName")}))>-1?o=o.filter((function(e){return e.username!==localStorage.getItem("userName")})):o.unshift({firstName:localStorage.getItem("firstName"),lastName:localStorage.getItem("lastName"),username:localStorage.getItem("userName"),profilePic:localStorage.getItem("profilePic")}),r[a].retweetUsers=o,Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{combinedPostsAndRetweets:r})});case"like_post":var n=Object(c.a)(e.combinedPostsAndRetweets);1===t.tabIndex&&(n=Object(c.a)(e.profile.replies));var s=n.findIndex((function(e){return e._id===t.postId})),i=Object(c.a)(n[s].likes),u=i.findIndex((function(e){return e.username===localStorage.getItem("userName")}));return u>-1?i.splice(u,1):i.push({firstName:localStorage.getItem("firstName"),lastName:localStorage.getItem("lastName"),username:localStorage.getItem("userName"),profilePic:localStorage.getItem("profilePic")}),n[s].likes=i,0===t.tabIndex?Object(l.a)(Object(l.a)({},e),{},{combinedPostsAndRetweets:n}):Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{replies:n})});case"delete_reply_post":var p=Object(c.a)(e.profile.replies),d=p.findIndex((function(e){return e._id===t.replyPostId}));return p.splice(d,1),Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{replies:Object(c.a)(p)})});case"follow_loading":return Object(l.a)(Object(l.a)({},e),{},{followLoading:!0});case"follow_user":return"Add"===t.resType?Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{followers:[].concat(Object(c.a)(e.profile.followers),[t.follower])}),followLoading:!1}):Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{followers:e.profile.followers.filter((function(e){return e.username!==t.follower.username}))}),followLoading:!1});case"image_upload":return Object(l.a)(Object(l.a)({},e),{},{imageUploadProgressRunning:!0,imageUploadProgress:t.progress});case"change_profile_pic":return Object(l.a)(Object(l.a)({},e),{},{imageUploadProgressRunning:!1,imageUploadProgress:0,profile:Object(l.a)(Object(l.a)({},e.profile),{},{profilePic:t.profilePic})});case"change_cover_photo":return Object(l.a)(Object(l.a)({},e),{},{imageUploadProgressRunning:!1,imageUploadProgress:0,profile:Object(l.a)(Object(l.a)({},e.profile),{},{coverPhoto:t.coverPhoto})});default:return e}};t.default=function(e){var t=Object(u.useReducer)(k,I),r=Object(i.a)(t,2),o=r[0],c=r[1],l=Object(u.useState)(0),f=Object(i.a)(l,2),g=f[0],m=f[1],P=Object(u.useState)(!1),x=Object(i.a)(P,2),S=x[0],_=x[1],U=Object(u.useState)({open:!1,type:"profilePic"}),A=Object(i.a)(U,2),T=A[0],C=A[1],L=Object(u.useRef)(),q=Object(u.useRef)(),E=Object(u.useRef)(),D=Object(j.b)(),B=Object(j.c)((function(e){return e.post})),F=B.postActionLoading,M=B.retweetActionLoading,H=Object(j.c)((function(e){return e.user})),z=H.token,G=H.userDetails,Y=function(e,t){D(Object(O.d)(e,t)),c({type:"like_post",postId:e,tabIndex:g})},W=function(e,t){E.current=R.b.warning("Submitting Your retweet..."),D(Object(O.f)(e,t)).then((function(){R.b.dismiss(E.current),R.b.success("Retweet Success")})),c({type:"retweet",postId:e})},J=function(e,t){c({type:"delete_reply_post",replyPostId:e}),D(Object(O.b)(e,t))},Q=function(e,t){h.a.push("/post/".concat(t||e),{postId:t||e,backgroundGreenPostId:e})},V=function(e){h.a.push("/profile/".concat(e))},K=function(e){m(e)},X=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.current=R.b.warning("Submitting Your Reply..."),e.next=3,D(Object(O.e)(t.reply,r));case 3:a=e.sent,R.b.dismiss(q.current),R.b.success("Reply Post Success"),c({type:"add_reply",reply:a.post});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Z=function(e){h.a.push("/profile/".concat(o.profile.username,"/follow"),{tabIndex:e,username:o.profile.username,followers:o.profile.followers,following:o.profile.following,firstName:o.profile.firstName,lastName:o.profile.lastName})},$=function(e){L.current=R.b.warning("Pinning Post..."),D(Object(N.b)(e)).then((function(){R.b.dismiss(L.current),R.b.success("Pin Post Success")}))},ee=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"follow_loading"}),e.next=3,p.a.put("/user/follow/".concat(o.profile.username),{},{headers:{Authorization:"Bearer "+z||!1}});case 3:t=e.sent,D({type:w.FOLLOW_USER,newfollowingUser:t.data&&t.data.newfollowingUser?t.data.newfollowingUser:null}),c({type:"follow_user",follower:{firstName:G.firstName,lastName:G.lastName,email:G.email,profilePic:G.profilePic,username:G.username},resType:t.data.type}),R.b.success("Add"===t.data.type?"You are following ".concat(t.data.newfollowingUser.firstName," ").concat(t.data.newfollowingUser.lastName):"You unfollowed ".concat(t.data.newfollowingUser.firstName," ").concat(t.data.newfollowingUser.lastName)),"Add"===t.data.type?_(!0):_(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e){C({type:e,open:!0})};Object(u.useEffect)((function(){(function(){var t=Object(s.a)(n.a.mark((function t(){var r,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"user_loading"}),m(0),t.prev=2,t.next=5,p.a.get("/user/profile/".concat(e.match.params.username),{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}});case 5:r=t.sent,c({type:"fetch_user",profile:r.data,likes:r.data.likes,retweets:r.data.retweets}),console.log(r.data),a=r.data.followers.findIndex((function(e){return e.username===localStorage.getItem("userName")}))>-1,_(a),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0),c({type:"user_error",error:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(){return t.apply(this,arguments)}})()()}),[e.match.params.username]);var re=function(){var e=Object(s.a)(n.a.mark((function e(t,r,a){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return o=e.sent,e.next=5,o.arrayBuffer();case 5:return s=e.sent,e.abrupt("return",new File([s],r,{type:a}));case 7:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),ae=function(e){var t=e.loaded/e.total*100;c({type:"image_upload",progress:t})},oe=function(){var e=Object(s.a)(n.a.mark((function e(t,r){var a,o,s,i,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/getSignedUrl?photoType="+r,{headers:{Authorization:"Bearer "+(z||localStorage.getItem("accessToken"))}});case 2:return a=e.sent,o=a.data,s=o.url,i=o.imagePath,console.log(a.data),e.next=7,re(t,"".concat(G.username||localStorage.getItem("userName"),".png"),"image/png");case 7:return l=e.sent,e.prev=8,e.next=11,p.a.put(s,l,{headers:{"Content-Type":"image/png"},onUploadProgress:"profilePic"===r?ae:null});case 11:if("profilePic"!==r){e.next=18;break}return D({type:w.CHANGE_PROFILE_PIC,profilePic:i+"?"+(new Date).getTime()}),c({type:"change_profile_pic",profilePic:i+"?"+(new Date).getTime()}),e.next=16,p.a.put("/user/changeProfilePic",{imagePath:i},{headers:{Authorization:"Bearer "+(z||localStorage.getItem("accessToken"))}});case 16:e.next=22;break;case 18:return D({type:w.CHANGE_COVER_PHOTO,coverPhoto:i+"?"+(new Date).getTime()}),c({type:"change_cover_photo",coverPhoto:i+"?"+(new Date).getTime()}),e.next=22,p.a.put("/user/changeCoverPhoto",{imagePath:i},{headers:{Authorization:"Bearer "+(z||localStorage.getItem("accessToken"))}});case 22:R.b.success("Your photo has been changed"),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[8,25]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"profile",children:[!o.userLoading&&o.profile?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h2",{children:[o.profile.firstName," ",o.profile.lastName]}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"coverphoto",style:{backgroundColor:!o.profile.coverPhoto&&"#00ACEE"},children:[Object(a.jsx)("button",{className:"cameraCoverPhoto",onClick:function(){return te("coverPhoto")},style:{display:(o.profile.username!==localStorage.getItem("userName")||o.imageUploadProgressRunning)&&"none"},disabled:o.imageUploadProgressRunning,children:Object(a.jsx)("i",{className:"fas fa-camera"})}),o.profile.coverPhoto&&Object(a.jsx)("img",{src:o.profile.coverPhoto,alt:o.profile.username})]}),Object(a.jsxs)("div",{className:"profilePic",children:[Object(a.jsx)("img",{src:o.profile.profilePic,alt:o.profile.username,style:{WebkitFilter:o.imageUploadProgressRunning?"blur(3px)":"none",filter:o.imageUploadProgressRunning?"blur(3px)":"none",msFilter:o.imageUploadProgressRunning?"blur(3px)":"none"}}),Object(a.jsx)("button",{className:"camera",onClick:function(){return te("profilePic")},style:{display:(o.profile.username!==localStorage.getItem("userName")||o.imageUploadProgressRunning)&&"none"},disabled:o.imageUploadProgressRunning,children:Object(a.jsx)("i",{className:"fas fa-camera"})}),o.imageUploadProgressRunning&&Object(a.jsx)("div",{className:"progressCir",children:Object(a.jsx)(v.a,{percent:"70",strokeWidth:"4",strokeColor:"#00875D"})})]}),Object(a.jsxs)("div",{className:"emailfollowing",style:{display:o.profile.username===(G?G.username:localStorage.getItem("userName"))?"none":"flex"},children:[Object(a.jsx)("button",{className:"email",children:Object(a.jsx)("i",{className:"fa fa-envelope"})}),Object(a.jsx)("button",{className:"follow",onClick:ee,disabled:o.followLoading,style:{backgroundColor:S?"#00ACEE":"white",color:S?"white":"#00ACEE"},children:S?"Following":"Follow"})]}),Object(a.jsxs)("div",{className:"userdetails",style:{marginTop:o.profile.username===(G?G.username:localStorage.getItem("userName"))?"70px":"20px"},children:[Object(a.jsxs)("p",{className:"firstlastname",children:[o.profile.firstName," ",o.profile.lastName]}),Object(a.jsxs)("p",{className:"username",children:["@",o.profile.username]}),Object(a.jsxs)("div",{className:"followingfollowers",children:[Object(a.jsxs)("p",{onClick:function(){return Z(0)},children:[Object(a.jsx)("span",{children:o.profile.following.length})," Following"]}),Object(a.jsxs)("p",{onClick:function(){return Z(1)},children:[Object(a.jsx)("span",{children:o.profile.followers.length})," Followers"]})]})]}),Object(a.jsx)("div",{className:"tabs",children:Object(a.jsx)(b,{likePostReq:Y,viewSinglePostReq:Q,retweetReq:W,deletePostReqGoHome:J,postActionLoading:F,retweetActionLoading:M,posts:0===g?o.combinedPostsAndRetweets:o.profile.replies,selectTabIndex:K,goToProfile:V,disableReply:1===g,submitReplyReq:X,pinnedPostId:G&&G.pinnedPost?G.pinnedPost._id:null,pinPost:$})})]})]}):Object(a.jsx)(d.a,{width:"60"}),T.open&&Object(a.jsx)(y,{token:z,username:G.username||localStorage.getItem("userName"),closeUploadModal:function(){C({type:"profilePic",open:!1})},uploadProfilePic:oe,photoType:T.type})]})}}}]);
//# sourceMappingURL=12.41e47389.chunk.js.map