import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
    name: 'dapp',
    initialState: {
        isAle: false,
        hasAle: false,
        isAleEnabled: false,
        networkId: 3,
        account: "",
        isConnected: false
    },
    reducers: {
        M_SET_DAPP_NETWORK: (state, networkId) => {
            state.networkId = networkId.payload;
        },
        M_SET_DAPP_CONNECT: (state, connect) => {
            state.isConnected = connect.payload;
        },
        M_SET_DAPP_ENABLE: (state, isAleEnabled) => {
            state.isAleEnabled = isAleEnabled.payload;
        },
        M_SET_DAPP_ACCOUNT: (state, dappAccount) => {
            state.account = dappAccount.payload;
        },
        IS_ALE: (state, isAle) => {
            state.isAle = isAle.payload;
        },
        HAS_ALE: (state, hasAle) => {
            state.hasAle = hasAle.payload;
        },
        IS_ALE_ENABLED: (state, isEnabled) => {
            state.isAleEnabled = isEnabled.payload;
        },
    },
})

export const { M_SET_DAPP_NETWORK, M_SET_DAPP_CONNECT, M_SET_DAPP_ENABLE, M_SET_DAPP_ACCOUNT, IS_ALE, HAS_ALE, IS_ALE_ENABLED } = storeSlice.actions;

export default storeSlice.reducer;