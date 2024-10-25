import {Post} from "./Post.jsx";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";

export const PostsList = () => {
    return (
      <>
        <NewPost />
        <ul className={styles.posts}>
          <Post author='Hemanth' title='Hemanth first book'/>
          <Post author='Nikhil' title='Nikhil"s first book'/>
        </ul>
      </>

    )
}
