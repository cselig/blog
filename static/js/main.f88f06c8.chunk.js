(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,a){e.exports=a(97)},67:function(e,t,a){},68:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(20),o=a.n(r),u=(a(67),a(102)),i=a(104),s=a(22),m=a(13),c=(a(68),function(){return l.a.createElement("div",{className:"emphasis all"},l.a.createElement("h1",{className:"padded bottom"},"Hi!"," ",l.a.createElement("span",{role:"img","aria-label":"waving hand"},"\ud83d\udc4b")),l.a.createElement("h2",{className:"padded bottom"},"My name is Ben."),l.a.createElement("h4",{className:"padded bottom contents"},"I'm a software engineer at Facebook, where I work on natural language processing."),l.a.createElement("h4",{className:"padded bottom contents"},"I like trying to explain things in fun and informative ways. I used to fairly active on"," ",l.a.createElement("a",{href:"https://github.com/codekansas"},"Github"),". If you're interested in connecting, shoot me an"," ",l.a.createElement("a",{href:"mailto:ben@bolte.cc"},"email"),"."),l.a.createElement("h4",{className:"padded bottom contents"},"Besides programming, I like playing soccer and reading books. I'm currently trying to get better at"," ",l.a.createElement("a",{href:"https://www.chess.com/member/codekansas"},"chess"),", but it's slow going."))}),p=a(28),d=a(101),h=a(105),v=a(39),g=a(40),f=a(45),b=a(41),E=a(44),y=a(103),k=a(56),V=a(99),w=a(100),_=(a(69),a(18)),T=a(55),M=a.n(T),S=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={nearestValue:null},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"runModel",value:function(){var e=this.props,t=e.params,a=e.model,n=e.dt,l=e.totalTime,r=e.targetParamKey,o=l/n,u=new Map(t.map(function(e){return[e.key,e.value]}));return Object(p.a)(Array(o).keys()).reduce(function(e,t){var l=a(e.params,n,t*n);return e.results.push({x:t*n,y:l.get(r)}),{params:l,results:e.results}},{params:u,results:[]}).results}},{key:"render",value:function(){var e=this,t=this.props,a=t.params,n=t.model,r=t.height,o=t.ylabel,u=this.runModel(a,n),i=this.state.nearestValue;return l.a.createElement(_.b,{height:r,onMouseLeave:function(){return e.setState({nearestValue:null})}},l.a.createElement(_.d,{title:"Time (ms)"}),l.a.createElement(_.e,{title:o}),l.a.createElement(_.c,{strokeStyle:"dashed",data:u,onNearestX:function(t){return e.setState({nearestValue:t})}}),null==i?null:l.a.createElement(_.a,{values:[i],titleFormat:function(e){return{title:"Time (ms)",value:"".concat(Math.round(1e4*e[0].x)/1e4)}},itemsFormat:function(e){return e.map(function(e){return{title:o,value:"".concat(Math.round(1e4*e.y)/1e4)}})}}))}}]),t}(n.Component),P=function(e){function t(e){var a;Object(v.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(e){var t=a.props.params;e.preventDefault(),e.stopPropagation();var n=e.currentTarget,l=t.map(function(e){var t=e.key,a=e.name,l=e.unit,r=e.stepValue;return{key:t,name:a,unit:l,value:parseFloat(n[t].value),stepValue:r}}),r=n.out_var.value;a.setState({params:l,targetParamKey:r})};var n=e.params,l=e.defaultTargetParamKey;return a.state={params:n,targetParamKey:l},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"renderModel",value:function(){var e=this.props,t=e.model,a=e.height,n=this.state,r=n.params,o=n.targetParamKey,u=r.find(function(e){return e.key===o}),i=u.name,s=u.unit,m=null==s?i:"".concat(i," (").concat(s,")");return l.a.createElement("div",null,l.a.createElement(M.a,{height:a},l.a.createElement(S,{params:r,targetParamKey:o,model:t,ylabel:m,dt:.01,totalTime:100,height:a})),l.a.createElement(y.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a.Row,null,r.map(function(e){return l.a.createElement(y.a.Group,{key:e.key,controlId:e.key,as:k.a,md:"3"},l.a.createElement(y.a.Label,null,e.name),l.a.createElement(V.a,null,l.a.createElement(y.a.Control,{type:"number",placeholder:e.name,defaultValue:e.value,step:e.stepValue,required:!0}),null==e.unit?null:l.a.createElement(V.a.Append,null,l.a.createElement(V.a.Text,null,e.unit))))}),l.a.createElement(y.a.Group,{controlId:"out_var",as:k.a,md:"3"},l.a.createElement(y.a.Label,null,"Output Variable"),l.a.createElement(y.a.Control,{as:"select",defaultValue:o,required:!0},r.map(function(e){return l.a.createElement("option",{value:e.key,key:e.key},e.name)}))),l.a.createElement(y.a.Group,{key:"submit",as:k.a,md:"3"},l.a.createElement(y.a.Label,null,"Update Params"),l.a.createElement(V.a,null,l.a.createElement(w.a,{type:"submit"},"Update"))))))}},{key:"render",value:function(){return this.renderModel()}}]),t}(n.Component);P.defaultProps={height:300};var x=P,I=[{key:"v_reset",name:"Reset Voltage",unit:"mV",value:-60,stepValue:1},{key:"v_thresh",name:"Threshold Voltage",unit:"mV",value:15,stepValue:1},{key:"v_in",name:"Input Voltage",unit:"mV",value:20,stepValue:1},{key:"tau_m",name:"Time Constant",unit:"ms",value:10,stepValue:1},{key:"v_mem",name:"Membrane Voltage",unit:"mV",value:0,stepValue:1},{key:"start_time",name:"Stimulation Start Time",unit:"ms",value:20,stepValue:1}],N=function(e,t,a){var n=e.get("v_reset"),l=e.get("v_thresh"),r=a<e.get("start_time")?n:e.get("v_in"),o=e.get("v_mem"),u=o+(r-o)/e.get("tau_m")*t,i=u>l?n:u;return e.set("v_mem",i),e},j=function(){return l.a.createElement(x,{params:I,defaultTargetParamKey:"v_mem",model:N})},O=[{key:"a",name:"a Variable",unit:null,value:.02,stepValue:.001},{key:"b",name:"b Variable",unit:null,value:.2,stepValue:.01},{key:"c",name:"c Variable",unit:null,value:-50,stepValue:1},{key:"d",name:"d Variable",unit:null,value:2,stepValue:.01},{key:"v_in",name:"Input Voltage",unit:"mV",value:20,stepValue:1},{key:"v_thresh",name:"Threshold Voltage",unit:"mV",value:30,stepValue:1},{key:"v_mem",name:"Membrane Voltage",unit:"mV",value:-60,stepValue:1},{key:"u",name:"u Variable",unit:null,value:.5,stepValue:.01},{key:"start_time",name:"Stimulation Start Time",unit:"ms",value:20,stepValue:1}],C=function(e,t,a){var n=e.get("a"),l=e.get("b"),r=e.get("c"),o=e.get("d"),u=e.get("v_thresh"),i=a<e.get("start_time")?0:e.get("v_in"),s=e.get("v_mem"),m=e.get("u"),c=s+(.04*s*s+5*s+140-m+i)*t,p=m+n*(l*s-m)*t;return c>=u?(e.set("v_mem",r),e.set("u",p+o)):(e.set("v_mem",c),e.set("u",p)),e},L=function(){return l.a.createElement(x,{params:O,defaultTargetParamKey:"v_mem",model:C})},A=[{key:"e_na",name:"Sodium Reversal Potential",unit:"mV",value:50,stepValue:1},{key:"e_k",name:"Potassium Reversal Potential",unit:"mV",value:-77,stepValue:1},{key:"e_l",name:"Leak Potential",unit:"mV",value:-54,stepValue:1},{key:"g_na",name:"Sodium Conductance",unit:"mS / cm * cm",value:120,stepValue:1},{key:"g_k",name:"Potassium Conductance",unit:"mS / cm * cm",value:36,stepValue:1},{key:"g_l",name:"Leak Conductance",unit:"mS / cm * cm",value:.3,stepValue:.01},{key:"v_in",name:"Input Voltage",unit:"mV",value:20,stepValue:1},{key:"v_mem",name:"Membrane Voltage",unit:"mV",value:-65,stepValue:1},{key:"m",name:"m Variable",unit:null,value:.05,stepValue:.001},{key:"h",name:"h Variable",unit:null,value:.6,stepValue:.001},{key:"n",name:"n Variable",unit:null,value:.32,stepValue:.001},{key:"start_time",name:"Stimulation Start Time",unit:"ms",value:20,stepValue:1}],K=function(e,t,a){var n=e.get("e_na"),l=e.get("e_k"),r=e.get("e_l"),o=e.get("g_na"),u=e.get("g_k"),i=e.get("g_l"),s=a<e.get("start_time")?0:e.get("v_in"),m=e.get("v_mem"),c=e.get("m"),p=e.get("n"),d=e.get("h"),h=(s-o*c*c*c*d*(m-n)-u*p*p*p*p*(m-l)-i*(m-r))*t,v=m+40,g=.1*v/(1-Math.exp(-v/10)),f=.07*Math.exp(-(m+65)/20),b=m+55,E=.01*b/(1-Math.exp(-b/10)),y=(g*(1-c)-4*Math.exp(-(m+65)/18)*c)*t,k=(f*(1-d)-1/(1+Math.exp(-(m+35)/10))*d)*t,V=(E*(1-p)-.125*Math.exp(-(m+65)/80)*p)*t;return e.set("m",c+y),e.set("h",d+k),e.set("n",p+V),e.set("v_mem",m+h),e},R=function(){return l.a.createElement(x,{params:A,defaultTargetParamKey:"v_mem",model:K})},W=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Leaky Integrate and Fire Model"),l.a.createElement("div",null,"This is the simplest kind of neuron model. It consists of two parts:",l.a.createElement("ol",null,l.a.createElement("li",null,"Slow leakage of ions across the membrane, which is represented as a resistor"),l.a.createElement("li",null,"Voltage difference across the membrane which triggers voltage-gated channels to open when it reaches a certain threshold, which is represented as a capacitor"))),l.a.createElement("div",{className:"emphasis top-bottom"},l.a.createElement(j,null)),l.a.createElement("h3",null,"Izhikevich Model"),l.a.createElement("div",null,"Something about this model..."),l.a.createElement("div",{className:"emphasis top-bottom"},l.a.createElement(L,null)),l.a.createElement("h3",null,"Hodgkin-Huxley Model"),l.a.createElement("div",null,"This is a much more advanced kind of model."),l.a.createElement("div",{className:"emphasis top-bottom"},l.a.createElement(R,null)))},F=function(){return l.a.createElement("div",null,"I will work on this blog post later.")},B=new Map([["torchscript",{title:"Torchscript \ud83d\udd25 verses Caffe2 \u2615",blurb:l.a.createElement("span",null,"Facebook is migrating a lot of our machine learning inference infrastructure over to Torchscript, so I figured I should write an informational blog post about the technical internals of each, as I understand them."),renderer:F}],["neuron_models",{title:"Neuron \ud83e\udde0 Models",blurb:l.a.createElement("span",null,"An investigation of some different kinds of biological neuron models, from the neuroscience world rather than the computer science world"),renderer:W}]]),U=(a(85),function(e){var t=e.info,a=t.title,n=t.blurb,r=t.renderer;return l.a.createElement("div",{className:"emphasis all"},l.a.createElement("h1",{className:"padded bottom text-center title"},a),l.a.createElement("h4",{className:"padded bottom text-center blurb"},n),r())}),G=function(e){var t=e.post;return null!=t&&B.has(t)?l.a.createElement(U,{info:B.get(t)}):l.a.createElement("div",{className:"emphasis all"},l.a.createElement("h1",{className:"padded bottom"},"Posts"),l.a.createElement(d.a,null,Object(p.a)(B.keys()).map(function(e){var t=B.get(e),a=t.title,n=t.blurb;return l.a.createElement(h.a,{className:"text-center p-3",key:e},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,l.a.createElement(s.b,{to:"/posts/".concat(e)},a)),l.a.createElement(h.a.Text,null,n)))})))},H=(a(88),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(u.a,{bg:"light",expand:"lg"},l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Link,{href:"#/"},"Home"),l.a.createElement(i.a.Link,{href:"#posts"},"Posts"))))),l.a.createElement(s.a,null,l.a.createElement(m.a,{exact:!0,path:"/",component:c}),l.a.createElement(m.a,{path:"/posts",component:function(e){var t=e.match.url;return l.a.createElement(s.a,null,l.a.createElement(m.a,{exact:!0,path:"".concat(t),component:G}),l.a.createElement(m.a,{path:"".concat(t,"/:post"),component:function(e){var t=e.match.params.post;return l.a.createElement(G,{post:t})}}))}})))}),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(H,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/blog",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/blog","/service-worker.js");q?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):J(t,e)})}}()}},[[62,1,2]]]);
//# sourceMappingURL=main.f88f06c8.chunk.js.map