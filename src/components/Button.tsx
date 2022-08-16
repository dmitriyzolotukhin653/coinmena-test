import React from 'react'
import styles from './Button.module.css'

interface Props {
    onClick?: () => void
    title: string
}

const Button: React.FC<Props> = ({onClick, title}) => {
    return (
        <input className={styles.button} type="submit" value={title} onClick={onClick && onClick}/>
    )
}

export default Button