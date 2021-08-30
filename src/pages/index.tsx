import type { NextPage } from 'next'
import { Header } from '../components/Header';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.subcontainer}>
        <span>Crie sua agenda compartilihada</span>
        <main>
          <form action="submit">
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
            <div className={styles.workerId}>
              <label htmlFor="worker-id">clocker.work/</label>
              <input type="text" id="worker-id" />
            </div>
            <div className={styles.buttons}>
              <button className={styles.submitButton}>Entrar</button>
              <button className={styles.registerButton}>Registre-se</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Home;