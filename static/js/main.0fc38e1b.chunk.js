(this.webpackJsonpreact_add_random_user=this.webpackJsonpreact_add_random_user||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),c=n(17),o=n.n(c),a=(n(25),n(26),n.p+"static/media/cw.22310668.svg"),r=n.p+"static/media/design.9f215bce.svg",d=n(20),l=n(8),u=n.n(l),j=n(18),b=n(3),m=(n(28),n.p+"static/media/man.4b684e29.svg"),p=n.p+"static/media/mail.42e0750e.svg",v=n.p+"static/media/woman.05242306.svg",O=n.p+"static/media/growing-up-man.5024153b.svg",h=n.p+"static/media/padlock.8d2c33d2.svg",g=n.p+"static/media/phone.d017e1ae.svg",x=n.p+"static/media/growing-up-woman.a1585842.svg",f=n.p+"static/media/map.ae1ce11d.png",w=n(19),N=n.n(w),M=n(0),y=function(){var e,t,n,i,c=Object(s.useState)([]),o=Object(b.a)(c,2),a=o[0],r=o[1],l=Object(s.useState)(!0),w=Object(b.a)(l,2),y=w[0],_=w[1],k=Object(s.useState)(!1),C=Object(b.a)(k,2),S=C[0],F=C[1],U=Object(s.useState)({show:!0,upper:"",bottom:""}),L=Object(b.a)(U,2),A=L[0],E=L[1],P=Object(s.useState)([]),T=Object(b.a)(P,2),B=T[0],I=T[1];Object(s.useEffect)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://randomuser.me/api/").then((function(e){return r(e.data.results)}));case 2:case"end":return e.stop()}}),e)}))),[y]);return Object(M.jsxs)("div",{className:"Cards",children:[Object(M.jsxs)("div",{className:"Card",children:[Object(M.jsx)("div",{className:"photo_box",children:Object(M.jsx)("img",{id:"profil_photo",src:(null===(e=a[0])||void 0===e||null===(t=e.picture)||void 0===t?void 0:t.large)||null,alt:"photo"})}),Object(M.jsxs)("div",{className:"infos",children:[A.show,Object(M.jsx)("h4",{className:"info",children:A.upper}),Object(M.jsx)("h3",{className:"isa",children:A.bottom})]}),Object(M.jsxs)("div",{className:"icons",children:[Object(M.jsx)("img",{className:"icon",src:"male"==(null===(n=a[0])||void 0===n?void 0:n.gender)?m:v,alt:"name",onMouseOver:function(){var e,t;return E({show:!0,upper:"My name is",bottom:null===(e=a[0])||void 0===e||null===(t=e.name)||void 0===t?void 0:t.first})},onMouseOut:function(){return E({show:!1,upper:"",bottom:""})}}),Object(M.jsx)("img",{className:"icon",src:p,alt:"mail",onMouseOver:function(){var e;return E({upper:"My e-mail is",bottom:null===(e=a[0])||void 0===e?void 0:e.email})},onMouseOut:function(){return E({show:!1,upper:"",bottom:""})}}),Object(M.jsx)("img",{className:"icon",src:"male"==(null===(i=a[0])||void 0===i?void 0:i.gender)?O:x,alt:"gwoman-gman",onMouseOver:function(){var e,t;return E({upper:"My age is",bottom:null===(e=a[0])||void 0===e||null===(t=e.dob)||void 0===t?void 0:t.age})},onMouseOut:function(){return E({show:!1,upper:"",bottom:""})}}),Object(M.jsx)("img",{className:"icon",src:f,alt:"map",onMouseOver:function(){var e,t,n,s;return E({upper:"My city is",bottom:(null===(e=a[0])||void 0===e||null===(t=e.location)||void 0===t?void 0:t.city)+", "+(null===(n=a[0])||void 0===n||null===(s=n.location)||void 0===s?void 0:s.country)})},onMouseOut:function(){return E({show:!1,upper:"",bottom:""})}}),Object(M.jsx)("img",{className:"icon",src:g,alt:"phone",onMouseOver:function(){var e;return E({upper:"My phone is",bottom:null===(e=a[0])||void 0===e?void 0:e.cell})},onMouseOut:function(){return E({show:!1,upper:"",bottom:""})}}),Object(M.jsx)("img",{className:"icon",src:h,alt:"padlock",onMouseOver:function(){var e,t;return E({upper:"My password is",bottom:null===(e=a[0])||void 0===e||null===(t=e.login)||void 0===t?void 0:t.password})},onMouseOut:function(){return E({show:!1,upper:"",bottom:""})}})]}),Object(M.jsxs)("div",{className:"btn-group",children:[Object(M.jsx)("button",{type:"button",className:"btn newUser",onClick:function(){_(!y)},children:"New User"}),Object(M.jsx)("button",{type:"button",className:"btn addUser",onClick:function(){!function(){var e,t,n,s;I([].concat(Object(d.a)(B),[{id:null===(e=a[0])||void 0===e||null===(t=e.login)||void 0===t?void 0:t.uuid,first:null===(n=a[0])||void 0===n||null===(s=n.name)||void 0===s?void 0:s.first,email:a[0].email,phone:a[0].cell,age:a[0].dob.age}]))}(),F(!0)},children:"Add User"})]})]}),Object(M.jsx)("div",{className:"addUserList",children:Object(M.jsxs)("table",{children:[S?Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{className:"userListTable",children:[Object(M.jsx)("th",{children:"First"}),Object(M.jsx)("th",{children:"Email"}),Object(M.jsx)("th",{children:"Phone"}),Object(M.jsx)("th",{children:"Age"})]})}):null,Object(M.jsx)("tbody",{children:B.map((function(e,t){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:e.first}),Object(M.jsx)("td",{children:e.email}),Object(M.jsx)("td",{children:e.phone}),Object(M.jsx)("td",{children:e.age})]},t)}))})]})})]})},_=function(){return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)("div",{children:Object(M.jsx)("img",{id:"cw_logo",src:a})}),Object(M.jsx)(y,{}),Object(M.jsxs)("div",{className:"bottom",children:[Object(M.jsx)("p",{id:"ed8en",children:"<eden8/>"}),Object(M.jsx)("img",{id:"design_logo",src:r}),Object(M.jsx)("p",{id:"design",children:"design"})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),c(e),o(e)}))};o.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(_,{})}),document.getElementById("root")),k()}},[[49,1,2]]]);
//# sourceMappingURL=main.0fc38e1b.chunk.js.map