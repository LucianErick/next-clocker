import { useFormik } from 'formik';
import * as yup from 'yup';
import type { NextPage } from 'next'
import { Header } from '../components/Header';

import { fb as firebase } from './../config/firebase';

import styles from '../styles/home.module.scss';

const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required("Preenchimento obrigatório"),
  password: yup.string().required("Preenchimento obrigatório"),
  workerId: yup.string().required("Preenchimento obrigatório"),
})

const Home: NextPage = () => {

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    onSubmit: (values, form) => {
      console.log(values)
    },
    validationSchema,
    initialValues: {
      email: '',
      password: '',
      workerId: '',
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
            <div className={styles.workerId}>
              <label htmlFor="workerId">clocker.work/</label>
              <input type="text" id="workerId" value={values.workerId} onChange={handleChange} onBlur={handleBlur} required />
              {touched.workerId && <span>{errors.workerId}</span>}
            </div>
            <div className={styles.buttons}>
              <button onClick={() => handleSubmit} className={styles.submitButton}>Entrar</button>
              <button className={styles.registerButton}>Registre-se</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Home;