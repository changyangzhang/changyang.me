const path = require('path');

// module.exports.onCreateNode = ({ node, actions }) =>{
//     const { createNodeField } = actions;
//
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
//  };

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const noteTemplate = path.resolve(`./src/templates/note.js`);
    const res = await graphql(`
    query{
        allContentfulBlogPost{
            edges{
                node{
                    slug
                }
            }
        }
    }`);

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: noteTemplate,
            path: `/note/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
};