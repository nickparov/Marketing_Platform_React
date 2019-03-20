import React from 'react'

const Btn = (props) => {
  return (
      <button className="btn btn-theme" onClick={props.clicked}>
        {props.children}
      </button>
  )
}

export default Btn;