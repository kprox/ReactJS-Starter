import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Component),
        document.getElementById('container')
    );
});