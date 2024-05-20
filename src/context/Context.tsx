import { createContext, useState, useEffect } from 'react';
import { Library } from '../types/types';
import booksObject from '../utils/books.json';

interface BookContextProps {
    totalBooks: number;
    currentPage: number;
    currentBooks: Library[];
    checkedBooks: Library[];
    readingListBooks: Library[];
    genre: string;
    genres: string[];
    setGenre: (genres: string) => void;
    setCurrentBooks: (currentBooks: Library[]) => void;
    setReadingListBooks: (readingListBooks: Library[]) => void;
    setCheckedBooks: (checkedBooks: Library[]) => void;
    setTotalBooks: (numberOfBooks: number) => void;
    setCurrentPage: (page: number) => void;
}

const { library } = booksObject;

const libraryGenres = library.map((book) => book.book.genre);
const genres = [...new Set(libraryGenres)];

const BookContext = createContext<BookContextProps | undefined>(undefined);

const BookProvider = ({ children }: { children: React.ReactNode }) => {
    const [books, setBooks] = useState<Library[]>(library);
    const [totalBooks, setTotalBooks] = useState<number>(library.length);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [checkedBooks, setCheckedBooks] = useState<Library[]>([]);
    const [readingListBooks, setReadingListBooks] = useState<Library[]>([]);
    const [currentBooks, setCurrentBooks] = useState<Library[]>([]);
    const [genre, setGenre] = useState<string>('todos')

    const booksPerPage = books.length;

    useEffect(() => {
        const indexOfLastBook = currentPage * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentBooksList = books.slice(indexOfFirstBook, indexOfLastBook);
        setCurrentBooks(currentBooksList);
        if (genre !== 'todos') {
            const currentBooksGenreFilter = currentBooksList.filter(
                (book) => book.book.genre === genre
            );
            setCurrentBooks(currentBooksGenreFilter);
            setTotalBooks(currentBooks.length);
        } else {
            setTotalBooks(books.length);
        }
    }, [genre]);

    return (
        <BookContext.Provider
            value={{
                totalBooks,
                currentPage,
                currentBooks,
                checkedBooks,
                readingListBooks,
                genre,
                genres,
                setGenre,
                setReadingListBooks,
                setCurrentBooks,
                setCheckedBooks,
                setTotalBooks,
                setCurrentPage,
            }}>
            {children}
        </BookContext.Provider>
    );
};

export { BookContext, BookProvider };
