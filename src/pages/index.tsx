import { useFormik } from 'formik';
import * as yup from 'yup';
import type { NextPage } from 'next'
import { Header } from '../components/Header';
import { VscLoading } from 'react-icons/vsc';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseClient from '../config/firebase/index';

import styles from '../styles/home.module.scss';
import { useState } from 'react';

import LinkStyled from '../components/Link';

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required("Preenchimento obrigatório"),
  password: yup.string().required("Preenchimento obrigatório"),
})

const Signup: NextPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(firebaseClient);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    onSubmit: async (values, form) => {
      setIsLoading(true);
      try {
        const user = await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log(user)
      } catch (err) {
        console.log("ERRO:", err.split('.')[0]);
      }
      setIsLoading(false);
    },
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    }
  })

  return (
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.subcontainer}>
        <span id={styles.description}>Crie sua agenda compartilihada</span>
        <main>
          <form onSubmit={handleSubmit}>
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
              {touched.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required />
              {touched.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.buttons}>
              <button onClick={() => handleSubmit} className={styles.primaryButton} >
                {isLoading ? <VscLoading id={styles.loading} /> : ''}
                Entrar
              </button>
              <button className={styles.secondaryButton}>
                <LinkStyled href="/signup" name="Cadastre-se"/>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Signup;