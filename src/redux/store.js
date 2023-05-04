import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import menuReducer from "./menu/menu.reducer";
import moreReducer from "./homeMore/more.reducer";


const rootReducer = combineReducers({
    menu: menuReducer,
    more: moreReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;