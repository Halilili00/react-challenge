import React, {ChangeEvent} from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Typography,TableHead,TableBody, TableCell, TableRow, Popover } from '@material-ui/core'

import { Iinputs } from "../Interface"
import { ApplicationState } from '../reducer'

interface Props{
    input: Iinputs,
    remove(idTodelete: number):void,
}

const UserInput = ({input, remove }:Props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <>
            <TableRow key={input.id}>
              <TableCell>{input.name}</TableCell>
              <TableCell>{input.description}</TableCell>
             <Button className='btn' variant='contained' onClick={()=>remove(input.id)}>Delete</Button>
              <Button className='btn' aria-describedby={id} variant="contained" onClick={handleClick}>Detail</Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Typography>
                            <TableHead>
                                <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Comment</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                <TableCell>{input.id}</TableCell>
                                <TableCell>{input.name}</TableCell>
                                <TableCell>{input.description}</TableCell>
                                <TableCell>{input.comment}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Typography>
                    </Popover>
            </TableRow>
        </>
    )
}

const mapStateToProps = (state : ApplicationState) => ({
    selectedInput: state.inputs
})
  
export default connect(mapStateToProps)(UserInput)