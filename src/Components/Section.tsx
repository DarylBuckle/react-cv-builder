import React from 'react'
// eslint-disable-next-line no-unused-vars
import { User } from '../Classes/user'
// eslint-disable-next-line no-unused-vars
import { Page } from '../Classes/page'
interface Props {
  backgroundColor?: string
  textColour?: string
  nextBackgroundColor?: string
  id?: string
  children?: any
  backgroundImageUrl?: string
  user?: User
  page?: Page
  containerClassName?: string
}

export const HeaderSectionComponent = (props: Props) => {
  let headerClasses = 'page-header page-header-dark'
  if (!props.backgroundColor) {
    headerClasses += ' bg-secondary'
  }
  if (!props.textColour) {
    headerClasses += ' text-white'
  }

  return (
    <header
      className={headerClasses}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColour,
        backgroundImage: props.backgroundImageUrl
          ? `url('${props.backgroundImageUrl}')`
          : undefined
      }}
    >
      <div className='page-header-content pt-10 text-secondary-text'>
        <div className=''>{props.children}</div>
      </div>
    </header>
  )
}

export const SectionComponent = (props: Props) => {
  let containerClasses = 'group'
  if (props.containerClassName) {
    containerClasses += ` ${props.containerClassName}`
  }

  return (
    <section
      className={containerClasses}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColour,
        backgroundImage: props.backgroundImageUrl
          ? `url('${props.backgroundImageUrl}')`
          : undefined
      }}
      id={props.id + '-Container'}
    >
      <div>
        <div className=''>{props.children}</div>
      </div>
    </section>
  )
}
