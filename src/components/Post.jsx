import styles from './Post.module.css';


export const Post = ({author, title}) => {

    return (
        <li className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{title}</p>
        </li>
    )
}
