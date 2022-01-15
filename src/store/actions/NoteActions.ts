import { iNote } from '../../interfaces'
import { todayDate } from '../../libs/date'

export enum noteActionTypes {
  ADD_NOTE = 'ADD_NOTE',
  FETCH_NOTES = 'FETCH_NOTES',
}

export const addNote = (note: iNote) => {
  const notes = (
    localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes')!)
      : []
  ) as iNote[]

  if (notes.length > 0) {
    const lastId = Math.max.apply(
      Math,
      notes.map((o: iNote) => o.id)
    )

    note.id = lastId + 1
  } else {
    note.id = 1
  }
  note.date = todayDate()

  notes.push(note)
  localStorage.setItem('notes', JSON.stringify(notes))
  return { value: notes }
}

export const fetchNotes = () => {
  const notes = (
    localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes')!)
      : []
  ) as iNote[]

  return { value: notes }
}
