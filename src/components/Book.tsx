import { BookProps } from '../types/types';

const Book = ({ title, cover, isChecked }: BookProps) => {
    return (
        <div className="w-full h-full flex justify-center align-middle">
            <div key={title} className={`w-[120px] h-auto ${isChecked ? 'bg-red-600' : ''}`}>
                <img src={cover} alt="" className="gap-8" />
            </div>
        </div>
    );
};

export default Book;
