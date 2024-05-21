import { BookProps } from '../types/types';

const Book = ({ title, cover, isChecked }: BookProps) => {
    return (
        <div className="w-full h-full flex justify-center align-middle">
            <div key={title} className="w-[200px] h-auto relative">
                <img src={cover} alt="" className="w-full h-auto" />
                {isChecked && <div className="absolute inset-0 bg-blue-300 bg-opacity-70"></div>}
            </div>
        </div>
    );
};

export default Book;
