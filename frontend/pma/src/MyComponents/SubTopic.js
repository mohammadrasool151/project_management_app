import React, { useState } from 'react'
import "./SubTopic.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faXmarkSquare, faPencil, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { NewItem } from './NewItem'



export const SubTopic = (props) => {
  const [subtop, setSubtop] = useState([
    {
      id: 1,
      text: "New PMM"
    }
  ])
  const [sid, setSid] = useState("")
  const [sbtext, setSbtext] = useState("")
  const onAdd = () => {
    const nnew = { text: "New Proj" }
    setSubtop([...subtop, nnew])
  }
  // const onEdit = (fpass) =>{
  //   let newEditItem = subtop.find((elm)=>{
  //     return elm.id === id
  //   })
  //   console.log(fpass)
  // }
  const onSend = (fpass) => {
    // e.preventDefault()
    // console.log(fpass);
    // setSid(fpass);
    // props.onSubEdit(sid);

  }
  const onSubAdd = () => {
    
props.sett(sbtext)

  }


  return (
    <>
      <div className='stbothupdw'>

        <div className='stHeading'>
          {/* <p className='stProject'>New Task</p> */}
          <p className='stProject'>{props.textt}</p>
          {/* <p className='stProject'>{props.id}</p> */}
          <FontAwesomeIcon onClick={props.onSubEdit(props.id)} className='stPlus' icon={faPencil} size="xs" />
          <FontAwesomeIcon onClick={onAdd} className='stPlus' icon={faPlusSquare} size="xs" />
          <FontAwesomeIcon className='stPlus' icon={faXmarkSquare} size="xs" />

        </div>
        <div>
          <input type="text" defaultValue={props.sbinp} onChange={(e) => setSbtext(e.target.value)} />
          <FontAwesomeIcon onClick={onSubAdd} className='stPlus' icon={faCheckSquare} size="xs" />

        </div>
        <div>
          {/* {subtop.map(sb=>(
            <NewItem textt={sb.text} />
          ))} */}
        </div>
      </div>
    </>
  )
}
