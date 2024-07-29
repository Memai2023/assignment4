import Navbar from '../Navbar';

const Header = ({ category, setCategory }) => {
    return (
        <Navbar
            category={category}
            setCategory={setCategory}
        />
    );
}

export default Header