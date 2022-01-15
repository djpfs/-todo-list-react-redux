import { iCard } from '../interfaces'

function Card(props: iCard) {
  return (
    <div
      className={`rounded-md cursor-pointer ${props.color} hover:bg-opacity-80 p-3  shadow-md flex justify-between flex-col `}
    >
      <p className="break-words  text-left font-semibold text-2xl text-white">
        {props.note.title}
      </p>
      <div className="flex flex-wrap justify-between">
        <p className="text-left align-bottom font-normal text-lg text-white">
          {props.note.date}
        </p>
        <div className="rounded-full w-8 h-8 bg-white grid place-items-center">
          <img
            alt="complete task"
            src="https://img.icons8.com/small/16/000000/checked--v1.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
