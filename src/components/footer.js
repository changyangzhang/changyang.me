import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";

import footStyles from'./footer.module.scss';

const Footer = () => {
    const data =  useStaticQuery(graphql`
    query{
        site{
            siteMetadata {
                author
                }
            }
        contentfulAsset( title: { eq: "logo"} ) {
            file{
                fileName
                url
            }
        }
    }`);

    return (
        <footer className={footStyles.footer}>
            <div>
                <p className={footStyles.text}>Created by {data.site.siteMetadata.author}, © 2019, Made in Stockholm </p>
                <p><a href="https://github.com/changyangzhang/gastby" target="_blank" rel="noopener noreferrer" className={footStyles.link}>  Github</a></p>
            </div>
            <Link to='/'>
                <img alt={data.contentfulAsset.file.fileName} src={data.contentfulAsset.file.url} className={footStyles.logo}/>
            </Link>
        </footer>
    )
};

export default Footer