import { Outlet, useLocation } from "react-router-dom";
import { animals } from "../../data/data.js";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import styles from "./Layout.module.css";

const Layout = () => {
        const location = useLocation();
        const categories = Object.keys(animals);
        const speciesList = Object.values(animals).flat().map(animal => animal.slug)
        const [category, setCategory] = useState('/');
        const [species, setSpecies] = useState(null);
        
        useEffect(() => {
            const path = location.pathname.split('/').filter(Boolean);
            const currentCategory = path[0] || '/';
            let currentSpecies = null;

            if (categories.includes(currentCategory)) {
                setCategory(currentCategory);
                currentSpecies = path[1] || null;
            } else {
                setCategory('/');
                currentSpecies = path[0] || null;
            }

            if (speciesList.includes(currentSpecies)) {
                setSpecies(currentSpecies);
            } else {
                setSpecies(null);
            }

        }, [location.pathname, categories]);

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.layoutContainer}>
                <Header category={category} />
                <div className={styles.mainContainer}>
                    <Sidebar category={category} species={species}/>
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout