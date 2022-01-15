import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../store/actions/ThemeActions.'
import { ThemeState } from '../store/reducers/ThemeReducer'

const ToggleTheme = () => {
  const theme = useSelector<ThemeState>((state) => state.value)
  const dispatch = useDispatch()

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme}
      {theme === 'dark' ? (
        <img
          onClick={() => dispatch(changeTheme())}
          className="cursor-pointer"
          alt="dark mode"
          src="https://img.icons8.com/ios/30/000000/do-not-disturb-2.png"
        />
      ) : (
        <img
          onClick={() => dispatch(changeTheme())}
          className="cursor-pointer"
          alt="light mode"
          src="https://img.icons8.com/ios-glyphs/30/000000/do-not-disturb-2.png"
        />
      )}
    </div>
  )
}

export default ToggleTheme
