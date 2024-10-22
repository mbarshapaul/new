import React from 'react'

const Button = ({className,btnName}) => {
  return (
    <button className={`text-['24px] font-pop font-semibold ${className}`}>{btnName}</button>
  )
}

export default Button
