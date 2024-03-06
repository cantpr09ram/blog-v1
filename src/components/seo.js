/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ title, description, img, children, pathname}) => {

  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const seo = {
    title: title || site.siteMetadata?.title,
    description: description || site.siteMetadata.description,
    image: `${siteUrl}${image}` || img, 
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content="https://cantpr09ram.github.io/" />
      <meta name="og:image" content={seo.image}></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={seo.twitterUsername}
      />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {children}
    </>
  )
}

export default Seo
