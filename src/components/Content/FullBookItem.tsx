import React from 'react';
import {
    Close,
    ContainerByClose, FullBookAuthors,
    FullBookCategories, FullBookDescriptions,
    FullBookImg, FullBookTitle, ItemContainer,
    ItemLeftPart,
    ItemRightPart
} from "../../styled/Content";
import {CategoriesType} from "../../reducers/SearchReducer";

type FullBookPropsType = {
    thumbnail : string
    closeModal : () => void
    categories : Array<CategoriesType>
    title : string
    authors : Array<string>
    description : string
}
const FullBookItem = (props : FullBookPropsType) => {
    return (
        <ItemContainer>
            <ItemLeftPart>
                <FullBookImg src={props.thumbnail} alt="book image"/>
            </ItemLeftPart>
            <ItemRightPart>
                <ContainerByClose>
                    <Close onClick={props.closeModal}>close</Close>
                </ContainerByClose>

                <FullBookCategories>{props.categories.join("/ ")}</FullBookCategories>
                <FullBookTitle>{props.title}</FullBookTitle>
                <FullBookAuthors>{props.authors.join("/ ")}</FullBookAuthors>
                <FullBookDescriptions>{props.description.slice(0, 900) + "..."}</FullBookDescriptions>
            </ItemRightPart>
        </ItemContainer>
    );
};

export default FullBookItem;