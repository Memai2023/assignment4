import { React, useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { animals } from '../../data/data.js';
import { Squash as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import styles from './Sidebar.module.css';

const Sidebar = ({currentPage, category}) => {
    let animalsToDisplay;

    const [clickedAnimal, setClickedAnimal] = useState(null);
    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null);
    
    useClickAway(ref, () => setOpen(false));
    
    const generateLink = (cat, animal) => {
        const animalURL = `${cat}/${animal.slug}`;
        const animalDetailURL = animalURL + '/details'

        if (currentPage === animalURL) {
            return `/`;
        } else if (currentPage === animalDetailURL) {
            return `/${cat}`;
        } else if (category === '/') {
            return `/${animalURL}`;
        }
        else {
            return `/${animalURL}/details`;
        }
    };

    useEffect(() => {
        if (currentPage === '/') {
            setClickedAnimal(null);
        }
    })

    if (category === '/') {
        animalsToDisplay = (
            <>
                {Object.entries(animals).map(([category, animalsList]) => (
                    <div key={category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <ul>{animalsList.map((animal, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={generateLink(category,animal)}
                                        className={clickedAnimal === animal.name ? styles.active : ''}
                                        onClick={() => {setClickedAnimal(clickedAnimal === animal.name ? null : animal.name); setOpen(false)} }
                                    >
                                        {animal.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </>
        );
    } else {
        animalsToDisplay = (
            <>
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <ul>
                    {animals[category].map((animal, index) => (
                        <li key={index}>
                            <NavLink
                                to={`${generateLink(category, animal)}`}
                                className={({ isActive }) => (isActive ? styles.active : '')}
                                onClick={() => {setClickedAnimal(clickedAnimal === animal.name ? null : animal.name); setOpen(false)} }
                            >
                                {animal.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <div
            ref={ref}
            className={`${styles.sidebar} ${isOpen ? styles.menuOpen : ''}`}
        >
            <div className={styles.hamburgerWrapper}>
                <Hamburger
                    toggled={isOpen}
                    size={30}
                    toggle={setOpen}
                    color="#cde895"
                    rounded
                />
            </div>
            <div className={`${styles.sidebarElements}`}>{animalsToDisplay}</div>
        </div>
    );
}

export default Sidebar