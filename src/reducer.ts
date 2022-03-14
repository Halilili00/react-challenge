import { Action } from './actions'
import { Iinputs } from './Interface'

export interface ApplicationState {
  name: string,
  description: string,
  comment: string,
  inputs: Iinputs[],
  id: number,
}

const getDefaultState = () => ({
  name: '',
  description: '',
  comment: '',
  inputs: [],
  id: 0
})

export default function reducer (
  state: ApplicationState = getDefaultState(),
  action: Action
): ApplicationState {
  switch (action.type) {
    case 'name-set':
      return {...state, name: action.payload}
    case 'description-set':
      return {...state, description: action.payload}
    case 'comment-set':
      return {...state, comment: action.payload}
    case 'newId-add':
      return {...state, id: state.id+1}
    case 'cleareInputs-set':
      return {...state, name:'', description:'', comment:''}
    case 'userInputs-add':
      return {...state, inputs: [...state.inputs, action.payload]}
    case 'input-delete':
      return {...state, inputs: [...state.inputs.filter(input => input.id !== action.payload)]}
    default:
      return state
  }
}
