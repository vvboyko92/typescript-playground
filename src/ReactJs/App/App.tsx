import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { setSpeed } from '../actions/webGlParamAction';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const App: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                Speed
            </Typography>
            <Slider
                defaultValue={0}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={(e, value) => { dispatch(setSpeed(value)) }}
                min={0}
                max={300}
            />
        </div>
    );
};

export default App;
