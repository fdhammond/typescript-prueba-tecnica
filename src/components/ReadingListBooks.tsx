import { useContext } from 'react';
import { BookContext } from '../context/Context';
import { Library } from '../types/types';
import Book from './Book';
import ShowReadingListButton from './ShowReadingListButton';

const ReadingListBooks = () => {
    const booksContext = useContext(BookContext);
    if (!booksContext) {
        return null;
    }
    const {
        readingListBooks,
        setReadingListBooks,
        totalBooks,
        setTotalBooks,
        showReadingList,
        setShowReadingList,
    } = booksContext;

    const handleDeleteBook = (readingBook: Library) => {
        const newReadingListBooks = readingListBooks.filter((book) => book !== readingBook);
        setReadingListBooks(newReadingListBooks);
        setTotalBooks(totalBooks + 1);
    };

    const handleCloseReadingBooksSection = () => {
        setShowReadingList(!showReadingList);
    };

    return (
        <>
            <div className="p-8">
                <h1>Readling List</h1>
                <>
                    <ShowReadingListButton
                        handleReadingBooks={handleCloseReadingBooksSection}
                        label={'Close Reading List'}
                    />
                </>
                <div className="w-auto h-auto flex justify-start flex-wrap">
                    {readingListBooks.map((readingBook: Library) => (
                        <div className="h-full" key={readingBook.book.ISBN}>
                            <div>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => handleDeleteBook(readingBook)}>
                                    X
                                </span>
                            </div>
                            <div className="w-[160px] h-auto p-2">
                                <Book
                                    key={readingBook.book.ISBN}
                                    title={readingBook.book.title}
                                    cover={readingBook.book.cover}
                                    genre={readingBook.book.genre}
                                    synopsis={readingBook.book.synopsis}
                                    year={readingBook.book.year}
                                    pages={readingBook.book.pages}
                                    ISBN={readingBook.book.ISBN}
                                    author={readingBook.book.author}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ReadingListBooks;
