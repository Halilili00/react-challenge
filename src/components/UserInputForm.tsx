import React, {ChangeEvent} from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Typography, Grid, TextField, Box} from '@mui/material'

import { setName, setDescription, setComment ,setClearInputs, addUserInputs, addNewId} from '../actions'
import { ApplicationState } from '../reducer'
import { Iinputs } from '../Interface'
import  useStyles  from '../styles.css'

interface Props {
    name: string,
    description: string,
    comment: string,
    dispatch: Dispatch,
    id: number
}

const UserInputForm = ({id, name, description, comment, dispatch}: Props) => {

    const handlNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const val = event.target.value;
        dispatch(setName(val))
    }
    
    const handlDescriptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const val = event.target.value;
        dispatch(setDescription(val))
    }
    const handldCommentChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const val = event.target.value;
        dispatch(setComment(val))
    }

    const clearInputs = () => {
        dispatch(setClearInputs());
    }

    const addInputs = () => {
        const newInput : Iinputs = {name: name, description: description, comment: comment, id: id}
        dispatch(addUserInputs(newInput))
        dispatch(addNewId())
    }

    const classes = useStyles();

    return (
        <>
            <Box mt={4} className={classes.container}>
                <Grid container spacing={2} justifyContent="right">
                    <Grid item mt={3}>
                        <Typography variant='h6'><Box sx={{color: 'text.secondary', m: 1,}}>Name</Box></Typography>
                    </Grid>
                    <Grid item sm={3} mt={3}>
                        <TextField fullWidth className={classes.input} name='name' variant="outlined" value={name} onChange={handlNameChange}></TextField>
                    </Grid>
                    <Grid item mt={3} mr={-1}>
                        <Typography variant='h6'><Box sx={{color: 'text.secondary', m: 1,}}>Description</Box></Typography>
                    </Grid>
                    <Grid item xs={6} sm={6.5} mt={3} mr={2}>
                        <TextField fullWidth className={classes.input} name='description' variant="outlined" value={description} onChange={handlDescriptionChange}></TextField>
                    </Grid>
                    <Grid item mt={3}>
                        <Typography variant='h6'><Box sx={{color: 'text.secondary', m: 1,}}>Comment</Box></Typography>
                    </Grid>
                    <Grid item xs={15} sm={10.5} mt={3} mr={2}>
                        <TextField fullWidth className={classes.input} name='comment' variant="outlined" value={comment} onChange={handldCommentChange}/>
                    </Grid>
                    <Grid item mr={0.2} mb={2}>
                        <Button color="inherit" className={classes.btn} variant="contained" onClick={clearInputs}>Clear</Button>
                    </Grid>
                    <Grid item mr={2} mb={2}>
                        <Button color="inherit" className={classes.btn} variant="contained" onClick={addInputs}>Add</Button>
                    </Grid>
                </Grid>               
            </Box>
        </>
    )
}

const mapStateToProps = (state : ApplicationState) => ({
    name: state.name,
    description: state.description,
    comment: state.comment,
    id: state.id
})
  
export default connect(mapStateToProps)(UserInputForm)
