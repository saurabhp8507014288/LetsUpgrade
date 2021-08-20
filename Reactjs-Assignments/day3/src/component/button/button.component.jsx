import React from "react";
import "./button.styles.css";
const Button = ({ searchStart, name }) => {
	return (
		<button
			className="button"
			// disabled={name?.length < 2}
			onClick={() => searchStart("search")}
		>
			Search
		</button>
	);
};

export default Button;
