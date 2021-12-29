# react-cv-builder

> A cv b webpage, built with React, Bootstrap and Font Awesome.
> Designed for printing to pdf. Remove margins and enable background graphics when printing to get the best result.

[![NPM](https://img.shields.io/npm/v/react-cv-builder.svg)](https://www.npmjs.com/package/react-cv-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[Example: https://darylbuckle.github.io/react-cv-builder](https://darylbuckle.github.io/react-cv-builder)

<img width="300" alt="react-cv-builder-1" src="https://user-images.githubusercontent.com/15156674/147667877-cf241dc8-a2a3-4aba-9415-759362f9e6e1.png">

## Install

```bash
npm install --save react-cv-builder
```

Bootstrap is required as a peer dependency.

```bash
npm install --save bootstrap@4.5.2
npm install --save react-bootstrap@1.6.1
```

## Usage

```tsx
import React, { Component } from 'react'

import { PortfolioPage } from 'react-cv-builder'
import 'react-cv-builder/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

class Example extends Component {
  render() {
    return (
      <CVPage
        user={{
          firstname: 'Brian',
          lastname: 'Smith',
          headline: 'Web Developer',
          projects: [
            {
              name: 'My Website',
              owner: 'Brian Smith',
            },
          ],
          roles: [
            {
              title: 'Web Software Developer',
              company: 'ABC Solutions',
              location: 'Anytown, Your County, United Kingdom',
              startdate: new Date(2018, 2, 1),
              current: true,
            }
          ],
          qualifications: [
            {
              name: 'Bachelor of Science in Computer Science',
              location: 'Your University',
              grade: 'First Class Honours',
              startdate: new Date (2013, 8, 1),
              enddate: new Date (2016, 7, 1),
            },
          ],
          skills: [
            { name: 'React', group: 'Technologies', level: 60 },
            { name: 'Bootstrap', group: 'Technologies', level: 80 },
          ],
        }}
        page={{
          textColour: '#F44E3B',
          bgColour: 'grey',
          sections: [
            {
              identifier: 'Experience',
              title: 'Experience',
              subTitle: 'My professional experience.',
              systemUse: 'experience',
              col: 1
            },
            {
              identifier: 'Projects',
              title: 'Projects',
              subTitle: 'These are my own public and private projects.\r\n\r\nSelect a Project for more information.',
              systemUse: 'projects',
              col: 1
            },
            {
              identifier: 'Qualifications',
              title: 'Qualifications',
              subTitle: 'My academic qualifications.',
              systemUse: 'qualifications',
              col: 2
            },
            {
              identifier: 'Skills',
              title: 'Skills',
              subTitle: 'My key skills and technologies.\r\n\r\nClick on a technology to show projects that use it.',
              systemUse: 'skills',
              col: 2
            },
          ],
        }} 
      />
    )
  }
}
```

It is recommended to also import bootstrap js in your html.

```html
<!-- Bootstrap core JS-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
```


## Props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    page | Page  | true | A Page object. |
|    user | User  | true | A User object. |


#### Page props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    textColour | string  | false | Primary text colour for headings. HTML hex expected.  |
|    bgColour | string  | false | Background colour for the profile and footer sections. HTML hex expected.  |
|    coverUrl | string  | false | Url of an image to as the background for the header. |
|    logoUrl | string  | false | Url of an image to use as the page name. |
|    sections  | Sections[]  | true | An array of the Section object. A section is a part of the page which contains information. |   
| externalLinks | Link[]  | false | Additional links to show in the header which link to external pages. |
|    col1Width | number  | false | Width of the left column (1-12). Default is 8.  |
|    col2Width | number  | false | Width of the right column (1-12). Default is 4.  |


##### Section props

All sections render a link in the nav bar if identifier is set and linkedIdentifier is not set.

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    identifier | string  | true | An unique id for the section. Used in the id of elements.  |
|    linkedIdentifier | string  | false | Set this to an identifier of another element to link to that element. This will not show an additional link in the nav bar and will highlight the linkedIdentifier when in that Section. Use to make a link span multiple sections.  |
|    title | string  | false | The header of the section.  |
|    subTitle | string  | false | The sub-header of the section.  |
|    textColour | string  | false | Text colour. HTML hex expected.  |
|    bgColour | string  | false | Background colour of the section. HTML hex expected.  |
|    systemUse | string  | false | Set to "projects" to render the My Projects tiles (projects in the User Projects list), "experience" to render your role timeline, "qualifications" to render your Qualifications tiles, "skills" to render your skills list. Any other value then the "content" prop will be rendered. |
|    content | JSX  | false | JSX content to render in the section.  |
|    className | string  | false | A css class name for the container of the section.  |
|    tileClassName | string  | false | A css class name for the tiles (projects, experience and qualifications only).  |
|    containerClassName | string  | false | A css class name for the container of the section.  |
|    col | number  | false | 1 or 2 - 1 to render in the left column, 2 for the right column.  |


##### Link props

Additional links to external sites.

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    title | string  | true | A name for the link.  |
|    url | string  | true | The url of the link.  |


#### User props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    firstname | string  | true | Your first name. |
|    lasname | string  | true | Your last name. |
|    headline | string  | false | A headline or your job title. |
|    title | string  | false | Your current job title. |
|    imageUrl | string  | false | Url of an image to use in your avatar. |
|    location  | string  | false | Your current location. |
|    phonenumber  | string  | false | Your contact telephone number. |
|    mailto  | string  |  false | Your Email Address. |
|    projects  | Project[]  | false | A list of your own projects. |
|    roles  | Role[]  | false | A list of companies that you have been employed at. |
|    qualifications | Qualification[]  | false | A list of your qualifications. |
|    skills  | Skill[]  | false | A list of skills and/or technologies that you have worked with. |
|    linkedin  | string  | false | Your LinkedIn user name. If set this will show in the footer. |
|    twitter  | string  | false | Your Twitter user name. If set this will show in the footer. |
|    facebook  | string  | false | Your Facebook user name. If set this will show in the footer. |
|    instagram  | string  | false | Your Instagram user name. If set this will show in the footer. |
|    github  | string  | false | Your GitHub profile user name. If set this will show in the footer. |
|    stackoverflow  | string  | false | Your Stack Overflow profile user id. If set this will show in the footer. |


<br/>

##### Project props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|   name | string | false | The name/title of the project. |
|    owner | string | true | The person or company who owns the project |

<br/>

##### Role props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    title |  string | true | Your job title. |
|    company |  string | true | The name of the company. |
|    location |  string | false | Your place of work. |
|    startdate | Date | false | When you started employment. Must have either 'enddate' set or 'current' === true. |
|    enddate |  Date | false | When you finished employment. |
|    current |  boolean | false | Whether you are still employed. |
|    positions |  Role[] | false | A list of positions held at the company included start and end dates. |
|    projects |  Project[] | false | A list of projects worked on at the company. |
|    info |  string | false | Additional details. Accepts html. |

<br/>

##### Qualification props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name |  string | true | The name/title of the qualification. |
|    location |  string | false | The place of study. |
|    grade |  string | false | Grade obtained. |
|    icon |  object | false | A font awesome icon to show for this qualification. |
|    startdate |  Date | false | When you started studying. Must have either 'enddate' set or 'current' === true. |
|    enddate |  Date | false | When you finished/gained the qualification. If 'startdate' is not set only the enddate will show. |
|    current |  boolean | false | Whether you are still studying for this qualification. |
|    info |  string | false | Additional details. Shows on modal screen only. Accepts html. |


<br/>

##### Skill props

| Property | Type | Mandatory | Description |
| -------- |------| ----------| ------------|
|    name |  string | true | Name of the skill. |
|    group |  string | true | What group to show the skill under. If empty string no group header will be shown. |
|    level |  number | false | A number ranging from 0-100 to determine your skill level. |

<br/>


## License

MIT © [DarylBuckle](https://github.com/DarylBuckle)
