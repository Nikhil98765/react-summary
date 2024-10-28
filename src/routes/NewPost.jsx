import classes from './NewPost.module.css';
import {useState} from "react";
import {Modal} from "../components/Modal.jsx";
import {Link} from "react-router-dom";

function NewPost(props) {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');


  function onBodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    }
    console.log(postData);
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={onBodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required  onChange={onAuthorChangeHandler} />
        </p>
        <p className={classes.actions}>
          <Link type='button' to="..">Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
