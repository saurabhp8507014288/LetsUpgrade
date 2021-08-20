import React from "react";
import "./input-container.styles.css";
const InputContainer = ({ handleInput, name, searchStart }) => {
	const [focus, setFocus] = React.useState(false);
	return (
		<div
			className="inp__container"
			onKeyPress={(e) => setFocus(e.key === "/" ? true : false)}
		>
			<input
				placeholder="Enter movie name"
				className="input"
				value={name}
				onChange={handleInput}
				autoFocus={focus}
				onKeyPress={(e) => {
					searchStart(e);
				}}
			/>
			<label className={name?.length ? "shrink" : ""}>Search Movie</label>
		</div>
	);
};

export default InputContainer;
