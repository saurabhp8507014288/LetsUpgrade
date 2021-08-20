import React from "react";
import Button from "../button/button.component";
import InputContainer from "../input-container/input-contaniner.component";
import "./search.styles.css";

const SearchComponent = ({ handleInput, name, searchStart }) => {
	return (
		<div className="search">
			<InputContainer
				handleInput={handleInput}
				name={name}
				searchStart={searchStart}
			/>
			<Button searchStart={searchStart} />
		</div>
	);
};

export default SearchComponent;
