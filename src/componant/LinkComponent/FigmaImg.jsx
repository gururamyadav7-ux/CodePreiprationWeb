import React from 'react'

const FigmaImg = (props) => {
  return (
    <div className="bg-gray-100 p-4 hover:scale-[1.05] cursor-pointer rounded-lg shadow-md">
        <figure>
          <img
            src={props.imgSrc}
            alt={props.alt}
            className="w-full h-auto"
          />
        </figure>
    </div>
  )
}

export default FigmaImg
