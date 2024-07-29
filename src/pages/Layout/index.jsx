import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import styles from './Layout.module.css';

const Layout = () => {
        const location = useLocation();
        const currentPage = location.pathname.slice(1) || "/";
        const [category, setCategory] = useState('/');

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.layoutContainer}>
                <Header category={category} setCategory={setCategory}/>
                <div className={styles.mainContainer}>
                    <Sidebar currentPage={currentPage} category={category}/>
                    <div className={styles.content}>
                        <Outlet context={{setCategory}} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout