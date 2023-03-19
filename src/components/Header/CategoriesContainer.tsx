import React, {ChangeEvent} from 'react';
import {Categories, MySpan, SelectCategories} from "../../styled/Header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reduxStore/Store";
import {
    CategoriesType,
    ChangeCategoryAC
} from "../../reducers/SearchReducer";

const CategoriesContainer = () => {
    let currentCategory = useSelector<RootStateType, CategoriesType>(state => state.searchReducer.currentCategory)
    let categories = useSelector<RootStateType, Array<CategoriesType>>(state => state.searchReducer.categories)
    let dispatch = useDispatch()
    const changeCategory = (e : ChangeEvent<HTMLSelectElement>) => {
        const newCategory = e.target.value as CategoriesType
        dispatch(ChangeCategoryAC(newCategory))
    }


    return (
        <Categories>
            <MySpan>Categories</MySpan>
            <SelectCategories value={currentCategory} onChange={(e)=>changeCategory(e)}>
            {categories.map((el,index)=> {
                return (
                    <option key={index}>{el}</option>
                )
            })}
            </SelectCategories>
        </Categories>
    );
};

export default CategoriesContainer;