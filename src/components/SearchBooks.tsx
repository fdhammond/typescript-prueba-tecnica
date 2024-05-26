import { useContext } from 'react';
import { BookContext } from '../context/Context';

const SearchBooks = () => {
    const booksContext = useContext(BookContext);
    if (!booksContext) {
        throw new Error('BookContext not found');
    }
    const { filteredBooks, setFilteredBooks } = booksContext;

    const handleFilteredBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredBooks(e.target.value);
    };

    return (
        <div>
            <h1>Search Books</h1>
            <input
                type="text"
                value={filteredBooks}
                onChange={handleFilteredBooks}
                className="text-black lowercase"
            />
        </div>
    );
};

export default SearchBooks;
