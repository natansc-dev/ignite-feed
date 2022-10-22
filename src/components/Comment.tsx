import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/natansc-dev.png" alt="Foto Natan" />

      <div className={styles.commmentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Natan Cardoso</strong>
              <time title="11 de Maio às 09:13h" dateTime="2022-05-11 09:01:29">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, Parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
} 