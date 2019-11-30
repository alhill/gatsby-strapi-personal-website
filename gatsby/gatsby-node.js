const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  
  const getEverything = makeRequest(graphql, `
    {
        entradaES: allStrapiEntrada {
            edges {
                node {
                  id
                  createdAt
                  titulo
                  cuerpo
                  media{ 
                    publicURL
                  }
                  thumbnail{ 
                    publicURL
                  }
                }
            }
        }        
        entradaEN: allStrapiEntrada {
            edges {
                node {
                  id
                  createdAt
                  tituloen
                  cuerpoen
                  media{ 
                    publicURL
                  }
                  thumbnail{ 
                    publicURL
                  }
                }
            }
        }       
        proyectoES: allStrapiProyecto {
            edges {
                node {
                  id
                  createdAt
                  titulo
                  cuerpo
                  categorias
                  media{ 
                    publicURL
                  }
                  thumbnail{ 
                    publicURL
                  }
                }
            }
        }
        proyectoEN: allStrapiProyecto {
            edges {
                node {
                  id
                  createdAt
                  tituloen
                  cuerpoen
                  categorias
                  media{ 
                    publicURL
                  }
                  thumbnail{ 
                    publicURL
                  }
              }
          }
      }
    }`).then(result => {
    // Create pages for each article.
    result.data.entradaES.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.id}`,
        component: path.resolve(`src/templates/entrada.es.js`),
        context: {
          id: node.id,
        },
      })
    })
    result.data.entradaEN.edges.forEach(({ node }) => {
      createPage({
        path: `/en/blog/${node.id}`,
        component: path.resolve(`src/templates/entrada.en.js`),
        context: {
          id: node.id,
        },
      })
    })
    result.data.proyectoES.edges.forEach(({ node }) => {
      createPage({
        path: `/proyecto/${node.id}`,
        component: path.resolve(`src/templates/proyecto.es.js`),
        context: {
          id: node.id,
        },
      })
    })
    result.data.proyectoEN.edges.forEach(({ node }) => {
      createPage({
        path: `/en/project/${node.id}`,
        component: path.resolve(`src/templates/project.en.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getEverything;
};