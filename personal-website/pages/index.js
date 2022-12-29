import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

/*
  Initial loadup page will take the main website information...

  General overview of the projects, who I am, and what I'm interested in. 

  Links to my GitHub, GitLab, and social media are linked within my website. 


*/

export default function Home() {
  return (
      <main>
      <div className={styles.fullpage}>
      <div className={styles.container}> 

        <div className={styles.portfolio}>
        <h3 className={styles.title}>
          Welcome to my website!<br></br><br></br> I've put together a collection of personal projects and interests for 
          people to check out as well as for my own benefit. 
        </h3>

          <h3>Here are links to my external portfolio:</h3>
          <ul>
            <nav className={styles.proplist}>
            <li><a href="https://github.com/satpat2590" className={styles.undaline}><p>Github</p></a></li>
            <li><a href="linkedin.com/satpat2590" className={styles.undaline}><p>LinkedIn</p></a></li>
            <li><a href="gitlab.com/satpat2590" className={styles.undaline}><p>Gitlab</p></a></li>
            </nav>
          </ul>
        </div>

        <div className={styles.lifeprojects}>
          <h3 className={styles.lifetitle}>Life Projects</h3>


          <div className={styles.phototry}>
            <Image src="/original.jpg.webp"
            alt="Poetry picture"
            width="300"
            height="250"
            />
            <h3>
              Photography
            </h3>
            </div>
          <div className={styles.phototry}>
            <Image src="/original.jpg.webp"
            alt="Poetry picture"
            width="300"
            height="250"
            />
            <h3>
              Poetry
            </h3>
          </div>
        </div>
  
      </div>

        <div className={styles.grid}>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>More information on me, my academics, and my overall life journey!</p>
          </a>
<hr></hr>

          <Link href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Take a look at some of the projects I've worked on or are currently in the progress of working on</p>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>CS Beginner/Refresh Zone &rarr;</h3>
            <p>Discover some small projects with extensive documentation meant to entice learning and also refreshing concepts</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>
              Have any questions or wish to send me a message? Click here to do so! 
            </p>
          </a>
        </div>
        </div>
      </main>
  );
}