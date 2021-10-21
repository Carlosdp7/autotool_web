import * as React from "react"
// import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import Helmet from 'react-helmet'
//CSS
import { css, Global } from '@emotion/react';

export function Layout({ children, headerNavBg }) {
  return (
    <>
      <Seo />
      <Global
        styles={css`
          body{
            font-family: 'Poppins', sans-serif !important;
            font-size: 16px !important;
            font-weight: 300 !important;
            color:#FFFFFF !important;
            background-color: #000 !important;
            
            h1, h2,h3,h4,h5,h6 {
              font-family: 'Urbanist', sans-serif !important;
              font-weight:800 !important;
            } 
          }
        `}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;700;800&display=swap" rel="stylesheet" />

      </Helmet>
      {/* <SkipNavLink /> */}
      <Header navBg={headerNavBg} />
      <main>
        {children}
      </main>
      {/* <SkipNavContent>{children}</SkipNavContent> */}
      <Footer />
    </>
  )
}
