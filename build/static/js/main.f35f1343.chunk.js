(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{34:function(e,t,s){},37:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(0),r=s(20),a=s.n(r),o=s(26),i=s(3),l=s(10),u=s(6),j=(s(34),s(38)),d=s.n(j);var h=function(e){var t=e.isLoggedIn,s=e.setIsLoggedIn,c=e.clearToken,r=(e.postList,e.setPostList,e.searchTerm,e.setSearchTerm),a=e.isRecent,o=e.setIsRecent;return Object(n.jsxs)("nav",{className:"header",children:[Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("img",{className:"header-logo",src:"https://i.imgur.com/vrQimP1.png",alt:"logo"})}),Object(n.jsxs)("div",{className:"header-search",children:[Object(n.jsxs)("label",{className:"header-checkbox",children:[Object(n.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return o(!a)}}),"Recent Posts Only"]}),Object(n.jsx)("input",{type:"text",className:"header_searchInput",onChange:function(e){return r(e.target.value)},placeholder:"filter posts"}),Object(n.jsx)(d.a,{className:"header-searchIcon"})]}),Object(n.jsx)("div",{className:"headerNav",children:t?Object(n.jsx)(l.b,{to:"/posts",className:"header-link",children:Object(n.jsx)("span",{onClick:function(){c(),s(!1)},className:"headerOpt-line2",children:"Logout"})}):Object(n.jsx)(l.b,{to:"/login",className:"header-link",children:Object(n.jsx)("span",{className:"headerOpt-line2",children:"SignIn/Sign Up"})})}),Object(n.jsxs)("div",{className:"headermessages",children:[Object(n.jsx)(l.b,{to:"/posts",className:"header-link",children:Object(n.jsx)("span",{children:" Posts"})}),t?Object(n.jsx)(l.b,{to:"/createNewPost",className:"header-link",children:Object(n.jsx)("span",{children:"Create New Post"})}):null]}),t?Object(n.jsxs)("div",{className:"header-messages",children:[Object(n.jsx)(l.b,{to:"/message",className:"header-link",children:Object(n.jsx)("span",{children:"Messages"})}),Object(n.jsx)(l.b,{to:"/myposts",className:"header-link",children:Object(n.jsx)("span",{children:"My Posts"})})]}):null]})},b=s(5),p=s.n(b),O=s(9),x="https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT",g=function(){if(localStorage.getItem("auth-token"))return localStorage.getItem("auth-token");localStorage.removeItem("auth-token")},f=function(){localStorage.removeItem("auth-token")},m=function(e){localStorage.setItem("auth-token",e)};function v(){var e={"Content-Type":"application/json"};return g()&&(e.Authorization="Bearer ".concat(g())),e}var k=function(){var e=Object(O.a)(p.a.mark((function e(t,s){var n,c,r,a,o,i,l=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>2&&void 0!==l[2]&&l[2],c="".concat(x,"/users")+(n?"/register":"/login"),e.next=4,fetch(c,{method:"POST",headers:v(),body:JSON.stringify({user:{username:t,password:s}})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,o=a.error,i=a.data,!o){e.next=12;break}throw Error(o.message);case 12:return i&&i.token&&m(i.token),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(p.a.mark((function e(t,s,n){var c,r,a,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:t,headers:v()},n&&(c.body=JSON.stringify(n)),e.next=4,fetch("".concat(x).concat(s),c);case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,o=a.error,i=a.data,!o){e.next=12;break}throw Error(o.message);case 12:return i&&i.token&&m(i.token),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}();s(57);var y=function(e){var t=e.setIsLoggedIn,s=Object(u.f)();console.log(e);var r=Object(c.useState)(""),a=Object(i.a)(r,2),o=a[0],j=a[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),b=h[0],x=h[1],g=Object(c.useState)(null),f=Object(i.a)(g,2),m=f[0],v=f[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)("div",{className:"logo-login",children:Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("img",{className:"header-logo",src:"https://i.imgur.com/vrQimP1.png",alt:"logo"})})}),Object(n.jsxs)("div",{className:"login-container",children:[Object(n.jsx)("h1",{children:"Sign In"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)("h5",{children:"Email"}),m?Object(n.jsx)("h5",{className:"error",children:m}):null,Object(n.jsx)("input",{type:"text",value:o,onChange:function(e){return j(e.target.value)},placeholder:"username"}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",value:b,onChange:function(e){return x(e.target.value)},placeholder:"password"}),Object(n.jsx)("button",{className:"login-siginbutton",onClick:function(){var e=Object(O.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(o,b);case 3:e.sent,t(!0),s.push("/posts"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),children:"Sign In"}),Object(n.jsx)("h5",{children:"Have Account? Sign In!"})]}),Object(n.jsx)("button",{className:"login-createbutton",onClick:function(){var e=Object(O.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123455),e.prev=1,e.next=4,k(o,b,!0);case 4:e.sent,t(!0),s.push("/posts"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),v(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),children:"Create your account"}),Object(n.jsx)("h5",{children:"Don't have account? Sign Up!"})]})]})},L=(s(58),s(80));s(37);var S=function(e){var t=e.addNewPost,s=Object(c.useState)(e.description||""),r=Object(i.a)(s,2),a=r[0],o=r[1],l=Object(c.useState)(e.title||""),j=Object(i.a)(l,2),d=j[0],h=j[1],b=Object(c.useState)(e.price||""),x=Object(i.a)(b,2),g=x[0],f=x[1],m=Object(c.useState)(e.location||""),v=Object(i.a)(m,2),k=v[0],y=v[1],L=Object(c.useState)(!1),S=Object(i.a)(L,2),N=S[0],w=S[1],P=Object(u.f)(),C=Object(c.useState)(!1),T=Object(i.a)(C,2),D=T[0],E=T[1];return Object(n.jsx)("div",{id:"form",className:"createNewMessage",children:Object(n.jsxs)("form",{onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(s){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(event.preventDefault(),E(!0),0!==d.length){e.next=5;break}return E(!0),e.abrupt("return");case 5:if(0!==a.length){e.next=8;break}return E(!0),e.abrupt("return");case 8:return n={post:{title:d,description:a,price:g,willDeliver:N,location:k}},e.prev=9,e.next=12,I("POST","/posts",n);case 12:c=e.sent,t(c.post),console.log(c),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.error(e.t0);case 20:o(""),f(""),h(""),w(""),y(""),document.getElementById("form").style.display="none",P.push("/posts");case 27:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(n.jsx)("h3",{children:"Title:"}),Object(n.jsx)("input",{value:d,onChange:function(e){h(e.target.value)},type:"text"}),D&&0===d.length?Object(n.jsx)("h3",{style:{color:"red"},children:"You need a title"}):null,Object(n.jsx)("h3",{children:"Description:"}),Object(n.jsx)("textarea",{value:a,onChange:function(e){o(e.target.value)},type:"text"}),D&&0===a.length?Object(n.jsx)("h3",{style:{color:"red"},children:"You need a description"}):null,Object(n.jsx)("h3",{children:"Price"}),Object(n.jsx)("input",{value:g,onChange:function(e){f(e.target.value)},type:"text"}),Object(n.jsx)("h3",{children:"Location"}),Object(n.jsx)("input",{placeholder:"location, leave blank for [On Request]",value:k,onChange:function(e){y(e.target.value)},type:"text"}),Object(n.jsx)("h3",{children:"Will Deliver"}),Object(n.jsx)("input",{value:N,onChange:function(e){w(!N)},type:"checkbox"}),Object(n.jsx)("button",{children:"Post It"})]})})};s(59);var N=function(e){var t=e.postId,s=Object(c.useState)(""),r=Object(i.a)(s,2),a=r[0],o=r[1];return Object(n.jsx)("div",{id:"message-form",className:"new-message",children:Object(n.jsxs)("form",{onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(s,n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),c={message:{content:a}},e.next=4,I("POST","/posts/".concat(t,"/messages"),c);case 4:e.sent,o(""),document.getElementById("message-form").style.display="none";case 7:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),children:[Object(n.jsx)("textarea",{value:a,onChange:function(e){return o(e.target.value)}}),Object(n.jsx)("button",{children:"Send"})]})})},w=s(42),P=s.n(w);var C=function(e){var t=Object(c.useState)(e.description||""),s=Object(i.a)(t,2),r=s[0],a=s[1],o=Object(c.useState)(e.title||""),l=Object(i.a)(o,2),j=l[0],d=l[1],h=Object(c.useState)(e.price||""),b=Object(i.a)(h,2),x=b[0],g=b[1],f=Object(c.useState)(e.location||""),m=Object(i.a)(f,2),v=m[0],k=m[1],y=Object(c.useState)(e.willDeliver||!1),L=Object(i.a)(y,2),S=L[0],N=L[1],w=Object(u.f)(),C=e.postId,T=(e.setPostList,e.updatePost);return Object(n.jsx)("div",{id:"form",className:"createNewMessage",children:Object(n.jsxs)("form",{onSubmit:function(){var e=Object(O.a)(p.a.mark((function e(t){var s,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return event.preventDefault(),s={post:{title:j,description:r,price:x,willDeliver:S,location:v}},e.prev=2,e.next=5,I("PATCH","/posts/".concat(C),s);case 5:n=e.sent,console.log(n),T(n.post),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:a(""),g(""),d(""),N(!1),k(""),document.getElementById("form").style.display="none",w.push("/posts");case 20:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(n.jsx)(P.a,{onClick:function(){document.getElementById("form").style.display="none",w.push("/posts")}}),Object(n.jsx)("h3",{children:"Title:"}),Object(n.jsx)("input",{value:j,onChange:function(e){d(e.target.value)},type:"text"}),Object(n.jsx)("h3",{children:"Description:"}),Object(n.jsx)("textarea",{value:r,onChange:function(e){a(e.target.value)},type:"text"}),Object(n.jsx)("h3",{children:"Price"}),Object(n.jsx)("input",{value:x,onChange:function(e){g(e.target.value)},type:"text"}),Object(n.jsx)("h3",{children:"Location"}),Object(n.jsx)("input",{value:v,onChange:function(e){k(e.target.value)},type:"text"}),Object(n.jsx)("h3",{children:"Will Deliver"}),Object(n.jsx)("input",{value:S,onChange:function(e){N(!S)},type:"checkbox",className:"create-post-check"}),Object(n.jsx)("button",{children:"Update"})]})})};var T=function(e){var t=e.postList,s=e.setPostList,r=e.isLoggedIn,a=e.updatePost,l=(e.addNewPost,Object(c.useState)("")),u=Object(i.a)(l,2),j=u[0],d=u[1],h=Object(c.useState)(""),b=Object(i.a)(h,2),x=b[0],g=b[1];return Object(n.jsx)("div",{id:"posts",children:t.map((function(e,i){return Object(n.jsxs)("div",{id:"post-card",style:{border:e.isAuthor&&r?"5px solid gold":"2px solid rgb(156, 221, 156"},children:[Object(n.jsxs)("div",{className:"card-title",children:[Object(n.jsxs)("h3",{children:[e.title," (",e.location,") [",e.createdAt,"]"]}),Object(n.jsxs)("h3",{children:["Posted Price: ",e.price]})]}),Object(n.jsxs)("div",{className:"descriptions",children:[Object(n.jsxs)("h5",{children:["Description: ",e.description]}),Object(n.jsxs)("h5",{children:["Delivery available: ",e.willDeliver?"YES":"NO"]}),Object(n.jsxs)("h5",{children:["Posted by: ",e.author.username]})]}),j===e._id?Object(n.jsx)(N,{postId:e._id,wantsToReply:j,setReply:d}):null,x===e._id?Object(n.jsx)(C,{title:e.title,description:e.description,price:e.price,location:e.location,willDeliver:e.willDeliver,postId:e._id,updatePost:a}):null,Object(n.jsx)("div",{className:"message",children:e.isAuthor?Object(n.jsxs)(c.Fragment,{children:[Object(n.jsx)(L.a,{onClick:Object(O.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I("DELETE","/posts/".concat(e._id));case 3:n.sent,s(Object(o.a)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),variant:"outlined",color:"secondary",fullWidth:!0,children:"Delete"}),Object(n.jsx)(L.a,{onClick:function(){g(e._id)},variant:"outlined",color:"secondary",fullWidth:!0,children:"Edit"})]}):r?Object(n.jsx)(L.a,{onClick:function(){return d(e._id)},variant:"outlined",color:"primary",fullWidth:!0,children:"Message Seller"}):null})]},i)}))})};s(60);var D=function(e){var t=e.postList;function s(){return s=t.filter((function(e){return e.isAuthor}))}return s().map((function(e,t){return e.messages.length>0?Object(n.jsxs)("div",{className:"incoming-messages",children:[Object(n.jsxs)("h4",{className:"message-title",children:["Messages for Post: ",e.title]}),e.messages.map((function(e,t){return Object(n.jsxs)("p",{className:"message12",children:[Object(n.jsxs)("strong",{children:[t+1,". "]})," ",e.content," ",Object(n.jsx)("strong",{children:" From: "})," ",e.fromUser.username]},t)}))]},t):null}))};var E=function(e){var t=e.postList;function s(){return t.filter((function(e){return e.isAuthor}))}return e.setPostList,Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(T,{postList:s(),setPostList:s()})})};var R=function(){var e=Object(c.useState)(!!g()),t=Object(i.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)([]),j=Object(i.a)(a,2),d=j[0],b=j[1],p=Object(c.useState)(""),O=Object(i.a)(p,2),x=O[0],m=O[1],v=Object(c.useState)(!1),k=Object(i.a)(v,2),L=k[0],w=k[1];function P(){return d.filter((function(e){return e.title.toLowerCase().includes(x.toLowerCase())})).filter((function(e){if(!L)return!0;return Date.parse(e.createdAt)+108e5>=Date.now()})).reverse()}function C(e){var t=d.findIndex((function(t){return t._id===e._id}));if(t>-1){var s=Object(o.a)(d);s[t]=e,b(s)}}return Object(c.useEffect)((function(){I("GET","/posts").then((function(e){var t=e.posts;b(t)})).catch(console.error)}),[s]),Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{path:"/login",children:Object(n.jsx)(y,{setIsLoggedIn:r})}),Object(n.jsxs)(u.a,{path:"/posts",children:[Object(n.jsx)(h,{isLoggedIn:s,setIsLoggedIn:r,clearToken:f,postList:d,setPostList:b,searchTerm:x,setSearchTerm:m,isRecent:L,setIsRecent:w}),Object(n.jsx)(T,{postList:P(),setPostList:b,isLoggedIn:s,updatePost:C})]}),Object(n.jsxs)(u.a,{path:"/comment",children:[Object(n.jsx)(h,{isLoggedIn:s,setIsLoggedIn:r,clearToken:f,postList:d,setPostList:b,searchTerm:x,setSearchTerm:m,isRecent:L,setIsRecent:w}),Object(n.jsx)(N,{postList:d})]}),Object(n.jsxs)(u.a,{path:"/message",children:[Object(n.jsx)(h,{isLoggedIn:s,setIsLoggedIn:r,clearToken:f,postList:d,setPostList:b,searchTerm:x,setSearchTerm:m,isRecent:L,setIsRecent:w}),Object(n.jsx)(D,{postList:d})]}),Object(n.jsxs)(u.a,{path:"/myposts",children:[Object(n.jsx)(h,{isLoggedIn:s,setIsLoggedIn:r,clearToken:f,postList:d,setPostList:b,searchTerm:x,setSearchTerm:m,isRecent:L,setIsRecent:w}),Object(n.jsx)(E,{postList:P(),isLoggedIn:s,setPostList:P})]}),Object(n.jsxs)(u.a,{path:"/createNewPost",children:[Object(n.jsx)(h,{isLoggedIn:s,setIsLoggedIn:r,clearToken:f}),Object(n.jsx)(S,{addNewPost:function(e){return b([].concat(Object(o.a)(d),[e]))}})]}),Object(n.jsxs)(u.a,{path:"/",children:[Object(n.jsx)(h,{isLoggedIn:s,setIsLoggedIn:r,clearToken:f}),Object(n.jsx)(T,{postList:P(),setPostList:b,isLoggedIn:s,updatePost:C})]})]})})})};a.a.render(Object(n.jsx)(R,{}),document.getElementById("app"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f35f1343.chunk.js.map