import React from "react";
import "./result.styles.css";

import numeral from "numeral";
import { useState } from "react";
const Result = ({ resultId, closeResult }) => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		function fetchData() {
			const request = fetch(
				`https://api.themoviedb.org/3/movie/${resultId}?&api_key=cfe422613b250f702980a3bbf9e90716`
			)
				.then((response) => response.json())
				.then((res) => setData(res))
				.catch((err) => console.log(err));
		}
		fetchData();
	}, [resultId]);
	console.log(data, resultId);
	let posterIMG = "https://image.tmdb.org/t/p/w500" + data?.poster_path,
		release_date = data?.release_date,
		runtime = data?.runtime,
		production = data?.production_companies,
		genres = data?.genres,
		budget = data?.budget,
		totalRevenue = data?.revenue,
		vote_average = data?.vote_average,
		productionList = nestedDataToString(production),
		noData = "-",
		genresList = nestedDataToString(genres),
		backdropIMG = "https://image.tmdb.org/t/p/original" + data?.backdrop_path;

	if (
		vote_average === "undefined" ||
		vote_average === 0 ||
		runtime === "undefined" ||
		runtime === "null" ||
		runtime < 0 ||
		runtime === "-"
	) {
		vote_average = noData;
		runtime = "-";
	} else {
		vote_average = data?.vote_average + " / 10";
		runtime = data?.runtime + " mins";
	}

	if (
		production === "undefined" ||
		production === "null" ||
		production === ""
	) {
		productionList = "";
	}
	if (
		totalRevenue === "undefined" ||
		totalRevenue === 0 ||
		budget === "undefined" ||
		budget === 0 ||
		release_date > Date()
	) {
		totalRevenue = noData;
		budget = noData;
	} else {
		totalRevenue = numeral(data?.revenue).format("($0,0)");
		budget = numeral(data?.budget).format("($0,0)");
	}

	if (data?.poster_path === null || backdropIMG === null) {
		posterIMG =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
		backdropIMG =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
	}

	return (
		<div className="result">
			<div className="result__inner">
				<div className="result__image">
					<img src={posterIMG} alt="" />
				</div>
				<div className="result__details">
					<div className="result__title">
						<h1>{data?.original_title}</h1>
						<span className="back__arrow" onClick={() => closeResult()}>
							x
						</span>
					</div>
					{typeof data?.overview !== "undefined" ||
					data?.tagline !== "undefined" ? (
						<div className="result__overview">
							<p className="tagline">{data?.tagline}</p>
							<h2 className="overview">Overview</h2>
							<p className="overview__content">{data?.overview}</p>
						</div>
					) : (
						""
					)}
					<div className="result__block">
						<div className="inner__block">
							<h2 className="title">Genre</h2>
							<p className="list">{genresList} </p>
						</div>
						<div className="inner__block">
							<h2 className="title">Production</h2>
							<p className="list">{productionList}</p>
						</div>
					</div>
					<div className="result__block">
						<div className="inner__block">
							<h2 className="title">Vote</h2>
							<p className="list">{vote_average}</p>
						</div>
						<div className="inner__block">
							<h2 className="title">Run Time</h2>
							<p className="list">{runtime}</p>
						</div>
					</div>
					<div className="result__block">
						<div className="inner__block">
							<h2 className="title">Release Date</h2>
							<p className="list">
								{release_date < Date() ? release_date : "Waiting for movie"}{" "}
							</p>
						</div>
						<div className="inner__block">
							<h2 className="title">Budget</h2>
							<p className="list">{budget}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function nestedDataToString(nestedData) {
	let nestedArray = [],
		resultString;
	if (nestedData !== undefined) {
		nestedData.forEach(function (item) {
			nestedArray.push(item.name);
		});
	}
	resultString = nestedArray.join(", "); // array to string
	return resultString;
}

export default Result;
