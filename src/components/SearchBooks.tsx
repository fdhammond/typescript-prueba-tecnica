import { useContext, useEffect } from 'react';
import { BookContext } from '../context/Context';

const SearchBooks = () => {
    const booksContext = useContext(BookContext);
    const { filteredBooks, setFilteredBooks } = booksContext;

    const handleFilteredBooks = (e: any) => {
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
