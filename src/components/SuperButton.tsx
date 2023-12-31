import React from 'react'
import s from './SuperButton.module.css'

type PropsType = {
  name?: string,
  onClick: () => void,
  children?: React.ReactNode,
  color?: string
  disabled?: boolean
}

export const SuperButton: React.FC<PropsType> = (props: PropsType) => {
  const { name, onClick, children, color, disabled, ...restProps } = props

  const onClickHandler = () => {
    onClick()
  }

  // const finalClassName = s.button + " " + s.red

  // const finalClassName = `${s.button} ${s.red}`

  // const finalClassName = `
  // ${s.button} 
  // ${color === 'red' ? s.red : s.default}
  // ${disabled ? s.disabled : ''}`

  // Двойной тернарник  
  // Если цвет красный, то врубай красный, если цвет secondary, то secondary, а если нет, то s.default Q
  const finalClassName = `
      ${s.button} 
      ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
      ${disabled ? s.disabled : ''}
  `


  return (
    <button className={finalClassName} onClick={onClickHandler}>{children}</button>
  )
}


// -------------------------------------
// import React from 'react'

// type PropsType = {
//   name: string,
//   onClick: () => void,
// }

// export const SuperButton: React.FC<PropsType> = ({ name, onClick }) => {

//   const onClickHandler = () => {
//     onClick()
//   }
//   return (
//     <div onClick={onClickHandler}>{name}</div>
//   )
// }
