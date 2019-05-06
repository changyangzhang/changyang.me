import React from "react"
import Layout from "../components/layout";
import {Link} from "gatsby";
import Head from "../components/head";

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h2>Oops! Page not found</h2>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
};

export default NotFound