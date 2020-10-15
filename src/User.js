import React from 'react';
import './user.css'
function User(props){
    return (
    <div className="user-page">
        <h1>שלום, {props.userName}</h1>
        <code>כניסתך האחרונה למערכת ב <span className="color-span">{new Date().toLocaleDateString()}</span>, בשעה: <span className="color-span">{new Date().toLocaleTimeString()}</span></code>
    </div>
)}

export default User;