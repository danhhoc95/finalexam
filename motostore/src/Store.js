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

    return state;
};

const store = createStore(AllReducer);
export default store;