interface ShowReadingListButtonProps {
    handleReadingBooks: () => void;
    label: string;
}

export default function ShowReadingListButton({
    handleReadingBooks,
    label,
}: ShowReadingListButtonProps) {
    return (
        <button
            onClick={handleReadingBooks}
            className="flex align-center text-center text-white bg-teal-600 py-2 px-4 rounded-md">
            {label}
        </button>
    );
}
