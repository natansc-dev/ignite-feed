import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean
}

export const Avatar = ({ border = false, ...props }: AvatarProps) => {
  return (
    <img
      className={border ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}