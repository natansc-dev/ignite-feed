import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite-simbol.svg'

export const Header = () => {
  return (
    <strong className={styles.header}>
      <img src={igniteLogo} alt="logo tipo ignite feed" />
    </strong>
  )
}