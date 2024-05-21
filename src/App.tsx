import Books from './components/Books';
import ReadingListBooks from './components/ReadingListBooks';

function App() {
    return (
        <div className="w-full h-full flex justify-center items-center pt-8 pb-20 bg-black">
            <div className="w-1/2 h-auto">
                <Books />
            </div>
            <aside className="w-1/2 h-auto hidden">
                <ReadingListBooks />
            </aside>
        </div>
    );
}

export default App;
