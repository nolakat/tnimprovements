{
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "T&N Home Improvements",
        short_name: "TN Home Improvements",
        start_url: "/",
        background_color: "#050e1b",
        theme_color: "#f4c263",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/tn_logo.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      }
    }
  ]
}

module.exports = {
  siteMetadata: {
    title: `T&N Home Improvements | Local Pittsburgh Contractors for Home Improvements & Repairs`,
    description: `Transform your Pittsburgh home with trusted local experts. With over 20 years of experience, our dedicated team specializes in comprehensive home repairs, renovations, patios, doors, framing, and property maintenance. Whether you're looking to enhance your living space or maintain the beauty of your property, we're your go-to contractors in Pittsburgh. Experience the peace of mind that comes with professional, reliable home improvement services tailored to your needs.`,
    image: `/tn_logo.png`,
    siteUrl: `https://www.tnimprovements.com`,
  },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      'gatsby-plugin-postcss',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-56FX3YX2Y3", // Google Analytics / GA
          ],
          // This object gets passed directly to the gtag config command
          // This config will be shared across all trackingIds
          gtagConfig: {
            anonymize_ip: true,
            cookie_expires: 0,
          },
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Defaults to https://www.googletagmanager.com
            origin: "YOUR_SELF_HOSTED_ORIGIN",
            // Delays processing pageview events on route update (in milliseconds)
            delayOnRouteUpdate: 0,
          },
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-56FX3YX2Y3",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Set Variation ID. 0 for original 1,2,3....
          variationId: "0",
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          // defaults to false
          enableWebVitalsTracking: true,
        },
      },
    ]
}
