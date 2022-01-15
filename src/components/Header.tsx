import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <header className="p-4 top-0 fixed z-50  w-full from-white dark:from-black dark:via-black via-white to-transparent bg-gradient-to-b">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-left">Todo List</h1>
        <div className="flex justify-between">
          <ToggleTheme />
          <button className="ml-4">
            <img
              alt="filter"
              src="https://img.icons8.com/ios/24/000000/menu--v1.png"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
