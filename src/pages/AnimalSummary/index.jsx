import { useParams, NavLink, useOutletContext } from "react-router-dom";
import { animals } from "../../data/data";
import 'react-responsive-modal/styles.css';
import styles from './AnimalSummary.module.css';

const AnimalDetail = () => {
    const { category, animalName } = useParams();
    const { setCategory } = useOutletContext();
    
    const animal = animals[category]?.find(
        (animal) => animal.slug === animalName
    );

    const handleLinkClick = () => {
        setCategory(category);
        window.scrollTo(0, 0);
    };

    const generateLink = (cat, animal) => {
        const animalURL = `${cat}/${animal.name.replace(/\s+/g, '-').toLowerCase()}`;
        return `/${animalURL}`;
    };

    if (!animal) {
        return <div>Animal not found!</div>;
    }

    return (
        <div className={styles.animalSummaryContainer}>
            <div className={`${styles.container} ${styles.left}`}>
                <div className={styles.box}>
                    <img src={animal.image} alt={animal.name}/>
                    <h2>{`${animal.name}`} </h2>
                </div>
            </div>
            <div className={`${styles.container} ${styles.right}`}>
                <div className={styles.box}>
                    <p>
                        <b>Lifespan: </b>{animal.lifespan}<br/>
                        <b>Group: </b>
                            <NavLink
                                to={`/${category}`}
                                onClick={() => handleLinkClick(category)}
                                className={styles.grouplink}
                            >
                                {animal.group}
                            </NavLink><br/>
                        <b>Food: </b>{animal.food}
                    </p>
                </div>
                <div className={styles.box}>
                    <p>{animal.summary}</p>
                    <div className={styles.readMore}>
                        <NavLink
                            to={`${generateLink(category, animal)}/details`}
                            onClick={() => handleLinkClick(category)}
                        >
                            More info...
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetail;