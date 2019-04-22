import React, { Component } from 'react';
import './App.css';

export default class Botao extends Component {
    constructor() {
        super();
        this.state = {value: "R E I N I C I A R" };
      }

    render() {
        return (
            // eslint-disable-next-line no-unused-expressions
            <form>
                <input type="button" className={'reinicia'} value={this.state.value} onClick={() => window.location.reload()} />
            </form>
        );
    }
}

//ReactDOM.render(<App />, document.getElementById('container'));