import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useState from 'redux';
// import { Redirect, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                X-axis
            </Typography>
            <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
        </div>
    );
};

export default App;
