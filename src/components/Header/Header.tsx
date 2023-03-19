import React from 'react';
import { Header, Settings,Title} from '../../styled/Header';
import CategoriesContainer from "./CategoriesContainer";
import Search from './Search';
import SortContainer from "./SortContainer";



const TopSection = () => {
    return (
        <Header>
            <Title>Search for books</Title>
            <Search/>
            <Settings>
                <CategoriesContainer/>
                <SortContainer/>
            </Settings>
        </Header>

    );
};

export default TopSection;