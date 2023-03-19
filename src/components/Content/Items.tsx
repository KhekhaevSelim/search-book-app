import React, {useState} from 'react';
import {
    AuthorStyled,
    CategoriesStyled,
    DescriptionsStyled,
    ImageContainer,
    ImageStyled,
    IsFetching,
    ItemsStyled,
    LoadMore,
    LoadMoreContainer,
    TitleStyled
} from "../../styled/Content";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../reduxStore/Store";
import {
    CategoriesType, ChangeTotalBooksCountAC,
    DataType, LoadMoreAC,
    SetFetchingAC, ShowLoadMoreAC,
    ShowMoreAC, SortType,
} from "../../reducers/SearchReducer";
import preloader from "../../assets/preloader.gif"
import FullBookItem from "./FullBookItem";


const Items = () => {
    let searchTitle = useSelector<RootStateType, string>(state => state.searchReducer.searchTitle)
    let pageSize = useSelector<RootStateType, number>(state => state.searchReducer.pageSize)
    let currentPage = useSelector<RootStateType, number>(state => state.searchReducer.currentPage)
    let currentCategory = useSelector<RootStateType, CategoriesType>(state => state.searchReducer.currentCategory)
    let books = useSelector<RootStateType, Array<DataType>>(state => state.searchReducer.books)
    let isFetching = useSelector<RootStateType, boolean>(state => state.searchReducer.isFetching)
    let isShowMore = useSelector<RootStateType, boolean>(state => state.searchReducer.showLoadMore)
    let currentSort = useSelector<RootStateType, SortType>(state => state.searchReducer.currentSort)
    let totalBooksCount = useSelector<RootStateType, number>(state => state.searchReducer.totalItems)

    let dispatch = useDispatch()


    let [showModal, setShowModal] = useState<boolean>(false)

    let [showingBook, setShowingBook] = useState<any>()
    const showBook = (id: string) => {
        let FullBookInfo = booksForRender.find(el => el.id === id)
        setShowingBook(FullBookInfo)
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const loadMore = () => {
        dispatch(ShowMoreAC())
        getMoreItems()

    }
    const getMoreItems = async () => {
        dispatch(SetFetchingAC(true))
        let response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchTitle + "&key=AIzaSyDXCbzTmrtRBgEVROJgUhAF4Eg-4BSZLmM" + "&maxResults=" + pageSize + "&startIndex=" + (currentPage) * (pageSize) + "&orderBy=" + currentSort)
        let awaits = await response.json()
        dispatch(LoadMoreAC(awaits))
        dispatch(SetFetchingAC(false))
    }


    let booksForRender: Array<DataType>;
    if (currentCategory === "All") {
        booksForRender = books
        dispatch(ChangeTotalBooksCountAC(totalBooksCount))
    } else {
        booksForRender = books.filter(el => el.volumeInfo.categories?.includes(currentCategory));
        dispatch(ChangeTotalBooksCountAC(booksForRender.length))
    }
    booksForRender.length < 1 ? dispatch(ShowLoadMoreAC(false)) : dispatch(ShowLoadMoreAC(true))

    return (<>
        {showModal ?
            <FullBookItem
            title={showingBook.volumeInfo.title ? showingBook.volumeInfo.title : ""}
            authors={showingBook.volumeInfo?.authors ? showingBook.volumeInfo?.authors : ""}
             categories={showingBook.volumeInfo.categories ? showingBook.volumeInfo.categories : ""}
            closeModal={closeModal}
            description={showingBook.volumeInfo.description ? showingBook.volumeInfo.description : ""}
            thumbnail={showingBook.volumeInfo.imageLinks.thumbnail ? showingBook.volumeInfo.imageLinks.thumbnail : ""}
             />
            :
            isFetching && <IsFetching src={preloader}/>}
        {booksForRender.map((book: DataType, index: number) => {
            return (
            <ItemsStyled key={index} onClick={() => showBook(book.id)}>
            <ImageContainer>
            <ImageStyled src={book.volumeInfo.imageLinks?.smallThumbnail} alt="book img"/>
            </ImageContainer>
            <DescriptionsStyled>
            <CategoriesStyled>{book.volumeInfo.categories ?
            book.volumeInfo.categories[0]
            :
            ""
        }</CategoriesStyled>
        {book.volumeInfo.title?.length > 45 ?
            <TitleStyled>{book.volumeInfo.title.slice(0, 44) + "..."}</TitleStyled>
            :
            <TitleStyled>{book.volumeInfo.title}</TitleStyled>
        }

        {book.volumeInfo.authors?.length > 0 ?
            <AuthorStyled>{book.volumeInfo.authors.join(", ")}</AuthorStyled>
            :
            ""
        }

            </DescriptionsStyled>
            </ItemsStyled>
            )
        })}


        {isShowMore && <LoadMoreContainer>

            <LoadMore className="loadMore" onClick={loadMore}>Load more</LoadMore>

            </LoadMoreContainer>}


        </>
    )
};

export default Items;