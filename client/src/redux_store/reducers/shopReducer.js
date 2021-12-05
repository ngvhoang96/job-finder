const shops = [
	{
		name: "Nail shop 1",
		address: "123 no street dr",
		averageEarning: 800,
		zipcode: "77072",
		yearInBusiness: 4,
	},
	{
		name: "Nail shop 1",
		address: "123 no street dr",
		averageEarning: 800,
		zipcode: "77072",
		yearInBusiness: 4,
	},
	{
		name: "Nail shop 2",
		address: "123 no street dr",
		averageEarning: 500,
		zipcode: "77051",
		yearInBusiness: 2,
	},
	{
		name: "Nail shop 3",
		address: "123 no street dr",
		averageEarning: 1200,
		zipcode: "77099",
		yearInBusiness: 10,
	},
	{
		name: "Nail shop 4",
		address: "123 no street dr",
		averageEarning: 1000,
		zipcode: "77083",
		yearInBusiness: 7,
	},
];

const shopReducer = (state, action) => {
	switch (action.type) {
		default:
			return shops;
	}
};

export default shopReducer;
