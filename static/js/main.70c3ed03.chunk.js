(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(5),o=n.n(r),c=n(6),u=n(7),s=n(3);var i=function(){return a.a.useEffect((function(){return console.log("Hello \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u043b\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437"),function(){console.log("Hello \u0443\u0434\u0430\u043b\u044f\u0435\u0442\u0441\u044f")}}),[]),a.a.createElement("h2",null,"Hello, World!")};function m(e,t){switch(t.type){case"ADD_NUMBER":return Object(s.a)({},e,{numbers:[].concat(Object(u.a)(e.numbers),[t.payload])});case"TOGGLE_VISIBLE_HELLO":return Object(s.a)({},e,{showHello:!1});default:return e}}function E(e){return Object(s.a)({},e,{numbers:[5,5,5]})}var f=function(){var e=a.a.useReducer(m,{showHello:!0,numbers:[1,2,3]},E),t=Object(c.a)(e,2),n=t[0],l=t[1],r=a.a.useRef(null),o=a.a.useRef(["hello","world"]);return a.a.createElement("div",{className:"App"},n.showHello&&a.a.createElement(i,null),a.a.createElement("button",{onClick:function(){l({type:"TOGGLE_VISIBLE_HELLO"})}},"\u0421\u043a\u0440\u044b\u0442\u044c/\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c Hello"),a.a.createElement("ul",null,n.numbers.map((function(e,t){return a.a.createElement("li",{key:t},e)}))),a.a.createElement("button",{onClick:function(){var e=Math.round(10*Math.random());l({type:"ADD_NUMBER",payload:e})}},"\u041d\u043e\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("hr",null),a.a.createElement("input",{ref:r,type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d"}),a.a.createElement("button",{onClick:function(){r.current.focus(),console.log(o)}},"\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u0438\u043d\u043f\u0443\u0442"))};n(13);o.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.70c3ed03.chunk.js.map