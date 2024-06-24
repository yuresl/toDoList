import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src="/logo10anos.png" alt="logo da aplicação" height={60} />
    </header>
  )
}
