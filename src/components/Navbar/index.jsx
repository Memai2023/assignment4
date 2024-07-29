import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import {useClickAway} from 'react-use';
import styles from './Navbar.module.css';

const Navbar = ({ category, setCategory }) => {
    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null);
 
    useClickAway(ref, () => setOpen(false));

    const handleLinkClick = (category) => {
        setOpen(false);
        setCategory(category);
    }

    return (
        <nav
            ref={ref}
            className={styles.navbar}
        >
            <div className={styles.navbarContainer}>
                <div className={styles.logo}>
                    <NavLink
                        onClick={() => handleLinkClick('/')}
                        to="/"
                    >
                        <img src="/assets/zoologotrans.webp" alt="Australian Zoo"/>
                    </NavLink>
                </div>
                <div className={styles.hamburgerWrapper}>
                    <Hamburger
                        toggled={isOpen}
                        size={30}
                        toggle={setOpen}
                        color="#fff"
                        rounded
                    />
                </div>
                <div className={`${styles.navbarElements} ${isOpen ? styles.menuOpen : ''}`}>
                    <ul>
                        <li>
                            <NavLink
                                className={ category === '/' ? styles.active : ''}
                                onClick={() => handleLinkClick('/')}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ category === 'birds' ? styles.active : ''}
                                onClick={() => handleLinkClick('birds')}
                                to="birds"
                            >
                                Birds
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ category === 'mammals' ? styles.active : ''}
                                onClick={() => handleLinkClick('mammals')}
                                to="mammals"
                            >
                                Mammals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ category === 'reptiles' ? styles.active : ''}
                                onClick={() => handleLinkClick('reptiles')}
                                to="reptiles"
                            >
                                Reptiles
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar