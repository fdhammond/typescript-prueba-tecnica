export interface Root {
    library: Library[];
}

export interface Library {
    book: BookProps;
}

export interface BookProps {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
    isChecked?: boolean;
}

export interface Author {
    name: string;
    otherBooks: string[];
}

export interface PaginationProps {
    length: number;
    postsPerPage: number;
    handlePagination: (pageNumber: number) => void;
}
