import * as React from "react"

const seoData = {
  "title": "Inderpreet Singh | Lead Software Engineer",
  "description": "Lead Software Engineer at Grab specializing in experimentation platforms, backend systems, and cloud architecture",
  "author": "Inderpreet Singh",
  "siteUrl": "https://inder24.github.io",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
