import React from 'react';
import project from '../../assets/img/Capture6776.PNG';

function Project() {

    return <div>
        <div>
           <a href={"https://text-pwa-13131231231.herokuapp.com/"} target="_blank">Deployed applicaiton</a>
            <img src={project} alt={"Some text"}></img>
        </div>
        {/* image of project and link to your project */}
        <div>
        
        </div>
            
        <div>

        </div>

        <div>

        </div>
    </div>;
}
function Card(props) {
    return (
        <div id="dashCard" className="dashCard">
                <img className='dashboardImage' src={props.img}/>
                    <h2 className='dashCard_title'>{props.title}</h2>
                    <p className='dashCard_description'>{props.description}</p>
                    <a href={props.deployedLink}><button className="dashCard_btn">Lets Explore</button></a>
        </div>
    )
}
export default Project;