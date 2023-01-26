import React from 'react'
import { Link } from 'react-router-dom';
import Project from './projects.json';

function Card() {
    return Project.map(list => (
        <div className="card mb-5 card_style_v" style={{ width: '18rem', marginLeft:"20px" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">{list.dec}</p>
                <Link to={list.link} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    ))
}

export default Card