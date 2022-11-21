import React, { useState } from 'react'
import "./SubTopic.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faXmarkSquare, faPencil, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { NewItem } from './NewItem'



export const SubTopic2 = (props) => {

    const [stshow, setStshow] = useState(true)
    const [subtop, setSubtop] = useState([
        {
            id: 1,
            text: "Item Name"
        }
    ])
    const [sid, setSid] = useState("")
    const [sbtext, setSbtext] = useState("")
    const [istEdititem, setIstEdititem] = useState(null)
    const [stbinp, setStbinp] = useState("Item Name")
    const onAdd = (e) => {
        e.preventDefault()
        // const allinputData = { id: new Date().getTime().toString(), text: inputData }
        // const allinputData = { id: new Date().getTime().toString(), text: sbinp }
        const allinputData = { id: subtop.length + 1, text: stbinp }
        // const nnew = { text : "New Task"}
        // setTpc([...tpc,nnew])
        setSubtop([...subtop, allinputData])

        // console.log(allinputData);

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
        props.onSubEdit(fpass);
        setStshow(!stshow)
        console.log(stshow);

    }
    const onSubAdd = () => {
        setStshow(!stshow)


        props.sett()


    }
    // hereeeeee------------  -->  -->  -->  --> --> -->
    const onStubEdit = (fpass) => {
        let newEditItem = subtop.find((elm) => {
            return elm.id === fpass
        })
        // console.log(newEditItem)
        setStbinp(newEditItem.text)
        console.log("inside sonubedit : ", fpass)
        setIstEdititem(fpass)

    }
    const stett = () => {
        setSubtop(
            subtop.map((elm) => {
                if (elm.id === istEdititem) {
                    return { ...elm, text: stbinp }
                }
                return elm;
            })
        )
    }
    const onDelete = (fpass) => {
        setSubtop(subtop.filter(pass =>(
            pass.id !== fpass
        )))
    }


    return (
        <>

            <div className='forstspacing'>

                {stshow ? <div className='sbmapall'>

                    <div className='stHeading'>
                        <div className='stHeadingP'>

                            <p className='stProject'>{props.textt}</p>
                        </div>
                        {/* <p className='stProject'>New Task</p> */}
                        <div className='stHeadingI'>

                            {/* <p className='stProject'>{props.id}</p> */}
                            <FontAwesomeIcon onClick={(e) => onSend(props.id)} className='stPlus' icon={faPencil} size="xs" />
                            <FontAwesomeIcon onClick={onAdd} className='stPlus' icon={faPlusSquare} size="xs" />
                            <FontAwesomeIcon onClick={()=>props.onSDelete(props.id)} className='stPlus' icon={faXmarkSquare} size="xs" />
                        </div>
                    </div>
                    <div className='sbmap'>
                        {subtop.map(t => (
                            <NewItem key={t.id} textt={t.text} id={t.id} onStubEdit={onStubEdit} stbinp={stbinp} stett={stett} onChange={value => setStbinp(value)} onDelete={onDelete}/>
                        ))}

                    </div>
                </div>
                    :
                    <div className='stHeading'>
                        <div className='stHeadingP'>

                            <input className='stInput' type="text" defaultValue={props.sbinp} onChange={(e) => props.onChange(e.target.value)} />
                        </div>
                        <div className='stHeadingI'>

                            <FontAwesomeIcon onClick={onSubAdd}  className='stPlus' icon={faCheckSquare} size="xs" />
                        </div>

                    </div>
                }
            </div>





        </>
    )
}
