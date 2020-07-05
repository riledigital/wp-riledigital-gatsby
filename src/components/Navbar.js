import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const styleNavItems = `hover:text-red-600 focus:text-red-600 active:text-red-600`

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressCategory(filter: {}) {
          edges {
            node {
              id
              slug
              path
              name
              link
            }
          }
        }

        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
              path
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 text-center md:text-left">
        <div>
          <Link to="/" className="no-underline text-xl font-extrabold">
            {/* <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
              </figure> */}
            Ri Le
          </Link>
        </div>

        <div className="navbar-start md:text-right space-x-4">
          {data.allWordpressPage.edges.map(edge => (
            <Link
              className={styleNavItems}
              to={edge.node.path}
              key={edge.node.slug}
            >
              {edge.node.title}
            </Link>
          ))}
          {data.allWordpressCategory.edges.map(edge => (
            <Link
              className={styleNavItems}
              to={edge.node.path}
              key={edge.node.slug}
            >
              {edge.node.name}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          {/* <a
              className="navbar-item"
              href="https://github.com/GatsbyCentral/gatsby-starter-wordpress"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a> */}
        </div>
      </nav>
    )}
  />
)

export default Navbar
