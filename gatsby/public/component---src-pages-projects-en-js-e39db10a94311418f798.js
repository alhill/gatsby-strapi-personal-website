(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{CQ77:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("KKXr"),a("Z2Ku"),a("L9s1");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("vrFN"),i=a("X6VV");var s=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={filtro:void 0},t.filtrarProyectos=function(e){t.setState({filtro:e})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement(i.a,{location:this.props.location},r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Al Hill - Proyectos"}),r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"filtroWrapper"},r.a.createElement("span",{className:"filtroBtn "+(void 0===this.state.filtro?"selected":""),onClick:function(){return e.filtrarProyectos(void 0)}},"All"),r.a.createElement("span",{className:"filtroBtn "+("web"===this.state.filtro?"selected":""),onClick:function(){return e.filtrarProyectos("web")}},"Web"),r.a.createElement("span",{className:"filtroBtn "+("sonido"===this.state.filtro?"selected":""),onClick:function(){return e.filtrarProyectos("sonido")}},"Audio")),r.a.createElement("div",{className:"projectWrapper"},this.props.data.allStrapiProyecto.edges.map((function(t){var a=t.node;return r.a.createElement(o.Link,{key:a.id,to:"/en/project/"+a.id,className:"projectBox "+(a.categorias.split(",").includes(e.state.filtro)||void 0===e.state.filtro?"":"filtrada")},r.a.createElement("img",{src:a.thumbnail.publicURL}),r.a.createElement("div",{className:"projectTitle"},r.a.createElement("p",null,a.tituloen)))})))))},n}(n.Component);t.default=s;var c="2162209092"},Euwz:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Al Hill","languages":{"defaultLangKey":"es","langs":["en","es"]}}}}}')},X6VV:function(e,t,a){"use strict";a("tUrg"),a("pIFo"),a("91GP"),a("Z2Ku"),a("L9s1");var n=a("Euwz"),r=a("q1tI"),o=a.n(r),l=a("x0lo"),i=a("Wbzz"),s=a("LbRr"),c=a("LvDl"),p=a.n(c);a("IXuT"),a("2ZyM"),a("ZHwO");function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){var t,a;function r(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={homeButtons:!["","/"].includes(p.a.get(m(t),"props.location.pathname","").slice(3))&&["","/"].includes(p.a.get(m(t),"props.location.state.from")&&t.props.location.state.from.slice(3))},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.componentDidMount=function(){["/",""].includes(this.props.location.pathname.slice(3))?this.setState({homeButtons:!0}):this.setState({homeButtons:!1})},c.render=function(){var e=this,t=this.props,a=t.children,r=t.location;return o.a.createElement(i.StaticQuery,{query:"204920333",render:function(t){var n=r?r.pathname:"",c=t.site.siteMetadata.languages,p=c.langs,m=c.defaultLangKey,u=Object(l.getCurrentLangKey)(p,m,n),d="en"===u?"/en/":"/",f=Object(l.getLangs)(p,u,Object(l.getUrlForLang)(d,n)).map((function(e){var t="es"===e.langKey?"project":"proyecto",a="en"===e.langKey?"project":"proyecto";return Object.assign({},e,{link:e.link.replace("/"+m+"/","/").replace(t,a)})}));return o.a.createElement("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},o.a.createElement("div",{style:{width:"100vw",overflowX:"hidden"}},o.a.createElement(s.a,{siteTitle:t.site.siteMetadata.title,langs:f,root:d,location:r}),o.a.createElement("div",{className:"container boxes "+(e.state.homeButtons?"":"peque")},o.a.createElement(i.Link,{to:"/en/projects",state:{from:r&&r.pathname},className:"box"},o.a.createElement("h2",null,"Projects")),o.a.createElement(i.Link,{to:"/en/blog",state:{from:r&&r.pathname},className:"box"},o.a.createElement("h2",null,"Blog")),o.a.createElement(i.Link,{to:"/en/cv",state:{from:r&&r.pathname},className:"box"},o.a.createElement("h2",null,"CV")),o.a.createElement(i.Link,{to:"/en/contacto",state:{from:r&&r.pathname},className:"box"},o.a.createElement("h2",null,"Contact me")))),o.a.createElement("div",{style:{width:"100%",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0,flex:1}},o.a.createElement("main",{style:{padding:"2em 0"}},o.a.cloneElement(a,{langs:f}))),o.a.createElement("footer",{style:{width:"100vw",overflowX:"hidden",display:"flex",justifyContent:"center"}},o.a.createElement("p",{style:{maxWidth:960,margin:"0 10px 20px 10px"}},"© 2019 - Made with ",o.a.createElement("span",{role:"img","aria-label":"love"},"❤️"),", ",o.a.createElement("span",{role:"img","aria-label":"beer"},"🍺")," & ",o.a.createElement("span",{role:"img","aria-label":"poo"},"💩")," by ",o.a.createElement("span",{style:{whiteSpace:"nowrap"}},"Al Hill")," with the invaluable help of ",o.a.createElement(i.Link,{to:"/en/agradecimientos",state:{from:r&&r.pathname}},"all of ","/en/agradecimientos"===(r&&r.pathname)?"the people above ↑ ↑ ↑":"this great people"))))},data:n})},r}(r.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-projects-en-js-e39db10a94311418f798.js.map