import React, { Fragment } from 'react'

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

interface Props {
  startdate?: Date
  enddate?: Date
  current?: boolean
  showTimeSpan?: boolean
  yearOnly?: boolean
}

export default ({
  startdate,
  enddate,
  current,
  showTimeSpan,
  yearOnly
}: Props) => {
  function formatDate(date: Date | undefined) {
    if (!date) {
      return ''
    }
    if (yearOnly) {
      return date.getFullYear().toString()
    }
    return months[date.getMonth()] + ' ' + date.getFullYear()
  }

  let dateStr: string = ''
  let extra: any
  let duration = ''

  if (startdate) {
    const start = startdate
    let end = enddate
    if (current || !end) {
      end = new Date()
    }
    const totalmonths =
      end.getMonth() -
      start.getMonth() +
      12 * (end.getFullYear() - start.getFullYear())

    let years = Math.floor(totalmonths / 12)
    let months = totalmonths - years * 12 + 1
    if (months === 12) {
      months = 0
      years = years + 1
    }

    if (years > 0) {
      if (years === 1) {
        duration += years + ' year'
      } else {
        duration += years + ' years'
      }
    }
    if (months > 0) {
      if (duration) {
        duration += ', '
      }
      if (months === 1) {
        duration += months + ' month'
      } else {
        duration += months + ' months'
      }
    }
  }

  if (enddate && !startdate) {
    dateStr = formatDate(enddate)
  } else if (enddate || startdate) {
    if (current) {
      dateStr = formatDate(startdate) + ' - Present'
    } else {
      dateStr = formatDate(startdate) + ' - ' + formatDate(enddate)
    }

    if (showTimeSpan) {
      extra = <div style={{ fontWeight: 'normal' }}>{duration}</div>
    }
  }

  return (
    <Fragment>
      {dateStr}
      {extra}
    </Fragment>
  )
}
