
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from './basic/Button';
import { useSelector, useDispatch } from 'react-redux';
import {decrement, increment} from '../redux/counter'

const ReduxTrial = () => {
    const { count } = useSelector((state) =>state.counter);
    const dispatch = useDispatch();

    const increaseAmount = () => {
        dispatch(increment())
    };
    const decreaseAmount = () => {
        dispatch(decrement())
    };
  return (
        <Grid container direction='column' alignItems='center'>
            <Grid sx={{height:50}}/>
            <Grid item>
                Count number: {count}
            </Grid>
            <Grid sx={{height:10}}/>
            <Grid item>
                <Grid container direction='row' alignItems='center'>
                    <Grid item>
                        <Button text='Increment' textColor='white' clickHandler={() => increaseAmount() }/>
                    </Grid>
                    <Grid sx={{width:10}}/>
                    <Grid item>
                        <Button text='Decrement' textColor='white'clickHandler={() => decreaseAmount()}/>
                    </Grid>             
                </Grid>
            </Grid>
        </Grid>
  )
}

export default ReduxTrial