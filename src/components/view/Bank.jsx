import React, { useReducer, useState } from 'react';

export default function Bank() {
    const [num, setNum] = useState(0);

    const ACTION_TYPE = {
        deposit: "deposit",
        withdraw: "withdraw"
    };

    const reducer = (state, action) => {
        console.log("예금", state, action);
        
        switch (action.type) {
            case ACTION_TYPE.deposit: return state + action.payload; 
            case ACTION_TYPE.withdraw: return state - action.payload;
            default: return state;
        };
    };

    const [money, dispatch] = useReducer(reducer, 0);


    return (
        <div>
            <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
            <p>잔고 : {money}원</p>
            <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} step="1000" />
            <button onClick={() => dispatch({ type: ACTION_TYPE.deposit, payload: num })}>예금</button>
            <button onClick={() => dispatch({ type: ACTION_TYPE.withdraw, payload: num })}>출금</button>
        </div>
    );
};