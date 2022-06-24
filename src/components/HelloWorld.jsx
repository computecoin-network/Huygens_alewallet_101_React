import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import contract from '../contract';
import Big from 'bignumber.js';

// import style from "./helloworld.css";

function HelloWorld() {
    const [account, setAccount] = useState("");
    const [isConnected, setisConnected] = useState(false);

    const storeAccount = useSelector((state) => state.dapp.account);
    const storeIsConnected = useSelector((state) => state.dapp.isConnected);

    useEffect(() => {
        setAccount(storeAccount);
        setisConnected(storeIsConnected);
    }, [storeAccount, storeIsConnected]);


    async function getName() {
        return await contract.Instance.methods.name().call();
    }

    // async function getSymbol() {
    //     return await contract.Instance.methods.symbol().call();
    // }

    async function approve(limit) {
        const approveAmount = new Big(limit).times('1e18').toString();
        const response = await contract.Instance.methods.approve(contract.coreAddress, approveAmount).sendToBlock({
            from: account,
            amount: new Big('0').toString()
        });

        if (response.success) {
            console.log('transaction success: ', response);
        } else {
            console.log('transaction failed: ', response);
        }

        return response;
    }

    function connect() {
        if (window["aleereum"]) {
            window["aleereum"].connect();
        }
    }

    function approveMoney() {
        getName()
            .then((res) => {
                console.log(res);
            });
        approve(100)
            .then((res) => {
                console.log(res);
            });
    }

    if (isConnected) {
        return (
            <div className='hello'>
                <h1>{storeAccount}</h1>
                <div style={{ color: "#f00" }}>Connect Success!</div>
                <button type="button" onClick={approveMoney}>approve $100</button>
            </div>
        );
    } else {
        return (
            <div className='hello'>
                <button type="button" onClick={connect}>Connect Ale</button>
            </div>
        );
    }
}

export default HelloWorld;