import { useFormik } from 'formik';
import * as yup from 'yup';
import { Header } from '../Header/index';
import { VscLoading } from 'react-icons/vsc';
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase/client';

import styles from '../../styles/home.module.scss';
import { useEffect, useState } from 'react';

import LinkStyled from '../Link/index';

const validationSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required("Preenchimento obrigatório"),
    password: yup.string().required("Preenchimento obrigatório"),
})

export const Login = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        onSubmit: async (values, form) => {
            setIsLoading(true);
            setPersistence(auth, browserLocalPersistence)
            try {
                const user = await signInWithEmailAndPassword(auth, values.email, values.password);
                console.log(user)
                console.log(auth.currentUser)
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

    useEffect(() => {
        console.log("Sessão ativa: ", auth.currentUser)
    }, [])

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
                                <LinkStyled href="/signup" name="Cadastre-se" />
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login;