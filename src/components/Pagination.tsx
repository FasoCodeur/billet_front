"use client"
import React from 'react';
type Paginate= {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
}
const Pagination: React.FC<Paginate> = ({ currentPage, totalPages, onPageChange }) => {
    const MAX_PAGES_DISPLAYED = 4; // Nombre maximal de numéros de page à afficher
    const DOTS_THRESHOLD = 3;

    if (totalPages <= DOTS_THRESHOLD) {
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        return (
            <div className="flex items-center justify-center lg:justify-end my-5 space-x-4">
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-8 h-8 hover:bg-primary hover:text-white  hover:border-primary flex justify-center items-center border rounded ${
                            page === currentPage
                                ? "border-primary text-primary"
                                : "border-gray-200"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        );
    }

    // Sinon, calculez les pages à afficher avec des points de suspension au milieu
    const pages = [];
    const startPage = Math.max(
        1,
        currentPage - Math.floor(MAX_PAGES_DISPLAYED / 2)
    );
    const endPage = Math.min(totalPages, startPage + MAX_PAGES_DISPLAYED - 1);

    // Ajoutez les points de suspension au début si nécessaire
    if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
            pages.push("...");
        }
    }

    // Générez les numéros de page à afficher
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    // Ajoutez les points de suspension à la fin si nécessaire
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            pages.push("...");
        }
        pages.push(totalPages);
    }

    return (
        <div className="flex items-center justify-center lg:justify-end my-5 space-x-4">
            {/* Flèche gauche pour la pagination */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded bg-primary text-white w-8 h-8 flex justify-center items-center text-xl disabled:cursor-not-allowed disabled:opacity-50`}
            >
                &lt;
            </button>

            {/* Numéros de page */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    className={`w-8 h-8 hover:bg-primary hover:text-white  hover:border-primary flex justify-center items-center border rounded ${
                        typeof page === "number" && page === currentPage
                            ? "border-primary text-primary"
                            : "border-gray-200"
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Flèche droite pour la pagination */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded bg-primary text-white w-8 h-8 flex justify-center items-center text-xl disabled:cursor-not-allowed disabled:opacity-50`}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;