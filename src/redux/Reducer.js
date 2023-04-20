import { Add_Item, Subtract_Item } from "./Types";

const initialState = {
	no_of_Items: 0,
};

const ItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case Add_Item:
			return {
				no_of_Items: state.no_of_Items + parseInt(action.payload),
			};
		case Subtract_Item:
			return {
				no_of_Items: state.no_of_Items - action.payload,
			};
		default:
			return state;
	}
};
export default ItemReducer;
