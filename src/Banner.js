import React,{useState, useEffect} from 'react'
import './Banner.css'; 
import requests from './Requests';
import axios from './axios';
// import axios from 'axios';

function Banner() {
    const [Movie, setMovie] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log("request", request)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }

        fetchData();
    },[]);
    console.log("Movie: ",Movie);


    function truncate(string,n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
            backgroundPosition: "cenetr center",
        }}>
            <div className="banner__contents">
            <h1 className="banner__title">{Movie?.title || Movie?.name || Movie?.orignal_name}</h1>
            <div className ="banne__buttons">
            <button className ="banner__button">Play</button>
            <button className ="banner__button">My List</button>
            </div>
            <h1 className ="banner__description">{truncate(Movie?.overview,150)}</h1>
            </div>
            <div className="banner__fadeButton" />
        </header>
    )
}

export default Banner



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.3.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
