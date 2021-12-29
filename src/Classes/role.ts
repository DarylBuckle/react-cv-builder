// eslint-disable-next-line no-unused-vars
import { Project } from './project'

export interface Role {
  id?: number
  title: string // Your job title.
  company: string // The name of the company.
  location?: string // Your place of work.
  startdate: Date // When you started employment. Must have either 'enddate' set or 'current' === true.
  enddate?: Date // When you finished employment.
  current?: boolean // Whether you are still employed.
  positions?: Role[] // A list of positions held at the company included start and end dates.
  projects?: Project[] // A list of projects worked on at the company.
  info?: string // Additional details. Accepts html.
}
