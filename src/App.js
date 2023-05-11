import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/Logo.svg';

export default function App() {
  return (
    <>
      <header>
        <nav className={styles.navigationBar}>
          <div className={styles.logo}>
            <Logo />
            <a href="/#">
              <span>
                startups
                <span>to</span>fund
              </span>
            </a>
          </div>

          <ul className={styles.navList}>
            <li>
              <a href="/#">INVEST</a>
              <a href="/#">Find promising startups</a>
            </li>

            <li>
              <a href="/#">FUNDRAISE </a>
              <a href="/#">Raise money</a>
            </li>
          </ul>
          <div className={styles.sign}>
            <a href="/#">Sign up</a>
            <a href="/#">Sign in</a>
          </div>
        </nav>
      </header>
      <main>
        <img></img>
      </main>
      <footer></footer>
    </>
  );
}
