import {createStore} from "redux";
function cartReducer(state={items:{}},action) {
    switch(action.type) {
        case "ADD_TO_CART": {

        }
        case "REMOVE_FROM_CART": {

        }
        default: return state;
    }
}
const store = createStore(cartReducer);
export default store;
//action is an object that has two keys - type and payload(item in our case)