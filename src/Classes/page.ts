export interface Page {
  id?: number
  coverUrl?: string
  logoUrl?: string
  textColour?: string
  bgColour?: string
  sections: Section[]
  externalLinks?: Link[]
  col1Width?: number
  col2Width?: number
}
export interface Section {
  id?: number
  systemUse?: string
  identifier?: string
  linkedIdentifier?: string
  title?: string
  subTitle?: string
  subTitleHTML?: string
  bgColour?: string
  textColour?: string
  content?: any
  className?: string
  tileClassName?: string
  containerClassName?: string
  col?: number
}
export interface Link {
  id?: number
  title?: string
  url?: string
}
