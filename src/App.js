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
        <img
          src="https://www.startupstofund.com/assets/stf/main/logos/logos_wall.sm.blurred-38c7d752f231b6e1533325b125d8430ea4e07bddbb5287f2fbd5991feb16e113.jpg"
          alt="sponsors"
        />
      </main>
      <footer></footer>
    </>
  );
}
