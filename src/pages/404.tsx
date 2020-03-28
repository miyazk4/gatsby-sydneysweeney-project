import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import e404Styles from "./404.module.scss"
import Head from "../components/head"

const E404 = () => {
  return (
    <Layout>
      <Head title="404" />
      <div className={e404Styles.wrapper}>
        <div className={e404Styles.container}>
          <h1 className={e404Styles.title}>Page not found</h1>
          <p className={e404Styles.information}>
            The page you were looking for was not found or does not exist.
            <Link to="/" className={e404Styles.link}>
              Go back to homepage
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default E404
