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
import TextField from '@mui/material/TextField';
import FormComponent from './formComponent';
import KGF2 from './example3';
import NavigationComponent from './Navigation';
import HeaderCompo from './HeaderCompo';
// import axios from 'axios'

class ExampleComponent extends Component {
    constructor() {
        super();

        this.state = {
            name: 'hulk',
            value: 1000,
            count: 1,
            studentData: [],
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log('initial renders data 1')
        console.log('data 1')
        this.getApiData();
    }

    handleChange() {
        console.log('initial state count : ', this.state.count);
        // this.props.newMethod(this.state.name);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit value', this.state.name)
    }

    getApiData = () => {
        this.setState({ isLoading: true });

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    studentData: data, isLoading: false,
                });
                console.log(data, 'data 1')
            }).catch((err) => {
                console.log(err)
                this.setState({ isLoading: false });
            });
    }

    render() {
        // console.log(this.props, 'this is props: this is example2');
        // console.log(this.props.name, 'this is name', this.props.teja);

        return (
            <div>
                <h2>hello {this.props.value} and {this.props.name} </h2>

                {this.state.isLoading ? 'loading...' : <HeaderCompo />}
                {/* <h1>Home screen</h1> */}
                {/* <NavigationComponent /> */}

                {/* {this.props.children} */}


                {/* <p>1.{this.state.name}</p> */}
                {/* <Button variant='contained' onClick={() => this.handleChange()}> click me </Button> */}
                {/* <Button variant='contained' onClick={this.handleChange}> click me </Button> */}

                {this.state.studentData.map((value) => {
                    return (
                        //      if (value.age < 15) {
                        //     return <h4> {value.name}</h4>
                        //      } else {
                        //          return <h4 style={{border:'1px solid red'}}>{value.name}</h4>
                        // }
                        <React.Fragment key={value.id}>
                            <h3>this is email: {value.email}</h3>
                            <p>this is username: {value.username}</p>
                        </React.Fragment>
                    )
                    // if (value.age < 15) {
                    //     return <h4> {value.name}</h4>
                    // }
                })}

                {/* <FormComponent /> */}
                {/* <KGF2 test11={this.props.newMethod} /> */}
            </div>)
    }
}

export default ExampleComponent;

// 1. identify problem 2. requirements 3. beast way 4. code