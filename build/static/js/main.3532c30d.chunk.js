(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),i=function(e){var n=e.newFilter,t=e.setNewFilter;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}}))},l=t(3),s=t.n(l),m="/api/persons",d=function(){return s.a.get(m).then((function(e){return e.data}))},f=function(e){return s.a.post(m,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},w=function(e){var n=e.setMessage,t=e.newName,a=e.newNumber,o=e.persons,u=e.setPersons,c=e.setNewName,i=e.setNewNumber;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:function(e){i(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){e.preventDefault();var r={name:t,number:a};if(o.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))){var l=o.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));window.confirm("".concat(t," is already added to the phonebook, \n      replace the old number with a new one?"))&&b(l.id,r).then((function(e){u(o.map((function(n){return n.id===l.id?e:n}))),c(""),i("")})).catch((function(e){n("Information of ".concat(l.name," has already been removed from server")),setTimeout((function(){n(null)}),5e3)}))}else f(r).then((function(e){u(o.concat(e)),c(""),i(""),n("Added ".concat(r.name)),setTimeout((function(){n(null)}),2e3)}))},type:"submit"},"add")))},h=function(e){var n=e.persons,t=e.newFilter,a=e.setPersons;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number,r.a.createElement("button",{key:e.name,onClick:function(){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&p(e.id).then((function(){a(n.filter((function(n){return n.id!==e.id})))}))}(e)}},"delete"))}))},v=function(e){var n=e.message;return null===n?null:n.includes("Added")?r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n):n.includes("Information")?r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n):void 0},E=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),s=l[0],m=l[1],f=Object(a.useState)(""),b=Object(c.a)(f,2),p=b[0],E=b[1],g=Object(a.useState)(""),N=Object(c.a)(g,2),k=N[0],y=N[1],j=Object(a.useState)(null),C=Object(c.a)(j,2),O=C[0],S=C[1];return Object(a.useEffect)((function(){d().then((function(e){o(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:O}),r.a.createElement(i,{newFilter:k,setNewFilter:y}),r.a.createElement("h3",null,"add a new"),r.a.createElement(w,{setMessage:S,newName:s,newNumber:p,persons:t,setPersons:o,setNewName:m,setNewNumber:E}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(h,{setPersons:o,persons:t,newFilter:k}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3532c30d.chunk.js.map