import {useState} from "react";

import { Post } from "./Post.jsx";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import {Modal} from "./Modal.jsx";

export const PostsList = ({isPosting, onStopPosting}) => {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setPosts(prevPosts => [postData,...prevPosts]);
  }

    return (
      <>
        {isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost
              onCancel={onStopPosting}
              onAddPost={addPostHandler}
            />
          </Modal>
        )}
        {
          posts.length > 0 ?
            <ul className={styles.posts}>
              {posts.map((post, index) => (
                <Post key={index} author={post.author} body={post.body} />
              ))}
            </ul>
            :
            <div style={{textAlign: 'center', color: 'white'}}>
              <h2>There are no posts yet.</h2>
              <p>Start adding some!</p>
            </div>
        }
      </>
    );
}
