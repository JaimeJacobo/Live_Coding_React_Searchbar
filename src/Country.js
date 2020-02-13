import React from 'react'

const Country = (props)=>{

  return(
    <div>
      <p id={props.pais}>{props.pais}</p>
    </div>
  )
}

export default Country