import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../context/Store";
import useCustomerRouter from "../hooks/useCustomerRouter";

const Sort = React.memo(({}) => {
    const { page, sort } = useMyContext();
    const { pushQuery } = useCustomerRouter();
    const handleSort = (e) => {
        const { value } = e.target;
        pushQuery({ page, sort: value });
    };
    return (
        <div className="sort">
            <select onChange={handleSort} value={sort}>
                <option value="-price">Price high to low</option>
                <option value="price">Price low to high</option>
                <option value="-createdAt">--CreatedAt</option>
                <option value="createdAt">CreatedAt</option>
            </select>
        </div>
    );
});

export default Sort;
