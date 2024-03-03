import React from 'react'
import css from './style.module.scss'

interface IContainer {
  type?: 'container' | 'container_fluid'
  children: React.JSX.Element | React.JSX.Element[] | string
  className?: string
}
function Index({ children, type = 'container', className = '' }: Readonly<IContainer>) {
  return <div className={css[type] + ' ' + className}>{children}</div>
}

export default Index
