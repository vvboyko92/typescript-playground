import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from 'react-redux';
import {setRotation, setSpeed} from '../actions/webGlParamAction';
import main from "../../WebGl/main";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const App: React.FC = () => {
    useEffect(() => {
        main();
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const changeRotation = (xAxis, yAxis, zAxis) => {
        dispatch(setRotation({xAxis, yAxis, zAxis}))
    };
    const yAxis = useSelector(state => state.webGlParams.rotation.yAxis);
    const zAxis = useSelector(state => state.webGlParams.rotation.zAxis);
    const xAxis = useSelector(state => state.webGlParams.rotation.xAxis);
    const marks = [
        {
            value: 0,
            label: "No Rotation"
        },
        {
            value: 1,
            label: "Normal Rotation"
        },
        {
            value: -1,
            label: "Backward Rotation"
        }
    ];

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <canvas id="glCanvas" width="640" height="480"/>
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
                <Typography id="discrete-slider" gutterBottom>
                    X-axis
                </Typography>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={(e, value) => { changeRotation(value, yAxis, zAxis) }}
                    min={-1}
                    max={1}
                />
                <Typography id="discrete-slider" gutterBottom>
                    Y-axis
                </Typography>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    onChange={(e, value) => { changeRotation(xAxis, value, zAxis) }}
                    marks={marks}
                    min={-1}
                    max={1}
                />
                <Typography id="discrete-slider" gutterBottom>
                    Z-axis
                </Typography>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={(e, value) => { changeRotation(xAxis, yAxis, value) }}
                    min={-1}
                    max={1}
                />
            </div>
        </Grid>
    );
};

export default App;
