import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import styles from './Post.module.css'

const comments = [
  1,
  2,
  
]

export default function Post({ author, content, publishedAt}) {
  const publishedDateFormatted = format(
    publishedAt, 
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR
  })

  function handleCreateNewComment() {
    event.preventDefault()
    console.log('oi')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src={author.avatarUrl}
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') 
              return <p>{line.content}</p>
            if (line.type === 'link')
              return <p><a href={line.content}>{line.content}</a></p>
          })
        }

        <p>#novoprojeto #nlw #rocketseat</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button 
            type="submit"
            onClick={() => handleCreateNewComment}
          >
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentSession}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  )
}