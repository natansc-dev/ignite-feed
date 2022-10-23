import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'

type PostProps = {
  author: {
    avatar_url: string
    name: string
    role: string
  },
  content: string
  published_at: Date
}

export const Post = ({ author, content, published_at }: PostProps) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar border src={author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Maio às 09:13h" dateTime="2022-05-11 09:01:29">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}