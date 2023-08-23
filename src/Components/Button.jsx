import React from 'react'

export default function Button(props) {
const {color,text}=props
  return (
    <div>
    <button className={`btn btn-${color} mb-5`}>{text}</button>
    
    </div>
  )
}
