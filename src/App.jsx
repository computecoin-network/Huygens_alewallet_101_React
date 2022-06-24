import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { M_SET_DAPP_NETWORK, M_SET_DAPP_CONNECT, M_SET_DAPP_ACCOUNT, IS_ALE_ENABLED } from './storeSlice';
import HelloWorld from "./components/HelloWorld";

function App() {
    const isAle = useSelector((state) => state.dapp.isAle);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAle) {
            listenDataChange();
        }
    });

    function handleNetworkChange(networkID) {
        dispatch(M_SET_DAPP_NETWORK(networkID));
    }

    function handleLockChange(status) {
        dispatch(IS_ALE_ENABLED(!status));
    }

    function handleConnectChange(status) {
        dispatch(M_SET_DAPP_CONNECT(status));
    }

    function handleAccountChange(account) {
        dispatch(M_SET_DAPP_ACCOUNT(account));
    }

    function listenDataChange() {
        window.aleereum.on("on_networkId_change", handleNetworkChange);
        window.aleereum.on("on_islocked_change", handleLockChange);
        window.aleereum.on("on_isConnected_change", handleConnectChange);
        window.aleereum.on("on_account_change", handleAccountChange);
    }

    return (
        <div>
            <HelloWorld />
        </div>
    );
}

export default App;