import MainContent from "../../components/MainContent";

const Reptiles = ({title, text1, text2, image}) => {
    return (
        <>
            <MainContent pageTitle={title} text1={text1} text2={text2} image={image} />
        </>
    );
}

export default Reptiles