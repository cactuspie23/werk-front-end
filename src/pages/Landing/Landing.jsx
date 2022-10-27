import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <section className={styles.splash}>
        <img src="/images/werk-logo5.png" alt="WERK logo" />
      </section>
      <section className={styles.about}>
        <header>
          <h3>ABOUT WERK.</h3>
        </header>
        <article>
          <p>
            Werk was founded to empower job seekers with the necessary tools they need to stand out and get hired. Track down relevant opportunities and networking events tailored to your professional needs and start building your better future. Whether you’re a seasoned expert or just starting your career in the world of tech, it’s important that you’re always learning and keeping pace with this growing industry. There are thousands of resources that allow you to acquire the skills you need to land your next job and Werk allows you to keep them all organized so you don’t have to. Whether you are looking for a tool to record your daily coding accomplishments or keep track of your job search process, we have you covered. 
          </p>
        </article>
      </section>
    </main>
  )
}

export default Landing
