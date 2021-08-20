import React from "react";
import "./movie-card.styles.css";

const MovieCard = ({ datas, seeResult }) => {
	return (
		<div className="movie__card">
			{datas !== null &&
				datas.results.map((result, i) => (
					<Card result={result} key={i} seeResult={seeResult} />
				))}
		</div>
	);
};

export default MovieCard;

const Card = ({ result, seeResult }) => {
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	const imageURL = result?.backdrop_path
		? `https://image.tmdb.org/t/p/w300${result.backdrop_path}`
		: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";

	return (
		<div className="card">
			<div className="card__image">
				<img src={imageURL} alt="" onClick={() => seeResult(result.id)} />
				<div className="card__vote">
					<span>&#9733;</span>
					<p>{result.vote_average}</p>
				</div>
			</div>
			<div className="card__content">
				<div className="card__title">
					<h3 onClick={() => seeResult(result.id)}>
						{truncate(result.original_title, 20)}
					</h3>
					<p onClick={() => seeResult(result.id)}>
						{truncate(result.overview, 100)}
						<span onClick={() => seeResult(result.id)}>Read More</span>
					</p>
				</div>
				<button onClick={() => seeResult(result.id)}>Watch Movie</button>
			</div>
		</div>
	);
};
