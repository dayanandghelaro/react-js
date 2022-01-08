import Photo from './Photo';

import qeemat from "../assests/qeemat.jpeg"
import students from "../assests/students.jpeg"
import dileep from "../assests/dileep.jpeg"
import mudu from "../assests/mudu.jpeg"

const photos = [
    {
        "title": "Dileep Kumar",
        "description": "He is my younger brother, who is trying to be doctor in near future.",
        "photo": dileep
    },
    {
        "title": "Qeemat Rai",
        "description": "He's from Kaloi, Sindh. He graduated in E-commerce from University of Sindh.",
        "photo": qeemat
    },
    {
        "title": "Students of Khetlari Village",
        "description": "Dileep Kumar used to teach them when he lived in Khetlari village during his leisure time",
        "photo": students
    },
    {
        "title": "Dr. Mudaisar Keryo",
        "description": "He's MD (Managing Director) of Gh Mustafa Medical Center. He is in his final year of MBBS at LUMHS (Liaqat University of Medical and Health Sciences.",
        "photo": mudu
    }
]
const Home = () => {
    return (
        <div>
            <div className="form-div">
                <h2 style={{color:"blue"}}>Welcome to RaniRaja Services</h2>
                <p>
                    We are a group of individuals who are continuously working hard to serve the community using
                    our knowledge and skills. We are working under the supervision of <b style={{color:"green"}}>Dayanand Ghelaro</b> to fulfill the daily tasks.
                </p>
                <br />
            </div>
            <div>
                <h1>Friends</h1>
            </div>
            {photos.map((photo, index) => {
                return <Photo key={index} {...photo} />
            })}
        </div>
    )
}

export default Home