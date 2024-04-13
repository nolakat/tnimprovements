import React from 'react';
import NavBar from '../components/nav'
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import favIcon from '../images/tn_logo.png'

const Layout = ({ children, marginTop, hideFinance, hideForm }) => {

  // const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()
  const {title, description, image, siteUrl } = useSiteMetadata();
  const seo = {
    title: title ,
    description: description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}`
  }


  return (

    <div className="scroll-smooth">
      <Helmet
      htmlAttributes={{ lang : "en" }}
      link={[
        { rel: "icon", type: "image/png", href: favIcon }]}

      >
        <title>{seo.title}</title>
        <meta name="keywords" content="Pittsburgh, home repair, home improvements, drywall, basement remodel, remodelling, property management"></meta>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />

        <script type="application/ld+json">
          {`
            {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "address": [{"@type": "PostalAddress","addresslocality": "Pittsburgh","addressRegion": "PA","streetAddress": "108 Bellpark Dr","telephone": "(412) 370-6220"}],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "7"
                },
                "name": "TN Home Improvements",
                "priceRange": "$$",
                "url": "https://www.tnimprovements.com/"
            }
          `}
          </script>


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


