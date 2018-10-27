import React, { Component } from 'react'

let CounterLable = ({value, increment, decrement}) => (
    <div>
        <div>Value Here = {value}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
)

export default CounterLable;

