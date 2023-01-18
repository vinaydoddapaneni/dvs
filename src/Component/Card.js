import React from 'react'
import Project from './projects.json';

function Card() {
    return Project.map(list => (
        <div className="card card_style_v" style={{ width: '18rem', marginLeft:"20px" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{list.name}</h5>
                <p className="card-text">{list.dec}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    ))
}

export default Card