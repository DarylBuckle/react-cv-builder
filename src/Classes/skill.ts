export interface Skill {
  id?: number
  name: string // Name of the skill.
  group: string // What group to show the skill under. If empty string no group header will be shown.
  level?: number // A number ranging from 0-100 to determine your skill level.
}
