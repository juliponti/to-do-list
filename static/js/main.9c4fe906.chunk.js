(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(8),o=n.n(s),i=(n(13),n(7)),r=n(5),l=n(6),j=(n(14),a.a.createContext(null)),u=j.Provider,b=j,d=n(0);var O=function(e){var t=e.toDo,n=Object(c.useContext)(b);return Object(d.jsxs)("li",{className:t.done?"task-done":"list-item",children:[t.title,Object(d.jsxs)("label",{className:"tools-container",children:[Object(d.jsx)("input",{type:"checkbox",className:"checkbox"}),Object(d.jsx)("span",{className:"checkmark",onClick:function(){return n.taskDone(t)}}),Object(d.jsx)("button",{onClick:function(){return n.removeToDo(t)},children:"\ud83d\uddd1\ufe0f"})]})]})};n(16);var h=function(e){var t=e.toDos;return Object(d.jsx)("ul",{className:"list",children:t.map((function(e){return Object(d.jsx)(O,{toDo:e},e.title)}))})};n(17);var m=function(e){var t=e.value,n=e.onChange;return Object(d.jsx)("input",{type:"text",placeholder:"Escribir nueva tarea ...",className:"input",value:t,onChange:n})},x=n.p+"static/media/cyborg-octopus.348f3655.png";n(18);var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),j=o[0],b=o[1],O={removeToDo:function(e){var t=n.filter((function(t){return t.title!==e.title}));a(t)},taskDone:function(e){var t=n.indexOf(e),c=Object(r.a)(n);c[t]=Object(i.a)(Object(i.a)({},e),{},{done:!e.done}),a(c)}};return Object(d.jsx)(u,{value:O,children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("header",{className:"app-header",children:[Object(d.jsx)("div",{className:"text-header__container",children:Object(d.jsx)("h1",{children:" To do list "})}),Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:x,className:"img",alt:"octopus"})})]}),Object(d.jsxs)("main",{className:"app-main",children:[Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={title:j,done:!1};""!==t.title&&a([].concat(Object(r.a)(n),[t])),b("")},children:[Object(d.jsx)(m,{value:j,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("button",{className:"btn",children:"Agregar Tarea"})]})}),Object(d.jsx)(h,{toDos:n})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.9c4fe906.chunk.js.map