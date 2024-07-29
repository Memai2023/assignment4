import React, {useState} from "react";
import { useParams, NavLink, useOutletContext } from "react-router-dom";
import { Modal } from 'react-responsive-modal';
import { animals } from "../../data/data";
import 'react-responsive-modal/styles.css';
import styles from './AnimalDetail.module.css';

const AnimalDetail = () => {
    const { category, animalName } = useParams();
    const { setCategory } = useOutletContext();
    
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    const animal = animals[category]?.find(
        (animal) => animal.slug === animalName
    );

    const handleLinkClick = () => {
        setCategory(category);
    }

    if (!animal) {
        return <div>Animal not found!</div>;
    }

    return (
        <div className={styles.animalDetailContainer}>
            <div className={`${styles.container} ${styles.left}`}>
                <div className={`${styles.box} ${styles.title}`}>
                    <img src={animal.image} alt={animal.name}/>
                </div>
            </div>
            
            <div className={`${styles.container} ${styles.right}`}>            
                <div className={styles.box}>
                    <h2>{`${animal.name}`} </h2>
                    <p>{animal.summary}</p>
                
                    <div className={styles.readMore}>
                        <NavLink onClick={onOpenModal}>Read More...</NavLink>
                        <Modal
                            open={open}
                            onClose={onCloseModal}
                            showCloseIcon={false}
                            classNames={{
                                modal: styles.customModal,
                            }}
                           center
                        >
                            <p>{animal.description}</p>
                            <button onClick={onCloseModal}>Back</button>
                        </Modal>
                    
                    </div>                                      
                </div>
                
                <div className={styles.box}>
                    <p>
                        <b>Area: </b>{animal.found}<br/>
                        <b>Height: </b>{animal.height}<br/>
                        <b>Weight: </b>{animal.weight}<br/>
                        <b>Lifespan: </b>{animal.lifespan}<br/>
                        <b>Group: </b>
                            <NavLink
                                to={`/${category}`}
                                onClick={() => handleLinkClick(category)}
                                className={styles.grouplink}
                            >
                                {animal.group}
                            </NavLink><br/>
                        <b>Food: </b>{animal.food}<br/>
                    </p>                   
                </div>
            </div>
        </div>
    );
};

export default AnimalDetail;