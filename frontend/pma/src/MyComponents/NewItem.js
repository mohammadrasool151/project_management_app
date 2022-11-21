import React, { useState } from 'react'
import "./NewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faXmarkSquare, faPencil, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
// import { NewItem } from './NewItem'



export const NewItem = (props) => {

    const [nshow, setNshow] = useState(true)
    const [subtop, setSubtop] = useState([
        {
            id: 1,
            text: "Item Name"
        }
    ])
    const [sid, setSid] = useState("")
    const [sbtext, setSbtext] = useState("")
    const [istEdititem, setIstEdititem] = useState(null)
    const [stbinp, setStbinp] = useState("Task Name")
    // const onAdd = () => {
    //     const nnew = { text: "New Proj" }
    //     setSubtop([...subtop, nnew])
    // }
   
    const onSend = (fpass) => {
      
        props.onStubEdit(fpass);
        setNshow(!nshow)
        console.log(nshow);

    }
    const onSubAdd = () => {
        setNshow(!nshow)


        props.stett()


    }
    // hereeeeee------------  -->  -->  -->  --> --> -->
    // const onStubEdit = (fpass) => {
    //     let newEditItem = tpc.find((elm) => {
    //         return elm.id === fpass
    //     })
    //     // console.log(newEditItem)
    //     setStbinp(newEditItem.text)
    //     console.log("inside sonubedit : ", fpass)
    //     setIstEdititem(fpass)

    // }
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


    return (
        <>

            <div className='fornispacing'>

                {nshow ? <div className='niHeading'>
                    <div className='niHeadingP'>

                        <p className='niProject'>{props.textt}</p>
                    </div>
                    {/* <p className='stProject'>New Task</p> */}
                    <div className='niHeadingI'>

                        {/* <p className='stProject'>{props.id}</p> */}
                        <FontAwesomeIcon onClick={(e) => onSend(props.id)} className='niPlus' icon={faPencil} size="xs" />
                        {/* <FontAwesomeIcon onClick={onAdd} className='stPlus' icon={faPlusSquare} size="xs" /> */}
                        <FontAwesomeIcon onClick={()=>props.onDelete(props.id)} className='niPlus' icon={faXmarkSquare} size="xs" />
                    </div>
                </div>
                    :
                    <div className='niHeading'>
                        <div className='niHeadingP'>

                            <input className='niInput' type="text" defaultValue={props.stbinp} onChange={(e) => props.onChange(e.target.value)} />
                        </div>
                        <div className='niHeadingI'>

                            <FontAwesomeIcon onClick={onSubAdd} className='niPlus' icon={faCheckSquare} size="xs" />
                        </div>

                    </div>
                }
            </div>

            {/* <div>
            {subtop.map(t => (
                <NewItem key={t.id} textt={t.text} id={t.id} onSubEdit={onStubEdit} stbinp={stbinp} stett={stett} onChange={value => setStbinp(value)} />
            ))} */}
            {/* </div> */}

        </>
    )
}
