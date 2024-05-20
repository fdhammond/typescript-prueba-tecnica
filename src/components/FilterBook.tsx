import { useContext, ChangeEvent } from 'react';
import { BookContext } from '../context/Context';

const FilterBook = () => {
    const booksContext = useContext(BookContext);
    if (!booksContext) {
        return null;
    }

    const { genres, genre, setGenre } = booksContext;

    const handleSelectGenre = (event: ChangeEvent<HTMLSelectElement>) => {
        const genreSelected = event.target.value;
        setGenre(genreSelected);
    };

    return (
        <>
            <select onChange={handleSelectGenre} value={genre}>
                <option value="todos">Todos</option>
                {genres.map((genreSelected) => (
                    <option key={genreSelected} value={genreSelected}>
                        {genreSelected}
                    </option>
                ))}
            </select>
        </>
    );
};

export default FilterBook;
