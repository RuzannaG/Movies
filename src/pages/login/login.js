import { useState } from "react"
import Simple from "../../assets/images/movi.png";
import { useNavigate } from "react-router";

export const Login = () => {
const [email, setEmail]=useState();
const [password,setPassword]=useState();
const navigate=useNavigate();

const handleEmail=(e)=>{
    setEmail(e.target.value)
    console.log(email)
}
const handlePassword= (e)=>{
    setPassword(e.target.value)
}
const handleSubmit = (event) => {
    if(email==='admin@mail.ru' && password==="admin"){
        navigate('/movies')
    }

    event.preventDefault();
}

    return (
        <div className="city">
            <div className="form">
                <img src={Simple} alt="box" />
                <h2>Movie</h2>
                <form onSubmit={handleSubmit}>
                    <input  onChange={handleEmail} type="email" required placeholder="Enter email..."/>
                    <input  onChange={handlePassword} type="password" required placeholder="Enter password..."/>
                    <input type="submit" value="Login" />
                </form>

            </div>

        </div>
    )
}