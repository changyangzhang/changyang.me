import React from "react"
import Layout from "../components/layout";
import Head from "../components/head";

import contactStyles from "./contact.module.scss"
import {Helmet} from "react-helmet";

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact"/>
                <Helmet><script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer/></Helmet>
                <h1>Get in touch</h1>
                <div className={contactStyles.contact}>
                    <a className={[contactStyles.link, contactStyles.box].join(' ')} href="mailto:changyang629@gmail.com"><p className={contactStyles.text}>Message me</p></a>
                    <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                         data-type="horizontal" data-theme="dark" data-vanity="changyangzhang"><a
                        className={["LI-simple-link", contactStyles.link].join(' ')} href='https://se.linkedin.com/in/changyangzhang?trk=profile-badge' target="_blank" rel="noopener noreferrer">
                        FInd me on LinkedIn.</a></div>
                </div>
            </Layout>
        </div>
    )
};
export default ContactPage