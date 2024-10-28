import styles from './Post.module.css';
import {Link} from "react-router-dom";

export const Post = ({author, body, id}) => {

    return (
        <li className={styles.post}>
          <Link to={id}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
          </Link>
        </li>
    )
}
