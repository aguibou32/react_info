import { useState } from "react"

export default function Box(props) {

  const[on, setOn] = useState(props.on)

  const style = {
    backgroundColor: props.on ? '#222222' : 'transparent'
  }

  return (
    <div className="box" style={style} onClick={()=>props.handleClick(props.id)}>

    </div>
  )
}