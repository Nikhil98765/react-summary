import {Post} from "./Post.jsx";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {useState} from "react";

export const PostsList = () => {

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
        <NewPost onBodyChange={onBodyChangeHandler} onAuthorChange={onAuthorChangeHandler} />
        <ul className={styles.posts}>
          <Post author={enteredAuthor} body={enteredBody}/>
          <Post author='Nikhil' body='Nikhil"s first book'/>
        </ul>
      </>

    )
}
