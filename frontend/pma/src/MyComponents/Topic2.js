import React, { useEffect, useState } from 'react'
import "./Topic.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faXmarkSquare, faPencil, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { SubTopic2 } from './SubTopic2'


export const Topic2 = () => {
    const [isEdititem, setIsEdititem] = useState(null)
    const [sbinp, setSbinp] = useState("Task Name")
    const [sbinp2, setSbinp2] = useState("")
    const [show, setShow] = useState(false)
    const [inputData, setInputData] = useState("Project Name")
    const [tpc, setTpc] = useState([
        {
            id: 1,
            text: "Task Name"
        }
    ])
    const onAdd = (e) => {
        e.preventDefault()
        // const allinputData = { id: new Date().getTime().toString(), text: inputData }
        // const allinputData = { id: new Date().getTime().toString(), text: sbinp }
        const allinputData = { id: tpc.length + 1, text: sbinp }
        // const nnew = { text : "New Task"}
        // setTpc([...tpc,nnew])
        setTpc([...tpc, allinputData])

        // console.log(allinputData);

    }
    const editForm = (e) => {
        e.preventDefault()
        // setInputData(fpass)
        setShow(!show)
        // setInputData()
        // console.log()
    }
    const onSubEdit = (fpass) => {
        let newEditItem = tpc.find((elm) => {
            return elm.id === fpass
        })
        // console.log(newEditItem)
        setSbinp(newEditItem.text)
        // console.log("inside sonubedit : ", fpass)
        setIsEdititem(fpass)

    }
    const sett = () => {
        // e.preventDefault()
        // e.preventDefault()
        // useEffect(() => {
        //   setSbinp(fpass)

        // }, [])

        setTpc(
            tpc.map((elm) => {
                if (elm.id === isEdititem) {
                    return { ...elm, text: sbinp }
                }
                return elm;
            })
        )
        //    console.log("check id : ",isEdititem)
        // setSbinp(fail => ([...fail, ...fpass]))
        //   setSbinp2((e)=>e.fpass)
        //    console.log("sbinp2",sbinp2)
        //    console.log("fpass",fpass)


    }
    // console.log("sbinp : ", sbinp);
    const onSDelete = (fpass) => {
        setTpc(tpc.filter(pass =>(
            pass.id !== fpass
        )))
    }
    return (
        <>
            {show === true ? "" : <div className='tHeading'>
                <div className='tHeadingP'>

                    <p className='tProject'>{inputData}</p>
                </div>
                <div className='tHeadingI'>

                    <FontAwesomeIcon onClick={editForm} className='tPlus' icon={faPencil} size="xs" />
                    <FontAwesomeIcon onClick={onAdd} className='tPlus' icon={faPlusSquare} size="xs" />
                    <FontAwesomeIcon className='tPlus' icon={faXmarkSquare} size="xs" />
                </div>
            </div>
            }
            {show &&
                <div className='tdivinput'>

                    <div className='tHeadingP'>


                        <input className='tInput' type="text" placeholder='text' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    </div>
                    <div className='tHeadingI'>


                        {/* <button className='tcheckdone' type='submit' >
              </button> */}
                        <FontAwesomeIcon onClick={() => setShow(!show)} className='tPlus' icon={faCheckSquare} size="xs" />
                    </div>

                </div>
            }
            {/* {show && 
      <h1>Firstt</h1> : <h1>Second</h1>} */}
            <div className='fle'>
                {tpc.map(t => (

                    <SubTopic2 key={t.id} textt={t.text} id={t.id} onSubEdit={onSubEdit} sbinp={sbinp} sett={sett} onChange={value => setSbinp(value)} onSDelete={onSDelete} />
                ))}
            </div>
        </>
    )
}
