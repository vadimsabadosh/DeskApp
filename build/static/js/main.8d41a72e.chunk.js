(this.webpackJsonpDeskApp=this.webpackJsonpDeskApp||[]).push([[0],{170:function(e,t,n){e.exports=n(267)},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);n(171),n(197),n(199),n(200),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239);var a=n(2),c=n.n(a),r=n(104),o=n.n(r),l=n(50),u=n(27),i=n(105),s=n(106),m=n(116),d=n(115),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1,stack:null,message:null},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("div",null,c.a.createElement("h1",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."),c.a.createElement("button",{onClick:function(){return window.location.reload()}},"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,stack:e.stack,message:e.message}}}]),n}(c.a.Component),E=n(72),h=n(6),k=(n(257),n(16)),p=(n(258),function(e){var t=e.id,n=e.children,a=e.onDelete,r=e.onClick;return c.a.createElement(h.d,{size:"l",onClick:r},c.a.createElement(h.f,{className:"DeskItem_content"},n,c.a.createElement(h.c,{mode:"destructive",onClick:function(){k.a.firestore().collection("desks").doc(t).delete().then((function(){return a(t)})).catch(console.error)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}),b=function(e){var t=e.desks,n=e.onDelete,r=e.onLoadDesks,o=e.onDesksClick;return Object(a.useEffect)((function(){k.a.firestore().collection("desks").get().then((function(e){var t=[];e.forEach((function(e){t.push({id:e.id,name:e.data().name})})),r(t)}))}),[]),t.length?c.a.createElement(h.e,null,t.map((function(e){var t=e.id,a=e.name;return c.a.createElement(p,{onClick:function(){return o(t)},key:t,id:t,onDelete:n},a)}))):null},v=n(41),C=n(110),j=n.n(C),O="button",g="form",D="default",I="error",S=function(e){var t=e.onSubmit,n=e.placeholder,r=e.actionTitle,o=Object(a.useState)(O),l=Object(u.a)(o,2),i=l[0],s=l[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),f=d[0],E=d[1],k=Object(a.useState)(D),p=Object(u.a)(k,2),b=p[0],v=p[1],C=function(){v(D),E(""),s(O)},S=function(e){e&&e.preventDefault(),f.trim().length?t(f).then(C):v(I)};return i===O?c.a.createElement(h.f,null,c.a.createElement(h.c,{onClick:function(){return s(g)},size:"l",mode:"primary",stretched:!0,before:c.a.createElement(j.a,{width:24,height:24})},r)):c.a.createElement(h.f,null,c.a.createElement(h.d,{size:"l",mode:"shadow"},c.a.createElement(h.g,{onSubmit:S},c.a.createElement(h.k,{autoFocus:!0,value:f,onChange:function(e){return E(e.target.value)},status:b,placeholder:n}),c.a.createElement("div",null,c.a.createElement(h.c,{onClick:S},r),c.a.createElement(h.c,{onClick:C,mode:"tertiary"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")))))},w=function(e){var t=e.onCreate;return c.a.createElement(S,{onSubmit:function(e){return k.a.firestore().collection("desks").add({name:e}).then((function(e){return e.get()})).then((function(e){t(Object(v.a)({id:e.id},e.data()))})).catch((function(e){console.error("Error writing document: ",e)}))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438",actionTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})},y=function(e){var t=e.onChangePanel,n=e.addDesk,r=e.desks,o=e.removeDesk,l=e.setDesks;return c.a.createElement(a.Fragment,null,c.a.createElement(h.n,null,"\u041c\u043e\u0438 \u0434\u043e\u0441\u043a\u0438"),c.a.createElement(w,{onCreate:n}),c.a.createElement(b,{desks:r,onDelete:o,onLoadDesks:l,onDesksClick:t}))},N=(n(259),n(260),n(111)),P=n.n(N),B=function(e){var t=e.children,n=e.id,a=e.onDelete;return c.a.createElement(h.d,{size:"l"},c.a.createElement(h.f,{className:"ColumnCard-wrapper"},t,c.a.createElement(h.c,{onClick:function(){k.a.firestore().collection("cards").doc(n).delete().then((function(){return a(n)})).catch(console.error)},mode:"tertiary",className:"btn-card",before:c.a.createElement(P.a,null)})))},_=n(57),z=function(e){var t=e.onCreate,n=e.columnId;return c.a.createElement(S,{onSubmit:function(e){return k.a.firestore().collection("cards").add({name:e,columnId:n}).then((function(e){return e.get()})).then((function(e){t(Object(v.a)({id:e.id},e.data()))})).catch((function(e){console.error("Error writing document: ",e)}))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",actionTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})},F=(n(262),function(e){var t=e.columnId,n=Object(a.useState)([]),r=Object(u.a)(n,2),o=r[0],i=r[1],s=function(e){return i(o.filter((function(t){return t.id!==e})))};return Object(a.useEffect)((function(){_.a.firestore().collection("cards").where("columnId","==",t).get().then((function(e){var t=[];e.forEach((function(e){var n=e.data(),a=n.columnID,c=n.name;t.push({id:e.id,columnID:a,name:c})})),i(t)}))}),[]),c.a.createElement(h.e,null,o.map((function(e){var t=e.id,n=e.name;return c.a.createElement(B,{id:t,key:t,onDelete:s},n)})),c.a.createElement("div",{className:"Card-wrapper"},c.a.createElement(z,{columnId:t,onCreate:function(e){return i([].concat(Object(l.a)(o),[e]))}})))}),A=(n(263),n(112)),T=n.n(A),W=function(e){var t=e.name,n=e.id,a=e.onDelete,r=e.setPopout,o=function(){k.a.firestore().collection("columns").doc(n).delete().then((function(){return a(n)})).catch(console.error)},l=Object(h.p)();return c.a.createElement(h.f,{className:"Column"},c.a.createElement("div",{className:"Column-header"},c.a.createElement(h.i,{className:"ColorWhite"},t),c.a.createElement(h.c,{className:"Column-header__button",mode:"overlay_outline",onClick:function(){r(c.a.createElement(h.a,{onClose:function(){return r(null)}},c.a.createElement(h.b,{autoclose:!0,mode:"destructive",onClick:o},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),l===h.j&&c.a.createElement(h.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")))}},c.a.createElement(T.a,null))),c.a.createElement(h.d,{className:"Columns__wrapper"},c.a.createElement(h.f,null),c.a.createElement(h.f,null,c.a.createElement(F,{columnId:n}))))},x=(n(70),function(e){var t=e.onCreate,n=e.deskId;return c.a.createElement(h.f,{className:"Columns"},c.a.createElement(S,{onSubmit:function(e){return k.a.firestore().collection("columns").add({name:e,deskId:n}).then((function(e){return e.get()})).then((function(e){t(Object(v.a)({id:e.id},e.data()))})).catch((function(e){console.error("Error writing document: ",e)}))},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438",actionTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443"}))}),G=function(e){var t=e.goBack,n=e.setColumns,r=e.columns,o=e.removeColumn,l=e.addColumn,u=e.desk,i=e.setPopout;return Object(a.useEffect)((function(){_.a.firestore().collection("columns").where("deskId","==",u.id).get().then((function(e){var t=[];e.forEach((function(e){var n=e.data(),a=n.deskId,c=n.name;t.push({id:e.id,deskId:a,name:c})})),n(t)}))}),[]),c.a.createElement(a.Fragment,null,c.a.createElement(h.n,{left:c.a.createElement(h.m,{onClick:t})},'\u0414\u043e\u0441\u043a\u0430 "',u.name,'"'),c.a.createElement(h.h,{className:"Gallery__in",slideWidth:"85%",align:"center"},r.map((function(e){var t=e.id,n=e.name;return c.a.createElement(W,{setPopout:i,key:t,id:t,name:n,onDelete:o})})),c.a.createElement(x,{deskId:u.id,onCreate:l})))},J="desks",K="columns",L=function(e){var t=e.router,n=Object(a.useState)(J),r=Object(u.a)(n,2),o=r[0],i=r[1],s=Object(a.useState)(null),m=Object(u.a)(s,2),d=m[0],k=m[1],p=Object(a.useState)([]),b=Object(u.a)(p,2),v=b[0],C=b[1],j=Object(a.useState)([]),O=Object(u.a)(j,2),g=O[0],D=O[1],I=Object(a.useState)(null),S=Object(u.a)(I,2),w=S[0],N=S[1];Object(E.b)();return c.a.createElement(E.a,{router:t},c.a.createElement(f,null,c.a.createElement(h.o,{activePanel:o,header:!1,popout:w},c.a.createElement(h.l,{id:J},c.a.createElement(y,{onChangePanel:function(e){i(K),k(v.find((function(t){return t.id===e})))},setDesks:C,addDesk:function(e){return C([].concat(Object(l.a)(v),[e]))},removeDesk:function(e){return C(v.filter((function(t){return t.id!==e})))},desks:v})),c.a.createElement(h.l,{id:K,className:"Columns"},d&&c.a.createElement(G,{desk:d,goBack:function(){return i(J)},addColumn:function(e){return D([].concat(Object(l.a)(g),[e]))},setColumns:D,removeColumn:function(e){return D(g.filter((function(t){return t.id!==e})))},columns:g,setPopout:N})))))},U=n(51),H=n(114),M=[{name:"desks",path:"/"},{name:"columns",path:"/desk"}],Q=(n(264),n(265),n(266),function(){var e=Object(U.b)(M);return e.usePlugin(Object(H.a)()),e.start(),e}());k.a.initializeApp({apiKey:"AIzaSyBexNnElMx6uIs1WPGK0ljnUPNBNH4s74k",authDomain:"deskapp-3e13d.firebaseapp.com",databaseURL:"https://deskapp-3e13d.firebaseio.com",projectId:"deskapp-3e13d",storageBucket:"deskapp-3e13d.appspot.com",messagingSenderId:"762884887001",appId:"1:762884887001:web:a8cbedeea42a097ccc49c8",measurementId:"G-BKFCBB4WJQ"}),k.a.analytics(),o.a.render(c.a.createElement(L,{router:Q}),document.getElementById("root"))},70:function(e,t,n){}},[[170,1,2]]]);
//# sourceMappingURL=main.8d41a72e.chunk.js.map