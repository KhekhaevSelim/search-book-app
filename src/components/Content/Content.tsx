import React from 'react';
import {ContentStyled} from "../../styled/Content";
import Items from './Items';
import {useSelector} from "react-redux";
import {RootStateType} from "../../reduxStore/Store";

const Content = () => {
let totalBooksCount = useSelector<RootStateType, number>(state => state.searchReducer.totalItems)


    return (
        <div>
            {totalBooksCount === 0 ?
                <div style={{ backgroundColor: "#D0B6A7",display: "flex", justifyContent: "center", width : "100%"}}>you don't have a search result yet</div>
                :
                <div style={{ backgroundColor: "#D0B6A7",display: "flex", justifyContent: "center", width : "100%"}}>Found {totalBooksCount} results</div>
            }
            <ContentStyled>
                <Items />
            </ContentStyled>
        </div>

    );
};

export default Content;