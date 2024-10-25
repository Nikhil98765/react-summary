import styles from './Post.module.css';


export const Post = ({author, body}) => {

    return (
        <li className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
        </li>
    )
}
