(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{35:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),r=n(20),a=n.n(r),i=n(26),o=n(3),l=n(10),u=n(6),j=(n(35),n(39)),d=n.n(j);var h=function(e){var t=e.isLoggedIn,n=e.setIsLoggedIn,c=e.clearToken,r=(e.postList,e.setPostList,e.searchTerm,e.setSearchTerm),a=e.isRecent,i=e.setIsRecent;return Object(s.jsxs)("nav",{className:"header",children:[Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{className:"header-logo",src:"https://i.imgur.com/vrQimP1.png",alt:"logo"})}),Object(s.jsxs)("div",{className:"header-search",children:[Object(s.jsxs)("label",{className:"header-checkbox",children:[Object(s.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),"Recent Posts Only"]}),Object(s.jsx)("input",{type:"text",className:"header_searchInput",onChange:function(e){return r(e.target.value)},placeholder:"filter posts"}),Object(s.jsx)(d.a,{className:"header-searchIcon"})]}),Object(s.jsx)("div",{className:"headerNav",children:t?Object(s.jsx)(l.b,{to:"/posts",className:"header-link",children:Object(s.jsx)("span",{onClick:function(){c(),n(!1)},className:"headerOpt-line2",children:"Logout"})}):Object(s.jsx)(l.b,{to:"/login",className:"header-link",children:Object(s.jsx)("span",{className:"headerOpt-line2",children:"SignIn/Sign Up"})})}),Object(s.jsxs)("div",{className:"headermessages",children:[Object(s.jsx)(l.b,{to:"/posts",className:"header-link",children:Object(s.jsx)("span",{children:" Posts"})}),t?Object(s.jsx)(l.b,{to:"/createNewPost",className:"header-link",children:Object(s.jsx)("span",{children:"Create New Post"})}):null]}),t?Object(s.jsxs)("div",{className:"header-messages",children:[Object(s.jsx)(l.b,{to:"/message",className:"header-link",children:Object(s.jsx)("span",{children:"Messages"})}),Object(s.jsx)(l.b,{to:"/myposts",className:"header-link",children:Object(s.jsx)("span",{children:"My Posts"})})]}):null]})},b=n(5),p=n.n(b),O=n(9),x="https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT",g=function(){if(localStorage.getItem("auth-token"))return localStorage.getItem("auth-token");localStorage.removeItem("auth-token")},f=function(){localStorage.removeItem("auth-token")},v=function(e){localStorage.setItem("auth-token",e)};function m(){var e={"Content-Type":"application/json"};return g()&&(e.Authorization="Bearer ".concat(g())),e}var k=function(){var e=Object(O.a)(p.a.mark((function e(t,n){var s,c,r,a,i,o,l=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=l.length>2&&void 0!==l[2]&&l[2],c="".concat(x,"/users")+(s?"/register":"/login"),e.next=4,fetch(c,{method:"POST",headers:m(),body:JSON.stringify({user:{username:t,password:n}})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,i=a.error,o=a.data,!i){e.next=12;break}throw Error(i.message);case 12:return o&&o.token&&v(o.token),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(p.a.mark((function e(t,n,s){var c,r,a,i,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:t,headers:m()},s&&(c.body=JSON.stringify(s)),e.next=4,fetch("".concat(x).concat(n),c);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,i=a.error,o=a.data,!i){e.next=12;break}throw Error(i.message);case 12:return o&&o.token&&v(o.token),e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t,n,s){return e.apply(this,arguments)}}();n(57);var S=function(e){var t=e.setIsLoggedIn,n=Object(u.f)(),r=Object(c.useState)(""),a=Object(o.a)(r,2),i=a[0],j=a[1],d=Object(c.useState)(""),h=Object(o.a)(d,2),b=h[0],x=h[1],g=Object(c.useState)(null),f=Object(o.a)(g,2),v=f[0],m=f[1];return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("div",{className:"logo-login",children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("img",{className:"header-logo",src:"https://i.imgur.com/vrQimP1.png",alt:"logo"})})}),Object(s.jsxs)("div",{className:"login-container",children:[Object(s.jsx)("h1",{children:"Sign In"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(s.jsx)("h5",{children:"Email"}),v?Object(s.jsx)("h5",{className:"error",children:v}):null,Object(s.jsx)("input",{type:"text",value:i,onChange:function(e){return j(e.target.value)},placeholder:"username"}),Object(s.jsx)("h5",{children:"Password"}),Object(s.jsx)("input",{type:"password",value:b,onChange:function(e){return x(e.target.value)},placeholder:"password"}),Object(s.jsx)("button",{className:"login-siginbutton",onClick:function(){var e=Object(O.a)(p.a.mark((function e(s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(i,b);case 3:e.sent,t(!0),n.push("/posts"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),children:"Sign In"}),Object(s.jsx)("h5",{children:"Have Account? Sign In!"})]}),Object(s.jsx)("button",{className:"login-createbutton",onClick:function(){var e=Object(O.a)(p.a.mark((function e(s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(i,b,!0);case 3:e.sent,t(!0),n.push("/posts"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),children:"Create your account"}),Object(s.jsx)("h5",{children:"Don't have account? Sign Up!"})]})]})},L=(n(58),n(80));n(38);var y=function(e){var t=e.addNewPost,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],i=r[1],l=Object(c.useState)(""),j=Object(o.a)(l,2),d=j[0],h=j[1],b=Object(c.useState)(""),x=Object(o.a)(b,2),g=x[0],f=x[1],v=Object(c.useState)(""),m=Object(o.a)(v,2),k=m[0],S=m[1],L=Object(c.useState)(!1),y=Object(o.a)(L,2),N=y[0],w=y[1],P=Object(u.f)(),C=Object(c.useState)(!1),T=Object(o.a)(C,2),D=T[0],R=T[1];return Object(s.jsx)("div",{className:"createNewMessage",children:Object(s.jsxs)("form",{onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(n){var s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(event.preventDefault(),R(!0),0!==d.length){e.next=5;break}return R(!0),e.abrupt("return");case 5:if(0!==a.length){e.next=8;break}return R(!0),e.abrupt("return");case 8:return s={post:{title:d,description:a,price:g,willDeliver:N,location:k}},e.prev=9,e.next=12,I("POST","/posts",s);case 12:c=e.sent,t(c.post),console.log(c),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.error(e.t0);case 20:i(""),f(""),h(""),w(""),S(""),P.push("/posts");case 26:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(s.jsx)("h3",{children:"Title:"}),Object(s.jsx)("input",{value:d,onChange:function(e){h(e.target.value)},type:"text"}),D&&0===d.length?Object(s.jsx)("h3",{style:{color:"red"},children:"You need a title"}):null,Object(s.jsx)("h3",{children:"Description:"}),Object(s.jsx)("textarea",{value:a,onChange:function(e){i(e.target.value)},type:"text"}),D&&0===a.length?Object(s.jsx)("h3",{style:{color:"red"},children:"You need a description"}):null,Object(s.jsx)("h3",{children:"Price"}),Object(s.jsx)("input",{value:g,onChange:function(e){f(e.target.value)},type:"text"}),Object(s.jsx)("h3",{children:"Location"}),Object(s.jsx)("input",{placeholder:"location, leave blank for [On Request]",value:k,onChange:function(e){S(e.target.value)},type:"text"}),Object(s.jsx)("h3",{children:"Will Deliver"}),Object(s.jsx)("input",{value:N,onChange:function(e){w(!N)},type:"checkbox"}),Object(s.jsx)("button",{children:"Post It"})]})})},N=(n(59),n(30)),w=n.n(N);var P=function(e){var t=e.postId,n=e.closeReply,r=Object(c.useState)(""),a=Object(o.a)(r,2),i=a[0],l=a[1];return Object(s.jsx)("div",{id:"message-form",className:"new-message",children:Object(s.jsxs)("form",{onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(s){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),c={message:{content:i}},e.next=4,I("POST","/posts/".concat(t,"/messages"),c);case 4:e.sent,l(""),n();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(s.jsx)(w.a,{onClick:function(){n()}}),Object(s.jsx)("textarea",{value:i,onChange:function(e){return l(e.target.value)}}),Object(s.jsx)("button",{children:"Send"})]})})};var C=function(e){var t=Object(c.useState)(e.description||""),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(e.title||""),l=Object(o.a)(i,2),j=l[0],d=l[1],h=Object(c.useState)(e.price||""),b=Object(o.a)(h,2),x=b[0],g=b[1],f=Object(c.useState)(e.location||""),v=Object(o.a)(f,2),m=v[0],k=v[1],S=Object(c.useState)(e.willDeliver||!1),L=Object(o.a)(S,2),y=L[0],N=L[1],P=Object(u.f)(),C=(e.setPostList,e.updatePost),T=e.postId,D=e.closeEdit;return Object(s.jsx)("div",{id:"form",className:"createNewMessage",children:Object(s.jsxs)("form",{onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(t){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return event.preventDefault(),n={post:{title:j,description:r,price:x,willDeliver:y,location:m}},e.prev=2,e.next=5,I("PATCH","/posts/".concat(T),n);case 5:s=e.sent,C(s.post),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:a(""),g(""),d(""),N(!1),k(""),D(),P.push("/posts");case 19:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(s.jsx)(w.a,{onClick:function(){D(),P.push("/posts")}}),Object(s.jsx)("h3",{children:"Title:"}),Object(s.jsx)("input",{value:j,onChange:function(e){d(e.target.value)},type:"text"}),Object(s.jsx)("h3",{children:"Description:"}),Object(s.jsx)("textarea",{value:r,onChange:function(e){a(e.target.value)},type:"text"}),Object(s.jsx)("h3",{children:"Price"}),Object(s.jsx)("input",{value:x,onChange:function(e){g(e.target.value)},type:"text"}),Object(s.jsx)("h3",{children:"Location"}),Object(s.jsx)("input",{value:m,onChange:function(e){k(e.target.value)},type:"text"}),Object(s.jsx)("h3",{children:"Will Deliver"}),Object(s.jsx)("input",{value:y,onChange:function(e){N(!y)},type:"checkbox"}),Object(s.jsx)("button",{children:"Update"})]})})};var T=function(e){var t=e.postList,n=e.setPostList,r=e.isLoggedIn,a=e.updatePost,l=(e.addNewPost,Object(c.useState)(null)),u=Object(o.a)(l,2),j=u[0],d=u[1],h=Object(c.useState)(null),b=Object(o.a)(h,2),x=b[0],g=b[1];return Object(s.jsx)("div",{id:"posts",children:t.map((function(e,o){return Object(s.jsxs)("div",{id:"post-card",style:{border:e.isAuthor&&r?"5px solid gold":"2px solid rgb(156, 221, 156"},children:[Object(s.jsxs)("div",{className:"card-title",children:[Object(s.jsxs)("h3",{children:[e.title," (",e.location,") [",e.createdAt,"]"]}),Object(s.jsxs)("h3",{children:["Posted Price: ",e.price]})]}),Object(s.jsxs)("div",{className:"descriptions",children:[Object(s.jsxs)("h5",{children:["Description: ",e.description]}),Object(s.jsxs)("h5",{children:["Delivery available: ",e.willDeliver?"YES":"NO"]}),Object(s.jsxs)("h5",{children:["Posted by: ",e.author.username]})]}),j===e._id?Object(s.jsx)(P,{postId:e._id,closeReply:function(){return d(null)}}):null,x===e._id?Object(s.jsx)(C,{title:e.title,description:e.description,price:e.price,location:e.location,willDeliver:e.willDeliver,postId:e._id,updatePost:a,closeEdit:function(){return g(null)}}):null,Object(s.jsx)("div",{className:"message",children:e.isAuthor?Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(L.a,{onClick:Object(O.a)(p.a.mark((function s(){return p.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,I("DELETE","/posts/".concat(e._id));case 3:s.sent,n(Object(i.a)(t)),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.error(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])}))),variant:"outlined",color:"secondary",fullWidth:!0,children:"Delete"}),Object(s.jsx)(L.a,{onClick:function(){g(e._id)},variant:"outlined",color:"secondary",fullWidth:!0,children:"Edit"})]}):r?Object(s.jsx)(L.a,{onClick:function(){return d(e._id)},variant:"outlined",color:"primary",fullWidth:!0,children:"Message Seller"}):null})]},o)}))})};n(60);var D=function(e){var t=e.postList;function n(){return n=t.filter((function(e){return e.isAuthor}))}return n().map((function(e,t){return e.messages.length>0?Object(s.jsxs)("div",{id:"message-close",className:"incoming-messages",children:[Object(s.jsxs)("h4",{className:"message-title",children:["Messages for Post: ",e.title]}),e.messages.map((function(e,t){return Object(s.jsxs)("p",{className:"message12",children:[Object(s.jsxs)("strong",{children:[t+1,". "]})," ",e.content," ",Object(s.jsx)("strong",{children:" From: "})," ",e.fromUser.username]},t)})),Object(s.jsx)("button",{onClick:function(){return document.getElementById("message-close").style.display="none"},children:"Cancel"})]},t):null}))};var R=function(e){var t=e.postList,n=e.setPostList,c=e.updatePost;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(T,{postList:t.filter((function(e){return e.isAuthor})),setPostList:n,updatePost:c})})};var E=function(){var e=Object(c.useState)(!!g()),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),j=Object(o.a)(a,2),d=j[0],b=j[1],p=Object(c.useState)(""),O=Object(o.a)(p,2),x=O[0],v=O[1],m=Object(c.useState)(!1),k=Object(o.a)(m,2),L=k[0],N=k[1];function w(){return d.filter((function(e){return e.title.toLowerCase().includes(x.toLowerCase())})).filter((function(e){if(!L)return!0;return Date.parse(e.createdAt)+108e5>=Date.now()})).reverse()}function C(e){var t=d.findIndex((function(t){return t._id===e._id}));if(t>-1){var n=Object(i.a)(d);n[t]=e,b(n)}}return Object(c.useEffect)((function(){I("GET","/posts").then((function(e){var t=e.posts;b(t)})).catch(console.error)}),[n]),Object(s.jsx)(l.a,{children:Object(s.jsx)("div",{children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{path:"/login",children:Object(s.jsx)(S,{setIsLoggedIn:r})}),Object(s.jsxs)(u.a,{path:"/posts",children:[Object(s.jsx)(h,{isLoggedIn:n,setIsLoggedIn:r,clearToken:f,postList:d,setPostList:b,searchTerm:x,setSearchTerm:v,isRecent:L,setIsRecent:N}),Object(s.jsx)(T,{postList:w(),setPostList:b,isLoggedIn:n,updatePost:C})]}),Object(s.jsxs)(u.a,{path:"/comment",children:[Object(s.jsx)(h,{isLoggedIn:n,setIsLoggedIn:r,clearToken:f,searchTerm:x,setSearchTerm:v,isRecent:L,setIsRecent:N}),Object(s.jsx)(P,{postList:d})]}),Object(s.jsxs)(u.a,{path:"/message",children:[Object(s.jsx)(h,{isLoggedIn:n,setIsLoggedIn:r,clearToken:f,searchTerm:x,setSearchTerm:v,isRecent:L,setIsRecent:N}),Object(s.jsx)(D,{postList:d})]}),Object(s.jsxs)(u.a,{path:"/myposts",children:[Object(s.jsx)(h,{isLoggedIn:n,setIsLoggedIn:r,clearToken:f,searchTerm:x,setSearchTerm:v,isRecent:L,setIsRecent:N}),Object(s.jsx)(R,{postList:w(),isLoggedIn:n,setPostList:w,updatePost:C})]}),Object(s.jsxs)(u.a,{path:"/createNewPost",children:[Object(s.jsx)(h,{isLoggedIn:n,setIsLoggedIn:r,clearToken:f,searchTerm:x,setSearchTerm:v,isRecent:L,setIsRecent:N}),Object(s.jsx)(y,{addNewPost:function(e){return b([].concat(Object(i.a)(d),[e]))}})]}),Object(s.jsxs)(u.a,{path:"/",children:[Object(s.jsx)(h,{isLoggedIn:n,setIsLoggedIn:r,clearToken:f,searchTerm:x,setSearchTerm:v,isRecent:L,setIsRecent:N}),Object(s.jsx)(T,{postList:w(),setPostList:b,isLoggedIn:n,updatePost:C})]})]})})})};a.a.render(Object(s.jsx)(E,{}),document.getElementById("app"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f772d240.chunk.js.map