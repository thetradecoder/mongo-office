(this["webpackJsonpmongo-office"]=this["webpackJsonpmongo-office"]||[]).push([[0],{18:function(e,t,c){},37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),o=c.n(n),s=c(30),r=c.n(s),l=(c(37),c(2)),i=c(3);c(13),c(14),c(12),c(18);function j(){var e=localStorage.getItem("user");function t(){return e?"/mongo-office/accounts/logout/":"/mongo-office/"}return Object(a.jsx)("div",{children:function(){if(e)return Object(a.jsx)("div",{className:"side-nav-container shadow",children:Object(a.jsxs)("div",{className:"side-nav",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Mongo Office"}),Object(a.jsx)("p",{children:"By: theTradeCoder"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(l.b,{to:t,className:"form-control nav-link",children:e?Object(a.jsx)("div",{children:"Logout"}):Object(a.jsx)("div",{children:"Login"})}),Object(a.jsx)(l.b,{to:"/mongo-office/task-manager/",className:"form-control nav-link",children:"Task Manager"}),Object(a.jsx)(l.b,{to:"/mongo-office/event-manager/",className:"form-control nav-link",children:"Event Manager"}),Object(a.jsx)(l.b,{to:"/mongo-office/file-tracker/",className:"form-control nav-link",children:"File Tracker"}),Object(a.jsx)(l.b,{to:"/mongo-office/duty-roster/",className:"form-control nav-link",children:"Duty Roster"}),Object(a.jsx)(l.b,{to:"/mongo-office/cash-register/",className:"form-control nav-link",children:"Cash Register"}),Object(a.jsx)(l.b,{to:"/mongo-office/vehicle-records/",className:"form-control nav-link",children:"Vehicle Records"}),Object(a.jsx)(l.b,{to:"/mongo-office/travel-records/",className:"form-control nav-link",children:"Travel Records"}),Object(a.jsx)(l.b,{to:"/mongo-office/meeting-records/",className:"form-control nav-link",children:"Meeting Records"}),Object(a.jsx)(l.b,{to:"/mongo-office/medical-records/",className:"form-control nav-link",children:"Medical Records"}),Object(a.jsx)(l.b,{to:"/mongo-office/plan-master/",className:"form-control nav-link",children:"Plan Master"}),Object(a.jsx)(l.b,{to:"/mongo-office/project-manager/",className:"form-control nav-link",children:"Project Manager"}),Object(a.jsx)(l.b,{to:"/mongo-office/business-contacts/",className:"form-control nav-link",children:"Business Contacts"}),Object(a.jsx)(l.b,{to:"/mongo-office/employee-contacts/",className:"form-control nav-link",children:"Employee Contacts"}),Object(a.jsx)(l.b,{to:"/mongo-office/airline-contacts/",className:"form-control nav-link",children:"Airline Contacts"}),Object(a.jsx)(l.b,{to:"/mongo-office/association-contacts/",className:"form-control nav-link",children:"Association Contacts"}),Object(a.jsx)(l.b,{to:"/mongo-office/embassy-contacts/",className:"form-control nav-link",children:"Embassy Contacts"}),Object(a.jsx)(l.b,{to:"/mongo-office/visa-centers/",className:"form-control nav-link",children:"Visa Centers"})]})]})})}()})}var d=c(4),m=c(10),b=c.n(m);function u(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(""),m=Object(d.a)(j,2),u=m[0],f=m[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),g=O[0],x=O[1],p=Object(n.useState)(""),v=Object(d.a)(p,2),N=v[0],w=v[1],k=Object(n.useState)(""),y=Object(d.a)(k,2),S=y[0],C=y[1],T=localStorage.getItem("user"),I=localStorage.getItem("userid");return Object(n.useEffect)((function(){b.a.get("http://localhost:5000/mongo-office/task-manager/view/".concat(T,"/").concat(I)).then((function(e){C(e.data.filter((function(e){return"open"===e.status})).map((function(e){return Object(a.jsxs)("div",{className:"shadow single-task",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsxs)("p",{children:["Task details: ",e.details]}),Object(a.jsxs)("p",{children:["Progress: ",e.progress,Object(a.jsx)("br",{})," Deadline: ",e.deadline,", Assigned to: ",e.assignedTo]}),Object(a.jsxs)("p",{className:"text-muted",children:["Edit key: ",e._id]})]})})))})).catch((function(e){return window.alert(e)}))})),Object(a.jsxs)("div",{className:"body-part",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-center",children:"Task Manager"}),Object(a.jsx)("hr",{})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{className:"nav nav-tabs pt-2",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link active primary","data-toggle":"tab",href:"#view",children:"View Task"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link warning","data-toggle":"tab",href:"#add",children:"Add New Task"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link danger","data-toggle":"tab",href:"#edit",children:"Edit Task"})})]}),Object(a.jsxs)("div",{className:"tab-content",children:[Object(a.jsx)("div",{id:"view",className:"tab-pane active",children:Object(a.jsx)("div",{children:S})}),Object(a.jsxs)("div",{id:"add",className:"tab-pane fade",children:[Object(a.jsx)("h3",{children:"Add New Task"}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,details:l,assignedTo:u,deadline:g,progress:"No progress recorded",status:"open",editPassword:N};b.a.post("http://localhost:5000/mongo-office/task-manager/add/".concat(T,"/").concat(I),t).then((function(e){return window.alert(e.data)})).catch((function(e){return window.alert(e)}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Task name / title:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Task title",onChange:function(e){o(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Task details:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Task details",onChange:function(e){i(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Assigned to:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Assigned to",onChange:function(e){f(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Deadline:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Deadline",onChange:function(e){x(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Edit/Delete protection password: "}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"edit/delete protection password",onChange:function(e){w(e.target.value)}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})]}),Object(a.jsxs)("div",{id:"edit",className:"tab-pane fade",children:[Object(a.jsx)("h3",{children:"Edit Task"}),Object(a.jsx)("p",{children:"Edit task"})]})]})]})]})}function f(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],j=r[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),f=u[0],h=u[1],O=Object(n.useState)(),g=Object(d.a)(O,2),x=g[0],p=g[1],v=Object(n.useState)(""),N=Object(d.a)(v,2),w=N[0],k=N[1],y=Object(n.useState)(""),S=Object(d.a)(y,2),C=S[0],T=S[1];var I={username:c,email:i,password:f,firstName:x,lastName:w,mobile:C};return Object(a.jsx)("div",{className:"body-part signup shadow",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("http://localhost:5000/mongo-office/accounts/".concat(c),I).then((function(e){window.alert(e.data),window.location="/mongo-office/"})).catch((function(e){return window.alert(e)}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"username",onChange:function(e){o(e.target.value)},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"email",onChange:function(e){j(e.target.value)},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"password",onChange:function(e){h(e.target.value)},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"First name:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"first name",onChange:function(e){p(e.target.value)},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Last name:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"full name",onChange:function(e){k(e.target.value)},required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Mobile number:"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"mobile number",onChange:function(e){T(e.target.value)},required:!0})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:"btn btn-primary form-control",children:"Signup"})}),Object(a.jsx)("div",{className:"pt-3",children:Object(a.jsx)(l.b,{to:"/mongo-office/",children:"Have an account? Login here"})})]})})}function h(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],j=r[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),f=u[0],h=u[1],O=Object(n.useState)(""),g=Object(d.a)(O,2),x=g[0],p=g[1],v=Object(n.useState)(""),N=Object(d.a)(v,2),w=N[0],k=N[1];function y(e){o(e.target.value)}function S(e){j(e.target.value)}function C(e){e.preventDefault(),b.a.post("http://localhost:5000/mongo-office/accounts/login/".concat(c,"/").concat(i)).then((function(e){e.data.username?(p(e.data.userid),h(e.data.username),k(e.data.firstName),window.location.assign("/mongo-office/")):window.alert("incorrect information!")})).catch((function(e){return window.alert(e)}))}return localStorage.getItem("userid")||localStorage.setItem("userid",x),localStorage.getItem("user")||localStorage.setItem("user",f),localStorage.getItem("firstname")||localStorage.setItem("firstname",w),Object(a.jsx)("div",{children:localStorage.getItem("user")?Object(a.jsxs)("div",{className:"body-part login shadow",children:[Object(a.jsxs)("p",{children:["Hi ",localStorage.getItem("firstname")," ! "]}),Object(a.jsx)("h4",{className:"text-success",children:"Welcome to MONGO OFFICE! "}),Object(a.jsx)("p",{className:"text-secondary",children:"Please select an item from the menu to continue."})]}):Object(a.jsxs)("div",{className:"body-part login shadow",children:[Object(a.jsx)("h1",{className:"text-center",children:"MONGO OFFICE"}),Object(a.jsx)("p",{className:"text-right text-secondary pb-4 pr-3",children:"By: theTradeCoder"}),Object(a.jsxs)("form",{onSubmit:C,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username"}),Object(a.jsx)("input",{type:"text",className:"form-control",onChange:y,placeholder:"username",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",className:"form-control",onChange:S,placeholder:"password",required:!0})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary form-control mt-5",children:"Login"})]}),Object(a.jsx)("div",{className:"pt-3",children:Object(a.jsx)(l.b,{to:"/mongo-office/accounts/signup/",className:"",children:"Not have an account? Create one"})})]})})}function O(){var e=localStorage.getItem("user"),t=localStorage.getItem("firstname");function c(e){e.preventDefault(),localStorage.clear(),window.location="/mongo-office/"}return Object(a.jsx)("div",{children:e?Object(a.jsx)("div",{className:"body-part logout shadow",children:Object(a.jsxs)("form",{onSubmit:c,children:[Object(a.jsxs)("h2",{className:"text-success",children:["Hey ",t," !"]}),Object(a.jsx)("p",{className:"text-danger",children:"Are you sure to logout?"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-warning form-control",children:"Yes"}),Object(a.jsx)("p",{className:"pt-4 text-secondary",children:"If not, please select an item from the menu to continue."})]})}):Object(a.jsx)("div",{className:"body-part logout",children:Object(a.jsx)(l.b,{to:"/mongo-office/",className:"form-control nav-link bg-warning",children:"You are not logged in. To login, click here"})})})}var g=function(){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(i.a,{path:"/mongo-office/",exact:!0,component:h}),Object(a.jsx)(i.a,{path:"/mongo-office/accounts/signup/",component:f}),Object(a.jsx)(i.a,{path:"/mongo-office/task-manager/",component:u}),Object(a.jsx)(i.a,{path:"/mongo-office/accounts/logout/",component:O})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),o(e),s(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),x()}},[[62,1,2]]]);
//# sourceMappingURL=main.31328e6f.chunk.js.map