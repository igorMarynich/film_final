import React from 'react';
import RentFilmsComp from "./RentFilmsComp";

const RentFilms = (props) => (
    <div className="hello">
        {props.status ? <RentFilmsComp /> : 'Пожалуйста, войдите в ваш аккаунт'}
    </div>
);

export default RentFilms;
