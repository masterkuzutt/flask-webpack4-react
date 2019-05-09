import React from 'react';
import { render } from 'react-dom';

// class Hello extends React.Componet {
//     render() {
//         return <h1>Hello React</h1>
//     }
// }

// render(<Hello />, document.getElementById('main'));

class Hello extends React.Component {
    render() {
        return <h1>Hello React!</h1>;
    }
}

render(<Hello />, document.getElementById('main'));