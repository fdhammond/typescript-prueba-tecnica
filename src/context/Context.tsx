import { createContext, useState, useEffect } from 'react';
import { Library } from '../types/types';
import booksObject from '../utils/books.json';

interface BookContextProps {
    totalBooks: number;
    currentPage: number;
    currentBooks: Library[];
    checkedBooks: Library[];
    readingListBooks: Library[];
    filteredBooks: string;
    genre: string;
    genres: string[];
    showReadingList: boolean;
    setShowReadingList: React.Dispatch<React.SetStateAction<boolean>>;
    setFilteredBooks: React.Dispatch<React.SetStateAction<string>>;
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
    const [genre, setGenre] = useState<string>('todos');
    const [filteredBooks, setFilteredBooks] = useState<string>('');
    const [showReadingList, setShowReadingList] = useState<boolean>(false);

    const booksPerPage = books.length;

    useEffect(() => {
        const indexOfLastBook = currentPage * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentBooksList = books.slice(indexOfFirstBook, indexOfLastBook);
        setCurrentBooks(currentBooksList);
        if (filteredBooks) {
            setCurrentBooks(
                currentBooksList.filter(
                    (book) =>
                        book.book.ISBN.toString().includes(filteredBooks) ||
                        book.book.synopsis.toLowerCase().includes(filteredBooks) ||
                        book.book.title.toLowerCase().includes(filteredBooks) ||
                        book.book.genre.toLowerCase().includes(filteredBooks) ||
                        book.book.author.name.toLowerCase().includes(filteredBooks)
                )
            );
        }

        if (genre !== 'todos') {
            const currentBooksGenreFilter = currentBooksList.filter(
                (book) => book.book.genre === genre
            );
            setCurrentBooks(currentBooksGenreFilter);
            setTotalBooks(currentBooks.length);
        } else {
            setTotalBooks(books.length);
        }
    }, [genre, filteredBooks]);

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
                filteredBooks,
                showReadingList,
                setShowReadingList,
                setFilteredBooks,
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
