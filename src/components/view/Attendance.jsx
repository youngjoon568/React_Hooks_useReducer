import React, { useReducer, useState } from 'react';
import Student from './Student';

export default function Attendance() {
    const STUDENT_TYPE = {
        addStudent: "addStudent",
        delStudent: "delStudent",
        markStudent: "markStudent"
    };

    const initialState = {
        count: 0,
        students: []
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case STUDENT_TYPE.addStudent:
                const name = action.payload.name;
                const newStudent = { id: Date.now(), name: name, isHere: false };
                return {
                    count: state.count + 1,
                    students: [...state.students, newStudent]
                };
            case STUDENT_TYPE.delStudent:
                return {
                    count: state.count - 1,
                    students: state.students.filter(student => student.id !== action.payload.id)
                }
            case STUDENT_TYPE.markStudent:
                return {
                    count: state.count,
                    students: state.students.map(student => {
                        if(student.id === action.payload.id) {
                            return { ...student, isHere: !student.isHere }
                        }
                        return student;
                    })
                }
            default: return state;
        };
    };

    const [name, setName] = useState("");
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수: {studentsInfo.count}</p>
            <input type="text" placeholder="이름을 입력해주세요" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => dispatch({ type: STUDENT_TYPE.addStudent, payload: { name } })}>추가</button>
            {
                studentsInfo.students.map(student => {
                    return <div key={student.id}><Student name={student.name} dispatch={dispatch} id={student.id} delStudent={STUDENT_TYPE.delStudent} isHere={student.isHere} markStudent={STUDENT_TYPE.markStudent} /></div>;
                })
            }
        </div>
    );
};