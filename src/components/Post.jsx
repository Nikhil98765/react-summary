import styles from './Post.module.css';

const names = ['Nikhil', 'Hemanth'];

export const Post = ({author, title}) => {

  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
        <div className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{title}</p>
        </div>
    )
}
