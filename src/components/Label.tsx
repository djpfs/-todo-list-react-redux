import { iLabel } from '../interfaces'

function Label(props: iLabel) {
  return (
    <>
      <p className="text-gray-500 uppercase text-lg font-light text-left">
        {props.text}
      </p>
    </>
  )
}

export default Label
