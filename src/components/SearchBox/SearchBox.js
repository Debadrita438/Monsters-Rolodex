import './SearchBox.css';

const SearchBox = ({ handleChange }) => {
    return (
        <input
            className='search' 
            type="search" 
            placeholder='Search Monsters'
            onChange={handleChange} 
        />
    );
}
 
export default SearchBox;