import styles from './MainContent.module.css';

const MainContent = ({pageTitle, text1, text2, image}) => {
    return (
        <>
        <section className={styles.mainContentContainer}>
            <h1 className={styles.title}>
                {pageTitle}
            </h1>
            <p className={styles.textbox}>
                {text1}
            </p>
            <p className={styles.textbox}>
                {text2}
            </p>
            <img className={styles.image} src={image} alt={image}/>
        </section>
        </>
    );
}

export default MainContent