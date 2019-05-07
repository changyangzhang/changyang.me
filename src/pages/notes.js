import React from "react"
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery} from "gatsby";

import notesStyles from './notes.module.scss'
import Head from "../components/head";


const NotesPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost ( sort: { fields:publishedDate, order: DESC }){
            edges{
                node{
                    title
                    slug
                    category
                    publishedDate(formatString: "MMMM Do, YYYY")
                }
            }
        }
    }`);

    return (
        <div>
            <Layout>
                <Head title="Notes"/>
            <h1>Notes</h1>
                <ol className={notesStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={notesStyles.posts}>
                                <Link to={`/notes/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    {edge.node.category === 'tech' ? <div className={[notesStyles.category, notesStyles.tech].join(' ')}>{edge.node.category}</div> :
                                        edge.node.category === 'travel' ? <div className={[notesStyles.category, notesStyles.travel].join(' ')}>{edge.node.category}</div> :
                                            <div className={[notesStyles.category, notesStyles.photography].join(' ')}>{edge.node.category}</div>}
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
};

export default NotesPage