import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import withStyle from '@/withStyle';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to='/' className={styles.item}>Home</Link>
                <Link to='/login' className={styles.item}>Login</Link>
            </div>
        )
    }
}

export default withStyle(Header, styles);
