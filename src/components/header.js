import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from "./header.module.scss"

const Header = () => {
    const data =  useStaticQuery(graphql`
    query{
        contentfulAsset( title: { eq: "logo"} ) {
            file{
                fileName
                url
            }
        }
    }`);
    return (
        <header className={headerStyles.header}>
            <Link to='/' className={headerStyles.title}>
                <img alt={data.contentfulAsset.file.fileName} src={data.contentfulAsset.file.url} className={headerStyles.logo}/>
            </Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header