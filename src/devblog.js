export const devblog = [{
        date: '7/28/2020',
        id: '1',
        project: 'My Portfolio Web Application',
        notes: [
            'Created intial website, background image, navbar, created json file data for temporary use until backend node.js/postgres backend functionality is implemented. Implemented the intial design of how the page will look.  Will not implement Redux for this page as I believe lifecycle hooks will be more than fitting for what this web app will offer.  App.js will handle state. Implemented Routes callback to change state managed in App.js. Added initial Home Page bootstrap (Landing Page) carousel and cards.'
        ]
    },
    {
        date: '7/31/2020',
        id: '2',
        project: 'My Portfolio Web Application',
        notes: [
            'Made JSON changes to resumeData.js to modularize the way data is being presented in the Resume.jsx route. All data is being passed into the Resume component so that when backend database is implemented, it will be able to handle rendering the page in the same fashion.',
            'Used React-Bootstrap and Tachyons for the front-end components.  Need to rearrange the grid so that the containers do not resize strangely.  Created experience component to render in bootstrap collapsable work history dynamically based on experience prop that contains an array of all data being passed.  Animations are not rendering smoothly when collapsing or changing tabs. Particles are not rendering correctly on the left and right portions of the body context.',
            'Implemented DevBlog: No functionality other than providing information on the progress of the web application.  DevBlogData is being passed into DevBlog component from JSON.',
            'Implemented Projects: Page that displays my projects with github links.  Link bound to github logo, may need to be more specific on the link.  It may be hard for users to notice the link.'
        ]
    },
    {
        date: '8/1/2020',
        id: '3',
        project: 'My Portfolio Web Application',
        notes: [
            'Created a landing page that describes the page being under construction.  OOF!  Added React-Bootstrap version of Carousel, replaced the old one.',
            'Added context to the Contact Me page, simple image with some contact information.  Will replace this with form and email transaction API as described in Contact Me',
            'Will likely be switching gears to .Net to prepare for interviews, and will return to finish up the front end and begin working on the Node.js service',
            'Deployed Web App as is for now.'
        ]
    },
]

export default devblog;