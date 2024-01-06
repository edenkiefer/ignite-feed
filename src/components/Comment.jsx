import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({ comment, onDeleteComment }) {
  const [ likeCount, setLikeCount ] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <img src="https://github.com/edenkiefer.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eden Kiefer</strong>
              <time title="11 de Maio às 09:48h" dateTime="2024-04-01 9:48:00">Cerca de 1h atrás</time>
            </div>
            <button 
              onClick={handleDeleteComment}
              title='Deletar comentário'
            >
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}