import React from 'react'
import { Dispatch } from 'redux'
import { Button,TableHead,TableBody, TableCell, TableRow, Box, Modal } from '@mui/material'

import { Iinputs } from "../Interface"
import  useStyles  from '../styles.css'

interface Props{
    input: Iinputs,
    remove(idTodelete: string):void,
    dispatch: Dispatch,
}

const UserInput = ({input, remove }:Props) => {
    const [inputDetail, setinputDetail] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setinputDetail(event.currentTarget);
    };
  
    const handleClose = () => {
        setinputDetail(null);
    };
  
    const open = Boolean(inputDetail);
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
                <Modal open={open} onClose={handleClose}>
                    <Box className={classes.detailBox}>
                        <TableRow className={classes.detailTable}>
                            <TableHead className={classes.tableHeader}>
                                <TableRow>
                                <TableCell width='10%'>ID</TableCell>
                                <TableCell width='20%'>Name</TableCell>
                                <TableCell width='35%'>Description</TableCell>
                                <TableCell width='35%'>Comment</TableCell>
                                </TableRow>
                            </TableHead >
                            <TableBody>
                            <TableRow>
                                <TableCell>{input.id}</TableCell>
                                <TableCell>{input.name}</TableCell>
                                <TableCell>{input.description}</TableCell>
                                <TableCell>{input.comment}</TableCell>
                                </TableRow>
                            </TableBody>
                        </TableRow>
                    </Box>
                </Modal>
            </TableRow>
        </>
    )
}

export default UserInput