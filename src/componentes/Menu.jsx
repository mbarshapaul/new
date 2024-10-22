import React from 'react'

const Menu = ({className,menuName}) => {
  return (
   <ul>
    <li className={`text-2xl font-pop font-semibold ${className}`}>{menuName}</li>
   </ul>
  )
}

export default Menu
