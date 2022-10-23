import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/natansc-dev.png",
      name: "Natan Cardoso",
      role: "Web Developer"
    },
    content: "<p>Fala galeraa 👋</p> <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>",
    published_at: new Date('2022-09-21 15:00:00')
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/GabrielPiccoli.png",
      name: "Gabriel Piccoli",
      role: "Web Developer"
    },
    content: "<p>Fala galeraa 👋</p> <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>",
    published_at: new Date('2022-09-21 15:00:00')
  }
]

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) =>
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              published_at={post.published_at}
            />
          )}
        </main>
      </div>
    </>
  )
}
