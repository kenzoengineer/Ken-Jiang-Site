(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(16),a=n.n(s),r=(n(23),n(24),n(25),n(4)),o=n(5),d=n(9),l=n(6),j=n(0);function h(e){var t="Navbar-Icon";return"top"===e.s&&(t+=" Navbar-Top"),"botton"===e.s&&(t+=" Navbar-Bottom"),Object(j.jsx)("a",{href:e.href,children:Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("div",{className:"Navbar-Label",children:e.children}),Object(j.jsx)(r.a,{icon:[e.type,e.icon]})]})})}o.b.add(d.a,l.c);var b=function(){return Object(j.jsxs)("div",{className:"Navbar-Container",children:[Object(j.jsx)(h,{href:"#",type:"fas",icon:"home",s:"top",children:"Home"}),Object(j.jsx)(h,{href:"#ABOUT ME",type:"fas",icon:"code",children:"Skills"}),Object(j.jsx)(h,{href:"#EXPERIENCE",type:"fas",icon:"briefcase",children:"Experience"}),Object(j.jsx)(h,{href:"#PROJECTS",type:"fas",icon:"code-branch",s:"botton",children:"Projects"})]})},p=n(8);n(31),n(32),n(33),n(34);var u=function(e){return Object(j.jsx)("div",{className:"Tool-Tip",children:e.children})};o.b.add(d.a,l.c);var x=function(e){return null!=e.svg?Object(j.jsxs)("div",{className:"Icon-Container",children:[Object(j.jsx)("img",{src:e.svg,alt:e.alt,width:"50em",height:"50em"}),Object(j.jsx)(u,{children:e.alt})]}):Object(j.jsxs)("div",{className:"Icon-Container",children:[Object(j.jsx)(r.a,{icon:[e.type,e.icon]}),Object(j.jsx)(u,{children:e.alt})]})};var O=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(window.innerHeight),i=Object(p.a)(n,2),s=(i[0],i[1]),a=Object(c.useState)([window.innerWidth,window.innerHeight]),o=Object(p.a)(a,2),d=o[0],l=o[1];return Object(c.useLayoutEffect)((function(){return window.addEventListener("resize",(function(){l([t.current.clientWidth,t.current.clientHeight])})),function(){window.removeEventListener("resize",(function(){l([t.current.clientWidth,t.current.clientHeight])}))}}),[]),Object(c.useEffect)((function(){s(t.current.clientHeight),document.body.style.overflow="shown"===e.state?"hidden":"unset"}),[e.state]),Object(j.jsx)("div",{className:"Modal-Container-".concat(e.state),children:Object(j.jsxs)("div",{className:"Modal-Window",style:{width:"".concat(e.width),height:"calc(".concat(d[1],"px + 11.5vh)")},children:[Object(j.jsx)("div",{className:"Modal-Close",onClick:e.closeHandler,children:Object(j.jsx)(r.a,{icon:["fas","times"]})}),Object(j.jsx)("div",{className:"Modal-Content",ref:t,children:e.children})]})})},f=n.p+"static/media/ken_jpeg.e7f994b7.jpg",m=n.p+"static/media/resume.21958b46.pdf",v=n(10);function g(e){return Object(j.jsx)("div",{className:"Title-Header-Text",children:e.text})}function y(e){return Object(j.jsx)("div",{className:"Body-Header-Text",children:Object(j.jsx)("p",{children:e.text})})}function w(){return Object(j.jsxs)("div",{className:"IconRow",children:[Object(j.jsx)(k,{}),Object(j.jsx)(C,{icon:"linkedin",a:"https://www.linkedin.com/in/ken-jiang/"}),Object(j.jsx)(C,{icon:"github",a:"https://github.com/kenzoengineer"}),Object(j.jsx)(C,{icon:"instagram",a:"https://www.instagram.com/kenzoengineer/"}),Object(j.jsx)(C,{icon:"artstation",a:"https://www.artstation.com/kenzoengineer"})]})}function C(e){return Object(j.jsx)(r.a,{onClick:function(t){t.preventDefault(),window.open(e.a,"_blank")},className:"Icon",icon:["fab",e.icon]})}function N(){var e=Object(c.useState)(window.innerWidth),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(c.useLayoutEffect)((function(){return window.addEventListener("resize",(function(){i(window.innerWidth)})),function(){window.removeEventListener("resize",(function(){i(window.innerWidth)}))}}),[]),n<1e3?[.9*n-10,"90vw"]:[.6*n-10,"60vw"]}function k(){var e=Object(c.useState)("hidden"),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"Resume-Button-Container",onClick:function(){return i("shown")},children:[Object(j.jsx)(r.a,{className:"Icon ResumeIcon",icon:["fas","file"]}),Object(j.jsx)("span",{className:"Resume-Button-Text",children:"Resume"})]}),Object(j.jsx)(O,{width:N()[1],state:n,closeHandler:function(){return i("hidden")},children:Object(j.jsx)(v.a,{file:m,children:Object(j.jsx)(v.b,{pageNumber:1,width:N()[0]})})})]})}o.b.add(d.a,l.c),v.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(v.c.version,"/pdf.worker.js");var T=function(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsxs)("div",{className:"Outer-Grid",children:[Object(j.jsx)("div",{className:"Left-Cell",children:Object(j.jsxs)("div",{className:"Header-Text-Container",children:[Object(j.jsx)(g,{text:"KEN JIANG"}),Object(j.jsx)(y,{text:"Computer engineering student at the University of Waterloo"}),Object(j.jsx)(w,{})]})}),Object(j.jsx)("div",{className:"Right-Cell",children:Object(j.jsx)("img",{src:f,alt:"Ken Jiang",className:"Title-Img"})})]}),Object(j.jsx)("a",{href:"#ABOUT ME",children:Object(j.jsx)(r.a,{className:"Chevron-Icon",icon:["fas","chevron-down"]})})]})};n(46),n(47);function P(e){return Object(j.jsx)("div",{className:"Vertical-Text",children:e.text})}var S=function(e){return Object(j.jsxs)("div",{className:"Section-Container",children:[Object(j.jsx)("span",{id:e.title}),Object(j.jsx)(P,{text:e.title}),e.children]})},I=n.p+"static/media/blender.2a395b5c.svg",E=n.p+"static/media/photoshop.d9a6f3a2.svg";function A(){return Object(j.jsxs)("div",{className:"Content-Container",children:[Object(j.jsxs)("div",{className:"Word-Block",children:[Object(j.jsx)("p",{children:"Welcome to my website! The purpose of this site is to serve as a portfolio for all the work I have done. I have yet to find a specific area of programming I am very passionate about, so I am trying different things. Having worked with code for many years, I have built a solid background in different fields such as web development, game design and competitive coding. In my spare time, I like playing video games, the visual arts and playing the piano."}),Object(j.jsxs)("p",{children:["Below, I showcase the skills I have. ",Object(j.jsx)("span",{className:"Important",children:"Hover over "}),"the icons below to find out what each icon represents."]})]}),Object(j.jsxs)(B,{title:"Languages",children:[Object(j.jsx)(x,{type:"fab",icon:"js",alt:"JavaScript"}),Object(j.jsx)(x,{type:"fab",icon:"html5",alt:"HTML"}),Object(j.jsx)(x,{type:"fab",icon:"css3-alt",alt:"CSS"}),Object(j.jsx)(x,{type:"fas",icon:"copyright",alt:"C++"}),Object(j.jsx)(x,{type:"fab",icon:"java",alt:"Java"}),Object(j.jsx)(x,{type:"fab",icon:"python",alt:"Python"}),Object(j.jsx)(x,{type:"fas",icon:"hashtag",alt:"C#"}),Object(j.jsx)(x,{type:"fas",icon:"database",alt:"SQL"})]}),Object(j.jsxs)(B,{title:"Frameworks",children:[Object(j.jsx)(x,{type:"fab",icon:"microsoft",alt:"ASP.NET"}),Object(j.jsx)(x,{type:"fab",icon:"react",alt:"React"}),Object(j.jsx)(x,{type:"fab",icon:"bootstrap",alt:"Bootstrap"}),Object(j.jsx)(x,{type:"fab",icon:"node-js",alt:"Node.js"}),Object(j.jsx)(x,{type:"fab",icon:"aws",alt:"AWS"})]}),Object(j.jsxs)(B,{title:"Technologies",children:[Object(j.jsx)(x,{type:"fab",icon:"unity",alt:"Unity"}),Object(j.jsx)(x,{svg:E,alt:"Photoshop"}),Object(j.jsx)(x,{svg:I,alt:"Blender"}),Object(j.jsx)(x,{type:"fab",icon:"docker",alt:"Docker"})]})]})}function B(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"Icon-Title",children:e.title}),Object(j.jsx)("div",{className:"Icon-Flex",children:e.children})]})}var H=function(){return Object(j.jsx)("div",{className:"Description",children:Object(j.jsx)(S,{title:"ABOUT ME",children:Object(j.jsx)(A,{})})})};n(48),n(49);var R=function(e){return Object(j.jsxs)("div",{className:"Card-Container",children:[Object(j.jsxs)("div",{className:"Card-Content",children:[Object(j.jsx)("img",{className:"Card-Img",src:e.img,alt:"card"}),Object(j.jsx)("div",{className:"Card-Description",children:e.description}),Object(j.jsx)("div",{className:"Card-Title",children:e.title}),Object(j.jsx)("div",{className:"Card-Text",children:e.text}),Object(j.jsx)("div",{className:"Card-Footer",children:e.footer})]}),Object(j.jsx)("div",{className:"Card-Tooltip",children:Object(j.jsx)(u,{className:"Card-Tooltip",children:e.children})})]})},L=n.p+"static/media/staples.0c5b33e5.svg",D=n.p+"static/media/qbuild.91384145.svg",M=n.p+"static/media/yrhacks.a8b6cf26.svg",U=n.p+"static/media/hillhacks.687355dd.svg",W=n.p+"static/media/shoplogix.aa78a0bc.svg";function z(e){return Object(j.jsx)("div",{className:"Cards-Container",children:e.children})}var F=function(){return Object(j.jsx)("div",{className:"Experience",children:Object(j.jsx)(S,{title:"EXPERIENCE",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Experience-Text",children:[Object(j.jsx)("span",{className:"Important",children:"Hover over"})," the cards for more information."]}),Object(j.jsxs)(z,{children:[Object(j.jsxs)(R,{img:L,title:"Staples",description:"OCT 19 - MAR 20 (6 Months)",footer:"Part Time",text:"Technology Sales Area Representative",children:[Object(j.jsx)("p",{children:"- Educated customers on technology to improve their shopping experience"}),Object(j.jsx)("p",{children:"- Listened to customer issues and directed them to alternate solutions/products"}),Object(j.jsx)("p",{children:"- Communicated clearly and politely while giving customer service"})]}),Object(j.jsxs)(R,{img:U,title:"Hill Hacks",description:"JAN 20 - MAR 20 (3 Months)",footer:"Volunteer",text:"Head of Graphic Design",children:[Object(j.jsx)("p",{children:"- Lead graphic designer at our high school's student run hackathon"}),Object(j.jsx)("p",{children:"- Collaborated with faculty and other executives to create posters, websites and post for social media"}),Object(j.jsx)("p",{children:"- Organized the designing, purchasing and distribution of our custom T-shirts"}),Object(j.jsx)("p",{children:"Note: The hackathon did not end up happening due to the pandemic"})]}),Object(j.jsxs)(R,{img:D,title:"QBuild",description:"JAN 21 - APR 21 (4 Months)",footer:"Full Time Intern",text:"Application Developer",children:[Object(j.jsx)("p",{children:"- Added new features and fixed bugs in the company's CRM"}),Object(j.jsx)("p",{children:"- Worked closely with change ticket submitters to fully understand the ticket requirements"}),Object(j.jsx)("p",{children:"- Improved SQL CTE and SP runtimes by up to 30 times"}),Object(j.jsxs)("p",{children:["Languages: HTML, CSS, JS, C#, SQL ",Object(j.jsx)("br",{}),"Technologies: ASP.net, Kendo UI"]})]}),Object(j.jsxs)(R,{img:M,title:"YRHacks",description:"APR 21 - APR 21 (1 Month)",footer:"Volunteer",text:"Workshop Host",children:[Object(j.jsx)("p",{children:"- Gave a workshop on how to create a discord bot in Discord.py"}),Object(j.jsx)("p",{children:"- Created a bot which fetches Pokemon data from PokeApi (RESTful API)"}),Object(j.jsx)("p",{children:"- 100% uptime using Flask and UptimeRobot"}),Object(j.jsxs)("p",{children:["Languages: Python ",Object(j.jsx)("br",{}),"Technologies: Repl.it, Discord.py, Flask, PokeApi"]})]}),Object(j.jsxs)(R,{img:D,title:"QBuild",description:"SEPT 21 - DEC 21 (4 Months)",footer:"Full Time Intern",text:"Application Developer",children:[Object(j.jsx)("p",{children:"- Furthered our CAD to ERP integration system"}),Object(j.jsx)("p",{children:"- Updated backend data fetching with asynchronous calls, leading to 9 fold reductions in load times"}),Object(j.jsx)("p",{children:"- Designed binary data transfer pipelines for seamless client to database image upload"}),Object(j.jsxs)("p",{children:["Languages: HTML, CSS, JS, C#, SQL ",Object(j.jsx)("br",{}),"Technologies: ASP.net, Telerik UI"]})]}),Object(j.jsx)(R,{img:W,title:"Shoplogix",description:"MAY 22 - Current",footer:"Full Time Intern",text:"Software Developer",children:Object(j.jsx)("p",{children:"- Current Position"})})]})]})})})},J=(n(50),n(18));n(51);o.b.add(d.a,l.c);var G=function(e){var t,n=[],c=Object(J.a)(e.icons);try{for(c.s();!(t=c.n()).done;){var i=t.value;n.push(Object(j.jsx)(r.a,{icon:[i.type,i.icon]},i.icon))}}catch(s){c.e(s)}finally{c.f()}return Object(j.jsxs)("div",{className:"ProjectCard-Container",children:[Object(j.jsxs)("div",{className:"ProjectCard-Content",children:[Object(j.jsx)("div",{className:"ProjectCard-Title",children:e.title}),Object(j.jsx)("div",{className:"ProjectCard-Icons",children:n}),Object(j.jsx)("div",{className:"ProjectCard-Description",children:e.children})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{onClick:function(t){t.preventDefault(),window.open(e.a,"_blank")},className:"ProjectCard-Button",children:["View on GitHub",Object(j.jsx)(r.a,{icon:["fab","github"]})]})})]})};var Q=function(){return Object(j.jsx)("div",{className:"Projects",children:Object(j.jsx)(S,{title:"PROJECTS",children:Object(j.jsxs)("div",{className:"ProjectCards-Container",children:[Object(j.jsxs)(G,{title:"Personal Website",icons:[{type:"fab",icon:"js"},{type:"fab",icon:"html5"},{type:"fab",icon:"css3-alt"},{type:"fab",icon:"react"}],a:"https://github.com/kenzoengineer/Ken-Jiang-Site",children:[Object(j.jsxs)("p",{children:["- This website is made with React using the ",Object(j.jsx)("code",{children:"create-react-app"})," utility"]}),Object(j.jsx)("p",{children:"- Created reusable components to avoid repetition"}),Object(j.jsx)("p",{children:"- Applied UI/UX concepts such as hierarchy and composition"}),Object(j.jsxs)("p",{children:["- Deployed on GitHub pages with the ",Object(j.jsx)("code",{children:"npm run build"})," utility"]})]}),Object(j.jsxs)(G,{title:"inPrint",icons:[{type:"fab",icon:"java"},{type:"fab",icon:"node-js"}],a:"https://github.com/cneryx/InPrint",children:[Object(j.jsx)("p",{children:"- Created a biometrics based password auto filler and vault with my team for MasseyHacks V"}),Object(j.jsx)("p",{children:"- App fetched fingerprint information, and connected with a chrome extension using Node.js to autofill form fields"}),Object(j.jsx)("p",{children:"- Oversaw the design of the UI/UX, which created a clean end product"}),Object(j.jsx)("p",{children:"- Won second place overall"})]}),Object(j.jsxs)(G,{title:"WhoLostBot",icons:[{type:"fab",icon:"js"},{type:"fab",icon:"node-js"},{type:"fab",icon:"aws"}],a:"https://github.com/kenzoengineer/WhoLostBot",children:[Object(j.jsx)("p",{children:"- Designed a discord bot using Discord.js which tracks voice channel events"}),Object(j.jsx)("p",{children:"- Able to display rankings in a user friendly format"}),Object(j.jsx)("p",{children:"- Used local storage for permanent and efficient storage"}),Object(j.jsx)("p",{children:"- Hosted the bot on Amazon's EC2 server for 24/7 Uptime"})]}),Object(j.jsxs)(G,{title:"BeeBrawl",icons:[{type:"fab",icon:"unity"},{type:"fas",icon:"hashtag"}],a:"https://github.com/kenzoengineer/BeeBrawl",children:[Object(j.jsx)("p",{children:"- Developed a wave based shooter using Unity Game Engine"}),Object(j.jsx)("p",{children:"- Created object oriented scripts in C#"}),Object(j.jsx)("p",{children:"- Utilised raytracing and other forms of linear algebra"}),Object(j.jsx)("p",{children:"- Still unfinished, currently in progress"})]}),Object(j.jsxs)(G,{title:"YRHacks Bot",icons:[{type:"fab",icon:"python"}],a:"https://github.com/kenzoengineer/YRHacks-2021-bot",children:[Object(j.jsx)("p",{children:"- Programmed an example discord bot for YRHacks 2021 workshop attendees"}),Object(j.jsx)("p",{children:"- Used Discord.py as a bot api, and PokeApi RESTful API for data"}),Object(j.jsx)("p",{children:"- Stored data about a user's favourite pokemon using a key-value pair database"})]}),Object(j.jsxs)(G,{title:"BeeBrawl Site",icons:[{type:"fab",icon:"js"},{type:"fab",icon:"html5"},{type:"fab",icon:"css3-alt"},{type:"fab",icon:"bootstrap"}],a:"https://github.com/kenzoengineer/GameSite",children:[Object(j.jsx)("p",{children:"- Constructed a mock-site to advertise BeeBrawl"}),Object(j.jsx)("p",{children:"- Used Bootstrap's library for simple page layout"}),Object(j.jsx)("p",{children:"- Used JQuery for simple syntactic sugar"}),Object(j.jsx)("p",{children:"- Deployed the site live using Amazon Amplify (Currently offline, instead deployed on github pages)"})]}),Object(j.jsxs)(G,{title:"TextTracker",icons:[{type:"fas",icon:"leaf"},{type:"fab",icon:"js"},{type:"fab",icon:"node-js"}],a:"https://github.com/kenzoengineer/TextTracker",children:[Object(j.jsx)("p",{children:"- Coded a discord bot which allows users to track the occurances of words in their discord servers"}),Object(j.jsx)("p",{children:"- Used MongoDB to store data in the cloud"}),Object(j.jsx)("p",{children:"- Leveraged quickchart.js to generate minimalistic and visually pleasing charts"}),Object(j.jsx)("p",{children:"- Designed the bot with scalability in mind, allowing the bot to service many servers and users at the same time"})]})]})})})};n(52);var V=function(){var e=Object(c.useState)(!0),t=Object(p.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),a=Object(p.a)(s,2),o=a[0],d=a[1];function h(){if(!o){d(!0);var e=document.getElementById("themeContent");e.style.animation="swap ease-in-out 1s 1 ",setTimeout((function(){e.style.animation="",d(!1)}),1e3),setTimeout((function(){!function(e){var t=document.querySelector(":root");if(e)return t.style.setProperty("--primary","#282c34"),t.style.setProperty("--secondary","#808080"),t.style.setProperty("--tertiary","#cccccc"),t.style.setProperty("--background","#eaeaea"),void t.style.setProperty("--filter","0.2");t.style.setProperty("--primary","#e2e7ec"),t.style.setProperty("--secondary","#a6acb8"),t.style.setProperty("--tertiary","#575d69"),t.style.setProperty("--background","#282c34"),t.style.setProperty("--filter","1")}(n),i(!n)}),500)}}return Object(j.jsx)("div",{onClick:function(){return h()},className:"Theme-Container",children:Object(j.jsx)("div",{className:"Theme-Icon",children:Object(j.jsx)("div",{className:"Theme-Content",id:"themeContent",children:Object(j.jsx)(r.a,{icon:n?l.a:l.b})})})})};var Y=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(V,{}),Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(T,{})}),Object(j.jsx)(H,{}),Object(j.jsx)(F,{}),Object(j.jsx)(Q,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),q()}],[[53,1,2]]]);
//# sourceMappingURL=main.9b11db5a.chunk.js.map