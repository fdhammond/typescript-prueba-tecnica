import { useContext } from 'react';
import { BookContext } from '../context/Context';
import { Library } from '../types/types';
import Book from './Book';

const ReadingListBooks = () => {
    const booksContext = useContext(BookContext);
    if (!booksContext) {
        return null;
    }
    const { readingListBooks, setReadingListBooks, totalBooks, setTotalBooks } = booksContext;

    const handleDeleteBook = (readingBook: Library) => {
        const newReadingListBooks = readingListBooks.filter((book) => book !== readingBook);
        setReadingListBooks(newReadingListBooks);
        setTotalBooks(totalBooks + 1);
    };

    return (
        <>
            <h1>Readling List</h1>
            <div>
                {readingListBooks.map((readingBook: Library) => (
                    <>
                        <div>
                            <span
                                className="cursor-pointer"
                                onClick={() => handleDeleteBook(readingBook)}>
                                X
                            </span>
                        </div>
                        <Book
                            key={readingBook.book.ISBN}
                            title={readingBook.book.title}
                            cover={readingBook.book.cover}
                        />
                    </>
                ))}
            </div>
        </>
    );
};

export default ReadingListBooks;
