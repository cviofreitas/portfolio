import PromaDesktop from './thumbnails/PromaDesktop.png'
import PromaMobile from './thumbnails/PromaMobile.png'
import ShoppingCartDesktop from './thumbnails/ShoppingCartDesktop.png'
import ShoppingCartMobile from './thumbnails/ShoppingCartMobile.png'
import Connect4Desktop from './thumbnails/Connect4Desktop.png'
import Connect4Mobile from './thumbnails/Connect4Mobile.png'
import ToDoAppDesktop from './thumbnails/ToDoAppDesktop.png'
import ToDoAppMobile from './thumbnails/ToDoAppMobile.png'
import JeopardyDesktop from './thumbnails/JeopardyDesktop.png'
import JeopardyMobile from './thumbnails/JeopardyMobile.png'
import MemeGeneratorDesktop from './thumbnails/MemeGeneratorDesktop.png'
import TravelDesktop from './thumbnails/TravelDesktop.png'


import jQuery from '../HomePage/logos/jQuery.png'
import MaterialUi from '../HomePage/logos/MaterialUi.png'
import css from '../HomePage/logos/css.png'
import html from '../HomePage/logos/html.png'
import js from '../HomePage/logos/js.png'
import Nodejs from '../HomePage/logos/Nodejs.png'
import Python from '../HomePage/logos/Python.png'
import Reactlogo from '../HomePage/logos/Reactlogo.png'
import Redux from '../HomePage/logos/Redux.png'
import typescript from '../HomePage/logos/typescript.png'

const projectsArray = [
    {
        deskTopThumbnail: [PromaDesktop],
        mobileThumbnail: [PromaMobile],
        link: 'https://proma-project-manager.vercel.app/',
        githubLink: 'https://github.com/cviofreitas/proma_project_manager',
        languages: [Reactlogo, Redux, MaterialUi, css, html, js, Nodejs],
        title: 'Proma',
        subTitle: 'Project Management App (React App)',
        description: 'A fully responsive mobile and desktop app featuring an easy to use invocing system. Create and edit invoices with only a few clicks.'

    },
    {
        deskTopThumbnail: [ShoppingCartDesktop],
        mobileThumbnail: [ShoppingCartMobile],
        link: 'https://shopping-cart-react-redux-cf.vercel.app',
        githubLink: 'https://github.com/cviofreitas/ShoppingCart_React_Redux',
        languages: [MaterialUi, css, html, js, Reactlogo, Redux, Nodejs],
        title: 'Shopping Cart',
        subTitle: '(React App)',
        description: 'A simple to use shopping experience. The goal of this project was to better understand state management, props, reusable components, and responsive design.'

    },

    {
        deskTopThumbnail: [ToDoAppDesktop],
        mobileThumbnail: [ToDoAppMobile],
        link: 'https://to-do-app-six-neon.vercel.app/',
        githubLink: 'https://github.com/cviofreitas/to_do_app',
        languages: [css, html, js, Reactlogo, Nodejs],
        title: 'REMINDERS',
        subTitle: 'To do app (React App)',
        description: 'Created with React, this was my first project learning simple React Hooks and forms.'

    },
    {
        deskTopThumbnail: [Connect4Desktop],
        mobileThumbnail: [Connect4Mobile],
        link: 'https://connect-four-fun.vercel.app/',
        githubLink: 'https://github.com/cviofreitas/connect_four',
        languages: [html, css, js, jQuery],
        title: 'Connect4',
        subTitle: '',
        description: 'Created with the idea that it could actually be seen on the app store. This was a fun project to try out a few CSS animations as well.'

    },
    {
        deskTopThumbnail: [JeopardyDesktop],
        mobileThumbnail: [JeopardyMobile],
        link: 'https://jeopardy-mu.vercel.app/',
        githubLink: 'https://github.com/cviofreitas/jeopardy',
        languages: [css, html, js, jQuery],
        title: 'Jeopardy',
        subTitle: '',
        description: 'Created with a Jeopardy API and largely a jQuery project for DOM manipulation.'

    },
    {
        deskTopThumbnail: [MemeGeneratorDesktop],
        link: 'https://cviofreitas.github.io/meme-generator/',
        githubLink: 'https://github.com/cviofreitas/meme-generator',
        languages: [css, html, js],
        title: 'Meme Generator',
        subTitle: '',
        description: "My first attempt at coding anything. I've come a long way since then, but it's cool to see that even then I was thinking about UI/UX"

    },
    {
        deskTopThumbnail: [TravelDesktop],
        link: 'https://codepen.io/cviofreitas/full/eYrGxqd',
        githubLink: 'https://codepen.io/cviofreitas/pen/eYrGxqd',
        languages: [css, html],
        title: 'Travel Website',
        subTitle: 'Flexbox excercise',
        description: "This was a quick exercise for the purpose of understanding CSS flex box and cohesive UI design."
    },


]

export default projectsArray