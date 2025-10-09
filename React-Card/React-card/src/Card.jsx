import userProfile from './assets/jogs.png';

function Card(){
    return(
        <div className="card">
         <img className='card-image' src= {userProfile} alt="user profile"></img>
        <h2 className='card-title'>Johnson</h2>
        <p className='card-text'>Web Developer Frontend and Backend</p>
        </div>
    );
}

export default Card