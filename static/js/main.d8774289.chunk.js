(this.webpackJsonpnekidaem_test=this.webpackJsonpnekidaem_test||[]).push([[0],{31:function(e,t,a){},45:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=(a(45),a(6)),u=(a(31),a(4)),l=a(11),i=a.n(l),d=a(17),j=a(15),b=a.n(j),O=function(){return localStorage.clear(),{type:"LOGOUT"}},h=function(e,t){return{type:"AUTH_SUCCESS",token:e,username:t}},p=function(e,t){return{type:"AUTO_AUTH_SUCCESS",token:e,userName:t}},m=function(e,t){var a=t?"https://trello.backend.tests.nekidaem.ru/api/v1/users/login/":"https://trello.backend.tests.nekidaem.ru/api/v1/users/create/",n=e.username,r=e.password,c=t?{username:n,password:r}:e;return console.log(c),function(){var e=Object(d.a)(i.a.mark((function e(t){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post(a,c);case 3:n=e.sent,console.log(n),201===n.status||200===n.status?(r=n.data,console.log(r),s=60*(new Date).getTime()*60*100,localStorage.setItem("expData",JSON.stringify(s)),console.log(r.token),localStorage.setItem("token",r.token),localStorage.setItem("username",r.username),localStorage.setItem("password",r.password),t(h(r.token,r.username)),t(f(3600))):t(O()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"AUTH_ERROR",error:e.t0.response.data});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};function f(e){return function(t,a){var n=a().authReducer.token,r={headers:{Authorization:"JWT ".concat(n)}};console.log(r),setTimeout((function(){b.a.post("https://trello.backend.tests.nekidaem.ru/api/v1/users/refresh_token/",n,r).then((function(e){return t(function(e){localStorage.removeItem("expData"),localStorage.removeItem("token");var t=60*(new Date).getTime()*60*100;return localStorage.setItem("expData",JSON.stringify(t)),localStorage.setItem("token",e),{type:"TOKEN_REFRESHED",payload:e}}(e))}))}),1e3*e)}}var x=a(5),_=a(14),g=a(1),v=function(e){e.history;var t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(""),l=Object(o.a)(s,2),i=l[0],d=l[1],j=r.a.useState(""),b=Object(o.a)(j,2),O=b[0],h=b[1],p=r.a.useState(!1),f=Object(o.a)(p,2),v=f[0],k=f[1],N=Object(u.d)((function(e){return e.authReducer.error})),S=Object(u.d)((function(e){return e.authReducer.isAuth})),C=Object(u.c)();console.log(e);return S?Object(g.jsx)(x.a,{to:"/board"}):Object(g.jsxs)("div",{className:"auth",children:[Object(g.jsx)("h1",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsxs)("form",{action:"",className:"auth__form",children:[Object(g.jsx)("input",{className:"auth__input",type:"text",placeholder:"name (required)",value:n,onChange:function(e){c(e.target.value),k(!1)},required:!0}),N&&N.username&&v&&Object(g.jsx)("div",{className:"auth__error",children:N.username[0]}),Object(g.jsx)("input",{className:"auth__input",type:"text",placeholder:"email",value:i,onChange:function(e){d(e.target.value),k(!1)}}),N&&N.email&&v&&Object(g.jsx)("div",{className:"auth__error",children:N.email[0]}),Object(g.jsx)("input",{className:"auth__input",type:"text",placeholder:"password (required)",value:O,onChange:function(e){h(e.target.value),k(!1)},required:!0}),N&&N.password&&v&&Object(g.jsx)("div",{className:"auth__error",children:N.password[0]}),Object(g.jsx)("button",{className:"auth__login-btn",onClick:function(e){e.preventDefault(),C(m({username:n,email:i,password:O},!1)),k(!0)},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(g.jsxs)("div",{className:"auth__reminder",children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",Object(g.jsx)(_.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},k=a.p+"static/media/trello.0d980286.png",N=(a(71),function(e){var t=e.isAuth,a=e.userName,n=e.onLogout;return Object(g.jsxs)("header",{className:"header",children:[Object(g.jsx)(_.b,{to:"/board",children:Object(g.jsxs)("div",{className:"header__logo",children:[Object(g.jsx)("img",{className:"header__logo-img",alt:"logo",src:k}),Object(g.jsx)("h1",{className:"header__logo-title",children:"FakeTrello"})]})}),t?Object(g.jsxs)("div",{className:"header__login-container",children:[Object(g.jsx)("span",{className:"header__login-user",children:a}),Object(g.jsx)("button",{className:"header__login-auth",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(g.jsx)("div",{className:"header__login-container",children:Object(g.jsx)(_.b,{to:"/register",children:Object(g.jsx)("button",{className:"header__login-auth",onClick:n,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})})]})}),S=(a(72),a(3)),C=(a(73),a(26)),E=(a(74),a(20)),w=["id","text","index","onDelete"],R=function(e){var t=e.id,a=(e.text,e.index),n=e.onDelete,r=(Object(C.a)(e,w),Object(u.d)((function(e){return e.cardsReducer.cards[t]})));return Object(g.jsx)(E.b,{draggableId:t.toString(),index:a,children:function(e){return Object(g.jsxs)("div",Object(S.a)(Object(S.a)(Object(S.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,className:"task",children:[Object(g.jsx)("div",{className:"task__header",children:Object(g.jsx)("button",{onClick:n,className:"task__btn-delete",children:"\u0425"})}),Object(g.jsxs)("p",{className:"task__title",children:[Object(g.jsx)("span",{children:"id"}),"  ",t]}),Object(g.jsx)("div",{className:"task__text",children:r.text})]}))}})},D=(a(75),function(e){var t=e.onCancelClick,a=e.onAddClick,n=r.a.useState(""),c=Object(o.a)(n,2),s=c[0],u=c[1];return Object(g.jsxs)("div",{className:"add-task",children:[Object(g.jsx)("textarea",{className:"add-task__text",placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",value:s,onChange:function(e){return u(e.target.value)}}),Object(g.jsxs)("div",{className:"add-task__btn-container",children:[Object(g.jsx)("button",{className:"add-task__add-btn",onClick:function(){a(s)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(g.jsx)("button",{className:"add-task__cancel-btn",onClick:t,children:"x"})]})]})}),y=function(e){var t=e.id,a=e.color,n=e.title,c=e.tasks,s=e.count,u=e.onAddClickl,l=e.onDeleteTask,i=r.a.useState(!1),d=Object(o.a)(i,2),j=d[0],b=d[1],O=r.a.useCallback((function(e){var a={row:t.toString(),text:e};u(a),b(!1)}),[u,t]);return Object(g.jsxs)("div",{className:"column",children:[Object(g.jsxs)("div",{className:"column__header",style:{backgroundColor:a},children:[n," (",s,")"]}),Object(g.jsx)("div",{className:"column__inner",children:Object(g.jsx)(E.c,{droppableId:t.toString(),children:function(e){return Object(g.jsxs)("div",Object(S.a)(Object(S.a)({className:"column__task-lists",ref:e.innerRef},e.droppableProps),{},{children:[0!==c.length&&c.map((function(e,t){return Object(g.jsx)(R,{index:t,id:e,onDelete:l.bind(null,e)},e)})),e.placeholder]}))}})}),j&&Object(g.jsx)(D,{onCancelClick:function(){return b(!1)},onAddClick:O}),Object(g.jsx)("div",{className:"column__add",children:!j&&Object(g.jsx)("button",{onClick:function(){return b(!0)},className:"column__add-btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})})]})};function A(e,t){return e.id===t.id&&e.color===t.color&&e.title===t.title&&e.count===t.count&&e.tasks.toString()===t.tasks.toString()}var T=r.a.memo(y,A),I=function(e){return{type:"CARD_CREATED",payload:e}},H=function(e){return{type:"GET_CARDS_SUCCESS",payload:e}},U=function(e){return{type:"DELETE_CARD",payload:e}},P=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.authReducer.token})),a=Object(u.d)((function(e){return e.cardsReducer.columns})),c=Object(u.d)((function(e){return e.cardsReducer.columnHeader})),s=Object(n.useCallback)((function(t){e(function(e){return function(){var t=Object(d.a)(i.a.mark((function t(a,n){var r,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().authReducer.token,c={headers:{Authorization:"JWT ".concat(r)}},t.prev=2,t.next=5,b.a.post("https://trello.backend.tests.nekidaem.ru/api/v1/cards/",e,c);case 5:s=t.sent,o=s.data,a(I(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))}),[]),o=function(t){e(function(e){return function(){var t=Object(d.a)(i.a.mark((function t(a,n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().authReducer.token,console.log(r),c={headers:{Authorization:"JWT ".concat(r)}},t.prev=3,t.next=6,b.a.delete("https://trello.backend.tests.nekidaem.ru/api/v1/cards/".concat(e,"/"),c);case 6:a(U(e)),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(3);case 11:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e,a){return t.apply(this,arguments)}}()}(t))},l=r.a.useCallback((function(t){var a=t.destination,n=t.source,r=t.draggableId;a&&(a.droppableId===n.droppableId&&a.index===n.index||(e(function(e,t,a){return{type:"UPDATE_CARD",id:e,source:t,destination:a}}(r,n,a)),e(function(e,t){return function(a,n){var r=n().authReducer.token;console.log(r);var c={headers:{Authorization:"JWT ".concat(r)}},s=n().cardsReducer.cards[e],o={row:t.droppableId,seq_num:t.index,text:s.text};try{b.a.patch("https://trello.backend.tests.nekidaem.ru/api/v1/cards/".concat(e,"/"),o,c)}catch(u){console.log(u)}}}(r,a))))}),[t,e]);return r.a.useEffect((function(){t&&e(function(){var e=Object(d.a)(i.a.mark((function e(t,a){var n,r,c,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().authReducer.token,r=new Date(JSON.parse(localStorage.getItem("expData"))),c={headers:{Authorization:"JWT ".concat(n)}},r>(new Date).getTime()&&t(H()),e.prev=4,console.log(c),e.next=8,b.a.get("https://trello.backend.tests.nekidaem.ru/api/v1/cards/",c);case 8:s=e.sent,o=s.data,console.log(o),t(H(o)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t,a){return e.apply(this,arguments)}}())}),[t]),Object(g.jsx)(E.a,{onDragEnd:l,children:Object(g.jsx)("div",{className:"board",children:0!==a.length&&a.map((function(e,t){return console.log(c[e]),Object(g.jsx)(T,{id:e,count:c[e].task.length,title:c[e].title,color:c[e].color,tasks:c[e].task,onAddClickl:s,onDeleteTask:o},c[e].title)}))})})},J=r.a.memo(P),L=["history"],q=function(e){e.history,Object(C.a)(e,L);var t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(""),l=Object(o.a)(s,2),i=l[0],d=l[1],j=r.a.useState(!1),b=Object(o.a)(j,2),O=b[0],h=b[1],p=Object(u.d)((function(e){return e.authReducer.error})),f=Object(u.d)((function(e){return e.authReducer.isAuth})),v=Object(u.c)();return f?Object(g.jsx)(x.a,{to:"/board"}):Object(g.jsxs)("div",{className:"auth",children:[Object(g.jsx)("h1",{className:"auth__title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(g.jsxs)("form",{action:"",className:"auth__form",children:[Object(g.jsx)("input",{className:"auth__input",type:"text",placeholder:"name (required)",value:n,onChange:function(e){c(e.target.value),h(!1)},required:!0}),p&&p.username&&O&&Object(g.jsx)("div",{className:"auth__error",children:p.username[0]}),Object(g.jsx)("input",{className:"auth__input",type:"text",placeholder:"password (required)",value:i,onChange:function(e){d(e.target.value),h(!1)},required:!0}),p&&p.password&&O&&Object(g.jsx)("div",{className:"auth__error",children:p.password[0]}),Object(g.jsx)("button",{className:"auth__login-btn",onClick:function(e){e.preventDefault(),v(m({username:n,password:i},!0)),h(!0)},children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(g.jsxs)("div",{className:"auth__reminder",children:["\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",Object(g.jsx)(_.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})]})]})};var F=function(){var e=Object(u.d)((function(e){return e.authReducer.isAuth})),t=Object(u.d)((function(e){return e.authReducer.userName})),a=Object(u.c)();return r.a.useEffect((function(){console.log(localStorage);var e=localStorage.getItem("token"),t=localStorage.getItem("username");console.log(e),a(e?p(e,t):function(){var e=localStorage.getItem("username"),t=localStorage.getItem("password"),a=localStorage.getItem("token"),n=new Date(JSON.parse(localStorage.getItem("expData"))),r=e&&t&&{username:e,password:t};return function(){var t=Object(d.a)(i.a.mark((function t(c){var s,o,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n>(new Date).getTime()&&c(p(a,e)),t.prev=1,!r){t.next=8;break}return t.next=5,b.a.post("https://trello.backend.tests.nekidaem.ru/api/v1/users/login/",r);case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0=null;case 9:200===(s=t.t0).status?(o=s.data,u=localStorage.getItem("username"),c(p(o.token,u))):c(O()),t.next=16;break;case 13:t.prev=13,t.t1=t.catch(1),c(O());case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}())}),[]),Object(g.jsx)("div",{className:"app",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(N,{isAuth:e,userName:t,onLogout:function(){a(O())}}),Object(g.jsxs)(x.d,{children:[Object(g.jsx)(x.b,{exact:!0,path:"/login",component:q}),Object(g.jsx)(x.b,{exact:!0,path:"/register",component:v}),e&&Object(g.jsx)(x.b,{exact:!0,path:"/board",render:function(){return Object(g.jsx)(J,{})}})]}),"}"]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},z=a(13),G={isAuth:!1,token:null,userName:"",error:null,expirationData:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{token:t.token,userName:t.username,isAuth:!0,error:null});case"AUTH_ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});case"LOGOUT":return Object(S.a)(Object(S.a)({},e),{},{isAuth:!1,token:null,userName:"",error:null});case"AUTO_AUTH_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isAuth:!0,token:t.token,userName:t.userName,error:null});case"TOKEN_REFRESHED":return Object(S.a)(Object(S.a)({},e),{},{token:t.payload});default:return e}},X=a(16),B=a(21),K={cards:{},columns:["0","1","2","3"],columnHeader:{0:{title:"ON_HOLD",id:0,color:"#fb7e46",task:[]},1:{title:"IN-PROGRESS",id:1,color:"#2a92bf",task:[]},2:{title:"NEEDS-REVIEW",id:2,color:"#f4ce46",task:[]},3:{title:"APPROVED",id:3,color:"#00b961",task:[]}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CARDS_SUCCESS":if(!t.payload)return Object(S.a)({},e);var a=Object(B.a)(t.payload);console.log(a);var n=Object(B.a)(e.columns),r=Object(S.a)({},e.columnHeader);console.log(r),console.log(e.cards),n.map((function(e,t){return r[e].task=Object(B.a)(a.filter((function(e){return+e.row===t})).map((function(e){return e.id})))}));var c=a.reduce((function(e,t){return Object.assign(e,Object(X.a)({},t.id,t))}),{});return console.log(c),console.log(r),Object(S.a)(Object(S.a)({},e),{},{cards:c,columnHeader:r});case"DELETE_CARD":var s=t.payload,u=Object(S.a)({},e.cards),l=u[s].row;delete u[s];var i=Object(S.a)({},e.columnHeader[l]),d=i.task.filter((function(e){return e!==s}));return d.map((function(e,t){return u[e].seq_num=t})),Object(S.a)(Object(S.a)({},e),{},{cards:u,columnHeader:Object(S.a)(Object(S.a)({},e.columnHeader),{},Object(X.a)({},l,Object(S.a)(Object(S.a)({},e.columnHeader[l]),{},{task:d})))});case"CARD_CREATED":var j=t.payload,b=j.id,O=j.row,h=Object(S.a)({},e.columnHeader);return h[O].task=[].concat(Object(B.a)(h[O].task),[j.id]),Object(S.a)(Object(S.a)({},e),{},{cards:Object(S.a)(Object(S.a)({},e.cards),{},Object(X.a)({},b,j)),columnHeader:h});case"UPDATE_CARD":var p,m=t.id,f=t.destination,x=t.source,_=Object(S.a)({},e.cards),g=_[m];if(f.droppableId===x.droppableId){var v=Object(S.a)({},e.columnHeader[x.droppableId]),k=Object(B.a)(v.task),N=k.splice(x.index,1),C=Object(o.a)(N,1),E=C[0];return k.splice(f.index,0,E),v.task=k,Object(S.a)(Object(S.a)({},e),{},{cards:_,columnHeader:Object(S.a)(Object(S.a)({},e.columnHeader),{},Object(X.a)({},g.row,v))})}var w=Object(S.a)({},e.columnHeader[x.droppableId]),R=w.task.splice(x.index,1),D=Object(o.a)(R,1),y=D[0],A=Object(S.a)({},e.columnHeader[f.droppableId]);return A.task.splice(f.index,0,y),g.row=f.droppableId,Object(S.a)(Object(S.a)({},e),{},{cards:_,columnHeader:Object(S.a)(Object(S.a)({},e.columnHeader),{},(p={},Object(X.a)(p,g.row,w),Object(X.a)(p,f.droppableId,A),p))});default:return e}},Q=a(40),Y=Object(z.c)({authReducer:V,cardsReducer:M}),Z="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):z.d,$=Object(z.e)(Y,Z(Object(z.a)(Q.a)));s.a.render(Object(g.jsx)(_.a,{children:Object(g.jsx)(u.a,{store:$,children:Object(g.jsx)(F,{})})}),document.getElementById("root")),W()}},[[76,1,2]]]);
//# sourceMappingURL=main.d8774289.chunk.js.map