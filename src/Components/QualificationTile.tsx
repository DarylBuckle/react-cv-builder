import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Qualification } from '../Classes/qualification'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import DateRange from './DateRange'

interface Props {
  qualification: Qualification
}

export const QualificationTileComponent = ({ qualification }: Props) => {
  return (
    <div className='card-box rounded-lg' title={qualification.name}>
      <div>
        {qualification.icon ? (
          qualification.icon
        ) : (
          <FontAwesomeIcon icon={faAward} size='2x' />
        )}
        <h5
          title={qualification.name}
          style={{
            display: 'inline-block',
            marginLeft: '10px',
            verticalAlign: 'top',
            marginBottom: '5px'
          }}
        >
          {qualification.name}
        </h5>
      </div>
      <div className='mb-2'>
        {qualification.location && (
          <span className='mb-2 mr-2'>
            <a
              target='_blank'
              href={`https://www.google.com/maps/place/${qualification.location}`}
              rel='noreferrer'
            >
              <FontAwesomeIcon
                className='mr-2'
                icon={faMapMarkerAlt}
                size='1x'
              />
              {qualification.location}
            </a>
          </span>
        )}
        {(qualification.startdate || qualification.enddate) && (
          <span className='text-colour mb-2 mr-2'>
            <DateRange
              startdate={qualification.startdate}
              enddate={qualification.enddate}
              current={qualification.current}
              yearOnly
            />
          </span>
        )}
      </div>
      {qualification.grade && (
        <div className='mb-2 mr-2' title={qualification.grade}>
          {qualification.grade}
        </div>
      )}
      <div>
        {qualification.info && (
          <div
            className='details'
            dangerouslySetInnerHTML={{ __html: qualification.info }}
          />
        )}
      </div>
    </div>
  )
}
