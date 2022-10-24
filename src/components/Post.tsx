import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './Post.module.css'
import { useState } from 'react'

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
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(published_at, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativaToNow = formatDistanceToNow(published_at, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event?.preventDefault()


    setComments(
      [
        ...comments,
        newComment
      ]
    )

    setNewComment('')
  }

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('')
    setNewComment(e.target.value)
  }

  function handleNewCommentInvalid(e: React.InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete)

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newComment.length === 0

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

        <time title={publishedDateFormatted} dateTime={published_at.toISOString()}>
          {publishedDateRelativaToNow}
        </time>
      </header>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newComment}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
      </div>
    </article>
  )
}