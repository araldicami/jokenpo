(this.webpackJsonpjokenpo=this.webpackJsonpjokenpo||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(15),r=n.n(o),s=(n(21),n(10)),i=(n(22),n(23),n(2));function l(e){var t=e.name,n=e.icon,a=e.score,c=void 0===a?0:a;return Object(i.jsxs)("div",{className:"scoreboard-char",children:[Object(i.jsxs)("p",{children:[t,":"]}),Object(i.jsx)("p",{className:"scoreboard-char-points",children:c}),Object(i.jsx)("span",{children:n})]})}n(25);function j(e){var t=e.personOption,n=e.robotOption,a=e.personScore,c=e.robotScore,o=e.name,r=e.avatar,s={pedra:"\u270a",papel:"\ud83e\udd1a",tesoura:"\u270c"};return Object(i.jsxs)("div",{className:"scoreboard",children:[Object(i.jsx)(l,{name:o||"Voc\xea",score:a,icon:t?s[t]:r}),Object(i.jsx)(l,{name:"Computador",score:c,icon:n?s[n]:"\ud83d\udc7e"})]})}function u(e){var t=e.name,n=e.avatar,c=["pedra","papel","tesoura"],o=Object(a.useState)(""),r=Object(s.a)(o,2),l=r[0],u=r[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),O=d[0],p=d[1],h=Object(a.useState)(0),v=Object(s.a)(h,2),m=v[0],x=v[1],f=Object(a.useState)(0),N=Object(s.a)(f,2),S=N[0],k=N[1];function g(e){var t=Math.floor(Math.random()*c.length),n=c[t];n&&e&&(n===e?console.log("empate"):"pedra"===n&&"tesoura"===e||"tesoura"===n&&"papel"===e||"papel"===n&&"pedra"===e?k(S+1):x(m+1)),p(c[t]),u(e)}function C(){u(""),k(0),x(0),p("")}return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"board",children:[Object(i.jsx)("h1",{children:"Pedra, papel, tesoura!"}),Object(i.jsx)("h4",{children:"Escolha a sua jogada"}),Object(i.jsxs)("div",{className:"board-options",children:[Object(i.jsx)("button",{onClick:function(){return g(c[0])},children:"\u270a"}),Object(i.jsx)("button",{onClick:function(){return g(c[1])},children:"\u270b"}),Object(i.jsx)("button",{onClick:function(){return g(c[2])},children:"\u270c"})]}),Object(i.jsx)(j,{personOption:l,robotOption:O,personScore:m,robotScore:S,name:t,avatar:n})]}),Object(i.jsxs)("div",{className:"board-button-commands",children:[Object(i.jsx)("button",{onClick:C,className:"button-reset",children:"Resetar"}),Object(i.jsx)("button",{onClick:function(){m>S?alert("Voc\xea venceu \ud83c\udf89"):m<S?alert("O computador venceu voc\xea \ud83d\ude2f"):alert("Empatou \ud83d\ude22"),C()},children:"Finalizar partida"})]})]})}var b=n(16);n(29);function d(e){var t=e.open,n=e.setOpen,a=e.children;return Object(i.jsx)("div",{className:"modal-overlay ".concat(t?"open":"close"),onClick:n,children:Object(i.jsx)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:a})})}n(30);function O(e){var t=e.openModal,n=e.setOpenModal,c=e.setPlay,o=e.avatar,r=e.setAvatar,l=e.name,j=e.setName,u=Object(a.useState)(!1),O=Object(s.a)(u,2),p=O[0],h=O[1];return Object(i.jsx)(d,{open:t,setOpen:n,children:Object(i.jsxs)("div",{className:"choose-avatar",children:[Object(i.jsx)("h4",{children:"Informa\xe7\xf5es do jogador"}),Object(i.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)},className:"choose-avatar-input",placeholder:"Qual seu nome?"}),Object(i.jsx)("button",{className:"choose-avatar-button",onClick:function(){return h(!p)},children:o}),p?Object(i.jsx)("div",{className:"choose-avatar-picker",children:Object(i.jsx)(b.a,{showSkinTones:!1,set:"twitter",showPreview:!1,color:"#0351BD",exclude:["flags","recent"],search:!1,onSelect:function(e){return r(e.native)}})}):null,Object(i.jsx)("button",{className:"play",onClick:c,children:"Play"})]})})}n(31);var p=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("\ud83d\ude03"),r=Object(s.a)(o,2),l=r[0],j=r[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),p=d[0],h=d[1];return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(u,{name:p,avatar:l}),Object(i.jsx)(O,{name:p,setName:h,avatar:l,setAvatar:j,openModal:n,setOpen:function(){return c(!n)},setPlay:function(){return c(!n)}})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.05852dbf.chunk.js.map