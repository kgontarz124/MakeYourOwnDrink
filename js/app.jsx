import React from 'react';
import ReactDOM from 'react-dom';
import { MainRouter } from './MainRouter.jsx'

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <MainRouter />,
        document.getElementById('app')
    );
});
