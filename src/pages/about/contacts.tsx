import React from "react"
import Layout from "../../components/layout"
import contactStyles from "./contact.module.scss"
import Head from "../../components/head"

const Contacts = () => {
  return (
    <Layout>
      <Head title="Contacts" />
      <div className={contactStyles.wrapper}>
        <div className={contactStyles.contactContainer}>
          <h1 className={contactStyles.title}>Booking</h1>
          <div className={contactStyles.informationContainer}>
            <p className={contactStyles.information}>
              For booking with Sydney Sweeney please reach out to one or more of
              the followings:
            </p>
            <div>
              <p className={contactStyles.information}>Phone: 000-123-4567</p>
              <p className={contactStyles.information}>
                Location: Los Angeles, California
              </p>
              <p className={contactStyles.information}>
                Email: sydneymanagement @ something.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts
