(this.webpackJsonpnekidaem_test=this.webpackJsonpnekidaem_test||[]).push([[0],{31:function(e,t,a){},45:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(45),a(6)),u=(a(31),a(4)),i=a(11),l=a.n(i),d=a(17),j=a(3),b=a(16),O=a.n(b),h=function(){return localStorage.clear(),{type:"LOGOUT"}},p=function(e,t){return{type:"AUTO_AUTH_SUCCESS",token:e,userName:t}},m=function(e,t){var a=t?"https://trello.backend.tests.nekidaem.ru/api/v1/users/login/":"https://trello.backend.tests.nekidaem.ru/api/v1/users/create/",n=t?Object(j.a)(Object(j.a)({},e.username),e.password):e;return function(){var t=Object(d.a)(l.a.mark((function t(r){var c,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post(a,n);case 3:201===(c=t.sent).status?(s=c.data,o=60*(new Date).getTime()*60*100,localStorage.setItem("expData",JSON.stringify(o)),localStorage.setItem("token",e.token),localStorage.setItem("username",e.username),localStorage.setItem("password",e.password),r((u=s.token,i=s.username,{type:"AUTH_SUCCESS",token:u,username:i})),r(f(3600))):r(h()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r({type:"AUTH_ERROR",error:t.t0.response.data});case 10:case"end":return t.stop()}var u,i}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()};function f(e){return function(t,a){var n=a().authReducer.token,r={headers:{Authorization:"JWT ".concat(n)}};console.log(r),setTimeout((function(){O.a.post("https://trello.backend.tests.nekidaem.ru/api/v1/users/refresh_token/",n,r).then((function(e){return t(function(e){localStorage.removeItem("expData"),localStorage.removeItem("token");var t=60*(new Date).getTime()*60*100;return localStorage.setItem("expData",JSON.stringify(t)),localStorage.setItem("token",e),{type:"TOKEN_REFRESHED",payload:e}}(e))}))}),1e3*e)}}var x=a(14),_=a(1),v=function(e){var t=e.history,a=r.a.useState(""),n=Object(o.a)(a,2),c=n[0],s=n[1],i=r.a.useState(""),l=Object(o.a)(i,2),d=l[0],j=l[1],b=r.a.useState(""),O=Object(o.a)(b,2),h=O[0],p=O[1],f=r.a.useState(!1),v=Object(o.a)(f,2),k=v[0],g=v[1],N=Object(u.d)((function(e){return e.authReducer.error})),S=Object(u.d)((function(e){return e.authReducer.isAuth})),C=Object(u.c)();console.log(e);return Object(_.jsxs)("div",{className:"auth",children:[Object(_.jsx)("h1",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsxs)("form",{action:"",className:"auth__form",children:[Object(_.jsx)("input",{className:"auth__input",type:"text",placeholder:"name (required)",value:c,onChange:function(e){s(e.target.value),g(!1)},required:!0}),N&&N.username&&k&&Object(_.jsx)("div",{className:"auth__error",children:N.username[0]}),Object(_.jsx)("input",{className:"auth__input",type:"text",placeholder:"email",value:d,onChange:function(e){j(e.target.value),g(!1)}}),N&&N.email&&k&&Object(_.jsx)("div",{className:"auth__error",children:N.email[0]}),Object(_.jsx)("input",{className:"auth__input",type:"text",placeholder:"password (required)",value:h,onChange:function(e){p(e.target.value),g(!1)},required:!0}),N&&N.password&&k&&Object(_.jsx)("div",{className:"auth__error",children:N.password[0]}),Object(_.jsx)("button",{className:"auth__login-btn",onClick:function(e){e.preventDefault(),C(m({username:c,email:d,password:h},!1)),g(!0),S&&t.replace("/board")},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(_.jsxs)("div",{className:"auth__reminder",children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",Object(_.jsx)(x.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},k=a.p+"static/media/trello.0d980286.png",g=(a(71),function(e){var t=e.isAuth,a=e.userName,n=e.onLogout;return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)(x.b,{to:"/",children:Object(_.jsxs)("div",{className:"header__logo",children:[Object(_.jsx)("img",{className:"header__logo-img",alt:"logo",src:k}),Object(_.jsx)("h1",{className:"header__logo-title",children:"FakeTrello"})]})}),t?Object(_.jsxs)("div",{className:"header__login-container",children:[Object(_.jsx)("span",{className:"header__login-user",children:a}),Object(_.jsx)("button",{className:"header__login-auth",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(_.jsx)("div",{className:"header__login-container",children:Object(_.jsx)(x.b,{to:"/register",children:Object(_.jsx)("button",{className:"header__login-auth",onClick:n,children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})})]})}),N=a(5),S=(a(72),a(73),a(26)),C=(a(74),a(21)),E=["id","text","index","onDelete"],w=function(e){var t=e.id,a=(e.text,e.index),n=e.onDelete,r=(Object(S.a)(e,E),Object(u.d)((function(e){return e.cardsReducer.cards[t]})));return Object(_.jsx)(C.b,{draggableId:t.toString(),index:a,children:function(e){return Object(_.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,className:"task",children:[Object(_.jsx)("div",{className:"task__header",children:Object(_.jsx)("button",{onClick:n,className:"task__btn-delete",children:"\u0425"})}),Object(_.jsxs)("p",{className:"task__title",children:[Object(_.jsx)("span",{children:"id"}),"  ",t]}),Object(_.jsx)("div",{className:"task__text",children:r.text})]}))}})},R=(a(75),function(e){var t=e.onCancelClick,a=e.onAddClick,n=r.a.useState(""),c=Object(o.a)(n,2),s=c[0],u=c[1];return Object(_.jsxs)("div",{className:"add-task",children:[Object(_.jsx)("textarea",{className:"add-task__text",placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",value:s,onChange:function(e){return u(e.target.value)}}),Object(_.jsxs)("div",{className:"add-task__btn-container",children:[Object(_.jsx)("button",{className:"add-task__add-btn",onClick:function(){a(s)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(_.jsx)("button",{className:"add-task__cancel-btn",onClick:t,children:"x"})]})]})}),A=function(e){var t=e.id,a=e.color,n=e.title,c=e.tasks,s=e.count,u=e.onAddClickl,i=e.onDeleteTask,l=r.a.useState(!1),d=Object(o.a)(l,2),b=d[0],O=d[1],h=r.a.useCallback((function(e){var a={row:t.toString(),text:e};u(a),O(!1)}),[u,t]);return Object(_.jsxs)("div",{className:"column",children:[Object(_.jsxs)("div",{className:"column__header",style:{backgroundColor:a},children:[n," (",s,")"]}),Object(_.jsx)("div",{className:"column__inner",children:Object(_.jsx)(C.c,{droppableId:t.toString(),children:function(e){return Object(_.jsxs)("div",Object(j.a)(Object(j.a)({className:"column__task-lists",ref:e.innerRef},e.droppableProps),{},{children:[0!==c.length&&c.map((function(e,t){return Object(_.jsx)(w,{index:t,id:e,onDelete:i.bind(null,e)},e)})),e.placeholder]}))}})}),b&&Object(_.jsx)(R,{onCancelClick:function(){return O(!1)},onAddClick:h}),Object(_.jsx)("div",{className:"column__add",children:!b&&Object(_.jsx)("button",{onClick:function(){return O(!0)},className:"column__add-btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})})]})};function y(e,t){return e.id===t.id&&e.color===t.color&&e.title===t.title&&e.count===t.count&&e.tasks.toString()===t.tasks.toString()}var D=r.a.memo(A,y),T=function(e){return{type:"CARD_CREATED",payload:e}},I=function(e){return{type:"GET_CARDS_SUCCESS",payload:e}},H=function(e){return{type:"DELETE_CARD",payload:e}},U=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.authReducer.token})),a=Object(u.d)((function(e){return e.cardsReducer.columns})),c=Object(u.d)((function(e){return e.cardsReducer.columnHeader})),s=Object(n.useCallback)((function(a){e(function(e,t){var a={headers:{Authorization:"JWT ".concat(t.token)}};return function(){var t=Object(d.a)(l.a.mark((function t(n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("https://trello.backend.tests.nekidaem.ru/api/v1/cards/",e,a);case 3:r=t.sent,c=r.data,n(T(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(a,t))}),[]),o=function(a){e(function(e,t){var a={headers:{Authorization:"JWT ".concat(t.token)}};return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.delete("https://trello.backend.tests.nekidaem.ru/api/v1/cards/".concat(e,"/"),a);case 3:n(H(e)),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(a,t))},i=r.a.useCallback((function(a){var n=a.destination,r=a.source,c=a.draggableId;n&&(n.droppableId===r.droppableId&&n.index===r.index||(e(function(e,t,a){return{type:"UPDATE_CARD",id:e,source:t,destination:a}}(c,r,n)),e(function(e,t,a){var n={headers:{Authorization:"JWT ".concat(a.token)}};return function(a,r){var c=r().cardsReducer.cards[e],s={row:t.droppableId,seq_num:t.index,text:c.text};try{O.a.patch("https://trello.backend.tests.nekidaem.ru/api/v1/cards/".concat(e,"/"),s,n)}catch(o){console.log(o)}}}(c,n,t))))}),[t,e]);return r.a.useEffect((function(){t&&e(function(e){var t={headers:{Authorization:"JWT ".concat(e.token)}};return function(){var e=Object(d.a)(l.a.mark((function e(a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://trello.backend.tests.nekidaem.ru/api/v1/cards/",t);case 3:n=e.sent,r=n.data,a(I(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(t))}),[t]),Object(_.jsx)(C.a,{onDragEnd:i,children:Object(_.jsx)("div",{className:"board",children:0!==a.length&&a.map((function(e,t){return Object(_.jsx)(D,{id:e,count:c[e].task.length,title:c[e].title,color:c[e].color,tasks:c[e].task,onAddClickl:s,onDeleteTask:o},c[e].title)}))})})},P=r.a.memo(U),L=["history"],q=function(e){var t=e.history,a=(Object(S.a)(e,L),r.a.useState("")),n=Object(o.a)(a,2),c=n[0],s=n[1],i=r.a.useState(""),l=Object(o.a)(i,2),d=l[0],j=l[1],b=r.a.useState(!1),O=Object(o.a)(b,2),h=O[0],p=O[1],f=Object(u.d)((function(e){return e.authReducer.error})),v=Object(u.d)((function(e){return e.authReducer.isAuth})),k=Object(u.c)();return Object(_.jsxs)("div",{className:"auth",children:[Object(_.jsx)("h1",{className:"auth__title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(_.jsxs)("form",{action:"",className:"auth__form",children:[Object(_.jsx)("input",{className:"auth__input",type:"text",placeholder:"name (required)",value:c,onChange:function(e){s(e.target.value),p(!1)},required:!0}),f&&f.username&&h&&Object(_.jsx)("div",{className:"auth__error",children:f.username[0]}),Object(_.jsx)("input",{className:"auth__input",type:"text",placeholder:"password (required)",value:d,onChange:function(e){j(e.target.value),p(!1)},required:!0}),f&&f.password&&h&&Object(_.jsx)("div",{className:"auth__error",children:f.password[0]}),Object(_.jsx)("button",{className:"auth__login-btn",onClick:function(e){e.preventDefault(),k(m({username:c,password:d},!0)),p(!0),v&&t.replace("/board")},children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(_.jsxs)("div",{className:"auth__reminder",children:["\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",Object(_.jsx)(x.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})]})]})};var J=function(){var e=Object(u.d)((function(e){return e.authReducer.isAuth})),t=Object(u.d)((function(e){return e.authReducer.userName})),a=Object(u.c)();return r.a.useEffect((function(){e||a(function(){var e=localStorage.getItem("username"),t=localStorage.getItem("password"),a=e&&t&&{username:e,password:t};return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=7;break}return e.next=4,O.a.post("https://trello.backend.tests.nekidaem.ru/api/v1/users/login/",a);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=null;case 8:200===(n=e.t0).status?(r=n.data,c=localStorage.getItem("username"),t(p(r,c))):t(h()),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(0),t(h());case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}())}),[e]),Object(_.jsx)("div",{className:"app",children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(g,{isAuth:e,userName:t,onLogout:function(){a(h())}}),e?Object(_.jsx)(N.c,{children:Object(_.jsx)(N.a,{exact:!0,path:"/board",render:function(){return Object(_.jsx)(P,{})}})}):Object(_.jsxs)(N.c,{children:[Object(_.jsx)(N.a,{exact:!0,path:"/login",component:q}),Object(_.jsx)(N.a,{exact:!0,path:"/register",component:v})]})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},W=a(13),z={isAuth:!1,token:null,userName:"",error:null,expirationData:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{token:t.token,userName:t.username,isAuth:!0,error:null});case"AUTH_ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!1,token:"",userName:"",error:null});case"AUTO_AUTH_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{isAuth:!0,token:t.token,userName:t.userName,error:null});case"TOKEN_REFRESHED":return Object(j.a)(Object(j.a)({},e),{},{token:t.payload});default:return e}},V=a(15),X=a(18),B={cards:{},columns:["0","1","2","3"],columnHeader:{0:{title:"ON_HOLD",id:0,color:"#fb7e46",task:[]},1:{title:"IN-PROGRESS",id:1,color:"#2a92bf",task:[]},2:{title:"NEEDS-REVIEW",id:2,color:"#f4ce46",task:[]},3:{title:"APPROVED",id:3,color:"#00b961",task:[]}}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CARDS_SUCCESS":var a=Object(X.a)(t.payload),n=Object(X.a)(e.columns),r=Object(j.a)({},e.columnHeader);n.map((function(e,t){return r[e].task=[].concat(Object(X.a)(r[e].task),Object(X.a)(a.filter((function(e){return+e.row===t})).map((function(e){return e.id}))))}));var c=a.reduce((function(e,t){return Object.assign(e,Object(V.a)({},t.id,t))}),{});return Object(j.a)(Object(j.a)({},e),{},{cards:c,columnHeader:r});case"DELETE_CARD":var s=t.payload,u=Object(j.a)({},e.cards),i=u[s].row;delete u[s];var l=Object(j.a)({},e.columnHeader[i]),d=l.task.filter((function(e){return e!==s}));return d.map((function(e,t){return u[e].seq_num=t})),Object(j.a)(Object(j.a)({},e),{},{cards:u,columnHeader:Object(j.a)(Object(j.a)({},e.columnHeader),{},Object(V.a)({},i,Object(j.a)(Object(j.a)({},e.columnHeader[i]),{},{task:d})))});case"CARD_CREATED":var b=t.payload,O=b.id,h=b.row,p=Object(j.a)({},e.columnHeader);return p[h].task=[].concat(Object(X.a)(p[h].task),[b.id]),Object(j.a)(Object(j.a)({},e),{},{cards:Object(j.a)(Object(j.a)({},e.cards),{},Object(V.a)({},O,b)),columnHeader:p});case"UPDATE_CARD":var m,f=t.id,x=t.destination,_=t.source,v=Object(j.a)({},e.cards),k=v[f];if(x.droppableId===_.droppableId){var g=Object(j.a)({},e.columnHeader[_.droppableId]),N=Object(X.a)(g.task),S=N.splice(_.index,1),C=Object(o.a)(S,1),E=C[0];return N.splice(x.index,0,E),g.task=N,Object(j.a)(Object(j.a)({},e),{},{cards:v,columnHeader:Object(j.a)(Object(j.a)({},e.columnHeader),{},Object(V.a)({},k.row,g))})}var w=Object(j.a)({},e.columnHeader[_.droppableId]),R=w.task.splice(_.index,1),A=Object(o.a)(R,1),y=A[0],D=Object(j.a)({},e.columnHeader[x.droppableId]);return D.task.splice(x.index,0,y),k.row=x.droppableId,Object(j.a)(Object(j.a)({},e),{},{cards:v,columnHeader:Object(j.a)(Object(j.a)({},e.columnHeader),{},(m={},Object(V.a)(m,k.row,w),Object(V.a)(m,x.droppableId,D),m))});default:return e}},M=a(40),Q=Object(W.c)({authReducer:G,cardsReducer:K}),Y="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):W.d,Z=Object(W.e)(Q,Y(Object(W.a)(M.a)));s.a.render(Object(_.jsx)(x.a,{children:Object(_.jsx)(u.a,{store:Z,children:Object(_.jsx)(J,{})})}),document.getElementById("root")),F()}},[[76,1,2]]]);
//# sourceMappingURL=main.9669cac5.chunk.js.map