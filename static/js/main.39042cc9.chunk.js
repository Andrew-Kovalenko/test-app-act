(this["webpackJsonptest-app-act"]=this["webpackJsonptest-app-act"]||[]).push([[0],{511:function(e,t,n){},515:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n(41),i=n(25),s=n(193),l=(n(511),n(17)),o=n(556),u=n(517),d=n(549),j=n(555),b=n(548),p=n(557),O="REQUEST_ClIENTS",h="FETCH_ClIENTS",m="SET_CURRENT_ClIENT",x="REQUEST_DECLARANTS",f="FETCH_DECLARANTS",v="UPDATE_NEW_DECLARANTS_ARRAY",y="PUSH_NEW_DECLARANT",g="UPDATE_CURRENT_NEW_DECLARANT";var N=n(545),w=Object(N.a)((function(e){return{root:{display:"flex",flexGrow:1},clientBlock:{marginTop:e.spacing(2),padding:e.spacing(3),flexGrow:1,background:"white"},submitBtn:{marginTop:e.spacing(2)},declarantsBlock:{marginTop:e.spacing(2),marginBottom:e.spacing(2),padding:e.spacing(3),flexGrow:1,background:"white"},Button:{margin:e.spacing(2,0)},Input:{flexGrow:1,margin:e.spacing(1),marginLeft:0},InputsBox:{flexGrow:1,display:"flex"},InputBox:{display:"flex",flexDirection:"column",width:"50%"}}}));function C(e,t,n){var a=e?e.id:"No Selected",c=t.length?t.map((function(e){return e.id})):"No Client Selected Yet",r=n.length>0?n:"No One Added Yet";console.log("\nclientId: ",a,"\napplicantsIds: ",c,"\nnewApplicants: ",r)}var E=function(){var e,t=w(),n=Object(i.b)(),c=Object(i.c)((function(e){return e.clients.clients})),r=Object(i.c)((function(e){return e.clients.client})),s=Object(i.c)((function(e){return e.declarants.declarants})),v=Object(i.c)((function(e){return e.declarants.newDeclarants})),y=function(e){n(function(e){return{type:m,payload:e}}(e)),e&&n({type:x})};return e=r?Object(a.jsxs)(o.a,{children:[Object(a.jsxs)(u.a,{variant:"body2",children:["\u0424\u0406\u041e: ",r.name]}),Object(a.jsxs)(u.a,{variant:"body2",children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",r.phone]}),Object(a.jsxs)(u.a,{variant:"body2",children:["Email: ",r.email]}),Object(a.jsx)(o.a,{children:Object(a.jsx)(b.a,{onClick:function(){C(r,s,v)},className:t.submitBtn,variant:"contained",color:"primary",href:"#contained-buttons",children:"\u0417\u0431\u0435\u0440\u0456\u0433\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443"})})]}):null,Object(a.jsx)("div",{className:t.root,children:Object(a.jsxs)(d.a,{maxWidth:"md",className:t.clientBlock,children:[Object(a.jsx)(u.a,{variant:"h4",children:"\u041a\u043b\u0456\u0435\u043d\u0442"}),Object(a.jsx)(p.a,{onInputChange:function(e,t){t.length>=3?n({type:O}):(n({type:h,payload:[]}),n({type:f,payload:[]}))},onChange:function(e,t){y(t)},id:"auto-complete",options:c.length>=1?c:[],getOptionLabel:function(e){return e.name},autoComplete:!0,style:{width:300},renderInput:function(e){return Object(a.jsx)(j.a,Object(l.a)(Object(l.a)({},e),{},{label:"Customer Search / Selection",margin:"normal"}))}}),e]})})},T=n(18),I=n(554),k=n(559),A=n(191),S=n.n(A),D=n(16),R=n(552),F=n(553),B=n(560),L=n(558);function V(e){var t,n,r=e.visibleForm,s=e.setVisibleForm,u=w(),O=Object(i.b)(),h=Object(c.useState)(["\u0423\u043a\u0440\u0430\u0438\u043d\u0430","\u0413\u0440\u0443\u0437\u0438\u044f","\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"]),m=Object(T.a)(h,2),x=m[0],f=(m[1],Object(c.useState)()),N=Object(T.a)(f,2),C=N[0],E=N[1],k=Object(c.useState)({businessEntity:"",country:"",name:"",edrpou:"",title:"",adress:"",motherlandTitle:"",motherlandAdress:""}),A=Object(T.a)(k,2),S=A[0],V=A[1],W=function(){O(function(e){return{type:v,payload:e}}(S)),O(function(e){return{type:y,payload:e}}(S)),s()},J=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;V(Object(l.a)(Object(l.a)({},S),{},Object(D.a)({},a,n))),O(function(e){return{type:g,payload:e}}(S))};return t="\u0423\u043a\u0440\u0430\u0438\u043d\u0430"!==C?Object(a.jsxs)(o.a,{className:u.InputBox,children:[Object(a.jsx)(j.a,{value:S.motherlandTitle,onChange:J,name:"motherlandTitle",fullWidth:!0,className:u.Input,id:"outlined-basic",label:"\u041d\u0430\u0437\u0432\u0430 \u043c\u043e\u0432\u043e\u044e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",variant:"outlined"}),Object(a.jsx)(j.a,{value:S.motherlandAdress,onChange:J,name:"motherlandAdress",fullWidth:!0,className:u.Input,id:"outlined-basic",label:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043c\u043e\u0432\u043e\u044e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",variant:"outlined"})]}):null,n=r?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{noValidate:!0,onSubmit:W,children:[Object(a.jsxs)(R.a,{component:"fieldset",children:[Object(a.jsx)(F.a,{component:"legend",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e"}),Object(a.jsxs)(B.a,{"aria-label":"businessEntity",onChange:J,name:"businessEntity",children:[Object(a.jsx)(I.a,{value:"Private person",control:Object(a.jsx)(L.a,{color:"primary"}),label:"\u0424\u0456\u0437\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"}),Object(a.jsx)(I.a,{value:"Legal person",control:Object(a.jsx)(L.a,{color:"primary"}),label:"\u042e\u0440\u0438\u0434\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"})]})]}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(o.a,{children:Object(a.jsx)(p.a,{onChange:function(e,t){E(t)},name:"country",id:"auto-complete",options:x,getOptionLabel:function(e){return e},autoComplete:!0,style:{width:300},renderInput:function(e){return Object(a.jsx)(j.a,Object(l.a)(Object(l.a)({},e),{},{label:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0440\u0430\u0457\u043d\u0443",margin:"normal"}))}})}),Object(a.jsx)(j.a,{value:S.name,onChange:J,name:"name",fullWidth:!0,width:"2",className:u.Input,id:"outlined-basic",label:"\u0406\u043c'\u044f",variant:"outlined"}),Object(a.jsx)(j.a,{value:S.edrpou,onChange:J,name:"edrpou",fullWidth:!0,className:u.Input,id:"outlined-basic",label:"\u0404\u0414\u0420\u041f\u041e\u0423",variant:"outlined"}),Object(a.jsxs)(o.a,{className:u.InputsBox,children:[Object(a.jsxs)(o.a,{className:u.InputBox,children:[Object(a.jsx)(j.a,{value:S.title,onChange:J,className:u.Input,name:"title",id:"outlined-basic",label:"\u041d\u0430\u0437\u0432\u0430",variant:"outlined"}),Object(a.jsx)(j.a,{value:S.adress,onChange:J,className:u.Input,name:"adress",id:"outlined-basic",label:"\u0410\u0434\u0440\u0435\u0441\u0430",variant:"outlined"})]}),t]})]}),Object(a.jsx)(b.a,{onClick:W,children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})}):null,Object(a.jsx)(a.Fragment,{children:n})}var W=function(){var e,t=w(),n=Object(c.useState)(!1),r=Object(T.a)(n,2),s=r[0],l=r[1],j=Object(i.c)((function(e){return e.clients.client})),p=Object(i.c)((function(e){return e.declarants.declarants})),O=Object(i.c)((function(e){return e.declarants.newDeclarants}));return e=0!==p.length?p.map((function(e,t){return Object(a.jsx)(o.a,{children:Object(a.jsx)(I.a,{control:Object(a.jsx)(k.a,{name:"checkedB",color:"primary"}),label:e.name})},t)})):null,Object(a.jsx)("div",{className:t.root,children:Object(a.jsxs)(d.a,{maxWidth:"md",className:t.declarantsBlock,children:[Object(a.jsx)(u.a,{variant:"h4",children:"\u0417\u0430\u044f\u0432\u043d\u0438\u043a\u0438"}),e,Object(a.jsx)(o.a,{className:t.Button,children:Object(a.jsxs)(b.a,{onClick:function(){return l(!s)},variant:"outlined",color:"primary",children:["\u0414\u043e\u0434\u0430\u0442\u0438",Object(a.jsx)(S.a,{fontSize:"small"})]})}),Object(a.jsx)(V,{visibleForm:s,setVisibleForm:l}),Object(a.jsx)(o.a,{className:t.Button,children:Object(a.jsx)(b.a,{onClick:function(){C(j,p,O)},variant:"contained",color:"primary",href:"#contained-buttons",children:"\u0417\u0431\u0435\u0440\u0456\u0433\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443"})})]})})};var J,P=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(E,{}),Object(a.jsx)(W,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,563)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Y={clients:[],client:null},G={declarants:[],newDeclarants:[],currentNewDerclarant:{}},U=Object(r.combineReducers)({clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{clients:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{client:t.payload});default:return e}},declarants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(l.a)(Object(l.a)({},e),{},{declarants:t.payload});case y:return Object(l.a)(Object(l.a)({},e),{},{declarants:e.declarants.concat([t.payload])});case v:return Object(l.a)(Object(l.a)({},e),{},{newDeclarants:e.newDeclarants.concat([t.payload])});case g:return Object(l.a)(Object(l.a)({},e),{},{currentNewDerclarant:t.payload});default:return e}}}),_=function(e){return e.clients.client},H=n(194),Q=n(130),X=n(39),q=n.n(X),z=n(46),K=q.a.mark(ne),Z=q.a.mark(ae),$=q.a.mark(ie),ee="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDk5MzM1ODMsImV4cCI6MTYxMjUyNTU4Mywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.oa-YaDO-4UKGP9Z_IjIQRQfKQ6cgRrpNLSr71Si0YKhFUOAVGqQWmQgHkKj8PLBtdCBKr5ERNcoBagvw7C8QkdLd3Ruoks2VxOd7DDkj6WnAEqeEcc9WVOpEjFuIOWXVRDhwK1KtwwOd9jjd5I93EY8SNi5zvf6AV0oOJ4xETIoOWFuYLT0-KxgJYn8JPwErAQNpHyaLVBTHRB0dNk8NF7C3imKGzHxDX5zijpV5HwX1PSg8AT0DVSSu568B7DqLuQlFVcwRJme3JfpeaJP9YbYZTxyMMvIP3Pi4PqmEendySc8DAzCWWSYytfqvpTleqRIFgEEkG1nRU4Muu42bPYGLW5VnHIGiR3wgWc0rlkfae9pIXFrhEGvkD3eOyvTGnvD3YjAXsTQU2M_0PA6HP2i96eTnZO5noT3jnFWl3VYvqNLLpdeVgqNAFMmS8h9dLoDdux9mVh8q86Yg8mG4tk99ZCyVVdsYuUsVCwPneVjBXUxDfvqFpj-ItJx_hSZAydOhXvkFPdu4vgrHfWY6FMM0W-fFyHxV2gkiah5NMvYMAW1JlXSDIm2ZO64kF4kIvN3heFp17NWXxPhMDkrtrjDsWypHVhvw2ROljLCuiEoT7nOIvbsIek3eTqLmnRj3AyLmHSHxZPu0-W182m3Q8RJzhzj3aJe6RIAHRAxSCgs",te="Bearer";function ne(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(O,ae);case 2:return e.next=4,Object(z.d)(x,ie);case 4:case"end":return e.stop()}}),K)}function ae(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(z.a)(ce);case 2:return e=t.sent,t.next=5,Object(z.b)({type:h,payload:e});case 5:case"end":return t.stop()}}),Z)}function ce(){return re.apply(this,arguments)}function re(){return(re=Object(Q.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://lexberry.com.ua/api/v1/clients",{method:"GET",headers:{Authorization:te+" "+ee}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(z.c)(_);case 2:return J=t.sent,t.next=5,Object(z.a)(se);case 5:return t.next=7,Object(z.a)(se);case 7:return e=t.sent,t.next=10,Object(z.b)({type:f,payload:e});case 10:case"end":return t.stop()}}),$)}function se(){return le.apply(this,arguments)}function le(){return(le=Object(Q.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://lexberry.com.ua/api/v1/applicants?filter[client:id]=".concat(J.id),{method:"GET",headers:{Authorization:te+" "+ee}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var oe=n(192),ue=Object(H.a)(),de=Object(r.createStore)(U,Object(oe.composeWithDevTools)(Object(r.applyMiddleware)(ue))),je=Object(a.jsx)(i.a,{store:de,children:Object(a.jsx)(P,{})});ue.run(ne),Object(s.a)(je,document.getElementById("root")),M()}},[[515,1,2]]]);
//# sourceMappingURL=main.39042cc9.chunk.js.map