(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[12],{141:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return d}));var r=a(32),s=a.n(r),n=a(42),o=a(43),c=a(6),i=a(12),u=function(e){return function(){var t=Object(n.a)(s.a.mark((function t(a,r){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/auth/signup",e);case 3:i.a.push("/login"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:c.USER_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,a){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(n.a)(s.a.mark((function t(a,r){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:c.AUTH_LOADING}),t.prev=1,t.next=4,o.a.post("/auth/login",e);case 4:n=t.sent,localStorage.setItem("accessToken",n.data.accessToken),localStorage.setItem("email",n.data.userDetails.email),localStorage.setItem("userName",n.data.userDetails.username),localStorage.setItem("firstName",n.data.userDetails.firstName),localStorage.setItem("lastName",n.data.userDetails.lastName),localStorage.setItem("profilePic",n.data.userDetails.profilePic),i.a.push("/"),a({type:c.LOGIN,token:n.data.accessToken,userDetails:n.data.userDetails}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),a({type:c.USER_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(n.a)(s.a.mark((function t(a,r){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.put("/user/pinPost",{postId:e},{headers:{Authorization:"Bearer "+(r().user.token||localStorage.getItem("accessToken"))}});case 3:n=t.sent,console.log(n.data),a({type:c.PIN_POST,pinnedPost:n.data.pinnedPost,pintype:n.data.type}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:c.USER_ERROR,errorMessage:t.t0.response&&t.t0.response.data&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}()},d=function(e,t,a,r){return function(){var i=Object(n.a)(s.a.mark((function n(i,u){var l;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,i({type:c.USERS_LOADING}),s.next=4,o.a.get("/user/search?currentPage=".concat(e,"&pageSize=").concat(t,"&search=").concat(a,"&filterUsernames=").concat(r),{headers:{Authorization:"Bearer "+(u().user.token||localStorage.getItem("accessToken"))}});case 4:l=s.sent,console.log("SEARCH USERS RESULT",l.data),i({type:c.FETCH_USERS,userDetails:l.data.userDetails,currentPageUser:l.data.currentPage,pageSizeUser:l.data.pageSize,pagesUser:l.data.pages,totalItemsCountUser:l.data.totalItemsCount}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(0),i({type:c.USER_ERROR,errorMessage:s.t0.response&&s.t0.response.data&&s.t0.response.data.message?s.t0.response.data.message:s.t0.message});case 12:case"end":return s.stop()}}),n,null,[[0,9]])})));return function(e,t){return i.apply(this,arguments)}}()}},149:function(e,t,a){},150:function(e,t,a){},154:function(e,t,a){"use strict";var r=a(2),s=a(1),n=(a(0),a(149),a(148)),o=(a(150),function(e){var t=e.type,a=e.name,s=e.placeholder,n=e.validationRules,o=e.register,c=e.errors;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:t,name:a,placeholder:s,ref:o(n)}),c&&c[a]&&Object(r.jsx)("p",{className:"error",children:c[a].message})]})}),c=a(44);t.a=function(e){var t=e.submitForm,a=e.defaultValues,i=e.inputs,u=e.errorMessage,l=e.submitBtnText,p=e.authLoading,d=Object(n.a)({defaultValues:a}),m=d.handleSubmit,f=d.register,g=d.errors,h=d.watch,R=i.map((function(e){return Object(r.jsx)("div",{className:"inputParent",children:Object(r.jsx)(o,{type:e.type,placeholder:e.placeholder,name:e.name,validationRules:"confirmPassword"===e.name?Object(s.a)(Object(s.a)({},e.validationRules),{},{validate:function(e){return e===h("password")||"Passwords don't match."}}):e.validationRules,register:f,errors:g})},e.name)}));return Object(r.jsxs)("form",{className:"authForm",onSubmit:m(t),children:[R,u&&Object(r.jsx)("p",{className:"err",children:u}),p?Object(r.jsx)(c.a,{width:"40px"}):Object(r.jsx)("button",{type:"submit",children:l})]})}},158:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(0),n=a(21),o=a(13),c=a(6),i=a(141),u=a(154);a(158);t.default=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.user})).errorMessage;Object(s.useEffect)((function(){e({type:c.CLEAR_USER_ERROR})}),[e]);return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("h2",{children:"Register"}),Object(r.jsx)(u.a,{submitForm:function(t){e(Object(i.d)(t))},errorMessage:t,defaultValues:{firstName:"",lastName:"",userName:"",email:"",password:"",confirmPassword:""},inputs:[{name:"firstName",placeholder:"First Name",type:"text",validationRules:{required:"First Name Is Required",pattern:/^[A-Za-z]+$/i}},{name:"lastName",placeholder:"Last Name",type:"text",validationRules:{required:"Last Name Is Required",pattern:/^[A-Za-z]+$/i}},{name:"userName",placeholder:"User Name",type:"text",validationRules:{required:"User Name Is Required"}},{name:"email",placeholder:"Email",type:"email",validationRules:{required:"Email Is Required",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Entered value does not match email format"}}},{name:"password",placeholder:"Password",type:"password",validationRules:{required:"Password Is Required"}},{name:"confirmPassword",placeholder:"Confirm Password",type:"password",validationRules:{required:"Confirm Password Is Required"}}],submitBtnText:"Register"}),Object(r.jsx)(o.a,{to:"/login",children:"Already Have Account? Please Login"})]})}}}]);
//# sourceMappingURL=12.99d2a7f6.chunk.js.map