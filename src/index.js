import React from 'react';
import ReactDOM from 'react-dom';

const applesPrice = React.createElement('li',{},'$1.00 per lb');
const apples = React.createElement('ul',{},applesPrice);

const orangesPrice = React.createElement('li',{},'$1.00 per lb');
const orages = React.createElement('ul',{},orangesPrice);

const mangosPrice = React.createElement('li',{},'$1.00 per lb');
const mangos = React.createElement('ul',{},mangosPrice);

ReactDOM.render(
    React.createElement(
        'ul',
         {},
         React.createElement('li',{},'Apples',apples),
         React.createElement('li',{},'Oranges', orages),
         React.createElement('li',{},'Mangos',mangos)
          ),
    document.getElementById('root')
);