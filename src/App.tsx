import Books from './components/Books';
import ReadingListBooks from './components/ReadingListBooks';

function App() {
    return (
        <>
            <div className="h-full flex justify-center align-middle">
                <div className="w-1/2">
                    <Books />
                </div>
                <div className="w-2/2">
                    <ReadingListBooks />
                </div>
            </div>
        </>
    );
}

export default App;
