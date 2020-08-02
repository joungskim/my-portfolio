export const resumeData = {
    name: 'JR Kim',
    image: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/40679802_10105199269589031_6255792958100996096_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=dNHmMOXZL0kAX9mwB9k&_nc_ht=scontent-dfw5-2.xx&oh=77b97059efcfd07d862e106262fe7f82&oe=5F4C9492',
    phone: '785-375-3759',
    email: 'jsk.fni@gmail.com',
    objective: 'Seeking a Software Developer position in an upward growing organization to utilize expertise in software development and testing using Agile development methodologies.',
    github: 'https://github.com/joungskim',
    linkedin: 'https://www.linkedin.com/in/jr-kim-235b0496',
    instagram: 'https://www.instagram.com/brokenchopstik/',
    experience: [{
            type: 'Full-Time',
            company: 'Cerner Corporation',
            img: '',
            location: 'Kansas City MO',
            title: 'Software Engineer',
            date: 'May 2017 - July 2019',
            description: 'Design thoroughly tested healthcare software with one hundred percent test coverage.  Delivered continuous development in software for a substantial amount of products maintained by the team.',
            duties: [
                'Technologies/Tools Used: .NET, C#, C++, ReactJS/Redux + Jest, Java, HTML5, CSS, GIT, Subversion, Visual Studio, VSCode, JIRA, Jenkins, Crucible.',
                'Multitasking and managing over twenty different solutions across five different languages at any given time based on client time constraints.',
                'Attended a mandatory AGILE hands on workshop to perform daily task management efficiency and effectively.',
                'Contributed software related development for products to meet requirements through successful deployment.  Worked side by side with the DevOps team to ensure that the Jenkins build performed successfully in order to meet time constraints during our quarterly releases.',
                'Quickly adhered to company and team coding/task management standards by upholding policy and team guidelines.  Achieved by using universal standards such as ESLint.',
                'Introduced methodologies, design, architecture, and best practices by leading new development/scripting in testing environments.  Created modular reusable tests that became team standards for environments such as Eggplant.',
                'Maintained and created new development for C++/C# backend, and HTML, CSS, React, .NET Forms front end.',
                'Provided end to end testing to ensure meaningful tests to prevent breaking code changes.  During quarterly releases, tests would catch errors where, in some cases, requirements were not being met through automated testing.  Specifically, a component overhaul in Patient Signatures where actions dispatched to Redux were not managing the state of a lookup list button properly.  It would instead open the previous modal dialog.  A snapshot of the html code provided insight on the error the overhaul created during workflow functional testing.',
            ]

        },
        {
            type: 'Internship',
            company: 'Cerner Corporation',
            img: '',
            location: 'Kansas City MO',
            title: 'Software Intern',
            date: 'May 2016 - July 2016',
            description: 'Uplifted a Contracts web application from ASP.NET Forms to ASP.NET MVC that displays contracts through browsers for clients to review. ',
            duties: [
                'Wrote code to consume sharepoint databases for contracts.',
                'Attended SCRUM and Learned basic Agile practices.',
                'Major focus on Story break downs using JIRA.'
            ]
        },
        {
            type: 'Internship',
            company: 'Cerner Corporation',
            img: '',
            location: 'Kansas City MO',
            title: 'Software Intern',
            date: 'May 2015 - July 2015',
            description: 'Contributed modular revisions to HCI Indexing in .NET Windows Forms Application.',
            duties: [
                'Wrote modular patterns such as singletons to decouple code.',
                'Wrote a forms application to track hours and notes.'
            ]
        },
        {
            type: 'CO-OP',
            company: 'GE Aviation',
            img: '',
            location: 'Manhattan KS',
            title: 'Software Co-op',
            date: 'MAY 2014 - DECEMBER 2014',
            description: 'Wrote tests in Visual Basic legacy code for aircraft flight software on government planes.',
            duties: [
                'Engineer documentation for kzt-32 documentation of internal software use.',
                'Write end-to-end test coverage for legacy VB code.',
                'Worked with PHP, Laravel, and PostGRES.'
            ]
        }
    ],
    skills: [{
            title: 'Technologies',
            context: [
                'Javascript',
                'Node.JS',
                'ReactJS + Redux + Jest + npm',
                'HTML5 + CSS',
                'Java',
                'C++',
                'GIT + GitHub + Subversion',
                'C# + NUnit Test + Linq',
                'ASP.NET MVC',
                'Microsoft SQL + MySQL + SQL'
            ],
        },
        {
            title: 'Skills',
            context: [
                'JIRA - Story and task management.',
                'AGILE - Scrum, interval sprints, story pointing, continuous integration, design, task breakdown.',
                'JENKINS - Build and test software safely to deploy prod to new or existing software.',
                'RQM/EP - Full functional automated front end image detection testing software.  Eliminates manual testing for test engineers/analysts.',
            ]
        },
        {
            title: 'Education',
            context: [
                'Kansas State University',
                'Bachelors in Computer Science',
                'AUGUST 2012 - DECEMBER 2016'
            ]
        },
        {
            title: 'Other',
            context: [
                'KSU Open House Presenter - Presented a built from scratch game engine built in C++ using DirectX to render a 3D Pest Simulator for American Pest Management company.',
                'Content Creator - Streaming Platforms.',
                'Dance - Dance team during college.',
                'Fitness - Weight lifting for health.'
            ],
        },
        {
            title: 'Citizenship',
            context: [
                'U.S Citizen.',
                'I am eligible to work in the U.S.',
                'I will not be needing any sponsorships now or in the future.'
            ]
        },
    ],
    devNotes: [
        'About this page:',
        'Front-End Tools - Tachyons, Bootstrap.',
        'Technologies - React.js',
        'Dev-Notes - A ResumeData prop from JSON is being passed to Resume.jsx component.  This populates all the data on this web application. Feel Free to take a look in my Github under my-portfolio to see code.  The link can be found in the Links tab below.'
    ]
}

export default resumeData