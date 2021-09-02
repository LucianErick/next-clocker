import Link from 'next/link';
import styles from './styles.module.scss';

const LinkStyled = ({ href, name }) => {
    return (
        <Link href={href} passHref>
            <a>{name}</a>
        </Link>
    )
}

export default LinkStyled;