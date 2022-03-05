import preLoader from '../../../assets/images/Spinner-1s-200px.svg'


import React from 'react'

let Preloader = (props) => {
  return (
    <div  style={{backgroundColor:'white'}}>
        <img  src={preLoader}/>
    </div>
  )
}

export default Preloader