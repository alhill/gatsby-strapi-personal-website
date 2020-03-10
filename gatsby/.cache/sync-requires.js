const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-entrada-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/templates/entrada.es.js"))),
  "component---src-templates-entrada-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/templates/entrada.en.js"))),
  "component---src-templates-proyecto-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/templates/proyecto.es.js"))),
  "component---src-templates-project-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/templates/project.en.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/404.js"))),
  "component---src-pages-agradecimientos-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/agradecimientos.en.js"))),
  "component---src-pages-agradecimientos-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/agradecimientos.es.js"))),
  "component---src-pages-blog-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/blog.en.js"))),
  "component---src-pages-blog-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/blog.es.js"))),
  "component---src-pages-contacto-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/contacto.en.js"))),
  "component---src-pages-contacto-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/contacto.es.js"))),
  "component---src-pages-cv-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/cv.en.js"))),
  "component---src-pages-cv-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/cv.es.js"))),
  "component---src-pages-index-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/index.en.js"))),
  "component---src-pages-index-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/index.es.js"))),
  "component---src-pages-projects-en-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/projects.en.js"))),
  "component---src-pages-proyectos-es-js": hot(preferDefault(require("/home/blacknosaur/perso/gatsby/src/pages/proyectos.es.js")))
}

