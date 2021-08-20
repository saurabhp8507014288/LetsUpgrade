import React from "react";
import "./App.css";
import Card from "./component/Card";
import { results } from "./data.json";

const App = () => {
	return (
		<div className="app">
			<p>Popular Movies</p>
			<div className="card__container">
				{results.map((result) => (
					<Card result={result} />
				))}
			</div>
		</div>
	);
};

export default App;
