import {ReactNode} from 'react'
import {Link} from '@remix-run/react'
import './button.css'

type ButtonProps = {
  action?: string | (() => void)
  children?: ReactNode
  className?: string
  tooltip?: string
  disabled?: boolean
  props?: {[k: string]: any}
}
const Button = ({children, action, tooltip, className, disabled = false, props}: ButtonProps) => {
  const classes = ['button', className, tooltip && 'tooltip'].filter((i) => i).join(' ')
  if (typeof action === 'string') {
    return (
      <Link
        to={action}
        className={classes}
        data-tooltip={tooltip}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault()
          }
        }}
        {...props}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      className={classes}
      onClick={action}
      data-tooltip={tooltip}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export interface CompositeButtonProps {
  children: ReactNode
  className?: string
}
export const CompositeButton = ({children, className}: CompositeButtonProps) => (
  <div className={`composite-button ${className || ''}`}>{children}</div>
)

export default Button
