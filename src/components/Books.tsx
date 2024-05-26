import Book from './Book';
import { useContext } from 'react';
import { BookContext } from '../context/Context';
import { Library } from '../types/types';
import Pagination from './Pagination';
import FilterBook from './FilterBook';
import SearchBooks from './SearchBooks';
import ShowReadingListButton from './ShowReadingListButton';

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
        showReadingList,
        setShowReadingList,
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
            setReadingListBooks(readingListBooks.filter((b) => b !== book));
            setTotalBooks(totalBooks + 1);
        } else {
            setReadingListBooks([...readingListBooks, book]);
            setTotalBooks(totalBooks - 1);
        }
    };

    const handleReadingBooks = () => {
        setShowReadingList(!showReadingList);
    };

    return (
        <>
            <div className="w-full h-full p-12">
                <div className="w-full h-full flex justify-center align-middle text-white">
                    <div className="flex justify-around align-middle w-full">
                        <h1>{totalBooks} libros disponibles</h1>
                        <p>{readingListBooks.length} en la lista de lectura</p>
                    </div>
                </div>
                <div className="flex justify-start align-middle w-full text-white mt-8">
                    <SearchBooks />
                </div>
                <div className="w-full flex justify-center align-between gap-24">
                    <div>
                        <h2 className="text-white">Filtrar por paginas</h2>
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
                    <div className="w-full h-auto flex flex-wrap">
                        {!showReadingList && readingListBooks.length ? (
                            <ShowReadingListButton
                                handleReadingBooks={handleReadingBooks}
                                label={'Show Reading List'}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full h-[100%] grid md:grid-cols-3 grid-cols-1 gap-8">
                {currentBooks.map((library: Library) => {
                    const isChecked = readingListBooks.includes(library);
                    return (
                        <div
                            key={library.book.ISBN}
                            className="cursor-pointer"
                            onClick={() => handleCheckedBooks(library)}>
                            <Book
                                title={library.book.title}
                                key={library.book.ISBN}
                                cover={library.book.cover}
                                isChecked={isChecked}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Books;
