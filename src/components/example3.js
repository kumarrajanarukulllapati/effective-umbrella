import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './example.module.css';
import NavigationComponent from './Navigation';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'gray',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class ExampleComponent extends React.Component {

    render() {
        // console.log(props, 'here comes example 3')
        return (
            <div className={styles.demo1}>
                <h1>about screen</h1>
                {/* <NavigationComponent /> */}
                <Grid container direction="row-reverse">
                    <Grid item xs={12} sm={8} md={6} lg={4} xl={4} className={styles.demo2}>
                        {/* <Item>xs=4</Item> */}1
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={8} xl={8} className={styles.demo2}>
                        {/* <Item>xs=8</Item> */}2
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ExampleComponent;
