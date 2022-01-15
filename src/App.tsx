import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalStoreNote from './components/ModalStoreNote'
import { store } from './store'
import { noteActionTypes } from './store/actions/NoteActions'

function App() {
  const [modalState, setModalState] = useState(false)

  const dispatch = store.dispatch
  dispatch({ type: noteActionTypes.FETCH_NOTES })
  const notes = store.getState().notes.value

  function toggleModal() {
    setModalState(!modalState)
  }

  return (
    <Provider store={store}>
      <div className="App bg-white dark:bg-gray-800 min-h-screen dark:text-white">
        <div className="select-none scroll-smooth">
          <Header />
          <div
            id="backdrop"
            onClick={toggleModal}
            className={` ${
              modalState ? '' : 'hidden'
            } w-full h-full no-scrollbar z-10 fixed  bg-white dark:bg-gray-800 opacity-90`}
          ></div>
          <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 p-4 no-scrollbar overflow-y-auto py-20">
            {notes &&
              notes.map((note) => (
                <Card note={note} key={note.id} color={note.color} />
              ))}
          </main>
          <ModalStoreNote toggleModal={toggleModal} modalState={modalState} />
          <Footer toggleModal={toggleModal} />
        </div>
      </div>
    </Provider>
  )
}

export default App
