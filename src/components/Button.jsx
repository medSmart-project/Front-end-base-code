import React from 'react'

function Button(props) {
  return (
    <button className="text-white bg-sky-700 shadow-xl py-3 px-16 rounded-full  text-lg">
      {props.title}
    </button>
  );
}

export default Button