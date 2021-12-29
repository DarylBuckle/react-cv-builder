import React from 'react'

import { CVPage } from 'react-cv-builder'
import 'react-cv-builder/dist/index.css'
import 'bootstrap/dist/css/bootstrap.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className='my-page'>
      <CVPage page={{
        textColour: '#F44E3B',
        bgColour: '#2c3e50',
        col1Width: 8,
        col2Width: 4,
        sections: [
          {
            identifier: 'Experience',
            title: 'Experience',
            subTitleHTML: '<div style=\'height: 10px\' />',
            systemUse: 'experience',
            col: 1,
          },
          {
            identifier: 'Projects',
            title: 'Projects',
            subTitle: 'These are my own public and private projects.',
            systemUse: 'projects',
            className: 'mx-4',
            col: 1,
          },
          {
            identifier: 'Qualifications',
            title: 'Qualifications',
            subTitleHTML: '<div style=\'height: 10px\' />',
            systemUse: 'qualifications',
            col: 2,
          },
          {
            identifier: 'Skills',
            title: 'Skills',
            subTitleHTML: '<div style=\'height: 10px\' />',
            systemUse: 'skills',
            col: 2,
          },
          {
            identifier: 'About',
            title: 'About',
            subTitleHTML: '<div style=\'height: 10px\' />',
            content: (
              <div className=''>
                <div className='text-center' style={{fontSize: '11px'}}>
                  <p>Hi, I'm Gary. As you might of guessed, I am not real.</p>
                  <p>This page serves as a way of showing an example of what react-dev-portfolio-builder looks like and what it can do. Try printing this page to produce a pdf cv.</p>
                  <p>For more information please visit the Github repository at <a href='https://github.com/DarylBuckle/react-cv-builder'>https://github.com/DarylBuckle/react-cv-builder</a>.</p>
                </div>
              </div>
            ),
            col: 2,
          },
        ],
        externalLinks: [
          {
            title: 'Git',
            url: 'https://github.com/DarylBuckle/react-cv-builder'
          },
        ],
      }} 
      user={{
        id: 1,
        name: 'Gary Smith',
        firstname: 'Gary',
        lastname: 'Smith',
        imageUrl: 'https://darylbuckle.dev/angular-dev-portfolio/assets/images/profile.png',
        headline: 'Web Developer',
        title: 'Web Software Developer at ABC Solutions',
        location: 'Anytown, Your County, United Kingdom',
        email: 'gary.smith@yourdomain.com',
        phonenumber: '(+44)12345678910',
        projects: [
          {
            name: 'My Website',
            owner: 'Gary Smith',
          },
          {
            name: 'angular-tour-of-heroes',
            owner: 'Gary Smith',
          },
        ],
        roles: [
          {
            title: 'Web Software Developer',
            company: 'ABC Solutions',
            location: 'Anytown, Your County, United Kingdom',
            startdate: new Date(2018, 2, 1),
            current: true,
            positions: [
              {
                title: 'Web Software Developer',
                company: 'Halo Service Solutions',
                startdate: new Date(2019, 8, 1),
                current: true
              },
              {
                title: 'Junior Developer',
                company: 'Halo Service Solutions',
                startdate: new Date(2018, 2, 1),
                enddate: new Date(2019, 8, 1),
                current: false
              },
            ],
            info: '<p>I was employed as a Junior Developer and am now a Web Software Developer. I have worked on building several websites for a range of customers throughout my time at ABC.</p>' +
            'Role duties;' +
              '<ul>' +
                '<li>Helping with web design</li>' +
                '<li>Liasing with customers</li>' +
                '<li>Creating websites to customer specification</li>' +
                '<li>Training junior developers</li>' +
              '</ul>',
            projects: [
              {
                name: 'Project 1',
                owner: 'ABC Solutions',
              },
              {
                name: 'Project 2',
                owner: 'ABC Solutions',
              }
            ]
          },
          {
            title: 'Service Desk Engineer',
            company: 'UVW Ltd',
            location: 'Anytown, Your County, United Kingdom',
            startdate: new Date(2017, 2, 1),
            enddate: new Date(2018, 2, 1),
            current: false,
            info: '<p>Continued working as a service desk engineer and spent some time developing software.</p>'
          },
          {
            title: 'Service Desk Engineer',
            company: 'XYZ Ltd',
            location: 'Anytown, Your County, United Kingdom',
            startdate: new Date(2016, 7, 1),
            enddate: new Date(2017, 2, 1),
            current: false,
            info: '<p>My first full time job after graduating from university. This role gave me my first professional experiences working in Software.</p>'
          },
          {
            title: 'Intern Software Developer',
            company: 'CBA Software',
            location: 'Anytown, Your County, United Kingdom',
            startdate: new Date(2015, 5, 1),
            enddate: new Date(2015, 7, 1),
            current: false,
            info: '<p>I interned at CBA Software whilst at University.</p>'
          }
        ],
        qualifications: [
          {
            name: 'BSc in Computer Science',
            location: 'Your University',
            grade: 'First Class Honours',
            startdate: new Date (2013, 8, 1),
            enddate: new Date (2016, 7, 1),
            current: false,
            icon: <FontAwesomeIcon icon={faGraduationCap} size='2x' />,
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
          {
            name: 'Example Qualification',
            location: 'ABC Solutions',
            enddate: new Date (2019, 11, 1),
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
          {
            name: 'A Levels',
            location: 'Anytown High School',
            grade: '4 x A-C grades',
            startdate: new Date (2011, 8, 1),
            enddate: new Date (2013, 7, 1),
            icon: <FontAwesomeIcon icon={faBookOpen} size='2x' />,
            info: '<p>You can enter more information about your qualifcation here.</p>'
          },
          {
            name: 'GCSEs',
            location: 'Anytown High School',
            grade: '10 x A-C grades',
            startdate: new Date (2009, 8, 1),
            enddate: new Date (2011, 7, 1),
            icon: <FontAwesomeIcon icon={faBookOpen} size='2x' />
          },
        ],
        skills: [
          { name: 'Web Design', group: 'Key Skills', level: 90 },
          { name: 'Problem Solving', group: 'Key Skills', level: 90 },
          { name: 'Team Work', group: 'Key Skills', level: 80 },
          { name: 'React', group: 'Technologies', level: 60 },
          { name: 'Angular', group: 'Technologies', level: 60 },
          { name: 'JQuery', group: 'Technologies', level: 80 },
          { name: 'PHP', group: 'Technologies', level: 90 },
          { name: 'HTML', group: 'Technologies', level: 90 },
          { name: 'CSS', group: 'Technologies', level: 90 },
          { name: 'Javascript', group: 'Technologies', level: 90 },
          { name: 'Bootstrap', group: 'Technologies', level: 80 },
          { name: 'Wordpress', group: 'Technologies', level: 80 },
          { name: 'My SQL', group: 'Technologies', level: 70 },
          { name: 'Git', group: 'Technologies', level: 80 },
        ],
        linkedin: 'yourusernamegoeshere',
        facebook: 'yourusernamegoeshere',
        twitter: 'yourusernamegoeshere',
        instagram: 'yourusernamegoeshere',
        github: 'yourusernamegoeshere',
        stackoverflow: 'youruseridgoeshere',
        mailto: 'gary.smith@yourdomain.com',
      }} />
    </div>
  )
}

export default App
