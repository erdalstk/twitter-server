(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[1],{141:function(e,t,s){"use strict";s.d(t,"d",(function(){return l})),s.d(t,"a",(function(){return d})),s.d(t,"b",(function(){return p})),s.d(t,"c",(function(){return u}));var a=s(32),n=s.n(a),r=s(42),o=s(43),c=s(6),i=s(12),l=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(s,a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/auth/signup",e);case 3:i.a.push("/login"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),s({type:c.USER_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,s){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(s,a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:c.AUTH_LOADING}),t.prev=1,t.next=4,o.a.post("/auth/login",e);case 4:r=t.sent,localStorage.setItem("accessToken",r.data.accessToken),localStorage.setItem("email",r.data.userDetails.email),localStorage.setItem("userName",r.data.userDetails.username),localStorage.setItem("firstName",r.data.userDetails.firstName),localStorage.setItem("lastName",r.data.userDetails.lastName),localStorage.setItem("profilePic",r.data.userDetails.profilePic),i.a.push("/"),s({type:c.LOGIN,token:r.data.accessToken,userDetails:r.data.userDetails}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),s({type:c.USER_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,s){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(s,a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.put("/user/pinPost",{postId:e},{headers:{Authorization:"Bearer "+(a().user.token||localStorage.getItem("accessToken"))}});case 3:r=t.sent,console.log(r.data),s({type:c.PIN_POST,pinnedPost:r.data.pinnedPost,pintype:r.data.type}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),s({type:c.USER_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,s){return t.apply(this,arguments)}}()},u=function(e,t,s,a){return function(){var i=Object(r.a)(n.a.mark((function r(i,l){var d;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i({type:c.USERS_LOADING}),n.next=4,o.a.get("/user/search?currentPage=".concat(e,"&pageSize=").concat(t,"&search=").concat(s,"&filterUsernames=").concat(a),{headers:{Authorization:"Bearer "+(l().user.token||localStorage.getItem("accessToken"))}});case 4:d=n.sent,console.log("SEARCH USERS RESULT",d.data),i({type:c.FETCH_USERS,userDetails:d.data.userDetails,currentPageUser:d.data.currentPage,pageSizeUser:d.data.pageSize,pagesUser:d.data.pages,totalItemsCountUser:d.data.totalItemsCount}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),i({type:c.USER_ERROR,errorMessage:n.t0.response&&n.t0.response.data&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 12:case"end":return n.stop()}}),r,null,[[0,9]])})));return function(e,t){return i.apply(this,arguments)}}()}},142:function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"c",(function(){return d})),s.d(t,"d",(function(){return p})),s.d(t,"f",(function(){return u})),s.d(t,"e",(function(){return m})),s.d(t,"b",(function(){return f}));var a=s(32),n=s.n(a),r=s(42),o=s(45),c=s(43),i=s(6),l=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(s,a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.post("/post/create",e,{headers:{Authorization:"Bearer "+a().user.token||!1}});case 3:r=t.sent,s({type:i.CREATE_POST,post:r.data.post}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s({type:i.POST_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,s){return t.apply(this,arguments)}}()},d=function(e,t,s){return function(){var a=Object(r.a)(n.a.mark((function a(r,o){var l;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:i.POST_LOADING}),a.next=4,c.a.get("/post?currentPage=".concat(e,"&pageSize=").concat(t,"&search=").concat(s),{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}});case 4:l=a.sent,console.log(l.data),r({type:i.FETCH_POSTS,posts:l.data.postData,currentPage:l.data.currentPage,pageSize:l.data.pageSize,pages:l.data.pages,totalItemsCount:l.data.totalItemsCount}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),r({type:i.POST_ERROR,errorMessage:a.t0.response&&a.t0.response.data&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e,t){return a.apply(this,arguments)}}()},p=function(e,t){return function(){var s=Object(r.a)(n.a.mark((function s(a,r){return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a({type:i.LIKE_POST,postId:e,originalPostId:t,like:{firstName:r().user.userDetails.firstName,lastName:r().user.userDetails.lastName,username:localStorage.getItem("userName"),profilePic:r().user.userDetails.profilePic}}),s.next=4,c.a.put("/post/like/".concat(e),{},{headers:{Authorization:"Bearer "+r().user.token}});case 4:s.next=10;break;case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0),a({type:i.POST_ERROR,errorMessage:s.t0.response&&s.t0.response.data&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 10:case"end":return s.stop()}}),s,null,[[0,6]])})));return function(e,t){return s.apply(this,arguments)}}()},u=function(e,t){return function(){var s=Object(r.a)(n.a.mark((function s(a,r){var o,l;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=r().user.token,s.prev=1,a({type:i.RETWEET_LOADING,postId:e}),s.next=5,c.a.put("/post/retweet?postId=".concat(e,"&originalPostId=").concat(t),{},{headers:{Authorization:"Bearer "+o}});case 5:l=s.sent,console.log(l.data),"success"===l.data.message&&"add"===l.data.type?a({type:i.RETWEET_POST,newlyAddedPost:l.data.newlyAddedPost,retweet:l.data.newlyAddedPost._id,postId:l.data.originalPostId,postedBy:l.data.newlyAddedPost.postedBy}):"success"===l.data.message&&"delete"===l.data.type&&a({type:i.UNRETWEET_POST,deletedPostId:l.data.deletedPostId,originalPostId:l.data.originalPostId,username:r().user.userDetails.username}),s.next=14;break;case 10:s.prev=10,s.t0=s.catch(1),console.log(s.t0),a({type:i.POST_ERROR,errorMessage:s.t0.response&&s.t0.response.data&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 14:case"end":return s.stop()}}),s,null,[[1,10]])})));return function(e,t){return s.apply(this,arguments)}}()},m=function(e,t){return function(){var s=Object(r.a)(n.a.mark((function s(a,r){var l,d;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c.a.post("/post/reply",{replyText:e,postId:t},{headers:{Authorization:"Bearer "+r().user.token}});case 3:return l=s.sent,s.next=6,a({type:i.REPLY_TO_POST,post:l.data,originalPostId:t});case 6:return d=s.sent,s.abrupt("return",d);case 10:s.prev=10,s.t0=s.catch(0),console.log(s.t0),a({type:i.POST_ERROR,errorMessage:s.t0.response&&s.t0.response.data&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message}),o.b.error(s.t0.response&&s.t0.response.data&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message);case 15:case"end":return s.stop()}}),s,null,[[0,10]])})));return function(e,t){return s.apply(this,arguments)}}()},f=function(e,t){return function(){var s=Object(r.a)(n.a.mark((function s(a,r){var o;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a({type:i.DELETE_POST,postId:e,originalPostId:t}),s.next=3,c.a.delete("/post/".concat(e),{headers:{Authorization:"Bearer "+r().user.token}});case 3:if("success"!==s.sent.data.message){s.next=11;break}return s.next=7,c.a.get("/post",{headers:{Authorization:"Bearer "+localStorage.getItem("accessToken")}});case 7:o=s.sent,console.log(o.data),a({type:i.POST_LOADING}),a({type:i.FETCH_POSTS,posts:o.data.postData});case 11:case"end":return s.stop()}}),s)})));return function(e,t){return s.apply(this,arguments)}}()}},149:function(e,t,s){"use strict";var a=s(2),n=s(140),r=s(1),o=s(150),c=(s(162),function(e){var t=e.profilePic,s=e.content,n=e.firstName,r=e.lastName,c=e.username,i=e.createdAt,l=e.closeModel,d=e.retweetedFirstName,p=e.retweetedLastName,u=e.postId,m=e.submitReplyReq,f=Object(o.a)(),j=f.register,g=f.handleSubmit,b=f.errors;return Object(a.jsx)("div",{className:"backdrop",children:Object(a.jsxs)("div",{className:"replyModal",children:[Object(a.jsxs)("div",{className:"titleP",children:[Object(a.jsx)("h2",{children:"Reply"}),Object(a.jsx)("i",{className:"fa fa-times",onClick:l})]}),Object(a.jsxs)("div",{className:"row postDetails",children:[d?Object(a.jsxs)("span",{className:"reposted",children:["Retweeted By ",d," ",p]}):null,Object(a.jsx)("div",{className:"profPic col-md-2",children:Object(a.jsx)("img",{src:t,alt:"gdfgfdg"})}),Object(a.jsxs)("div",{className:"postDetails col-md-10",children:[Object(a.jsxs)("div",{className:"namesdate",children:[Object(a.jsxs)("span",{className:"firstLastName",children:[n," ",r]}),Object(a.jsxs)("span",{className:"username",children:["@",c]}),Object(a.jsx)("p",{className:"date",children:i}),Object(a.jsxs)("div",{className:"pinnedClose",children:[Object(a.jsx)("i",{className:"fa fa-thumbtack"}),Object(a.jsx)("i",{className:"fa fa-times"})]})]}),Object(a.jsx)("p",{className:"postContent",children:s})]})]}),Object(a.jsxs)("div",{className:"postflex",children:[Object(a.jsx)("div",{className:"profilePic",children:Object(a.jsx)("img",{src:localStorage.getItem("profilePic"),alt:"profile pic"})}),Object(a.jsx)("form",{children:Object(a.jsx)("textarea",{name:"reply",placeholder:"Type Your Reply",ref:j({required:!0})})})]}),Object(a.jsxs)("div",{className:"btnActions",children:[Object(a.jsx)("button",{onClick:g((function(e){m(e,u),l()})),disabled:!!b.reply,className:"btn btn-primary",children:"Reply"}),Object(a.jsx)("button",{onClick:l,className:"btn btn-danger",children:"Cancel"})]})]})})}),i=(s(163),s(164),function(e){var t=e.closeDeleteModel,s=e.deletePost,n=e.modalType,r=e.pinPostReq;return Object(a.jsx)("div",{className:"backdrop",children:Object(a.jsxs)("div",{className:"deleteModal",children:[Object(a.jsxs)("div",{className:"titleP",children:[Object(a.jsx)("h2",{children:"delete"===n?"Delete The Post?":"Pin this post On Your Profile?"}),Object(a.jsx)("i",{className:"fa fa-times",onClick:t})]}),Object(a.jsx)("div",{className:"makesureDelete",children:Object(a.jsx)("p",{children:"delete"===n?"You won't be able to undo this.":"This post will appear on the top of your profile. You can only pin one post"})}),Object(a.jsxs)("div",{className:"btnActions",children:[Object(a.jsx)("button",{onClick:"delete"===n?s:r,className:"btn btn-primary",children:"delete"===n?"Delete":"Pin"}),Object(a.jsx)("button",{onClick:t,className:"btn btn-danger",children:"Cancel"})]})]})})});t.a=function(e){var t=e.postId,s=e.firstName,o=e.lastName,l=e.username,d=e.profilePic,p=e.content,u=e.createdAt,m=e.likePostReq,f=e.likes,j=e.postActionLoading,g=e.loggedInUsername,b=e.retweetReq,h=e.retweetActionLoading,O=e.retweetUsers,x=e.retweetData,y=e.submitReplyReq,N=e.viewSinglePostReq,P=e.type,v=(e.replyPostTypeReplyToUsername,e.disableBorderBottom),k=e.postIdHasGreenBackground,R=e.deletePost,S=e.replyTo,I=e.goToProfile,T=e.disableReply,w=e.pinPost,E=e.pinnedPost,B=e.pinnedPostId,C=Object(r.useState)(!1),D=Object(n.a)(C,2),A=D[0],_=D[1],L=Object(r.useState)({open:!1,type:"delete"}),U=Object(n.a)(L,2),z=U[0],M=U[1],q=function(e,t){e.stopPropagation(),M({open:!0,type:t})},G=function(){M({open:!1,type:"delete"})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"postParent",onClick:N,style:{borderBottom:v?"none":"1px solid #dddada",backgroundColor:k&&k===t?"rgba(1, 152, 117, .17)":"white"},children:[p?null:Object(a.jsxs)("span",{className:"reposted",children:["Retweeted By ",s," ",o]}),E&&Object(a.jsxs)("div",{className:"pinned",children:[Object(a.jsx)("i",{className:"fa fa-thumbtack"}),Object(a.jsx)("span",{children:"Pinned Post"})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"profPic col-md-2",children:Object(a.jsx)("img",{src:p?d:x.postedBy.profilePic,alt:p?s:x.postedBy.profilePic})}),Object(a.jsxs)("div",{className:"postDetails col-md-10",children:[Object(a.jsxs)("div",{className:"namesdate",children:[Object(a.jsxs)("span",{className:"firstLastName",onClick:function(e){e.stopPropagation(),I(p?l:x.postedBy.username)},children:[p?s:x.postedBy.firstName," ",p?o:x.postedBy.lastName]}),Object(a.jsxs)("span",{className:"username",children:["@",p?l:x.postedBy.username]}),Object(a.jsx)("p",{className:"date",children:u}),Object(a.jsxs)("div",{className:"pinnedClose",children:[Object(a.jsx)("i",{style:{color:B&&B===t?"red":"grey"},onClick:function(e){return q(e,"pin")},className:"fa fa-thumbtack"}),Object(a.jsx)("i",{onClick:function(e){return q(e,"delete")},style:{display:l!==g||E?"none":"inline"},className:"fa fa-times"})]})]}),S&&S.originalPost&&Object(a.jsxs)("p",{className:"replyTo",children:["Replying To"," ",Object(a.jsxs)("span",{onClick:function(e){e.stopPropagation(),I(S.originalPost.postedBy.username)},children:["@",S.originalPost.postedBy.username]})]}),Object(a.jsx)("p",{className:"postContent",children:p||x.content}),Object(a.jsxs)("div",{className:"commentslikes",children:[Object(a.jsx)("button",{className:"comment",type:"button",onClick:function(e){e.stopPropagation(),_(!0)},style:{display:T?"none":"flex"},children:Object(a.jsx)("i",{className:"fa fa-comment"})}),Object(a.jsxs)("button",{className:"comment",disabled:h.postLoading||!x&&l===localStorage.getItem("userName")||x&&x.postedBy.username===localStorage.getItem("userName"),style:{color:O.findIndex((function(e){return e.username===(g||localStorage.getItem("userName"))}))>-1?"green":"black",display:S&&S.originalPost||"replyPost"===P?"none":"flex"},onClick:function(e){b(t,x?x._id:null),e.stopPropagation()},children:[Object(a.jsx)("i",{className:"fa fa-retweet"}),Object(a.jsx)("span",{className:"number",children:O.length})]}),Object(a.jsxs)("button",{className:"comment",disabled:j.postLoading&&j.postId===t,onClick:function(e){e.stopPropagation(),m(t,S?S.originalPost._id:null)},style:{color:f.findIndex((function(e){return e.username===(g||localStorage.getItem("userName"))}))>-1?"red":"black"},children:[Object(a.jsx)("i",{className:"far fa-heart"}),Object(a.jsx)("span",{className:"number",children:f.length})]})]})]})]})]}),A&&Object(a.jsx)(c,{profilePic:p?d:x.postedBy.profilePic,content:p||x.content,firstName:p?s:x.postedBy.firstName,lastName:p?o:x.postedBy.lastName,username:p?l:x.postedBy.username,retweetedFirstName:!p&&s,retweetedLastName:!p&&o,createdAt:u,closeModel:function(){_(!1)},postId:t,submitReplyReq:y}),z.open&&Object(a.jsx)(i,{deletePost:function(){R(t,S?S.originalPost.postedBy.username:null),G()},modalType:z.type,pinPostReq:function(){w(t),G()},closeDeleteModel:G})]})}},162:function(e,t,s){},163:function(e,t,s){},164:function(e,t,s){}}]);
//# sourceMappingURL=1.d1b9efef.chunk.js.map