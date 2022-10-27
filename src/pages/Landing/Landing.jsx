import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <section className={styles.splash}>
        <img src="/images/werk-logo.png" alt="WERK logo" />
      </section>
      <section className={styles.about}>
        <header>
          <h3>ABOUT WERK.</h3>
        </header>
        <article>
          <p>
            Werk was founded to empower job seekers with the necessary tools they need to stand out and get hired. Track down relevant opportunities tailored to your professional needs and start building your better future. Werk smarter, not harder.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Landing
