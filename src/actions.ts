import { Iinputs } from "./Interface"

export interface Action {type: string, payload: any}

export const setName = (payload: string) => ({
  type: 'name-set',
  payload
})
export const setDescription = (payload: string) => ({
  type: 'description-set',
  payload
})

export const setComment = (payload: string) => ({
  type: 'comment-set',
  payload
})

export const setClearInputs = () => ({
  type: 'cleareInputs-set'
})

export const addUserInputs = (payload: Iinputs) =>({
  type: 'userInputs-add',
  payload
})

export const addNewId = () => ({
  type: 'newId-add'
})

export const deleteInput = (payload: number) => ({
  type: 'input-delete',
  payload
})

export const setAnchorEl = () => ({
  type: 'AnchorEl-set',
})
