(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{RNXr:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return s}));r("KKXr"),r("Z2Ku"),r("L9s1");var a=r("q1tI"),o=r.n(a),n=r("Wbzz"),l=r("vrFN"),i=r("cWRn");var c=function(t){var e,r;function a(){for(var e,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).state={filtro:void 0},e.filtrarProyectos=function(t){e.setState({filtro:t})},e}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){var t=this;return o.a.createElement(i.a,{location:this.props.location},o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"Al Hill - Proyectos"}),o.a.createElement("h1",null,"Proyectos"),o.a.createElement("div",{className:"filtroWrapper"},o.a.createElement("span",{className:"filtroBtn "+(void 0===this.state.filtro?"selected":""),onClick:function(){return t.filtrarProyectos(void 0)}},"Todos"),o.a.createElement("span",{className:"filtroBtn "+("web"===this.state.filtro?"selected":""),onClick:function(){return t.filtrarProyectos("web")}},"Web"),o.a.createElement("span",{className:"filtroBtn "+("sonido"===this.state.filtro?"selected":""),onClick:function(){return t.filtrarProyectos("sonido")}},"Sonido")),o.a.createElement("div",{className:"projectWrapper"},this.props.data.allStrapiProyecto.edges.map((function(e){var r=e.node;return o.a.createElement(n.Link,{key:r.id,to:"/proyecto/"+r.id,className:"projectBox "+(r.categorias.split(",").includes(t.state.filtro)||void 0===t.state.filtro?"":"filtrada")},o.a.createElement("img",{src:r.thumbnail.publicURL}),o.a.createElement("div",{className:"projectTitle"},o.a.createElement("p",null,r.titulo)))})))))},a}(a.Component);e.default=c;var s="1310169995"}}]);
//# sourceMappingURL=component---src-pages-proyectos-es-js-a2938794dab8dc0ab2d1.js.map