import PropTypes from 'prop-types'
import btnStyle from './Review.module.css'

export default function Button({btnName, clickHandler}){

  return(
    <button className={btnStyle.click} onClick={clickHandler}> {btnName} </button>
  )
}

Button.propTypes = {
  btnName : PropTypes.string.isRequired
}