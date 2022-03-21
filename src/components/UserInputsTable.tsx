import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { TableRow,Table,TableHead,TableBody, TableCell} from '@mui/material'

import { Iinputs } from "../Interface"
import { ApplicationState } from '../reducer'
import UserInput from './UserInput'
import { deleteInput } from '../actions'
import  useStyles  from '../styles.css'

interface Props {
  allInputs: Iinputs[]
  dispatch: Dispatch,
}

const UserInputTable = ({allInputs, dispatch}: Props) => {

  const remove = (idTodelete: number) => {
    dispatch(deleteInput(idTodelete));
  }

  const classes = useStyles();

  return(
    <>
      <Table size='medium' className={classes.userInputTable}>
        <TableHead className={classes.tableHeader}>
          <TableRow className={classes.tableHeaderRow}>
            <TableCell variant='head'>Name</TableCell>
            <TableCell variant='head'>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableBody'>
          {allInputs.map((input) => {
            return <UserInput key={input.id} input={input} remove={remove}></UserInput>
          })}
        </TableBody>
      </Table>
    </>
  )
}

const mapStateToProps = (state : ApplicationState) => ({
  allInputs: state.inputs
})
  
export default connect(mapStateToProps)(UserInputTable)