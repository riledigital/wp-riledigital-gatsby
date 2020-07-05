import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const FeatureCard = props => {
  const post = props.post
  return (
    <div className="card inline-grid transition-all ease-out" key={post.id}>
      <Link to={post.slug}>
        {/* <FeatureCard /> */}
        <figure className="card-image h-auto overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={post.featured_media.source_url}
          />
        </figure>

        <div className="card-content text-xl">
          <h3 className="text-xl leading-tight mb-0">
            <Link to={post.slug}>{post.title}</Link>
          </h3>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: post.excerpt.replace(/<p class="link-more.*/, ''),
              }}
            />

            {/* Keep Reading → */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeatureCard
