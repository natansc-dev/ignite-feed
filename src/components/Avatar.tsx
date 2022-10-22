import styles from './Avatar.module.css'

type AvatarProps = {
  src: string
  border?: boolean
}

export const Avatar = ({ src, border = false }: AvatarProps) => {
  return (
    <img className={border ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
  )
}