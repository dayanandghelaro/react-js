import { Link } from 'react-router-dom';

import daya from "../assests/daya.png"
import img from "../assests/img.jpg"

const Photo = ({title, description, photo}) => {
    return (
        <div className="form-div">
            <h2 style={{color:"blue"}}>{title}</h2>
            <p>
                {description}
            </p>
            <br/>
            <img src={photo} alt="Image" />
        </div>
    )
}

export default Photo