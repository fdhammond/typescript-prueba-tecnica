import Books from './components/Books';
import ReadingListBooks from './components/ReadingListBooks';

function App() {
    return (
        <div className="w-full flex justify-center algin-middle pt-8 pb-20 bg-black">
            <div className="w-1/2 h-full">
                <Books />
            </div>
            <aside className="w-[200px] mr-auto h-full hidden">
                <ReadingListBooks />
            </aside>
        </div>
    );
}

export default App;
