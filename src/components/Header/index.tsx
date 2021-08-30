import format from 'date-fns/format'
import { ptBR } from 'date-fns/locale';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), "EEEEEE, d 'de' MMMM", {
        locale: ptBR
    })

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Logo" />
            <span>{ currentDate }</span>
        </header>
    )
}

export default Header;