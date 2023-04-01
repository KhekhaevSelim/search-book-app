import React, {ChangeEvent, KeyboardEvent} from "react";
import search from "../../assets/search-logo.png"

import {Input, SearchButton} from "../../styled/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reduxStore/Store";
import {ChangeSearchTitleAC, SearchBookAC, SetFetchingAC, SortType} from "../../reducers/SearchReducer";


const Search = () => {
    let searchTitle = useSelector<RootStateType,string >(state => state.searchReducer.searchTitle)
    let pageSize = useSelector<RootStateType,number >(state => state.searchReducer.pageSize)
    let books = useSelector<RootStateType,any >(state => state.searchReducer.books)

    let currentSort = useSelector<RootStateType,SortType >(state => state.searchReducer.currentSort)
    let dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeSearchTitleAC(e.currentTarget.value))
    }


    const getItems = async () => {
        dispatch(SetFetchingAC(true))
        let response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+searchTitle+"&key=AIzaSyCPLopkj1nGKw-UPpiGVfNIIxm0zsH6hLs"+"&maxResults="+pageSize+"&orderBy="+currentSort)
        // let response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+searchTitle+"&key=AIzaSyDXCbzTmrtRBgEVROJgUhAF4Eg-4BSZLmM"+"&maxResults="+pageSize+"&startIndex="+(1)*(pageSize)+"&orderBy="+currentSort)
        let awaits = await response.json()
        dispatch(SearchBookAC(awaits))
        dispatch(SetFetchingAC(false))

     }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(searchTitle.trim() !== "" && e.key === "Enter"){
            getItems()
        }
    }



    return (
        <div style={{position : "relative"}}>
        <Input value={searchTitle} onChange={onChangeHandler} onKeyPress={onEnter}></Input>
            <SearchButton src={search} onClick={()=>getItems()}/>
        </div>
    );
};
export default Search;
