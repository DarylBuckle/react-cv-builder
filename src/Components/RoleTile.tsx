import React, { Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import { Role } from '../Classes/role'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import DateRange from './DateRange'
// eslint-disable-next-line no-unused-vars
interface Props {
  role: Role
}

export const RoleTileComponent = ({ role }: Props) => {
  return (
    <Fragment>
      <span className='timeline-item-duration text-colour'>
        <strong>
          <DateRange
            startdate={role.startdate}
            enddate={role.enddate}
            current={role.current}
            showTimeSpan
          />
        </strong>
      </span>
      <div className='mb-2'>
        <h5 className='mb-1'>{role.title}</h5>
        <h6>{role.company}</h6>
        {role.location && (
          <a
            target='_blank'
            href={`https://www.google.com/maps/place/${role.location}`}
            rel='noreferrer'
          >
            <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt} size='lg' />
            {role.location}
          </a>
        )}
      </div>
      {role.positions && role.positions.length > 0 && (
        <div className='mb-2'>
          Positions held;
          <ul>
            {role.positions.map((p, i) => (
              <li key={'position-' + i}>
                {p.title}
                <span className='ml-2 text-colour'>
                  <DateRange
                    startdate={p.startdate}
                    enddate={p.enddate}
                    current={p.current}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {role.info && (
        <div
          className='details'
          dangerouslySetInnerHTML={{ __html: role.info }}
        />
      )}

      {role.projects && (
        <div className='role-projects text-center'>
          {role.projects.map((p) => {
            return (
              <span key={p.name} className='badge badge-tertiary m-2'>
                {p.name}
              </span>
            )
          })}
        </div>
      )}
    </Fragment>
  )
}
