import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePagination from "../hooks/usePagination";

const Pagination = React.memo(({ totalPages, page, sort }) => {
    const { firstArr, lastArr, isActive, next, prev, jump } = usePagination({
        totalPages,
        page,
        sort,
    });

    return (
        <>
            <section id="pagination">
                <button onClick={prev}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                {firstArr.map((num) => (
                    <button
                        onClick={() => jump(num)}
                        key={num}
                        className={`${isActive(num)}`}
                    >
                        {num}
                    </button>
                ))}
                {lastArr.length > 0 && <button>...</button>}

                {lastArr.map((num) => (
                    <button
                        onClick={() => jump(num)}
                        key={num}
                        className={`${isActive(num)}`}
                    >
                        {num}
                    </button>
                ))}
                <button onClick={next}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </section>
        </>
    );
});

export default Pagination;
