import React from 'react'

const ModalUnits = ({isOpen, setModal }) => {

    if(isOpen==false) { 
        return ( <div className='invisible'></div> )
    } else {
        return (
            <div className='visible w-full h-full absolute bg-slate-950/80 flex items-center justify-center' >
            <div className='w-[500px] h-[350px] rounded-md shadow-md bg-slate-100'>
                <button onClick={setModal}>X</button>
            </div>
            </div>
        )
    }
}

export default ModalUnits