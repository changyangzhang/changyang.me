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

    const lists = ["Experience", "Education"];

    return(
        <Layout>
            <Head title="Resume"/>
            {lists.map((section) => {
                return(
                    <div>
                        <h2>{section}</h2>
                        <ol className={resumeStyles.items}>
                            {data.allContentfulResume.edges.filter(edge => edge.node.category === section).map((edge) => {
                                return (
                                    <li className={resumeStyles.box}>
                                        <div className={resumeStyles.leftBox}>
                                            <h4>{edge.node.place}</h4>
                                            <p>{edge.node.startDate} - {edge.node.endDate === null ? "Present" : edge.node.endDate}</p>
                                            <p className={resumeStyles.link}><span role="img" aria-label="pin">📍 </span>{edge.node.location}</p>
                                            {(edge.node.link && window.innerWidth >= 500) && <a className={resumeStyles.link} href={edge.node.link} target="_blank" rel="noopener noreferrer">
                                                <span role="img" aria-label="link">🔗 </span>{edge.node.link}</a>}
                                        </div>
                                        <div className={resumeStyles.rightBox}>
                                            <h5>{edge.node.title}</h5>
                                            {window.innerWidth >= 500 && <p>{edge.node.body}</p>}
                                        </div>
                                    </li>
                                )})}
                        </ol>
                    </div>
                )
            })}
            <div className={resumeStyles.skills}>
                <h2>Skills</h2>
                <div className={resumeStyles.skillsSection}>
                    <h3>Industry Knowledge</h3>
                    <ol>
                        <li></li>
                    </ol>
                </div>
                <div className={resumeStyles.skillsSection}>
                    <h3>Languages</h3>
                    <ol>
                        <li>Mandarin (Mother tongue)</li>
                        <li>Cantonese (Fluent)</li>
                        <li>English (Daily use)</li>
                        <li>Swedish (Survivable and learning)</li>
                    </ol>
                </div>
            </div>
        </Layout>
    )
};
export default ResumePage