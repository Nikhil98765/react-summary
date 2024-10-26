import styles from './Modal.module.css';

export const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <dialog open className={styles.modal}>{children}</dialog>
    </>
  )
}
