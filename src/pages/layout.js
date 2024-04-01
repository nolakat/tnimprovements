import React from 'react';
import NavBar from '../components/nav'
import Footer from "../components/footer"
import { SEO } from "../components/seo"


const Layout = ({ children, marginTop, hideFinance, hideForm }) => {
  return (
    <div className="scroll-smooth">
      <title>T&N Home Improvements | Local Pittsburgh Contractors for Home Improvements & Repairs </title>
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


export const Head = () => (
  <SEO />
)
