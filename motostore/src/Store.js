import { createStore } from 'redux';


let name = localStorage.getItem("customerName");
let adminLogined = localStorage.getItem("adminLogined");

const initialState = {
    // filter handling
    filterPrice: { min: 300, max: 600 },
    filterHeight: { min: 40, max: 80 },
    rangeBarChange: true,
    filterOrigin: "",
    SortMode: 0,
    redirectToHome: false,
    // List customer product handling
    listProductCustomer: null,
    itemsCountPerPage: 1,
    totalItemsCount: 1,
    activePage: 1,
    /// Search
    //Authentication
    adminLogined: adminLogined,
    customerNameWellcome: name,
    //Total Cart
    totalItemCart: {count : localStorage.getItem("TOTAL_ITEM_CART"), sum : localStorage.getItem("SUM_CART")}
}

function AllReducer(state = initialState, action) {
    switch (action.type) {
        case "HIDDEN_VIDEO_INTRO":
            return {
                ...state,
                rangeBarChange: false
            }
        case "SHOW_VIDEO_INTRO":
            return {
                ...state,
                rangeBarChange: true
            }
        // filter handling
        case "REDIRECT_TO_HOME":
            return {
                ...state,
                redirectToHome: true
            }
        case "DISABLE_REDIRECT_TO_HOME":
            return {
                ...state,
                redirectToHome: false
            }
        case "UPDATE_FILTER_PRICE":
            return {
                ...state,
                filterPrice: action.data,
                rangeBarChange: false
            }
        case "UPDATE_FILTER_HEIGHT":
            return {
                ...state,
                filterHeight: action.data,
                rangeBarChange: false
            }
        case "UPDATE_FILTER_ORIGIN":
            return {
                ...state,
                filterOrigin: action.data,
                rangeBarChange: false
            }
        case "UPDATE_SORT_MODE":
            return {
                ...state,
                SortMode: action.data,
                rangeBarChange: false
            }
        // List customer product handling
        case "FETCH_CUSTOMER_LIST_PRODUCT":
            return {
                ...state,
                listProductCustomer: action.data,
            }
        case "UPDATE_ITEMS_COUNT_PER_PAGE":
            return {
                ...state,
                itemsCountPerPage: action.data,
            }
        case "UPDATE_TOTAL_ITEMS_COUNT":
            return {
                ...state,
                totalItemsCount: action.data,
            }
        case "UPDATE_ACTIVE_PAGE":
            return {
                ...state,
                activePage: action.data
            }
        // Authentication
        case "UPDATE_ADMIN_LOGIN":
            return {
                ...state,
                adminLogined: action.data
            }
        case "UPDATE_CUSTOMER_WELCOME":
            return {
                ...state,
                customerNameWellcome: action.data
            }
        case "UPDATE_TOTAL_ITEM_CART":
            return {
                ...state,
                totalItemCart: action.data
            }
        default:
            break;
    }
    return state;
}
const store = createStore(AllReducer);
export default store;