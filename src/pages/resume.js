import React from "react"
import Layout from "../components/layout";
import Head from "../components/head";
import {graphql, useStaticQuery} from "gatsby";

import resumeStyles from "./resume.module.scss"


const ResumePage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulResume ( sort: { fields:startDate, order: DESC }){
            edges{
                node{
                    title
                    category
                    startDate(formatString: "MMMM, YYYY")
                    endDate(formatString: "MMMM, YYYY")
                    place
                    location
                    body
                    link
                }
            }
        }
    }`);

    return(
        <Layout>
            <Head title="Resume"/>
            <div>
                <h1>Experiences</h1>
                <ol className={resumeStyles.items}>
                    {data.allContentfulResume.edges.filter(edge => edge.node.category === "Experiences").map((edge) => {
                    return (
                        <li>
                            <div>
                                <h3>{edge.node.place}</h3>
                                <p>{edge.node.startDate} - {edge.node.endDate === null ? "Present" : edge.node.endDate}</p>
                                <p>{edge.node.location}</p>
                                {edge.node.link && <p>{edge.node.link}</p>}
                            </div>
                            <div>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.body}</p>
                            </div>
                        </li>
                    )})}
                </ol>
            </div>
            <div>
                <h1>Educations</h1>
            </div>
            <div>
                <h1>Projects</h1>
            </div>
        </Layout>
    )
};
export default ResumePage