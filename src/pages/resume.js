import React from "react"
import Layout from "../components/layout";
import Head from "../components/head";
import {graphql, Link, useStaticQuery} from "gatsby";

import resumeStyles from "./resume.module.scss"


const ResumePage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulResume ( sort: { fields:endDate, order: DESC }){
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
        contentfulAsset( title: { eq: "CV"} ) {
            file{
                fileName
                url
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
                                            <p className={[resumeStyles.link, resumeStyles.hidden].join(' ')}><span role="img" aria-label="pin">📍 </span>{edge.node.location}</p>
                                            {edge.node.link  && <a className={resumeStyles.link} href={edge.node.link} target="_blank" rel="noopener noreferrer">
                                                <span role="img" aria-label="link">🔗 </span>{edge.node.link}</a>}
                                        </div>
                                        <div className={resumeStyles.rightBox}>
                                            <h5>{edge.node.title}</h5>
                                            <p className={resumeStyles.hidden}>{edge.node.body}</p>
                                        </div>
                                    </li>
                                )})}
                        </ol>
                    </div>
                )
            })}
            <div className={resumeStyles.skills}>
                <h2>Skills</h2>
                <p>However difficult life may seem, there is always something you can do and succeed at.   --Stephen Hawking</p>
                <div className={resumeStyles.skillsSection}>
                    <h3>Industry Knowledge</h3>
                    <ol>
                        <li>Java, Spring Framework</li>
                        <li>JavaScript, ReactJs</li>
                        <li>MongoDB / SQL</li>
                        <li>HTML / SCSS</li>
                        <li>Amazon Web Services</li>
                        <li>GIT / Jenkins / Docker</li>
                        <li>Performance Testing</li>
                        <li>Groovy, Spock Framework</li>
                    </ol>
                    <p>This site is build on Gatsby, ReactJS, GraphQL and a CMS.</p>
                    <div className={resumeStyles.button}>
                        <a href="https://github.com/changyangzhang" target="_blank" rel="noopener noreferrer"><p>Github</p></a>
                    </div>
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
            <h2>Projects</h2>
            <ol className={resumeStyles.items}>
                {data.allContentfulResume.edges.filter(edge => edge.node.category === "Projects").map((edge) => {
                    return (
                        <li className={resumeStyles.projects}>
                            <h5>{edge.node.title}</h5>
                            <p>{edge.node.startDate} - {edge.node.endDate === null ? "Present" : edge.node.endDate}</p>
                            <p className={resumeStyles.projectsText}>{edge.node.body}</p>
                            <p>Deployed on {edge.node.location}</p>
                            {edge.node.link  && <a className={resumeStyles.link} href={edge.node.link} target="_blank" rel="noopener noreferrer">
                                <span role="img" aria-label="link">🔗 </span>{edge.node.link}</a>}
                        </li>
                    )})}
            </ol>
            <div className={resumeStyles.contacts}>
                <h2>Want to know more?</h2>
                <p>Now you have known a bit about me, I am excited to get to talk with you.</p>
                <div className={resumeStyles.buttons}>
                    <Link to="/contact"><p>Contact Me</p></Link>
                    <a href={data.contentfulAsset.file.url} target="_blank" rel="noopener noreferrer"><p>Download</p></a>
                </div>
            </div>
        </Layout>
    )
};
export default ResumePage