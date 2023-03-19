import {
    ChangeCategoryAC,
    ChangeSearchTitleAC, ChangeSortAC,
    searchReducer, SetFetchingAC, ShowMoreAC,
    StateType
} from "../reducers/SearchReducer";

let startState: StateType;
beforeEach(() => {
    startState = {
        books: [{
            volumeInfo: {
                categories: [],
                description: "",
                imageLinks: {
                    smallThumbnail: "",
                    thumbnail: ""
                },
                title: "",
                authors: [],
            },
            id: ""
        }],
        totalItems : 100,
        currentSort : "relevance",
        searchTitle : "",
        isFetching : false,
        sort: ["relevance", "newest"],
        pageSize : 30,
        showLoadMore : false,
        currentPage : 1,
        categories : ["All", "Art", "Biography & Autobiography", "Fiction", "Computers", "History", "Medical", "Poetry"],
        currentCategory : "All"
    }
})



test("when we write in input text, state property 'searchTitle' should be changed", ()=>{
    const action = ChangeSearchTitleAC("some book title")

    const endState = searchReducer(startState, action)

    expect(startState.searchTitle).toBe("")
    expect(endState.searchTitle).toBe("some book title")
    expect(startState).not.toEqual(endState)

})

test("when user clicken on 'show more' state property 'current page' should be increase", ()=> {
    const action = ShowMoreAC()

    const endState = searchReducer(startState,action)

    expect(startState.currentPage).toBe(1)
    expect(endState.currentPage).toBe(2)
    expect(startState).not.toEqual(endState)
})

test("when user changed select by 'sort' state property 'current sort' should be changed to",()=>{
    const action = ChangeSortAC("newest")

    const endState = searchReducer(startState,action)

    expect(startState.currentSort).toBe("relevance")
    expect(endState.currentSort).toBe("newest")
    expect(startState).not.toEqual(endState)
})

test("when user loaded books state property 'is fetching' should be true", ()=> {
    const action = SetFetchingAC(true)

    const endState = searchReducer(startState,action)

    expect(startState.isFetching).toBe(false)
    expect(endState.isFetching).toBe(true)
    expect(startState).not.toEqual(endState)
})

test("when user changed category in select, state property 'current category' should be changed to",()=> {
    const action = ChangeCategoryAC("Computers")

    const endState = searchReducer(startState,action)

    expect(startState.currentCategory).toBe("All")
    expect(endState.currentCategory).toBe("Computers")
    expect(startState).not.toEqual(endState)

})