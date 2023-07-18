import React from "react";
import Navigation from "../components/Navigation";
import { useState, useEffect} from "react";
import "/Users/abedorana/capstone-frontend/src/styling/ProfileCard.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


// function SVGRenderer({ svgData }) {
//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: svgData,
//       }}
//     />
//   );
// }

function Profile() {
  const [avatar, setAvatar] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const images = [
    {
      id: 1,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?seed=Felix&backgroundColor=fc8941",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundType=gradientLinear&mouth=smileTeeth&eyes=wink",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=fcee2d&mouth=tongueOut&eyes=tearDrop",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=5de8fa&mouth=kissHeart&eyes=wink",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=f83a3a&mouth=shout&eyes=glasses&translateY=-25",
      alt: "Image 5",
    },
    {
      id: 6,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=bd7bf3&mouth=pissed&eyes=shades&translateX=-25",
      alt: "Image 6",
    },
    {
      id: 7,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=52cf5d&mouth=drip&eyes=sleepClose&rotate=270",
      alt: "Image 7",
    },
    {
      id: 8,
      src: "https://api.dicebear.com/6.x/fun-emoji/svg?backgroundColor=e0218a&mouth=cute&eyes=cute",
      alt: "Image 8",
    }
  ];


  function handleClick() {
    setShowPopup(true);
  };
  

  return (
    <div>
      {/* <Navigation/> */}
      This is Profile.
      <p></p>
      <button onClick = {handleClick}>
      <div className="body">
        <a className="card human-resources" href="#">
          <div className="overlay"></div>
          <div className="circle">
            <svg 
              href="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="1855 26 66 77"
              height="77px"
              width="66px"
            >
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                transform="translate(1855.000000, 26.000000)"
                fillRule="evenodd"
                fill="none"
                strokeWidth="1"
                stroke="none"
                id="Page-1"
              >
                <path
                  fill="#AFCEFF"
                  id="Fill-8"
                  d="M4.28872448,42.7464904 C4.28872448,39.3309774 5.4159227,33.7621426 6.40576697,30.4912557 C10.5920767,32.1098991 14.3021264,35.1207513 18.69596,35.1207513 C30.993618,35.1207513 42.5761396,28.7162991 49.9992251,17.9014817 C56.8027248,23.8881252 60.8188351,33.0463165 60.8188351,42.7464904 C60.8188351,60.817447 47.6104607,76.6693426 32.5537798,76.6693426 C17.4970989,76.6693426 4.28872448,60.817447 4.28872448,42.7464904"
                ></path>
                <path
                  fill="#3B6CB7"
                  id="Fill-10"
                  d="M64.3368879,31.1832696 L62.8424171,46.6027478 L60.6432609,46.7824348 L59.8340669,34.6791304 L47.6573402,25.3339478 C44.2906753,34.068487 34.3459503,40.2903304 24.4684093,40.2903304 C17.7559812,40.2903304 10.046244,37.4168 5.80469412,32.8004522 L5.80469412,34.6791304 L5.80469412,46.6027478 L4.28932167,46.6027478 L1.30187314,27.8802435 C1.30187314,20.9790957 3.52342407,15.5432 7.27229127,11.3578087 C13.132229,4.79558261 21.8124018,0.0492173913 30.5672235,0.342852174 C37.4603019,0.569286957 42.6678084,2.72991304 50.8299179,0.342852174 C51.4629405,1.44434783 51.8615656,3.00455652 51.5868577,5.22507826 C51.4629405,6.88316522 51.2106273,7.52302609 50.8299179,8.45067826 C58.685967,14.1977391 64.3368879,20.7073739 64.3368879,31.1832696"
                ></path>
                <path
                  fill="#568ADC"
                  id="Fill-13"
                  d="M58.9405197,54.5582052 C62.0742801,54.8270052 65.3603242,52.60064 65.6350321,49.5386574 C65.772386,48.009127 65.2617876,46.5570226 64.3182257,45.4584487 C63.3761567,44.3613357 62.0205329,43.6162922 60.4529062,43.4818922 L58.9405197,54.5582052 Z"
                ></path>
                <path
                  fill="#568ADC"
                  id="Fill-15"
                  d="M6.32350389,54.675367 C3.18227865,54.8492104 0.484467804,52.4957496 0.306803449,49.4264626 C0.217224782,47.8925496 0.775598471,46.4579757 1.75200594,45.3886191 C2.7284134,44.3192626 4.10792487,43.6165843 5.67853749,43.530393 L6.32350389,54.675367 Z"
                ></path>
              </g>
            </svg>
          </div>
          <p>Your Name</p>
        </a>
      </div>
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {images.map((image) => (
              <div className= "img-container" key={image.id}>
                <button className="avatarButton">
                  <img className="avatarPics"
                  src={image.src} 
                  alt={image.alt} 
                  title={image.title} />
                  <p>{image.title}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
