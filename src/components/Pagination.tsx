interface PaginationProps {
    length: number;
    postsPerPage: number;
    currentPage: number;
    handlePagination: (pageNumber: number) => void;
}
const Pagination = ({ postsPerPage, length, currentPage, handlePagination }: PaginationProps) => {
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumbers.push(i);
    }

    return (
        <div className="flex gap-4">
            {paginationNumbers.map((pageNumber) => (
                <li
                    key={pageNumber}
                    className={`list-none ${pageNumber === currentPage ? 'bg-red-600' : ''} cursor-pointer`}>
                    <button onClick={() => handlePagination(pageNumber)} className="p-4">
                        {pageNumber}
                    </button>
                </li>
            ))}
        </div>
    );
};

export default Pagination;
