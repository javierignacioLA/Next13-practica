import Link from 'next/link'
import styles from './Headers.module.css'
const Headers = () => {
    const Links = [{
        texto: 'Home',
        ruta: '/'
      },
      {
        texto: 'Usuarios',
        ruta: '/users'
      },
      {
        texto: 'Blog',
        ruta: '/blog'
      }
      ]
  return (
    <header className={styles.header}>
          <nav className={styles.nav}>
            <ul>
              {Links.map(({ruta,texto}) => (
                <li key={ruta}>
                  <Link href={ruta}>
                    {texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
  )
}

export default Headers