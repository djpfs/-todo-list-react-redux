import { iNote } from '../../interfaces'
import { addNote, fetchNotes } from '../actions/NoteActions'

export interface NoteState {
  value: iNote[]
}

const initialState: NoteState = {
  value: [],
}

export type NoteAction = {
  type: string
  payload: any
}

const noteReducer = (state = initialState, action: NoteAction) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return addNote(action.payload)
    case 'FETCH_NOTES':
      return fetchNotes()
    default:
      return state
  }
}

export default noteReducer
