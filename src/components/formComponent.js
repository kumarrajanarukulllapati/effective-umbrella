// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default class FormComponent extends Component {

    componentDidMount() {
        console.log('initial renders ')
        // fetch
    }

    render() {
        return (
            <div>
                <form
                // onSubmit={this.handleSubmit}
                >
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ borderRadius: '50px !important' }}
                    // value={this.state.name}
                    // onChange={(e) => this.setState({ name: e.target.value })} 
                    />
                    <Button variant='contained' type='submit' > submit </Button>

                </form>
            </div>
        )
    }
}
