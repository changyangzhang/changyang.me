import React from "react"
import Layout from "../components/layout";
import {Link} from "gatsby";
import Head from "../components/head";
import footStyles from "../components/footer.module.scss";

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Oops! Page not found</h1>
            <p><Link className={footStyles.link} to="/">Head home</Link></p>
        </Layout>
    )
};

export default NotFound