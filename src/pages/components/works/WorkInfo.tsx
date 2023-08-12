import React, { ReactElement } from "react"

interface Props {
  itemName: string
  value: string | ReactElement
}
const WorkInfo: React.FC<Props> = ({ itemName, value }) => {
  return (
    <div className="w-workInfo mx-auto text-white pb-12 text-4.5xl font-serif flex justify-around">
      <p className="w-1/3">{itemName}</p>
      <p className="w-tripleComma">:</p>
      <div className="w-8/12 leading-relaxed break-words font-semibold opacity-70">
        {value}
      </div>
    </div>
  )
}

export default WorkInfo
