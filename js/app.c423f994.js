(function(e){function t(t){for(var r,c,d=t[0],s=t[1],i=t[2],u=0,b=[];u<d.length;u++)c=d[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,d=1;d<n.length;d++){var s=n[d];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3551:function(e,t,n){"use strict";n("cca4")},"435c":function(e,t,n){"use strict";n("fd08")},"4fbe":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},o={key:0};function c(e,t,n,c,d,s){var i=Object(r["n"])("Header"),l=Object(r["n"])("AddTask"),u=Object(r["n"])("Tasks");return Object(r["j"])(),Object(r["d"])("div",a,[Object(r["g"])(i,{onToggleAddTask:s.toggleAddTask,title:"Header",showAddTask:d.showAddTask},null,8,["onToggleAddTask","showAddTask"]),d.showAddTask?(Object(r["j"])(),Object(r["d"])("div",o,[Object(r["g"])(l,{onAddTask:s.addTask},null,8,["onAddTask"])])):Object(r["c"])("",!0),Object(r["g"])(u,{onToggleReminder:s.toggleReminder,onDeleteTask:s.deleteTask,tasks:d.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var d=n("5530"),s=n("2909");n("99af"),n("4de4"),n("d81d");Object(r["l"])("data-v-a4c126fc");var i=Object(r["e"])("h1",null,"Task Tracker",-1);function l(e,t,n,a,o,c){var d=Object(r["n"])("Button");return Object(r["j"])(),Object(r["d"])("header",null,[i,Object(r["g"])(d,{onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function u(e,t,n,a,o,c){return Object(r["j"])(),Object(r["d"])("button",{onClick:t[0]||(t[0]=function(e){return c.onClick()}),style:Object(r["i"])({background:n.color}),class:"btn"},Object(r["o"])(n.text),5)}Object(r["k"])();var b={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},f=n("6b0d"),k=n.n(f),m=k()(b,[["render",u]]),p={name:"Header",props:{showAddTask:Boolean},components:{Button:m}},j=(n("df0f"),k()(p,[["render",l],["__scopeId","data-v-a4c126fc"]]));function O(e,t,n,a,o,c){var d=Object(r["n"])("Task");return Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(n.tasks,(function(t){return Object(r["j"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(d,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function h(e,t,n,a,o,c){return Object(r["j"])(),Object(r["d"])("div",{onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:Object(r["h"])([n.task.reminder?"reminder":"","task"])},[Object(r["e"])("h3",null,[Object(r["f"])(Object(r["o"])(n.task.text)+" ",1),Object(r["e"])("i",{onClick:t[0]||(t[0]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["e"])("p",null,Object(r["o"])(n.task.day),1)],34)}var g={name:"Task",props:{task:Object}},T=(n("6d55"),k()(g,[["render",h]])),v={name:"Tasks",props:{tasks:Array},components:{Task:T},emits:["delete-task","toggle-reminder"]},y=k()(v,[["render",O]]);Object(r["l"])("data-v-0ba44ccb");var A={class:"form-control"},x=Object(r["e"])("label",null,"Task",-1),w={class:"form-control"},S=Object(r["e"])("label",null,"Day and Time",-1),M={class:"form-control form-control-check"},_=Object(r["e"])("label",null,"Set Reminder",-1),D=Object(r["e"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1);function P(e,t,n,a,o,c){return Object(r["j"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["e"])("div",A,[x,Object(r["r"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["q"],o.text]])]),Object(r["e"])("div",w,[S,Object(r["r"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.day=e}),name:"day",placeholder:"Add Day and Time"},null,512),[[r["q"],o.day]])]),Object(r["e"])("div",M,[_,Object(r["r"])(Object(r["e"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.reminder=e}),name:"reminder"},null,512),[[r["p"],o.reminder]])]),D],32)}Object(r["k"])();var R={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please, add a task")}}},$=(n("435c"),k()(R,[["render",P],["__scopeId","data-v-0ba44ccb"]])),C={name:"App",components:{Header:j,Tasks:y,AddTask:$},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(e){this.tasks=[].concat(Object(s["a"])(this.tasks),[e])},deleteTask:function(e){confirm("Are you sure?")&&(this.tasks=this.tasks.filter((function(t){return t.id!==e})))},toggleReminder:function(e){this.tasks=this.tasks.map((function(t){return t.id===e?Object(d["a"])(Object(d["a"])({},t),{},{reminder:!t.reminder}):t}))}},created:function(){this.tasks=[{id:1,text:"Doctors Appointment",day:"March 1st at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"March 3rd at 1:30pm",reminder:!1},{id:3,text:"Food Shopping",day:"March 3rd at 11:00am",reminder:!1}]}},B=(n("3551"),k()(C,[["render",c]]));Object(r["b"])(B).mount("#app")},"6d55":function(e,t,n){"use strict";n("4fbe")},a5d7:function(e,t,n){},cca4:function(e,t,n){},df0f:function(e,t,n){"use strict";n("a5d7")},fd08:function(e,t,n){}});
//# sourceMappingURL=app.c423f994.js.map