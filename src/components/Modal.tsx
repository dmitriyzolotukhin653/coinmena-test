import React, {useState} from "react";
import styles from './Modal.module.css'
import Button from './Button'
import Input from './Input'

const EMAIL = 'test@test.test'
const PASSWORD = 'password'

interface Props {
    onAuth: () => void
    onCloseModal: () => void
}

const Modal: React.FC<Props> = ({onAuth, onCloseModal}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (email === EMAIL && password === PASSWORD) {
            setError('')
            onAuth()
            onCloseModal()
        } else {
            setError(`Email or password are not correct. Correct: ${EMAIL} / ${PASSWORD}`)
        }
    }
    return <>
        <div className={styles.darkBG} onClick={onCloseModal}/>
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.form}>
                    <h1>Auth</h1>
                    <form onSubmit={handleSubmitForm}>
                        <Input type="email" placeholder="Email Address" value={email} onChange={setEmail}/>
                        <Input type="password" placeholder="Password" value={password} onChange={setPassword}/>
                        <Button title="Log in"/>
                        {error && <label>{error}</label>}
                    </form>
                </div>
            </div>
        </div>
    </>
};

export default Modal;