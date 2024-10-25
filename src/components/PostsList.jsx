import {Post} from "./Post.jsx";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import {Modal} from "./Modal.jsx";

export const PostsList = () => {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function onBodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

    return (
      <>
      { modalIsVisible &&
        <Modal onClose={hideModalHandler} >
          <NewPost onBodyChange={onBodyChangeHandler} onAuthorChange={onAuthorChangeHandler} />
        </Modal>
      }
        <ul className={styles.posts}>
          <Post author={enteredAuthor} body={enteredBody}/>
          <Post author='Nikhil' body='Nikhil"s first book'/>
        </ul>
      </>

    )
}
