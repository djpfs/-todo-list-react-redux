import { useState } from 'react'
import { iColorSelect } from '../interfaces'
import Label from './Label'

function ColorSelect(props: iColorSelect) {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-gray-500',
    'bg-teal-500',
    'bg-cyan-500',
  ]

  const [color, setColor] = useState(props.color ?? colors[0])

  function onColorSelect(color: string) {
    setColor(color)
    props.handle(color)
  }

  return (
    <>
      <Label text="Select color" />
      <div
        className={`w-full  py-2 flex justify-between items-center space-x-2 overflow-x-auto bg-gray-100 dark:text-gray-800 rounded-md p-2`}
      >
        {colors.map((value: string) => (
          <div
            key={value}
            onClick={() => onColorSelect(value)}
            className={`flex-shrink-0 cursor-pointer rounded-full ${
              color === value ? 'border-4 border-black' : ''
            } ${value} w-8 h-8`}
          ></div>
        ))}
      </div>
    </>
  )
}

export default ColorSelect
