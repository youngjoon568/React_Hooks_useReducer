import React from 'react';

export default function Student({ name, dispatch, id, delStudent, isHere, markStudent }) {
  return (
    <div>
        <span style={{ color: isHere ? "#aaa" : "#000", textDecoration: isHere ? "line-through" : "none" }} onClick={() => {
          dispatch({ type: markStudent, payload: { id } })
        }}>{ name }</span>
        <button onClick={() => {
            dispatch({ type: delStudent, payload: { id } })
        }}>삭제</button>
    </div>
  );
};