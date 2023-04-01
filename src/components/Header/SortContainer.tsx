import React, {ChangeEvent} from 'react';
import {MySpan, SelectSort, Sort} from "../../styled/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reduxStore/Store";
import {
    ChangeSortAC,
    SetFetchingAC,
    SortBooksAC,
    SortType,
} from "../../reducers/SearchReducer";

const SortContainer = () => {
    let searchTitle = useSelector<RootStateType,string >(state => state.searchReducer.searchTitle)
    let pageSize = useSelector<RootStateType,number >(state => state.searchReducer.pageSize)
    let sort = useSelector<RootStateType,Array<SortType>>(state=>state.searchReducer.sort)
    let currentSort = useSelector<RootStateType,SortType>(state=>state.searchReducer.currentSort)


    const dispatch = useDispatch()


   const sortBy = async (newSort:string) => {
        dispatch(SetFetchingAC(true))
        let response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+searchTitle+"&key=AIzaSyCPLopkj1nGKw-UPpiGVfNIIxm0zsH6hLs"+"&maxResults="+pageSize+"&orderBy="+newSort)
        let awaits = await response.json()
        dispatch(SortBooksAC(awaits))
        dispatch(SetFetchingAC(false))
    }
    const changeSort = (e:ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value as SortType
        dispatch(ChangeSortAC(newSort))
        sortBy(newSort)
    }
    return (
        <Sort>
            <MySpan>Sort by</MySpan>
           <SelectSort value={currentSort} onChange={(e)=>changeSort(e)}>
               {sort.map((el,index)=> {
                   return (
                       <option key={index}>{el}</option>
                   )
               })}
           </SelectSort>
        </Sort>
    );
};

export default SortContainer;