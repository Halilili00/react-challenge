import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button,TableHead,TableBody, TableCell, TableRow, Popover, Table } from '@mui/material'

import { Iinputs } from "../Interface"
import { ApplicationState } from '../reducer'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    btn: {
        background: "#ffffff"
    },
    tableHeader: {
        backgroundColor: '#ECECEC',
    },
    detailTable: {
        width: '350px'
    }
}))

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

    const classes = useStyles();

    return(
        <>
            <TableRow key={input.id} >
                <TableCell width='20%'>{input.name}</TableCell>
                <TableCell width='60%'>{input.description}</TableCell>
                <TableCell align='right'>
                    <Button sx={{marginRight: '15px'}} color="inherit" className={classes.btn} variant='contained' onClick={()=>remove(input.id)}>Delete</Button>
                    <Button color="inherit" className={classes.btn} aria-describedby={id} variant="contained" onClick={handleClick}>Detail</Button>
                </TableCell>
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
                        <Table className={classes.detailTable}>
                            <TableHead className={classes.tableHeader}>
                                <TableRow>
                                <TableCell width='10%'>ID</TableCell>
                                <TableCell width='20%'>Name</TableCell>
                                <TableCell width='35%'>Description</TableCell>
                                <TableCell width='35%'>Comment</TableCell>
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
                        </Table>
                    </Popover>
            </TableRow>
        </>
    )
}

const mapStateToProps = (state : ApplicationState) => ({
    selectedInput: state.inputs
})
  
export default connect(mapStateToProps)(UserInput)