import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import FeatureCard from './FeatureCard'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section id="indexGrid" className="section">
        <div className="m-4 md:m-8">
          {title && title ? (
            <header className="content h-32">
              <h2 className="text-2xl">{title}</h2>
            </header>
          ) : null}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {posts.map(({ node: post }) => (
              <FeatureCard post={post} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  # wordpress__POST
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    featured_media {
      source_url
      # localFile {
      #   childImageSharp {
      #     fixed(width: 500, height: 300) {
      #       ...GatsbyImageSharpFixed_withWebp
      #     }
      #   }
      # }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
