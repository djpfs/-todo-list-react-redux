const Footer = (props: any) => {
  return (
    <footer className="w-full pb-4 fixed bottom-0 from-white dark:from-gray-800 bg-gradient-to-t to-transparent flex justify-around align-middle">
      <button>
        <img
          alt="bookmark"
          src="https://img.icons8.com/color-glass/35/000000/bookmark.png"
        />
      </button>
      <button
        onClick={() => props.toggleModal()}
        className="bg-blue-400 rounded-full px-4 py-2   text-white font-semibold flex align-middle  hover:bg-blue-500"
      >
        <img
          alt="Add Task button"
          src="https://img.icons8.com/android/20/000000/plus.png"
        />
        <p className="ml-2">Add Task</p>
      </button>
      <button>
        <img
          alt="search"
          src="https://img.icons8.com/color-glass/35/000000/search.png"
        />
      </button>
    </footer>
  )
}

export default Footer
