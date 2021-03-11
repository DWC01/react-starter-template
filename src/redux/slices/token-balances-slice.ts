import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getTokenBalances from '../../services/covalent/get-token-balances';

interface Transaction {
	tokenBalances: any[];
	status: string;
	error: null | string;
}

interface State {
	tokenBalances: Transaction;
}

// Export Thunks
// ---------------
export const fetchTokenBalances = createAsyncThunk(
	'tokenBalances/fetchTokenBalances',
	async (address: string) => {
		const tokenBalances = (await getTokenBalances(address)) as [];
		return tokenBalances;
	}
);

export const tokenBalancesSlice = createSlice({
	name: 'tokenBalances',
	initialState: {
		tokenBalances: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTokenBalances.pending, (state, action) => {
			state.status = 'loading';
		});

		builder.addCase(fetchTokenBalances.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.tokenBalances = action.payload;
		});

		builder.addCase(fetchTokenBalances.rejected, (state, action) => {
			state.status = 'failed';
		});
	},
});

const { reducer } = tokenBalancesSlice;

// Export Selectors
// ------------------
const selectTokenBalances = (state: State) => {
	return state.tokenBalances.tokenBalances;
};

const selectTokenBalancesStatus = (state: State) => {
	return state.tokenBalances.status;
};

const selectTokenBalancesError = (state: State) => {
	return state.tokenBalances.error;
};

export {
	selectTokenBalances,
	selectTokenBalancesStatus,
	selectTokenBalancesError,
};

// Export Reducer
// ------------------
export default reducer;
