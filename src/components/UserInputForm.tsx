import React, {ChangeEvent} from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Typography, Grid, TextField} from '@material-ui/core'

import { setName, setDescription, setComment ,setClearInputs, addUserInputs, addNewId} from '../actions'
import { ApplicationState } from '../reducer'
import { Iinputs } from '../Interface'

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

    return (
        <>
            <div>
                <Typography variant='h5' className='inputFormHeader'>Name</Typography>
                <TextField className='input' name='name' variant="outlined" value={name} onChange={handlNameChange}></TextField>
                <Typography variant='h5' className='inputFormHeader'>Description</Typography>
                <TextField className='input' name='description' variant="outlined" value={description} onChange={handlDescriptionChange}></TextField>
                <Typography variant='h5' className='inputFormHeader'>Comment</Typography>
                <TextField className='input' name='comment' variant="outlined" value={comment} onChange={handldCommentChange}/>
                <Button className='btn' variant="contained" onClick={clearInputs}>Clear</Button>
                <Button className='btn' variant="contained" onClick={addInputs}>Add</Button>
            </div>
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
