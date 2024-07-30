import { React, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { animals } from "../../data/data.js";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import styles from "./Sidebar.module.css";

const Sidebar = ( {category, species }) => {
    let animalsToDisplay;

    const [clickedAnimal, setClickedAnimal] = useState(null);
    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null);
    
    useClickAway(ref, () => setOpen(false));
    
    const generateLink = (spec) => {

        if (category === '/') {
            if (species === spec.slug) {
                return '/';
            } else {
                return `/${spec.slug}`;
            }
        }
        else {
            if (species === spec.slug) {
                return `/${category}`;
            } else {
                return `/${category}/${spec.slug}`;
            }
        }
    };

    useEffect(() => {
        if (species === '/') {
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
                                        to={generateLink(animal)}
                                        className={species === animal.slug ? styles.active : ''}
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
                                to={`${generateLink(animal)}`}
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