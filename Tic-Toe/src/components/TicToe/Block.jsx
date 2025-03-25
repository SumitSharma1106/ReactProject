import React from 'react'

const Block = (props) => {
    
  return (
    <>
     <div className='block' onClick={props.onClicked}>
        <p>{props.value}</p>
    </div> 
    </>
  )
}

export default Block
