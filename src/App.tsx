import { useContext } from 'react';
import { motion } from 'framer-motion';
import Books from './components/Books';
import ReadingListBooks from './components/ReadingListBooks';
import { BookContext } from './context/Context';

function App() {
    const booksContext = useContext(BookContext);
    if (!booksContext) {
        return null; // or handle the context not being available
    }

    const { showReadingList, readingListBooks } = booksContext;

    return (
        <div className="relative w-full min-h-screen flex justify-center items-center bg-black overflow-hidden">
            <div className="w-1/2 h-full relative z-10">
                <Books />
            </div>
            {showReadingList && readingListBooks.length ? (
                <motion.aside
                    initial={{ x: 100, y: 0 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[650px] h-full absolute right-0 z-50 bg-red-500">
                    <ReadingListBooks />
                </motion.aside>
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
