import React from 'react';

const SearhBarStateContext = React.createContext('fuck');
const SetSearchBarStateContext = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case "setSearchString": {
            return { ...state, searchString: action.searchString }
        } default: {
            return state
        }
    }
}

const initalState = {
    searchString: ''
}


const SearchBarContextProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initalState);


    return (
        <SearhBarStateContext.Provider value={{ searchBarState: state }}>
            <SetSearchBarStateContext.Provider value={{ searchBarDispatch: dispatch }}>
                {props.children}
            </SetSearchBarStateContext.Provider>
        </SearhBarStateContext.Provider>
    )
}

export { SearhBarStateContext, SetSearchBarStateContext, SearchBarContextProvider }