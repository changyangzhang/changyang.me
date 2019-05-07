import React from "react"
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Head from "../components/head";
import notesStyles from "../pages/notes.module.scss";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost( slug: { eq: $slug } ) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            category
            body {
                json
            }
        }
    }
`;

const Note = (props) => {
    const options = {
      renderNode: {
          "embedded-asset-block": (node) => {
              const alt = node.data.target.fields.title['en-US'];
              const url = node.data.target.fields.file['en-US'].url;
              return <img alt={alt} src={url}/>
          }
      }
    };
  return (
      <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          {props.data.contentfulBlogPost.category === 'tech' ? <div className={[notesStyles.category, notesStyles.tech].join(' ')}>{props.data.contentfulBlogPost.category}</div> :
              props.data.contentfulBlogPost.category === 'travel' ? <div className={[notesStyles.category, notesStyles.travel].join(' ')}>{props.data.contentfulBlogPost.category}</div> :
                  <div className={[notesStyles.category, notesStyles.photography].join(' ')}>{props.data.contentfulBlogPost.category}</div>}
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          {props.data.contentfulBlogPost.title === "Iceland Adventure 2019" &&
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iW6Zr-zEyPM" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen title="icelandYoutube"/>}
      </Layout>
  )
};

export default Note