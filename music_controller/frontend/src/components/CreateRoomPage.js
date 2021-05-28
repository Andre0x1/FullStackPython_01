import React, {Component} from "react"
import {
    Button,
    Grid,
    Typography,
    TextField,
    FormHelperText,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel
} from "@material-ui/core"
import {link} from "react-router-dom"


export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
    }

    render() {
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Create A Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component={"fieldset"}>
                    <FormHelperText>
                        <div align={'center'}>
                            Control Playback
                        </div>
                    </FormHelperText>
                    <RadioGroup row defaultValue="true">
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary"/>}
                            label="Play/Pause"
                            labelPlacement={"Bottom"}
                        >

                        </FormControlLabel>
                        <FormControlLabel
                            value="false"
                            control={<Radio color="Secondary"/>}
                            label="No Control"
                            labelPlacement={"Bottom"}
                        >

                        </FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    }
}
