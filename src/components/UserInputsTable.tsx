import React, {ChangeEvent} from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, TableRow,Table,TableHead,TableBody, TableCell} from '@material-ui/core'

import { Iinputs } from "../Interface"
import { ApplicationState } from '../reducer'
import UserInput from './UserInput'
import { deleteInput } from '../actions'

interface Props {
    allInputs: Iinputs[]
    dispatch: Dispatch,
}

const UserInputTable = ({allInputs, dispatch}: Props) => {

  const remove = (idTodelete: number) => {
    dispatch(deleteInput(idTodelete));
  }
    return(
        <>
        <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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