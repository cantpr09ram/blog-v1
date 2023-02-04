/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            age
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  console.log(data)
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const iconsize = 30
  return (
    <>
      <div
        className="bio"
        style={{
          marginbottom: `20px`,
        }}
      >
        <StaticImage
          className="bio-avatar"
          src="../images/avatar.png"
          alt="Profile picture"
        />
        {author?.name && (
          <p>
            Hello My name is <strong>{author.name}</strong>. I am{" "}
            {author?.summary || null}
          </p>
        )}
      </div>
      <div
        className="social"
        style={{
          textAlign: `center`,
        }}
      >
        <a
          className="social"
          href={`https://twitter.com/${social?.twitter || ``}`}
        >
          <StaticImage
            src="../images/twitter.png"
            width={iconsize}
            height={iconsize}
          />
        </a>
        <a
          className="social"
          href={`https://instagram.com/${social?.instagram || `_bochain_`}`}
        >
          <StaticImage
            src="../images/instagram.png"
            width={iconsize}
            height={iconsize}
          />
        </a>
        <a
          className="social"
          href={`https://github.com/${social?.twitter || ``}`}
        >
          <StaticImage
            src="../images/github.png"
            width={iconsize}
            height={iconsize}
          />
        </a>
        <a
          className="social"
          href={`mailto:${social?.mail || `bochainwu@gmail.com`}`}
        >
          <StaticImage
            src="../images/email.png"
            width={iconsize}
            height={iconsize}
          />
        </a>
      </div>
    </>
  )
}

export default Bio
