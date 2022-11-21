import React, { useEffect, useState } from 'react'
import "./Topic.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faXmarkSquare, faPencil, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { SubTopic } from './SubTopic'


export const Topic = () => {
  const [isEdititem, setIsEdititem] = useState(null)
  const [sbinp, setSbinp] = useState("")
  const [sbinp2, setSbinp2] = useState("")
  const [show, setShow] = useState(false)
  const [inputData, setInputData] = useState("ProjexC")
  const [tpc, setTpc] = useState([
    {
      id: 1,
      text: "New Proje"
    }
  ])
  const onAdd = (e) => {
    e.preventDefault()
    // const allinputData = { id: new Date().getTime().toString(), text: inputData }
    const allinputData = { id: new Date().getTime().toString(), text: "New Proj" }
    // const nnew = { text : "New Task"}
    // setTpc([...tpc,nnew])
    setTpc([...tpc, allinputData])
    // console.log(inputData);

  }
  const editForm = (e) => {
    e.preventDefault()
    // setInputData(fpass)
    setShow(!show)
    // setInputData()
    console.log()
  }
  const onSubEdit = (fpass) => {
    let newEditItem = tpc.find((elm) => {
      return elm.id === fpass
    })
    // console.log(newEditItem)
    setSbinp(newEditItem.text)
    // console.log(sbinp)
    setIsEdititem(fpass)

  }
  const sett = (e,fpass) =>{
    e.preventDefault()
    // useEffect(() => {
    //   setSbinp(fpass)

    // }, [])
    
  //   setTpc(
  //     tpc.map((elm)=>{
  //       if(elm.id === isEdititem){
  //         return { ...elm, text:sbinp}
  //       }
  //       return elm;
  //     })
  //   )
  //  console.log(fpass)
  // setSbinp(fail => ([...fail, ...fpass]))
  setSbinp2(fpass)
   console.log("sbinp2",sbinp2)
   console.log("fpass",fpass)
  

  }
  return (
    <>
      {show === true ? "" : <div className='tHeading'>
        <p className='tProject'>{inputData}</p>
        <FontAwesomeIcon onClick={editForm} className='tPlus' icon={faPencil} size="xs" />
        <FontAwesomeIcon onClick={onAdd} className='tPlus' icon={faPlusSquare} size="xs" />
        <FontAwesomeIcon className='tPlus' icon={faXmarkSquare} size="xs" />
      </div>
      }
      {show &&
        <div className='tdivinput'>



          <input className='tInput' type="text" placeholder='text' value={inputData} onChange={(e) => setInputData(e.target.value)} />

          {/* <button className='tcheckdone' type='submit' >
              </button> */}
          <FontAwesomeIcon onClick={() => setShow(!show)} className='tPlus' icon={faCheckSquare} size="xs" />

        </div>
      }
      {/* {show && 
      <h1>Firstt</h1> : <h1>Second</h1>} */}
      <div className='fle'>
        {tpc.map(t => (

          <SubTopic key={t.id} textt={t.text} id={t.id} onSubEdit={onSubEdit} sbinp={sbinp} sett={sett}/>
        ))}
      </div>
    </>
  )
}
