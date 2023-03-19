export type CategoriesType =
    "All"
    | "Art"
    | "Biography & Autobiography"
    | "Computers"
    | "History"
    | "Medical"
    | "Poetry"
    | "Fiction"
export type SortType = "relevance" | "newest"


export type ImageLinksType = {
    smallThumbnail: string
    thumbnail: string
}

export type VolumeInfoType = {
    categories: Array<CategoriesType>
    description: string
    imageLinks: ImageLinksType
    title: string
    authors: Array<string>

}
export type DataType = {
    volumeInfo: VolumeInfoType
    id: string
}
export type StateType = {
    books: Array<DataType>
    totalItems: number
    pageSize: number
    currentPage: number
    categories: Array<CategoriesType>
    currentCategory: CategoriesType
    sort: Array<SortType>
    currentSort: SortType
    searchTitle: string
    isFetching: boolean
    showLoadMore: boolean

}

export const InitialState: StateType = {
    books: [],
    totalItems: 0,
    pageSize: 30,
    currentPage: 1,
    categories: ["All", "Art", "Biography & Autobiography", "Fiction", "Computers", "History", "Medical", "Poetry"],
    currentCategory: "All",
    sort: ["relevance", "newest"],
    currentSort: "relevance",
    searchTitle: "",
    isFetching: false,
    showLoadMore: false

}
export const searchReducer = (state: StateType = InitialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SEARCH-BOOK" :

            return {...state, books: [...action.items.items], totalItems: action.items.totalItems}
        case "CHANGE-SEARCH-TITLE" :
            return {...state, searchTitle: action.title}
        case "SHOW-MORE" :
            return {...state, currentPage: state.currentPage + 1}
        case "SET-FETCHING" :
            return {...state, isFetching: action.isFetching}
        case "CHANGE-CATEGORY":
            return {...state, currentCategory: action.category}
        case "CHANGE-SORT-BY" :
            return {...state, currentSort: action.sortBy}
        case "SORT-BOOKS" :
            return {...state, books: [...action.items.items], totalItems: action.items.totalItems}
        case "LOAD-MORE" :
            return {...state, books: [...state.books, ...action.items.items], totalItems: action.items.totalItems}
        case "SHOW-LOAD-MORE" :
            return {...state, showLoadMore: action.isShow}
        case "CHANGE-TOTAL-BOOKS-COUNT" :
            return {...state, totalItems: action.count}
        default :
            return state
    }
}


type ActionsType =
    ReturnType<typeof SearchBookAC>
    | ReturnType<typeof ChangeSearchTitleAC>
    | ReturnType<typeof ShowMoreAC>
    | ReturnType<typeof SetFetchingAC>
    | ReturnType<typeof ChangeCategoryAC>
    | ReturnType<typeof ChangeSortAC>
    | ReturnType<typeof SortBooksAC>
    | ReturnType<typeof LoadMoreAC>
    | ReturnType<typeof ShowLoadMoreAC>
    | ReturnType<typeof ChangeTotalBooksCountAC>


export const SearchBookAC = (items: any) => {
    return {
        type: "SEARCH-BOOK",
        items
    } as const
}
export const LoadMoreAC = (items: any) => {
    return {
        type: "LOAD-MORE",
        items
    } as const
}
export const SortBooksAC = (items: any) => {
    return {
        type: "SORT-BOOKS",
        items
    } as const
}


export const ChangeSortAC = (sortBy: SortType) => {
    return {
        type: "CHANGE-SORT-BY",
        sortBy
    } as const
}

export const ChangeSearchTitleAC = (title: string) => {
    return {
        type: "CHANGE-SEARCH-TITLE",
        title
    } as const
}

export const ShowMoreAC = () => {
    return {
        type: "SHOW-MORE"
    } as const
}

export const SetFetchingAC = (isFetching: boolean) => {
    return {
        type: "SET-FETCHING",
        isFetching
    } as const
}

export const ChangeCategoryAC = (category: CategoriesType) => {
    return {
        type: "CHANGE-CATEGORY",
        category
    } as const
}

export const ShowLoadMoreAC = (isShow: boolean) => {
    return {
        type: "SHOW-LOAD-MORE",
        isShow
    } as const
}
export const ChangeTotalBooksCountAC = (count: number) => {
    return {
        type: "CHANGE-TOTAL-BOOKS-COUNT",
        count
    } as const
}
