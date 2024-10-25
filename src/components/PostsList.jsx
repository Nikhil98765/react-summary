import {Post} from "./Post.jsx";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import {Modal} from "./Modal.jsx";

export const PostsList = ({isPosting, onStopPosting}) => {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
 

  function onBodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }


    return (
      <>
        {isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost
              onBodyChange={onBodyChangeHandler}
              onAuthorChange={onAuthorChangeHandler}
            />
          </Modal>
        )}
        <ul className={styles.posts}>
          <Post author={enteredAuthor} body={enteredBody} />
          <Post author="Nikhil" body='Nikhil"s first book' />
        </ul>
      </>
    );
}
