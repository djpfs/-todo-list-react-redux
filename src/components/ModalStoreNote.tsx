import React from 'react'
import { iNote } from '../interfaces'
import { store } from '../store'
import { noteActionTypes } from '../store/actions/NoteActions'
import ColorSelect from './ColorSelect'
import Label from './Label'

function ModalStoreNote(props: any) {
  let color: string = 'bg-blue-500'
  let titleInput = React.createRef<HTMLInputElement>()
  let commentsInput = React.createRef<HTMLTextAreaElement>()

  const dispatch = store.dispatch

  function saveNote() {
    const note: iNote = {
      color,
      title: titleInput.current?.value ?? '',
      comment: commentsInput.current?.value ?? '',
      id: 0,
      date: null,
    }
    dispatch({ type: noteActionTypes.ADD_NOTE, payload: note })
    props.toggleModal()
    titleInput.current!.value = ''
    commentsInput.current!.value = ''
  }

  return (
    <div
      className={`${
        props.modalState ? '' : 'hidden'
      } w-full md:w-[600px] h-auto bg-white dark:bg-gray-800 fixed bottom-0 md:bottom-px shadow-2xl rounded-t-xl md:rounded-xl z-50 p-4`}
    >
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold text-left text-gray-800 dark:text-white">
          New task
        </h1>
        <button
          onClick={props.toggleModal}
          className="bg-white rounded-full p-2 float-right  text-white font-semibold flex align-middle"
        >
          <img
            alt="close"
            src="https://img.icons8.com/material-outlined/20/000000/delete-sign.png"
          />
        </button>
      </div>
      <Label text="Title" />
      <input
        ref={titleInput}
        className="w-full p-2 mb-4 text-lg outline-none bg-gray-100 dark:text-gray-800 rounded-md"
        placeholder="Task title"
      />
      <Label text="Comments" />
      <textarea
        ref={commentsInput}
        maxLength={480}
        className="w-full p-2 text-lg max-h-56  outline-none dark:text-gray-800 bg-gray-100 rounded-md"
        placeholder="Comments and notes"
      />
      <ColorSelect color={color} handle={(value: string) => (color = value)} />
      <button
        onClick={saveNote}
        className="bg-green-500 rounded-md w-full p-4 mt-5  text-white font-semibold"
      >
        <p className="text-center inline-bloc text-lg">Salvar</p>
      </button>
    </div>
  )
}

export default ModalStoreNote
