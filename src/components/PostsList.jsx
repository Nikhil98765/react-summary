import {useLoaderData} from "react-router-dom";

import { Post } from "./Post.jsx";
import styles from "./PostsList.module.css";


export const PostsList = () => {

  const posts = useLoaderData();

    return (
      <>
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
