(this["webpackJsonpmongo-office"]=this["webpackJsonpmongo-office"]||[]).push([[0],{135:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),o=a(10),r=a.n(o),i=(a(135),a(9)),l=a(15);a(23),a(29),a(24),a(34);function d(){var e=localStorage.getItem("user");function t(){return e?"/mongo-office/accounts/logout/":"/mongo-office/"}return Object(c.jsx)("div",{children:function(){if(e)return Object(c.jsx)("div",{className:"side-nav-container shadow",children:Object(c.jsxs)("div",{className:"side-nav",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Mongo Office"}),Object(c.jsx)("p",{children:"By: theTradeCoder"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(i.b,{to:t,className:"form-control nav-link",children:e?Object(c.jsx)("div",{children:"Logout"}):Object(c.jsx)("div",{children:"Login"})}),Object(c.jsx)(i.b,{to:"/mongo-office/task-manager/",className:"form-control nav-link",children:"Task Manager"}),Object(c.jsx)(i.b,{to:"/mongo-office/event-manager/",className:"form-control nav-link",children:"Event Manager"}),Object(c.jsx)(i.b,{to:"/mongo-office/file-tracker/",className:"form-control nav-link",children:"File Tracker"}),Object(c.jsx)(i.b,{to:"/mongo-office/duty-roster/",className:"form-control nav-link",children:"Duty Roster"}),Object(c.jsx)(i.b,{to:"/mongo-office/cash-register/",className:"form-control nav-link",children:"Cash Register"}),Object(c.jsx)(i.b,{to:"/mongo-office/vehicle-records/",className:"form-control nav-link",children:"Vehicle Records"}),Object(c.jsx)(i.b,{to:"/mongo-office/travel-records/",className:"form-control nav-link",children:"Travel Records"}),Object(c.jsx)(i.b,{to:"/mongo-office/meeting-records/",className:"form-control nav-link",children:"Meeting Records"}),Object(c.jsx)(i.b,{to:"/mongo-office/medical-records/",className:"form-control nav-link",children:"Medical Records"}),Object(c.jsx)(i.b,{to:"/mongo-office/plan-master/",className:"form-control nav-link",children:"Plan Master"}),Object(c.jsx)(i.b,{to:"/mongo-office/project-manager/",className:"form-control nav-link",children:"Project Manager"}),Object(c.jsx)(i.b,{to:"/mongo-office/business-contacts/",className:"form-control nav-link",children:"Business Contacts"}),Object(c.jsx)(i.b,{to:"/mongo-office/employee-contacts/",className:"form-control nav-link",children:"Employee Contacts"}),Object(c.jsx)(i.b,{to:"/mongo-office/airline-contacts/",className:"form-control nav-link",children:"Airline Contacts"}),Object(c.jsx)(i.b,{to:"/mongo-office/association-contacts/",className:"form-control nav-link",children:"Association Contacts"}),Object(c.jsx)(i.b,{to:"/mongo-office/embassy-contacts/",className:"form-control nav-link",children:"Embassy Contacts"}),Object(c.jsx)(i.b,{to:"/mongo-office/visa-centers/",className:"form-control nav-link",children:"Visa Centers"})]})]})})}()})}var j=a(7),b=a(12),u=a.n(b),m=a(56),h=a.n(m);a(43);function f(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),r=Object(j.a)(o,2),i=r[0],l=r[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),m=b[0],f=b[1],O=Object(n.useState)(new Date),g=Object(j.a)(O,2),x=g[0],p=g[1],v=Object(n.useState)(""),N=Object(j.a)(v,2),w=N[0],y=N[1],S=Object(n.useState)(""),k=Object(j.a)(S,2),C=k[0],D=k[1],E=Object(n.useState)(""),T=Object(j.a)(E,2),q=T[0],I=T[1],A=localStorage.getItem("user"),P=localStorage.getItem("userid");return Object(n.useEffect)((function(){u.a.get("http://localhost:5000/mongo-office/task-manager/view/".concat(A,"/").concat(P)).then((function(e){D(e.data.reverse().filter((function(e){return"open"===e.status})).map((function(e){return Object(c.jsxs)("div",{className:"shadow single-task",children:[Object(c.jsxs)("h5",{children:[e.title,Object(c.jsx)("span",{children:Object(c.jsx)("button",{className:"btn btn-default text-primary",onClick:function(){window.location.assign("/mongo-office/task-manager/edit/".concat(e._id))},children:"Edit"})})]}),Object(c.jsxs)("p",{children:["Task details: ",e.details]}),Object(c.jsxs)("p",{children:["Progress: ",e.progress,Object(c.jsx)("br",{}),"Deadline: ",e.deadline.substring(0,10),", Assigned to: ",e.assignedTo]})]})}))),I(e.data.reverse().filter((function(e){return"closed"===e.status})).map((function(e){return Object(c.jsxs)("div",{className:"shadow single-task",children:[Object(c.jsxs)("h6",{className:"text-muted",children:[e.title," (",e.status,")"]}),Object(c.jsxs)("p",{className:"text-muted",children:["Task details: ",e.details]}),Object(c.jsxs)("p",{className:"text-muted",children:["Progress: ",e.progress,Object(c.jsx)("br",{})," Deadline: ",e.deadline.substring(0,10),", Assigned to: ",e.assignedTo," "]})]})})))})).catch((function(e){return window.alert(e)}))}),[A,P]),Object(c.jsxs)("div",{className:"body-part",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-center text-muted",children:"Task Manager"}),Object(c.jsx)("hr",{})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("ul",{className:"nav nav-tabs pt-2",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link active primary","data-toggle":"tab",href:"#view",children:"View Task"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link warning","data-toggle":"tab",href:"#add",children:"Add New Task"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{className:"nav-link danger","data-toggle":"tab",href:"#archive",children:"Task Archive"})})]}),Object(c.jsxs)("div",{className:"tab-content",children:[Object(c.jsx)("div",{id:"view",className:"tab-pane active",children:Object(c.jsx)("div",{children:C})}),Object(c.jsxs)("div",{id:"add",className:"tab-pane fade pt-3",children:[Object(c.jsx)("h3",{className:"text-secondary",children:"Add New Task"}),Object(c.jsx)("div",{className:"form-light p-3",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:a,details:i,assignedTo:m,deadline:x,progress:"No progress recorded",status:"open",editPassword:w};u.a.post("http://localhost:5000/mongo-office/task-manager/add/".concat(A,"/").concat(P),t).then((function(e){window.alert(e.data),window.location.assign("/mongo-office/task-manager")})).catch((function(e){return window.alert(e)}))},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Task name / title:"}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Task title",onChange:function(e){s(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Task details:"}),Object(c.jsx)("textarea",{type:"text",rows:"5",cols:"10",className:"form-control",placeholder:"Task details",onChange:function(e){l(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"d-flex flex-wrap justify-content-between",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Assigned to:"}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Assigned to",onChange:function(e){f(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Deadline:"}),Object(c.jsx)("br",{}),Object(c.jsx)(h.a,{selected:x,onChange:function(e){e>new Date?p(e):p(new Date)},className:"form-control text-danger",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Edit protection password: "}),Object(c.jsx)("input",{type:"password",maxLength:"4",minLength:"4",className:"form-control",placeholder:"4 digit password",onChange:function(e){y(e.target.value)},required:!0})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})})]}),Object(c.jsx)("div",{id:"archive",className:"tab-pane fade",children:Object(c.jsx)("div",{children:q})})]})]})]})}function O(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),r=Object(j.a)(o,2),l=r[0],d=r[1],b=Object(n.useState)(""),m=Object(j.a)(b,2),h=m[0],f=m[1],O=Object(n.useState)(),g=Object(j.a)(O,2),x=g[0],p=g[1],v=Object(n.useState)(""),N=Object(j.a)(v,2),w=N[0],y=N[1],S=Object(n.useState)(""),k=Object(j.a)(S,2),C=k[0],D=k[1];var E={username:a,email:l,password:h,firstName:x,lastName:w,mobile:C};return Object(c.jsxs)("div",{className:"container signup",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"text-center text-success shadow p-2",children:"MONGO OFFICE"})}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.post("http://localhost:5000/mongo-office/accounts/".concat(a),E).then((function(e){window.alert(e.data),window.location="/mongo-office/"})).catch((function(e){return window.alert(e)}))},className:"shadow p-3 border",children:[Object(c.jsx)("p",{className:"text-secondary",children:"User Registration"}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",onChange:function(e){s(e.target.value)},required:!0})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",onChange:function(e){d(e.target.value)},required:!0})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:function(e){f(e.target.value)},required:!0})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",onChange:function(e){p(e.target.value)},required:!0})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name",onChange:function(e){y(e.target.value)},required:!0})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Mobile number",onChange:function(e){D(e.target.value)},required:!0})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary form-control",children:"Signup"})}),Object(c.jsx)("div",{className:"pt-3",children:Object(c.jsx)(i.b,{to:"/mongo-office/",children:"Have an account? Login here"})})]})]})}function g(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),r=Object(j.a)(o,2),l=r[0],d=r[1],b=Object(n.useState)(""),m=Object(j.a)(b,2),h=m[0],f=m[1],O=Object(n.useState)(""),g=Object(j.a)(O,2),x=g[0],p=g[1],v=Object(n.useState)(""),N=Object(j.a)(v,2),w=N[0],y=N[1];function S(e){s(e.target.value)}function k(e){d(e.target.value)}function C(e){e.preventDefault(),u.a.post("http://localhost:5000/mongo-office/accounts/login/".concat(a,"/").concat(l)).then((function(e){e.data.username?(p(e.data.userid),f(e.data.username),y(e.data.firstName),window.location.assign("/mongo-office/")):window.alert("incorrect information!")})).catch((function(e){return window.alert(e)}))}return localStorage.getItem("userid")||localStorage.setItem("userid",x),localStorage.getItem("user")||localStorage.setItem("user",h),localStorage.getItem("firstname")||localStorage.setItem("firstname",w),Object(c.jsx)("div",{children:localStorage.getItem("user")?Object(c.jsxs)("div",{className:"body-part login shadow",children:[Object(c.jsxs)("p",{children:["Hi ",localStorage.getItem("firstname")," ! "]}),Object(c.jsx)("h4",{className:"text-success",children:"Welcome to MONGO OFFICE! "}),Object(c.jsx)("p",{className:"text-secondary",children:"Please select an item from the menu to continue."})]}):Object(c.jsxs)("div",{className:"container login shadow",children:[Object(c.jsxs)("div",{className:"p-2",children:[Object(c.jsx)("h1",{className:"text-center text-success",children:"MONGO OFFICE"}),Object(c.jsx)("p",{className:"text-right text-secondary pr-3",children:"By: theTradeCoder"})]}),Object(c.jsxs)("form",{onSubmit:C,className:"",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Username"}),Object(c.jsx)("input",{type:"text",className:"form-control",onChange:S,placeholder:"username",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{type:"password",className:"form-control",onChange:k,placeholder:"password",required:!0})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary form-control mt-5",children:"Login"})]}),Object(c.jsx)("div",{className:"pt-3",children:Object(c.jsx)(i.b,{to:"/mongo-office/accounts/signup/",className:"",children:"Not have an account? Create one"})})]})})}function x(){var e=localStorage.getItem("user"),t=localStorage.getItem("firstname");function a(e){e.preventDefault(),localStorage.clear(),window.location="/mongo-office/"}return Object(c.jsx)("div",{children:e?Object(c.jsx)("div",{className:"body-part logout shadow",children:Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)("h2",{className:"text-success",children:["Hey ",t," !"]}),Object(c.jsx)("p",{className:"text-danger",children:"Are you sure to logout?"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-warning form-control",children:"Yes"}),Object(c.jsx)("p",{className:"pt-4 text-secondary",children:"If not, please select an item from the menu to continue."})]})}):Object(c.jsx)("div",{className:"container logout",children:Object(c.jsx)(i.b,{to:"/mongo-office/",className:"form-control nav-link bg-warning",children:"You are not logged in. To login, click here"})})})}function p(){var e=window.location.href.split("/").reverse()[0],t=Object(n.useState)(""),a=Object(j.a)(t,2),s=a[0],o=a[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),l=i[0],d=i[1],b=Object(n.useState)(""),m=Object(j.a)(b,2),f=m[0],O=m[1],g=Object(n.useState)(new Date),x=Object(j.a)(g,2),p=x[0],v=x[1],N=Object(n.useState)(""),w=Object(j.a)(N,2),y=w[0],S=w[1],k=Object(n.useState)(""),C=Object(j.a)(k,2),D=C[0],E=C[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:5000/mongo-office/task-manager/edit/".concat(e)).then((function(e){e&&(o(e.data.title),d(e.data.details),O(e.data.assignedTo),v(new Date(e.data.deadline)),S(e.data.progress))})).catch((function(e){return window.alert(e)}))}),[e]),Object(c.jsxs)("div",{className:"body-part pt-4",children:[Object(c.jsx)("h4",{className:"text-muted text-center",children:"Edit/ Save/ Close/ Delete Task "}),Object(c.jsx)("div",{className:"p-3 form-light",children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={details:l,assignedTo:f,progress:y,deadline:p};u.a.post("http://localhost:5000/mongo-office/task-manager/edit/save/".concat(e,"/").concat(D),a).then((function(e){window.alert(e.data),window.location.assign("/mongo-office/task-manager/")})).catch((function(e){return window.alert(e)}))},children:[Object(c.jsx)("h4",{children:s}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Task Details : "}),Object(c.jsx)("textarea",{className:"form-control",rows:"5",cols:"10",onChange:function(e){d(e.target.value)},value:l,required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Progress: "}),Object(c.jsx)("input",{type:"text",className:"form-control",value:y,onChange:function(e){S(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Assigned to: "}),Object(c.jsx)("input",{className:"form-control",type:"text",value:f,onChange:function(e){O(e.target.value)},reqired:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Deadline: "}),Object(c.jsx)("br",{}),Object(c.jsx)(h.a,{selected:p,onChange:function(e){e>new Date?v(e):v(new Date)},className:"form-control",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Edit password: "}),Object(c.jsx)("input",{type:"password",maxLength:"4",minLength:"4",onChange:function(e){E(e.target.value)},placeholder:"Enter edit permission key / password",className:"form-control",required:!0})]})]}),Object(c.jsxs)("div",{className:"btn-group",children:[Object(c.jsx)("button",{type:"submit",className:"btn btn-success",children:"Save Task"}),Object(c.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(t){u.a.post("http://localhost:5000/mongo-office/task-manager/edit/close/".concat(e,"/").concat(D),{status:"closed"}).then((function(e){window.alert(e.data),E(""),"Wrong Password!"!==e.data&&window.location.assign("/mongo-office/task-manager/")})).catch((function(e){return window.alert(D?"Wrong password!":"Please enter password!")}))},children:"Close Task"}),Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){u.a.post("http://localhost:5000/mongo-office/task-manager/edit/delete/".concat(e,"/").concat(D),{status:"deleted"}).then((function(e){window.alert(e.data),E(""),"Wrong Password!"!==e.data&&window.location.assign("/mongo-office/task-manager/")})).catch((function(e){return window.alert(D?"Wrong password!":"Please enter password!")}))},children:"Delete Task"}),Object(c.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return window.location.assign("/mongo-office/task-manager/")},children:"Go Back"})]})]})})]})}var v=localStorage.getItem("user"),N=localStorage.getItem("userid");function w(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),r=Object(j.a)(o,2),i=r[0],l=r[1],d=Object(n.useState)(0),b=Object(j.a)(d,2),m=b[0],h=b[1],f=Object(n.useState)(0),O=Object(j.a)(f,2),g=O[0],x=O[1],p=Object(n.useState)(""),w=Object(j.a)(p,2),y=w[0],S=w[1],k=Object(n.useState)(""),C=Object(j.a)(k,2),D=C[0],E=C[1],T=(new Date).toLocaleDateString(),q=Object(n.useState)(0),I=Object(j.a)(q,2),A=I[0],P=I[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:5000/mongo-office/cash-register/view/".concat(v,"/").concat(N)).then((function(e){var t=[];e.data.map((function(e){return t.push(e.balance)})),P(t.reduce((function(e,t){var a=e+t;return a>0?Object(c.jsx)("span",{children:a}):Object(c.jsx)("span",{className:"text-danger",children:a})}))),s(e.data.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.date.substring(0,10)}),Object(c.jsx)("td",{children:e.details}),Object(c.jsx)("td",{children:e.authorizedBy}),Object(c.jsx)("td",{children:e.carriedOutBy}),Object(c.jsx)("td",{children:e.cashIn}),Object(c.jsx)("td",{children:e.cashOut})]})})))})).catch((function(e){return e}))}),[]),Object(c.jsxs)("div",{className:"body-part",children:[Object(c.jsxs)("div",{className:"p-4 d-flex justify-content-between flex-wrap",children:[Object(c.jsx)("button",{className:"btn btn-info","data-toggle":"collapse","data-target":"#record",children:"Make an Entry"}),Object(c.jsxs)("span",{children:[Object(c.jsx)("strong",{children:"Date:"})," ",T]})]}),Object(c.jsx)("div",{id:"record",className:"collapse pb-4 form-light p-3",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={date:new Date,details:i,cashIn:m,cashOut:g,authorizedBy:y,carriedOutBy:D,balance:m-g};m>0||g>0?u.a.post("http://localhost:5000/mongo-office/cash-register/record-trx/".concat(v,"/").concat(N),t).then((function(e){return window.alert(e.data)})).then((function(){l(""),h(0),x(0),S(""),E(""),window.location.assign("/mongo-office/cash-register/")})).catch((function(e){return window.alert(e)})):window.alert("Please input valid info!")},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Description: "}),Object(c.jsx)("input",{type:"text",placeholder:"Transaction details",value:i,className:"form-control",onChange:function(e){l(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Cash Received: "}),Object(c.jsx)("input",{type:"Number",min:"0",placeholder:"Cash received",className:"form-control",onChange:function(e){e.target.value>0&&h(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Expense Amount: "}),Object(c.jsx)("input",{type:"Number",min:"0",placeholder:"Expense amount",className:"form-control",onChange:function(e){e.target.value>0&&x(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Authoriszed By: "}),Object(c.jsx)("input",{type:"text",placeholder:"Authorized by",value:y,className:"form-control",onChange:function(e){S(e.target.value)},required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Carried out by: "}),Object(c.jsx)("input",{type:"text",placeholder:"Carried out by",value:D,className:"form-control",onChange:function(e){E(e.target.value)},required:!0})]})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}),Object(c.jsxs)("div",{id:"view",className:"pt-4",children:[Object(c.jsxs)("div",{children:["Total Balance as on ",T,":  Tk ",A]}),Object(c.jsxs)("table",{className:"table table-striped",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{className:"w-50",children:"Details"}),Object(c.jsx)("th",{children:"Authorized by"}),Object(c.jsx)("th",{children:"Carriedout by"}),Object(c.jsx)("th",{children:"Received"}),Object(c.jsx)("th",{children:"Expense"})]}),a]})]})]})}var y=a(66),S=a(16),k=a(233);function C(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),r=Object(j.a)(o,2),i=r[0],l=r[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),m=b[0],h=b[1],f=Object(n.useState)(""),O=Object(j.a)(f,2),g=O[0],x=O[1],p=Object(n.useState)(""),v=Object(j.a)(p,2),N=v[0],w=v[1],C=localStorage.getItem("user"),D=localStorage.getItem("userid"),E=Object(n.useState)(new Date),T=Object(j.a)(E,2),q=T[0],I=T[1],A=Object(n.useState)(""),P=Object(j.a)(A,2),z=P[0],M=P[1],L=Object(n.useState)(""),B=Object(j.a)(L,2),F=B[0],R=B[1];return Object(n.useEffect)((function(){u.a.post("http://localhost:5000/mongo-office/event-manager/view/".concat(C,"/").concat(D)).then((function(e){M(e.data.reverse().filter((function(e){return"open"===e.status})).map((function(e){return Object(c.jsxs)("div",{className:"shadow p-3",children:[Object(c.jsxs)("h4",{children:[e.title,Object(c.jsx)("span",{children:Object(c.jsx)("button",{onClick:function(){window.location.assign("/mongo-office/event-manager/edit/".concat(e._id))},className:"btn btn-default text-primary",children:"Edit"})})]}),Object(c.jsxs)("p",{children:["Date & time: ",new Date(e.eventDate).toLocaleString()]}),Object(c.jsxs)("p",{children:["Event details: ",e.details," ",Object(c.jsx)("br",{}),"Organizer: ",e.organizer,", Venue: ",e.venue,", ",Object(c.jsx)("br",{}),"Contact details: ",e.contactDetails,Object(c.jsx)("br",{}),"Status: ",e.status]})]})}))),R(e.data.reverse().filter((function(e){return"closed"===e.status})).map((function(e){return Object(c.jsxs)("div",{className:"shadow p-3",children:[Object(c.jsx)("h6",{className:"text-muted",children:e.title}),Object(c.jsxs)("p",{className:"text-muted",children:["Date & time: ",new Date(e.eventDate).toLocaleString(),Object(c.jsx)("br",{}),"Event details: ",e.details," ",Object(c.jsx)("br",{}),"Organizer: ",e.organizer,", Venue: ",e.venue,", ",Object(c.jsx)("br",{}),"Contact details: ",e.contactDetails,Object(c.jsx)("br",{}),"Status: ",e.status]})]})})))})).catch((function(e){return e}))}),[D,C]),Object(c.jsxs)("div",{className:"body-part",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h3",{className:"text-center",children:"Event Manager"})}),Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:"nav nav-tabs pt-2",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#view","data-toggle":"tab",className:"active nav-link",children:"View Events"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#add","data-toggle":"tab",className:"nav-link",children:"Add New Event"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("a",{href:"#archive","data-toggle":"tab",className:"nav-link",children:"Event Archive"})})]})}),Object(c.jsxs)("div",{className:"tab-content",children:[Object(c.jsx)("div",{id:"view",className:"tab-pane active",children:Object(c.jsx)("div",{children:z})}),Object(c.jsx)("div",{id:"add",className:"tab-pane",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:a,details:i,organizer:m,venue:g,eventDate:q,contactDetails:N,status:"open"};u.a.post("http://localhost:5000/mongo-office/event-manager/register/".concat(C,"/").concat(D),t).then((function(e){window.alert(e.data),window.location.assign("/mongo-office/event-manager")})).catch((function(e){return window.alert(e)}))},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Title:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},className:"form-control",placeholder:"Event title",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Details:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},className:"form-control",placeholder:"Event details",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Organizer:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)},className:"form-control",placeholder:"Event organizer",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Venue:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){x(e.target.value)},className:"form-control",placeholder:"Event palce",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Contact details:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){w(e.target.value)},className:"form-control",placeholder:"Contact details",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Event date - time:"}),Object(c.jsx)(S.a,{utils:y.a,children:Object(c.jsx)(k.a,{value:q,onChange:I,className:"form-control",required:!0})})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}),Object(c.jsx)("div",{id:"archive",className:"tab-pane",children:Object(c.jsx)("div",{children:F})})]})]})}function D(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(""),r=Object(j.a)(o,2),i=r[0],l=r[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),m=b[0],h=b[1],f=Object(n.useState)(""),O=Object(j.a)(f,2),g=O[0],x=O[1],p=Object(n.useState)(""),v=Object(j.a)(p,2),N=v[0],w=v[1],C=(localStorage.getItem("user"),localStorage.getItem("userid"),Object(n.useState)(new Date)),D=Object(j.a)(C,2),E=D[0],T=D[1],q=window.location.href.split("/").reverse()[0];return Object(n.useEffect)((function(){u.a.get("http://localhost:5000/mongo-office/event-manager/edit/".concat(q)).then((function(e){e&&(s(e.data.title),l(e.data.details),h(e.data.organizer),T(e.data.eventDate),x(e.data.venue),w(e.data.contactDetails))}))}),[q]),Object(c.jsxs)("div",{className:"body-part",children:[Object(c.jsx)("div",{className:"p-3 text-center",children:Object(c.jsx)("h4",{children:"Edit & Save / Close / Delete Event"})}),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:a,details:i,organizer:m,venue:g,contactDetails:N,eventDate:E};u.a.post("http://localhost:5000/mongo-office/event-manager/edit/save/".concat(q),t).then((function(e){window.alert(e.data),window.location.assign("/mongo-office/event-manager")})).catch((function(e){return window.alert(e)}))},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Title: "}),Object(c.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},value:a,className:"form-control",required:!0})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Details: "}),Object(c.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:i,className:"form-control",required:!0})]}),Object(c.jsxs)("div",{className:"d-flex flex-wrap justify-content-start",children:[Object(c.jsxs)("div",{className:"form-group pr-2",children:[Object(c.jsx)("label",{children:"Organizer:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)},value:m,className:"form-control",required:!0})]}),Object(c.jsxs)("div",{className:"form-group pr-2",children:[Object(c.jsx)("label",{children:"Date:"}),Object(c.jsx)(S.a,{utils:y.a,children:Object(c.jsx)(k.a,{value:E,onChange:T,className:"form-control",required:!0})})]})]}),Object(c.jsxs)("div",{className:"d-flex flex-wrap justify-content-start",children:[Object(c.jsxs)("div",{className:"form-group pr-2",children:[Object(c.jsx)("label",{children:"Venue:"}),Object(c.jsx)("input",{type:"text",onChange:function(e){x(e.target.value)},value:g,className:"form-control",required:!0})]}),Object(c.jsxs)("div",{className:"form-group pr-2",children:[Object(c.jsx)("label",{children:"Contact details: "}),Object(c.jsx)("input",{type:"text",onChange:function(e){w(e.target.value)},value:N,className:"form-control",required:!0})]})]}),Object(c.jsxs)("div",{className:"btn-group",children:[Object(c.jsx)("button",{type:"submit",className:"btn btn-success",children:"Save Event"}),Object(c.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(e){u.a.post("http://localhost:5000/mongo-office/event-manager/edit/close/".concat(q)).then((function(e){window.alert(e.data),window.location.assign("/mongo-office/event-manager")})).catch((function(e){return window.alert(e)}))},children:"Close Event"}),Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(e){u.a.delete("http://localhost:5000/mongo-office/event-manager/edit/delete/".concat(q)).then((function(e){window.alert(e.data),window.location.assign("/mongo-office/event-manager")})).catch((function(e){return window.alert(e)}))},children:"Delete Event"}),Object(c.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return window.location.assign("/mongo-office/event-manager/")},children:"Go Back"})]})]})})]})}var E=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(l.a,{path:"/mongo-office/",exact:!0,component:g}),Object(c.jsx)(l.a,{path:"/mongo-office/accounts/signup/",component:O}),Object(c.jsx)(l.a,{path:"/mongo-office/task-manager/",exact:!0,component:f}),Object(c.jsx)(l.a,{path:"/mongo-office/task-manager/edit/",component:p}),Object(c.jsx)(l.a,{path:"/mongo-office/accounts/logout/",component:x}),Object(c.jsx)(l.a,{path:"/mongo-office/cash-register/",component:w}),Object(c.jsx)(l.a,{path:"/mongo-office/event-manager/",exact:!0,component:C}),Object(c.jsx)(l.a,{path:"/mongo-office/event-manager/edit/",component:D})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,234)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),s(e),o(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),T()},34:function(e,t,a){}},[[203,1,2]]]);
//# sourceMappingURL=main.14217153.chunk.js.map