import React from "react";
import { connect } from "react-redux";
import { addItem, subtractItem } from "../redux/Actions";
function Increment(props) {
	const [number, setNumber] = React.useState(1);
	return (
		<div>
			<h2>Number of items: {props.no_of_Items}</h2>
			<label htmlFor="">Enter a number :  </label>
			<input
				type="text"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
				style={{"padding":"10px", "borderRadius":"20px", "border":"none", "backgroundColor":"#eeeeee"}}
			/>
			<br />
			<br />
			<button
				onClick={()=>props.addItem(number)}
				style={{
					padding: "10px 20px",
					backgroundColor: "black",
					color: "white",
					border: "none",
					borderRadius: "5px",
				}}
			>
				Add {number} numbers
			</button>
			<button
				onClick={()=>props.subtractItem(number)}
				style={{
					marginLeft: "10px",
					padding: "10px 20px",
					backgroundColor: "black",
					color: "white",
					border: "none",
					borderRadius: "5px",
				}}
			>
				Subtract {number} numbers
			</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		no_of_Items: state.no_of_Items,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (number) => dispatch(addItem(number)),
		subtractItem: (number) => dispatch(subtractItem(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
