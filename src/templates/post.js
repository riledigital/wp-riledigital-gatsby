import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  excerpt,
  date,
  author
}) => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 p-8">
      <section className="lg:col-span-1">
        <h1 className="text-2xl">{title}</h1>
        {/* <div style={{ marginTop: `4rem` }}> */}

        <p className="">{excerpt && excerpt ? <div>excerpt</div> : null}</p>
        {categories && categories.length ? (
          <div>
            <h4>Categories</h4>
            <ul className="taglist">
              {categories.map(category => (
                <li key={`${category.slug}cat`} className="text-lg ">
                  <Link to={`/categories/${category.slug}/`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {tags && tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={`${tag.slug}tag`}>
                  <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section id="blog-content" className="md:col-span-3">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data;

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        excerpt={post.excerpt}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      excerpt
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`;
