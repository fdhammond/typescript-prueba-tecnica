import Book from './Book';
import { useContext } from 'react';
import { BookContext } from '../context/Context';
import { Library } from '../types/types';
import Pagination from './Pagination';
import FilterBook from './FilterBook';

const Books = () => {
    const booksContext = useContext(BookContext);
    if (!booksContext) {
        return null; // or handle the context not being available
    }
    const {
        totalBooks,
        currentBooks,
        currentPage,
        checkedBooks,
        readingListBooks,
        setReadingListBooks,
        setCurrentBooks,
        setTotalBooks,
        setCurrentPage,
        setCheckedBooks,
    } = booksContext;

    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleCheckedBooks = (book: Library) => {
        if (readingListBooks.includes(book)) {
            setReadingListBooks(readingListBooks.filter(b => b !== book));
            setTotalBooks(totalBooks + 1);
        } else {
            setReadingListBooks([...readingListBooks, book]);
            setTotalBooks(totalBooks - 1);
        }
    };

    return (
        <>
            <div className="w-full h-20 flex justify-center align-middle">
                <div className="flex justify-around align-middle w-full">
                    <h1>{totalBooks} libros disponibles</h1>
                    <p>{readingListBooks.length} en la lista de lectura</p>
                </div>
            </div>
            <div className="w-full flex justify-center align-between gap-24">
                <div>
                    <h2>Filtrar por paginas</h2>
                    {/* <Pagination
                        length={totalBooks}
                        postsPerPage={4}
                        handlePagination={handlePagination}
                        currentPage={currentPage}
                    /> */}
                </div>
                <div>
                    <FilterBook />
                </div>
            </div>
            <div className="w-full h-full flex justify-center align-middle flex-wrap gap-12">
                {currentBooks.map((library: Library) => {
                    const isChecked = readingListBooks.includes(library);
                    return (
                        <div
                            key={library.book.ISBN}
                            className="cursor-pointer"
                            onClick={() => handleCheckedBooks(library)}
                            >
                            <Book title={library.book.title} cover={library.book.cover} isChecked={isChecked}/>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Books;
