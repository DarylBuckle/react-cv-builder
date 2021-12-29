import React from 'react'
import { Avatar } from 'react-profile-avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faEnvelope,
  faLink,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { idealTextColor, displayMemo } from './Functions/CommonFunctions'
import { HeaderSectionComponent, SectionComponent } from './Components/Section'

// eslint-disable-next-line no-unused-vars
import { Page } from './Classes/page'
// eslint-disable-next-line no-unused-vars
import { User } from './Classes/user'

import 'react-profile-avatar/dist/index.css'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { RoleTileComponent } from './Components/RoleTile'
import { QualificationTileComponent } from './Components/QualificationTile'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface Props {
  page: Page
  user: User
}

export default ({ page, user }: Props) => {
  const sectionContent1 = []
  const sectionContent2 = []
  const navLinks = []

  if (page.sections) {
    for (let i1 = 0; i1 < page.sections.length; i1++) {
      const s = page.sections[i1]

      let content
      switch (s.systemUse) {
        case 'projects': // My projects grid
          content = (
            <div className='card-box rounded-lg text-center mb-3'>
              {user.projects &&
                user.projects.map((p) => {
                  return (
                    <span key={p.name} className='badge badge-tertiary m-2'>
                      {p.name}
                    </span>
                  )
                })}
            </div>
          )
          break
        case 'experience': // Experience
          content = (
            <VerticalTimeline layout='1-column' animate={false}>
              {user.roles &&
                user.roles.map((r, i) => {
                  return (
                    <VerticalTimelineElement
                      key={'timelineElement-' + i}
                      className={
                        s.tileClassName
                          ? s.tileClassName
                          : 'role-tile vertical-timeline-element--work text-left'
                      }
                      iconStyle={
                        r.current
                          ? {
                              background: page.textColour,
                              color: 'white'
                            }
                          : {
                              background: '#aaa',
                              color: 'white'
                            }
                      }
                      icon={
                        <FontAwesomeIcon
                          style={{ marginLeft: '-11px' }}
                          icon={faBriefcase}
                          size='lg'
                        />
                      }
                    >
                      <RoleTileComponent role={r} />
                    </VerticalTimelineElement>
                  )
                })}
            </VerticalTimeline>
          )
          break
        case 'qualifications': // Qualifications
          content = (
            <div className='row'>
              {user.qualifications &&
                user.qualifications.map((q) => {
                  return (
                    <div
                      key={'qualification-tile-' + q.name}
                      className={
                        s.tileClassName ? s.tileClassName : 'col-md-12 mb-3'
                      }
                    >
                      <QualificationTileComponent qualification={q} />
                    </div>
                  )
                })}
            </div>
          )
          break
        case 'skills': // Skills
          content = (
            <div className='card-box rounded-lg text-center mb-3'>
              {user.skills &&
                user.skills.map((s) => {
                  return (
                    <span key={s.name} className='badge badge-tertiary m-2'>
                      {s.name}
                    </span>
                  )
                })}
            </div>
          )
          break
        default:
          content = s.content
          break
      }

      const backgroundDark = idealTextColor(s.bgColour) === '#fff'
      const sectionContent = (
        <SectionComponent
          key={'section-' + i1}
          backgroundColor={s.bgColour}
          textColour={s.textColour}
          id={s.identifier}
          containerClassName={s.containerClassName}
        >
          <div className={s.className}>
            <div>
              {(s.title || s.subTitle || s.subTitleHTML) && (
                <div className='row'>
                  <div className='section-header'>
                    {s.title && <h5>{s.title}</h5>}
                    {s.subTitle && (
                      <p
                        className='section-header-desc'
                        style={{ color: backgroundDark ? '#ddd' : undefined }}
                      >
                        {displayMemo(s.subTitle)}
                      </p>
                    )}
                    {s.subTitleHTML && (
                      <div
                        dangerouslySetInnerHTML={{ __html: s.subTitleHTML }}
                      />
                    )}
                  </div>
                </div>
              )}
              {content}
            </div>
          </div>
        </SectionComponent>
      )

      if (s.col === 2) {
        sectionContent2.push(sectionContent)
      } else {
        sectionContent1.push(sectionContent)
      }

      if (s.identifier) {
        navLinks.push(s)
      }
    }
  }

  const col1Width = page.col1Width ? page.col1Width : 8
  const col2Width = page.col2Width ? page.col2Width : 4

  return (
    <div className='react-cv-builder main'>
      <style>
        {`.react-cv-builder .project-tile h5:hover,
          .react-cv-builder .role-tile span.text-colour,
          .react-cv-builder .text-colour {
            color: ${page.textColour};
        }
        .react-cv-builder a {
          color: ${page.textColour};
          text-decoration: none;
          background-color: rgba(0,0,0,0);
        }
        .react-cv-builder a:hover, .react-cv-builder a:visited, .react-cv-builder a:focus {
          color: ${page.textColour};
        }
        `}
      </style>
      <HeaderSectionComponent
        backgroundColor={page.bgColour}
        textColour={page.textColour}
        backgroundImageUrl={page.coverUrl}
      >
        <div style={{ padding: '30px 30px 30px' }}>
          <Avatar
            name={user.firstname + ' ' + user.lastname}
            imageSrc={user.imageUrl}
            size={150}
            borderSize={3}
            borderColour={page.textColour}
            colour={page.textColour}
          />
          <div className='profile-intro'>
            <div className='headline'>
              <div className='name'>
                <h1 className='display-4 name-1'>
                  {`${user.firstname} ${user.lastname}`}
                </h1>
              </div>
              <div
                className='profile-detail'
                style={{ color: idealTextColor(page.bgColour) }}
              >
                {user.headline}
              </div>
              <div className='profile-detail small'>{user.title}</div>
            </div>
            <div
              className='links'
              style={{ color: idealTextColor(page.bgColour) }}
            >
              {user.location && (
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {user.location}
                </span>
              )}
              {user.mailto && (
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {user.mailto}
                </span>
              )}
              {user.phonenumber && (
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                  {user.phonenumber}
                </span>
              )}
            </div>
            <div
              className='links'
              style={{ color: idealTextColor(page.bgColour) }}
            >
              {page.externalLinks &&
                page.externalLinks.map((l) => (
                  <span key={l.id}>
                    <FontAwesomeIcon icon={faLink} />
                    <a
                      title='LinkedIn'
                      target='_blank'
                      href={l.url}
                      rel='noreferrer'
                      style={{ color: idealTextColor(page.bgColour) }}
                    >
                      {l.url?.replace('https://', '')}
                    </a>
                  </span>
                ))}
              {user.linkedin && (
                <span>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <a
                    title='LinkedIn'
                    target='_blank'
                    href={`https://www.linkedin.com/in/${user.linkedin}`}
                    rel='noreferrer'
                    style={{ color: idealTextColor(page.bgColour) }}
                  >{`linkedin.com/in/${user.linkedin}`}</a>
                </span>
              )}
              {user.github && (
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  <a
                    title='GitHub'
                    target='_blank'
                    href={`https://www.github.com/${user.github}`}
                    rel='noreferrer'
                    style={{ color: idealTextColor(page.bgColour) }}
                  >{`github.com/${user.github}`}</a>
                </span>
              )}
            </div>
          </div>
        </div>
      </HeaderSectionComponent>
      <div className='row mx-0' style={{ overflow: 'hidden' }}>
        <div className={`col-sm-${col1Width} pr-2 pl-2 col-print-${col1Width}`}>
          {sectionContent1}
        </div>
        <div className={`col-sm-${col2Width} pr-4 pl-2 col-print-${col2Width}`}>
          {sectionContent2}
        </div>
      </div>
    </div>
  )
}
