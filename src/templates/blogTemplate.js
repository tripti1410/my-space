import React from "react";
import { graphql } from "gatsby";
import Header from "../layout-components/header/header";
import Footer from "../layout-components/footer";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  
  return (
    <div className="blog-post-container">
      <Header />
      <main className="blog-post">
        <h2 class="blog-post__title">{frontmatter.title}</h2>
        <div class="blog-post__details">
          <date>{frontmatter.date}</date>
        </div>
        <div
          className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
