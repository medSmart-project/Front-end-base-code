import React from 'react'

function ButtonSmall(props) {
  return (
    <>
      <button className="text-white bg-sky-700 shadow-xl py-3 px-4 rounded-full  text-lg">
        {props.title}
      </button>
    </>
  );
}

export default ButtonSmall