import * as React from "react"
import NavBar from '../components/nav'
import Footer from "../components/footer"

import HomePage from "./home"
import styles from '../styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChevronLeft, faChevronRight, faHandshake, faRankingStar, faClock, faBroom, faCircleCheck, faStar, faComment  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faChevronLeft, faChevronRight, faHandshake, faRankingStar, faClock, faBroom, faCircleCheck, faStar, faComment)

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you???re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <main>
        <title>T&N Home Improvements | Local Pittsburgh Contractors for Home Improvements & Repairs </title>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}


export default IndexPage
