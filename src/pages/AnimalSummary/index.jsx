import { useParams, NavLink, useOutletContext } from "react-router-dom";
import { animals } from "../../data/data";
import "react-responsive-modal/styles.css";
import styles from "./AnimalSummary.module.css";

const AnimalSummary = () => {
    const { species } = useParams();
     let matchedAnimal = null;

    if (species) {
        const allAnimals = Object.values(animals).flat();
        matchedAnimal = allAnimals.find(animal => animal.slug === species)
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const generateLink = (cat, animal) => {
        const animalURL = `${cat.toLowerCase()}/${animal}`;
        return `/${animalURL}`;
    };

    if (!matchedAnimal) {
        return <div>Animal not found!</div>;
    }

    return (
        <div className={styles.animalSummaryContainer}>
            <div className={`${styles.container} ${styles.left}`}>
                <div className={styles.box}>
                    <img src={matchedAnimal.image} alt={matchedAnimal.name}/>
                    <h2>{`${matchedAnimal.name}`} </h2>
                </div>
            </div>
            <div className={`${styles.container} ${styles.right}`}>
                <div className={styles.box}>
                    <p>
                        <b>Lifespan: </b>{matchedAnimal.lifespan}<br/>
                        <b>Group: </b>
                            <NavLink
                                to={`/${matchedAnimal.group.toLowerCase()}`}
                                onClick={() => handleLinkClick()}
                                className={styles.grouplink}
                            >
                                {matchedAnimal.group}
                            </NavLink><br/>
                        <b>Food: </b>{matchedAnimal.food}
                    </p>
                </div>
                <div className={styles.box}>
                    <p>{matchedAnimal.summary}</p>
                    <div className={styles.readMore}>
                        <NavLink
                            to={`${generateLink(matchedAnimal.group, matchedAnimal.slug)}`}
                            onClick={() => handleLinkClick()}
                        >
                            More info...
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalSummary;