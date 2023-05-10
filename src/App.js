import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/Logo.svg';

export default function App() {
  return (
    <>
      <header>
        <nav className={styles.navigationBar}>
          <Logo />
          <a href="/#">
            <span>
              startups
              <span> to</span> fund
            </span>
          </a>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
