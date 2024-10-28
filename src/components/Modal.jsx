import styles from './Modal.module.css';
import {useNavigate} from "react-router-dom";

export const Modal = ({ children }) => {

  const navigate = useNavigate();

  function onCloseHandler() {
    navigate('..');
  }

  return (
    <>
      <div className={styles.backdrop} onClick={onCloseHandler}></div>
      <dialog open className={styles.modal}>{children}</dialog>
    </>
  )
}
