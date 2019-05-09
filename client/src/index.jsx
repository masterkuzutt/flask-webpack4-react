import React, { Componet } from 'react';
import { raender } from 'react-dom';

class Hello extends Componet {
    render() {
        return (
            <h1>Hello React</h1>
        );
    }
}

export default Hello;
console.log('-----load--------');
render(
    <Hello />,
    document.getElementById('main')
);
