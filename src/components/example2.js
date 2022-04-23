// import React from 'react';

// const ExampleComponent = () => {
//     return (
//         <div>
//             <p>adsfdsaf</p>
//             <h2>Hello world</h2>
//         </div>
//     )
// }

// export default ExampleComponent;

import React, { Component, Fragment } from 'react';
import { Button } from '@mui/material';

class ExampleComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: 'hulk',
            value: 1000,
            count: 1
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange() {
        console.log('initial state count : ', this.state.count);
        console.log('initial state count : ');
        this.props.newMethod(this.state.name);
    }

    // handleChange = () => {
    //     console.log('initial state count : ', this.state.count);
    //     console.log('initial state count : ');
    //     // this.setState({
    //     //     // name: 'qwerty', value: 50,
    //     //     count: this.state.count + 1
    //     // }, () => {
    //     //     console.log('final state count :', this.state.count)
    //     //     // console.log('final state count :', this.state.count, '***', this.state.name, '***', this.state.value)
    //     // });
    //     // console.log('final state count :', this.state.count, '***', this.state.name, '***', this.state.value);

    //     // this.setState({})
    //     // this.props.newMethod();
    //     // this.hema();
    // }

    hema = () => {
        return (
            <div>
                <h2>new inner</h2>
                <p>.........</p>
            </div>
        )
    }


    render() {
        // console.log(this.props, 'this is props');
        // console.log(this.props.name, 'this is name', this.props.teja);

        return (
            <div>
                <h2>hello {this.props.value} and {this.props.name} </h2>

                {this.props.children}


                <p>1.{this.state.name}</p>
                <p>2.{this.state.value}</p>
                <p>3.{this.state.count}</p>
                {/* <Button variant='contained' onClick={() => this.handleChange()}> click me </Button> */}
                <Button variant='contained' onClick={this.handleChange}> click me </Button>

                {/* <div style={{ border: '1px solid green' }}>
                    {this.hema()}
                </div> */}
            </div>)
    }
}

export default ExampleComponent;
