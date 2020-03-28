import React from "react"
import Layout from "../../components/layout"
import aboutSydneyStyles from "./sydneysweeney.module.scss"
import SydneyImage from "../../images/aboutpicture.jpg"
import Head from "../../components/head"

const AboutSydney = () => {
  return (
    <Layout>
      <Head title="About" />
      <main>
        <div className={aboutSydneyStyles.gridContainer}>
          <div className={aboutSydneyStyles.leftGrid}>
            <h1 className={aboutSydneyStyles.title}>Sydney Sweeney</h1>
            <p className={aboutSydneyStyles.information}>
              Sydney Sweeney (born September 12, 1997) is an American actress.
              She appeared in the Netflix series Everything Sucks! (2018) and
              has taken on recurring roles in the Hulu series The Handmaid's
              Tale (2018) and the HBO miniseries Sharp Objects (2019). In 2019,
              she began starring in the HBO teen drama series Euphoria. In film,
              she had a small role in Quentin Tarantino's 2019 comedy-drama Once
              Upon a Time in Hollywood, portraying a member of the Manson
              Family.
            </p>
            <h2 className={aboutSydneyStyles.subtitle}>Early life</h2>
            <p className={aboutSydneyStyles.information}>
              Sweeney was born and raised in Spokane, Washington. She has a
              younger brother named Trent. Her mother is a lawyer and her father
              is in the medical field. She gained an interest in acting after
              wanting to audition for a role in an indie movie that had come to
              her town. In order to convince her parents, she presented them a
              five-year business plan.[5] They agreed and shortly after they
              moved to Los Angeles.{" "}
            </p>
            <h2 className={aboutSydneyStyles.subtitle}>Career</h2>
            <p className={aboutSydneyStyles.information}>
              Sweeney starred as Emaline Addario on the Netflix series
              Everything Sucks!, which revolved around two groups of students
              during high school in Oregon in 1996. She then appeared in the HBO
              miniseries Sharp Objects[8][9] where she starred as Alice, a
              roommate that Amy Adams' character meets at a psychiatric
              facility. Her character was originally supposed to have a smaller
              role, but the director kept bringing her in for more scenes.[10]
              For the role, Sweeney studied stories of girls who suffered from
              mental illness and self-harming, and visited hospitals who had
              patients who self-harmed.[8][10] Sweeney filmed Everything Sucks!
              and Sharp Objects concurrently, filming the former during the week
              and latter on the weekend.
            </p>
            <h2 className={aboutSydneyStyles.subtitle}>Personal life</h2>
            <p className={aboutSydneyStyles.information}>
              Sweeney currently studies entrepreneurship.[19] She is also a
              trained MMA fighter and competed in grappling in high
              school.[20][4] Sweeney frequently talks about creating separate
              books for each of her characters, which are "interactive
              diaries/timelines/memory books/pictures of the character’s entire
              world" from when the character was born to the first page of the
              script.[21][8][22]{" "}
            </p>
          </div>
          <div className={aboutSydneyStyles.imageContainer}>
            <img
              className={aboutSydneyStyles.image}
              src={SydneyImage}
              alt="Sydney at red carpet"
            />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutSydney
