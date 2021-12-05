import React from "react";

export default function SearchResult({ shops = [] }) {
	return shops.map((shop, key) => {
		return <DisplayShop key={key} shop={shop} />;
	});
}

const DisplayShop = ({ shop }) => {
	return (
		<div>
			<h3>{shop.name}</h3>
			<strong>Year in business: {shop.yearInBusiness}</strong> | Average
			earning: {shop.averageEarning}
			<p>
				Address: {shop.address} Zip Code: {shop.zipcode}
			</p>
		</div>
	);
};
