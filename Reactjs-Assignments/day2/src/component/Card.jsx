import React from "react";
import "./Card.css";
const Card = ({ result }) => {
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	const imageURL = result?.backdrop_path
		? `https://image.tmdb.org/t/p/w300${result.backdrop_path}`
		: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";

	return (
		<div className="card">
			<div className="card__image">
				<img src={imageURL} alt="" />
				<div className="card__vote">
					<span>&#9733;</span>
					<p>{result.vote}</p>
				</div>
			</div>
			<div className="card__content">
				<div className="card__title">
					<h3>{result.title}</h3>
					<p>
						{truncate(result.description, 100)}
						<span onClick={() => alert(result.description)}>Read More</span>
					</p>
				</div>
				<button onClick={() => alert(`You clicked on ${result.title}`)}>
					Watch Movie
				</button>
			</div>
		</div>
	);
};

export default Card;
