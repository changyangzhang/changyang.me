import React from "react"
import Layout from "../components/layout";
import Head from "../components/head";
import {graphql, Link, useStaticQuery} from "gatsby";
import aboutStyles from'./index.module.scss';

const IndexPage = () => {
    const data =  useStaticQuery(graphql`
    query{
        site{
            siteMetadata {
                author
                }
            }
        contentfulAsset( title: { eq: "about me"} ) {
            file{
                fileName
                url
            }
        }
    }`);

  return (
      <div>
          <Layout>
              <Head title="About"/>
              <h1>你好, hello & hej!</h1>
              <div className={aboutStyles.about}>
                      <img alt={data.contentfulAsset.file.fileName} src={data.contentfulAsset.file.url} className={aboutStyles.img}/>
                      <div className={aboutStyles.text}>
                      <p>I am a full stack web developer. Come from Shenzhen, China but have been living in Stockholm, Sweden since 2012.</p>
                      <p>Love coding <span role="img" aria-label="coding">💻</span>, traveling <span role="img" aria-label="traveling">🗺️</span>,
                          nature <span role="img" aria-label="nature">🌲</span>, working-out <span role="img" aria-label="working-out">💪</span>,
                          badminton <span role="img" aria-label="badminton">🏸</span> and PC strategy games <span role="img" aria-label="games">🎮</span>.</p>
                      <p>Currently learning Swedish <span role="img" aria-label="se">🇸🇪</span> and photography <span role="img" aria-label="photo">📷</span>.</p>
                      <Link to="/contact" className={aboutStyles.link}>Grab a cup of green tea?</Link>
                  </div>
              </div>
          </Layout>
      </div>
  )
};

export default IndexPage