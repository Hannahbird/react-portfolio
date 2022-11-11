import React from 'react';
import Project from '../Project';
import Hospitium from '../../assets/images/hospitium.png';
import MovieMate from '../../assets/images/moviemate.png';
import inVent from '../../assets/images/invent.jpeg';

function Portfolio() {
const projects = [{
        name: 'Hospitium',
        stack: 'Sequalize/Handlebars/Javascript',
        image: Hospitium,
        liveUrl: 'https://hospitium.herokuapp.com/ ',
        repoUrl: 'https://github.com/megharpx/hospitium'
    },
    {
        name: 'Movie Mate',
        stack: 'HTML/jQuery/Materialize',
        image: MovieMate,
        liveUrl: 'https://matvaldejao.github.io/movie-mate/',
        repoUrl: 'https://github.com/MatValdejao/movie-mate'
    },
    {
        name: 'inVent',
        stack: 'MONGODB/nodeJS/MERN/JWT/GraphQL/React Bootstrap/Pusher',
        image: inVent,
        liveUrl: 'https://uncbcinvent.herokuapp.com/',
        repoUrl: 'https://github.com/Hannahbird/invent'
    },
    {
        name: 'PlaceHolder1',
        stack: '',
        image: Hospitium,
        liveUrl: '',
        repoUrl: ''
    },
    {
        name: 'PlaceHolder2',
        stack: '',
        image: MovieMate,
        liveUrl: '',
        repoUrl: ''
    },
    {
        name: 'PlaceHolder3',
        stack: '',
        image: inVent,
        liveUrl: '',
        repoUrl: ''
    }];

    return (
        <div className='d-flex flex-wrap justify-content-center mt-3'>
            {projects.map((project, index) => {
                project[index] = index
                return <Project {...project} />
            })}
        </div>
    );
}

export default Portfolio;