(this["webpackJsonpmy-porfolio"]=this["webpackJsonpmy-porfolio"]||[]).push([[0],{117:function(e,t,a){e.exports=a(350)},122:function(e,t,a){},123:function(e,t,a){},125:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(37),r=a.n(i),s=(a(122),a(48)),l=a(49),c=a(56),m=a(55),d=(a(123),a(124),a(360)),u=a(115),p=a(69),h=a.n(p),g=(a(125),function(e){var t=e.onRouteChange;return o.a.createElement(d.a,{collapseOnSelect:!0,fixed:"top",expand:"lg",bg:"light",variant:"light"},o.a.createElement(d.a.Brand,{onClick:function(){return t("Resume")}},"JR Kim"),o.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(u.a,{className:"mr-auto"},o.a.createElement(u.a.Link,{onClick:function(){return t("Resume")}},"Resume"),o.a.createElement(u.a.Link,{onClick:function(){return t("Projects")}},"Projects"),o.a.createElement(u.a.Link,{onClick:function(){return t("ContactMe")}},"Contact Me")),o.a.createElement("nav",null,o.a.createElement("a",{className:"navbar-brand",href:"#",onClick:function(){return t("Resume")}},o.a.createElement("img",{className:"navbar-img",src:h.a,width:"30",height:"30",alt:""})))))}),f=(a(131),a(111)),b=a(112),E=a.n(b),v=(a(346),a(353)),y=a(354),w=a(355),k=a(356),C=a(357),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",email:"",number:"",message:"",subject:""},e.handleChange=function(t,a){e.setState(Object(f.a)({},t,a.target.value))},e}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,o=a.email,i=a.number,r=a.message,s=a.subject,l=this.props.onRouteChange,c=this.props.apiData,m=c.userid,d=c.templateid,u=c.serviceid,p={email:o,name:n,contact_number:i,message:r,subject:s};E.a.send(u,d,p,m).then((function(e){console.log(e),t.resetForm(),l("PostContactMe")}),(function(e){console.log("Sending Email Failed, post banner message: "+{error:e})}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",number:"",message:""})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"p-heading1"},"Contact Me"),o.a.createElement(v.a,{onSubmit:this.handleSubmit.bind(this)},o.a.createElement(y.a,{controlId:"formBasicEmail"},o.a.createElement(w.a,{className:"text-muted"},"Your Email Address"),o.a.createElement(k.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email",required:!0})),o.a.createElement(y.a,{controlId:"formBasicName"},o.a.createElement(w.a,{className:"text-muted"},"Name"),o.a.createElement(k.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name",required:!0})),o.a.createElement(y.a,{controlId:"formBasicSubject"},o.a.createElement(w.a,{className:"text-muted"},"Subject"),o.a.createElement(k.a,{type:"text",name:"subject",className:"text-primary",value:this.state.subject,onChange:this.handleChange.bind(this,"subject"),placeholder:"Subject",required:!0})),o.a.createElement(y.a,{controlId:"formBasicNumber"},o.a.createElement(w.a,{className:"text-muted"},"Phone Number (Optional)"),o.a.createElement(k.a,{type:"text",name:"number",className:"text-primary",value:this.state.number,onChange:this.handleChange.bind(this,"number"),placeholder:"Phone Number"})),o.a.createElement(y.a,{controlId:"formBasicMessage"},o.a.createElement(w.a,{className:"text-muted"},"Message"),o.a.createElement(k.a,{type:"textarea",name:"message",className:"text-primary input-textarea",value:this.state.message,onChange:this.handleChange.bind(this,"message"),required:!0})),o.a.createElement(C.a,{variant:"primary",type:"submit"},"Submit")))}}]),a}(n.Component),S=(a(26),a(347),a(114)),j=a(106),R=function(e,t){var a=e.exp,i=a.company,r=a.date,s=a.description,l=a.duties,c=a.location,m=a.title,d=a.type,u=Object(n.useState)(!1),p=Object(S.a)(u,2),h=p[0],g=p[1];return o.a.createElement("div",{id:t,className:"ma2 br3 ba b--black-10 shadow-5 bg-white-90"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header pointer",onClick:function(){return g(!h)},"aria-controls":"collapse-text","aria-expanded":h},o.a.createElement("strong",null,i)," - ",o.a.createElement("i",null,r)," - ",m," - ",d),o.a.createElement(j.a,{in:h},o.a.createElement("div",{className:"card-body collapse"},o.a.createElement("b",null,"Location: "," ",c),o.a.createElement("br",null),o.a.createElement("i",null,s),o.a.createElement("br",null),o.a.createElement("ul",null,l.map((function(e){return o.a.createElement("li",null,e)})))))))},x=a(358),M=a(359);var A=function(e){var t=e.ResumeData,a=t.name,n=t.objective,i=t.github,r=t.experience,s=t.skills,l=t.linkedin,c=t.instagram,m=t.devNotes,d=t.image;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 ma3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("h1",{className:"tl"},a),o.a.createElement("p",{className:"v-mid"},n),m.map((function(e){return o.a.createElement("p",{className:"fw1"},o.a.createElement("i",null,e))}))),o.a.createElement("div",{className:"center col-md-2"}),o.a.createElement("div",{className:"center col-md-3 "},o.a.createElement("img",{className:"br3",src:d}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 ma3"},o.a.createElement(x.a,{defaultActiveKey:s[0].title,transition:!1,id:"noanim-tab-example"},s.map((function(e){return o.a.createElement(M.a,{eventKey:e.title,title:e.title},o.a.createElement("ul",null,e.context.map((function(e){return o.a.createElement("li",null,e)}))))})),o.a.createElement("tab",{eventKey:"Links",title:"Links"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:i,target:"blank"},"Github")),o.a.createElement("li",null,o.a.createElement("a",{href:l,target:"blank"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:c,target:"blank"},"Instagram")))))),o.a.createElement("div",{className:"col-md-5 "},o.a.createElement("h3",null,o.a.createElement("strong",null,"Experience")),r.map((function(e){return o.a.createElement(R,{exp:e})})))))))},P=function(e){var t=e.devblog,a=t.date,n=t.id,i=t.project,r=t.notes;return o.a.createElement("div",{className:"ba b--black-10 shadow-5 bg-white-90 ma3 pa3"},o.a.createElement("h3",null,"Dev-Blog #"," ",n," "),o.a.createElement("p",{className:"fw1"},a),o.a.createElement("p",null,o.a.createElement("strong",null,"Project: "," ",i," ")),r.map((function(e){return o.a.createElement("p",null,e)})))},I=function(e){var t=e.project,a=t.name,n=t.url,i=t.description,r=t.features,s=t.status,l=t.stack;return o.a.createElement("div",{className:"ba b--black-10 shadow-5 bg-white-90 ma3 pa3"},o.a.createElement("h3",null,o.a.createElement("a",{href:n,target:"blank"},"Project: "," ",a," "," ",o.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/37/37819.svg",width:"25px",height:"auto"}))),o.a.createElement("p",{className:"fw1"},"Description: "," ",i),o.a.createElement("p",{className:"fw1"},"Features: "," ",r),o.a.createElement("p",{className:"fw1"},"Status: "," ",s),o.a.createElement("p",{className:"fw1"},"Stack: "," ",l))},D=function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"tc"},"Thanks For Contacting Me!"),o.a.createElement("p",{className:"fw2 tc f4"},o.a.createElement("i",null,"I look forward to hearing from you! I will be in touch back as soon as possible!")),o.a.createElement("p",{className:"fw2 tc f4"},o.a.createElement("i",null,"- JR Kim")))},B={name:"JR Kim",image:"https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/40679802_10105199269589031_6255792958100996096_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=dNHmMOXZL0kAX9mwB9k&_nc_ht=scontent-dfw5-2.xx&oh=77b97059efcfd07d862e106262fe7f82&oe=5F4C9492",phone:"785-375-3759",email:"jsk.fni@gmail.com",objective:"Seeking a Software Developer position in an upward growing organization to utilize expertise in software development and testing using Agile development methodologies.",github:"https://github.com/joungskim",linkedin:"https://www.linkedin.com/in/jr-kim-235b0496",instagram:"https://www.instagram.com/brokenchopstik/",experience:[{type:"Full-Time",company:"Cerner Corporation",img:"",location:"Kansas City MO",title:"Software Engineer",date:"May 2017 - July 2019",description:"Design thoroughly tested healthcare software with one hundred percent test coverage.  Delivered continuous development in software for a substantial amount of products maintained by the team.",duties:["Technologies/Tools Used: .NET, C#, C++, ReactJS/Redux + Jest, Java, HTML5, CSS, GIT, Subversion, Visual Studio, VSCode, JIRA, Jenkins, Crucible.","Multitasking and managing over twenty different solutions across five different languages at any given time based on client time constraints.","Attended a mandatory AGILE hands on workshop to perform daily task management efficiency and effectively.","Contributed software related development for products to meet requirements through successful deployment.  Worked side by side with the DevOps team to ensure that the Jenkins build performed successfully in order to meet time constraints during our quarterly releases.","Quickly adhered to company and team coding/task management standards by upholding policy and team guidelines.  Achieved by using universal standards such as ESLint.","Introduced methodologies, design, architecture, and best practices by leading new development/scripting in testing environments.  Created modular reusable tests that became team standards for environments such as Eggplant.","Maintained and created new development for C++/C# backend, and HTML, CSS, React, .NET Forms front end.","Provided end to end testing to ensure meaningful tests to prevent breaking code changes.  During quarterly releases, tests would catch errors where, in some cases, requirements were not being met through automated testing.  Specifically, a component overhaul in Patient Signatures where actions dispatched to Redux were not managing the state of a lookup list button properly.  It would instead open the previous modal dialog.  A snapshot of the html code provided insight on the error the overhaul created during workflow functional testing."]},{type:"Internship",company:"Cerner Corporation",img:"",location:"Kansas City MO",title:"Software Intern",date:"May 2016 - July 2016",description:"Uplifted a Contracts web application from ASP.NET Forms to ASP.NET MVC that displays contracts through browsers for clients to review. ",duties:["Wrote code to consume sharepoint databases for contracts.","Attended SCRUM and Learned basic Agile practices.","Major focus on Story break downs using JIRA."]},{type:"Internship",company:"Cerner Corporation",img:"",location:"Kansas City MO",title:"Software Intern",date:"May 2015 - July 2015",description:"Contributed modular revisions to HCI Indexing in .NET Windows Forms Application.",duties:["Wrote modular patterns such as singletons to decouple code.","Wrote a forms application to track hours and notes."]},{type:"CO-OP",company:"GE Aviation",img:"",location:"Manhattan KS",title:"Software Co-op",date:"MAY 2014 - DECEMBER 2014",description:"Wrote tests in Visual Basic legacy code for aircraft flight software on government planes.",duties:["Engineer documentation for kzt-32 documentation of internal software use.","Write end-to-end test coverage for legacy VB code.","Worked with PHP, Laravel, and PostGRES."]}],skills:[{title:"Technologies",context:["Javascript","Node.JS","ReactJS + Redux + Jest + npm","HTML5 + CSS","Java","C++","GIT + GitHub + Subversion","C# + NUnit Test + Linq","ASP.NET MVC","Microsoft SQL + MySQL + SQL"]},{title:"Skills",context:["JIRA - Story and task management.","AGILE - Scrum, interval sprints, story pointing, continuous integration, design, task breakdown.","JENKINS - Build and test software safely to deploy prod to new or existing software.","RQM/EP - Full functional automated front end image detection testing software.  Eliminates manual testing for test engineers/analysts."]},{title:"Education",context:["Kansas State University","Bachelors in Computer Science","AUGUST 2012 - DECEMBER 2016"]},{title:"Other",context:["KSU Open House Presenter - Presented a built from scratch game engine built in C++ using DirectX to render a 3D Pest Simulator for American Pest Management company.","Content Creator - Streaming Platforms.","Dance - Dance team during college.","Fitness - Weight lifting for health."]},{title:"Citizenship",context:["U.S Citizen.","I am eligible to work in the U.S.","I will not be needing any sponsorships now or in the future."]}],devNotes:["About this page:","Front-End Tools - Tachyons, Bootstrap.","Technologies - React.js","Dev-Notes - A ResumeData prop from JSON is being passed to Resume.jsx component.  This populates all the data on this web application. Feel Free to take a look in my Github under my-portfolio to see code.  The link can be found in the Links tab below."]},J=[{date:"7/28/2020",id:"1",project:"My Portfolio Web Application",notes:["Created intial website, background image, navbar, created json file data for temporary use until backend node.js/postgres backend functionality is implemented. Implemented the intial design of how the page will look.  Will not implement Redux for this page as I believe lifecycle hooks will be more than fitting for what this web app will offer.  App.js will handle state. Implemented Routes callback to change state managed in App.js. Added initial Home Page bootstrap (Landing Page) carousel and cards."]},{date:"7/31/2020",id:"2",project:"My Portfolio Web Application",notes:["Made JSON changes to resumeData.js to modularize the way data is being presented in the Resume.jsx route. All data is being passed into the Resume component so that when backend database is implemented, it will be able to handle rendering the page in the same fashion.","Used React-Bootstrap and Tachyons for the front-end components.  Need to rearrange the grid so that the containers do not resize strangely.  Created experience component to render in bootstrap collapsable work history dynamically based on experience prop that contains an array of all data being passed.  Animations are not rendering smoothly when collapsing or changing tabs. Particles are not rendering correctly on the left and right portions of the body context.","Implemented DevBlog: No functionality other than providing information on the progress of the web application.  DevBlogData is being passed into DevBlog component from JSON.","Implemented Projects: Page that displays my projects with github links.  Link bound to github logo, may need to be more specific on the link.  It may be hard for users to notice the link."]},{date:"8/1/2020",id:"3",project:"My Portfolio Web Application",notes:["Created a landing page that describes the page being under construction.  OOF!  Added React-Bootstrap version of Carousel, replaced the old one.","Added context to the Contact Me page, simple image with some contact information.  Will replace this with form and email transaction API as described in Contact Me","Will likely be switching gears to .Net to prepare for interviews, and will return to finish up the front end and begin working on the Node.js service","Deployed Web App as is for now."]},{date:"8/2/2020",id:"4",project:"My Portfolio Web Application",notes:["Added EmailJS api to Contact Me page.  Form built using reactstrap and tachyons.  Form will submit a transaction to Emailjs/Mailgun and email me directly with context.","Need to scrub API ID using .env file.  Nothing fancy here folks."]}],L=[{name:"My Portfolio",url:"https://github.com/joungskim/my-portfolio",description:"Portfolio website to keep up with my resume, content creation, and latest projects.",features:"Single Page Application, Contact Me",status:"In Progress.",stack:"React, Node.js + Express.js, Javascript, Postgres, Bootstrap"},{name:"J&S Real-Estate Web Application",url:"https://joungskim.github.io/jns-webapp/",description:"Rental properties web application inspired by brother in laws real estate side business.",features:"Single Page Application, Post New Rentals Availability, Messaging, Scheduling, Payments, GPS Mapping, virtual tour",status:"In Progress.",stack:"React, Node.js + Express.js, Javascript, Postgres, Bootstrap"},{name:"Robofriends",url:"https://joungskim.github.io/robofriends/",description:"React app that generates random robots and search functions using React.",features:"Search, Robot Generation",status:"Complete",stack:"React, Javascript, Bootstrap"},{name:"Secretary",url:"https://github.com/joungskim/Secretary",description:"Secretary program to create logs and clock hours worked on a specific project with notes added per day.  Built for Cerner internship to track my work each day.",features:"Tracks times for clocking in and clocking out, gives clock out time/countdown, persistent save notes tracker",status:"Complete",stack:".NET, C#, Windows Forms Application."},{name:"Barsistant",url:"https://github.com/joungskim/CIS598",description:"Final Senior Project.  Bartender social media website.  Calculates cost of drinks based on user data.",Features:"Live chat, messaging, drink databases, Accounts, login/security OAuth, drink reccomendations. Over 250 hours went into this senior project.  Received 100% on grade.",status:"Complete",stack:"ASP.NET MVC 4, MSSQL, Razor, Javascript, SQL, C#, "},{name:"League of Legends Helper",url:"https://github.com/joungskim/mystuff",description:"Game collection of timers and characters browser linking to guides.",features:"Blue, Red, Baron, Dragon spawn timers.  Collection of all characters and links to their guides and counters.  Browser built into the forms application.",status:"Complete",stack:".NET, C#, Windows Forms Application."},{name:"Card Database Project",url:"https://github.com/joungskim/CGProject",description:"Databases CIS course final project.  Wrote a card database for deck building and card information. Received 100% on grade.",features:"Live chat, card database, images of cards",status:"Complete",stack:".NET, C#, Windows Form Application, MySQL"}],O={emailjs:{userid:"user_h9jGxzNO73RZV302ZY6H5",templateid:"my_portfolio_email",serviceid:"mailgun"}},T=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onRouteChange=function(e){n.setState({route:e})},n.state={route:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({route:"Resume"})}},{key:"render",value:function(){var e=this.state.route;return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement(g,{onRouteChange:this.onRouteChange})),o.a.createElement("div",{className:"container-fluid background-image"},o.a.createElement("div",{className:"body-container br3 ba b--black-10 shadow-5 bg-white-90 tl pa3"},"Resume"===e?o.a.createElement(A,{ResumeData:B}):"DevBlog"===e?J.map((function(e){return o.a.createElement(P,{devblog:e})})):"Projects"===e?L.map((function(e){return o.a.createElement(I,{project:e})})):"ContactMe"===e?o.a.createElement(N,{apiData:O.emailjs,onRouteChange:this.onRouteChange}):"PostContactMe"===e?o.a.createElement(D,null):o.a.createElement(A,{ResumeData:B}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(349);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a.p+"static/media/Me.a1e4efd9.PNG"}},[[117,1,2]]]);
//# sourceMappingURL=main.8a951539.chunk.js.map