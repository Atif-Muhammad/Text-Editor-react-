import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'

export default function Main(props) {
  const [text, newText] = useState("")
  return (
    <div className='container-fluid d-flex mt-5'>
        <Left btnMode = {props.btnMode} text={text} newText = {newText} showAlert={props.showAlert}/>
        <Right text={text} newText = {newText} mode={props.mode} showAlert={props.showAlert}/>
    </div>
  )
}
