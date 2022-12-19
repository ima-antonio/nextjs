import styles from '../styles/Home.module.css'
import Header from './components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <h1>Ola mundo</h1>
    </div>
  )
}
