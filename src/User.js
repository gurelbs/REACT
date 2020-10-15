import React from 'react';
import './user.css'
function User(props){
    return (
    <div className="text-center bg-dark text-light">
        <h1 className="h1 mt-5">שלום, {props.userName}</h1>
        <code>כניסתך האחרונה למערכת ב <span className="color-span">{new Date().toLocaleDateString()}</span>, בשעה: <span className="color-span">{new Date().toLocaleTimeString()}</span></code>
    <div class="input-group mb-3 w-50 mx-auto">
    <input autoFocus placeholder="רוצה לחפש משהו?..." type="text" class="bg-dark mt-3 border-0 form-control text-center" aria-label="Text input with dropdown button"></input>
    </div>
        <div class="card w-75 mx-auto mt-5">
  <h5 class="card-header text-dark">קורס פיתוח אפליקציות Web</h5>
  <div class="card-body bg-dark text-light">
    <h5 class="card-title">רוצה לפתח אתרים?</h5>
    <p class="card-text">הגעת למקום הנכון! מהיום אפשר ללמוד פיתוח אתרים בטכנולוגיות החדשות ביותר, בעברית וללא עלות</p>
    <a href="https://devtools.cf" class="btn btn-outline-info">לחיצה להתחלה</a>
  </div>
</div>
    </div>
)}

export default User;