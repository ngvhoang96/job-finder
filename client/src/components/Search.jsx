import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

const queriesField = [
	{ key: "yearInBusiness", describe: "Year in business" },
	{ key: "averageEarning", describe: "Average Earning" },
	{ key: "zipcode", describe: "Zip code" },
];
const SearchContext = React.createContext([{}, () => {}]);

export default function Search() {
	const shops = useSelector((state) => state.shopReducer);
	const [state, setState] = useState({});

	useEffect(() => {
		if (state.shops === undefined) {
			setState((s) => ({ ...s, shops: shops, shopsFetched: shops }));
		}
	}, [state.shops, shops]);

	const handleSearch = (e) => {
		e.preventDefault();
		setState({
			...state,
			shops: filterShop(state.queries, state.shopsFetched),
		});
	};

	const handleReset = () => {
		setState({
			...state,
			shops: state.shopsFetched,
		});
	};

	return (
		<SearchContext.Provider value={[state, setState]}>
			<form onSubmit={handleSearch}>
				{queriesField.map((field, key) => {
					return (
						<SearchField
							key={key}
							fieldKey={field.key}
							fieldDescribe={field.describe}
						/>
					);
				})}
				<button>Search</button>
			</form>
			<button onClick={handleReset}>Reset</button>
			<SearchResult shops={state.shops} />
		</SearchContext.Provider>
	);
}

const filterShop = (queries = [], shops = []) => {
	return shops.filter((shop) => filterWithQuery(queries, shop));
};

const filterWithQuery = (queries = [], shop = []) => {
	const compare = (key, value, compareType) => {
		switch (compareType) {
			case ">":
				return shop[key] > value;
			case "<":
				return shop[key] < value;
			default:
				return shop[key] === value || shop[key] === parseInt(value);
		}
	};

	let condition = true;
	queries.forEach((query) => (condition = condition && compare(...query)));

	return condition;
};

const SearchField = ({ fieldKey, fieldDescribe }) => {
	const [state, setState] = useContext(SearchContext);
	const inputRef = useRef(null);
	const selectRef = useRef(null);

	const handleChangeValue = () => {
		const otherQueries =
			state.queries?.filter((query) => query[0] !== fieldKey) || [];

		setState({
			...state,
			queries: [
				...otherQueries,
				[fieldKey, inputRef.current.value, selectRef.current.value],
			],
		});
	};

	return (
		<div>
			<input
				ref={inputRef}
				placeholder={fieldDescribe}
				onChange={handleChangeValue}
			/>
			<select ref={selectRef} onChange={handleChangeValue}>
				<option value=">">More than</option>
				<option value="<">Less than</option>
				<option value="=">Exact</option>
			</select>
		</div>
	);
};
