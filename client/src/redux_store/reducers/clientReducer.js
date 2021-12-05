const testClient = { name: "andrew", age: 25 };

const clientReducer = (state, action) => {
	switch (action.type) {
		default: {
			return testClient;
		}
	}
};

export default clientReducer;
