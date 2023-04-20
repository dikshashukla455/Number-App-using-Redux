import { Add_Item } from "./Types";
import { Subtract_Item } from "./Types";

export function addItem(number = 1) {
	return {
		type: Add_Item,
		payload: number,
	};
}
export function subtractItem(number = 1) {
	return {
		type: Subtract_Item,
		payload: number,
	};
}
