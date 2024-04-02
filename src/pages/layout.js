import React from 'react';
import NavBar from '../components/nav'
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Layout = ({ children, marginTop, hideFinance, hideForm }) => {

  // const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()
  const {title, description, image, siteUrl } = useSiteMetadata();
  console.log('HELLO!!', title)
  const seo = {
    title: title ,
    description: description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}`
  }


  return (

    <div className="scroll-smooth">
      <Helmet  htmlAttributes={{ lang : "en" }}>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      </Helmet>
      <NavBar />
        <main className={marginTop ? 'pt-24' : ''}>
          <div className="m-auto max-w-screen-3xl">
            {children}
          </div>
        </main>
      <Footer hideFinance={hideFinance} hideForm={hideForm}/>
    </div>
  );
};

export default Layout;


