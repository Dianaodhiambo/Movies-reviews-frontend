import React from "react";
import clip from "../Assets/wakanda-forever-trailer-1-h1080p_2RAu6InH.mov"
import img1 from '../Assets/The good nurse.jpeg'
import img2 from '../Assets/poster.png'
import img3 from '../Assets/download.jpeg'
import img4 from '../Assets/image4.jpeg'
import img5 from '../Assets/image5.jpg'


// const LandingPage = ({ reviews, onDeleteReview }) => {
//   const id=reviews.map((review) => {
//     return review.id;
//   });
  
//     function handleDelete() {
//       fetch(`http://127.0.0.1:3000/reviews${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-type": "application/json",
//         },
//       });
//       onDeleteReview(id);
//     }
  
//     const displayReview = reviews.map((reviews) => {
//       return (
//         <div key={reviews.id} className="reviews">
//           <p>{reviews.username}</p>
//           <p>{reviews.comment}</p>
//           <p>{reviews.rating}</p>
//           <p>{reviews.movie_id}</p>
//           <div>
//             <button>Edit</button>
//             <button onClick={handleDelete}>Delete</button>
//           </div>
//         </div>
//       );
//     });

  function Home(){
    return (
      <div className="main">
        <div className="overlay"></div>
        <div className="background">
          <video src={clip} autoPlay loop muted></video>
        </div>
        <div className="content">
          <h2>Whats trending...</h2>
          <p>
           As the Wakandans strive to embrace their next chapter,
           the heroes must band together with the help of War Dog Nakia
            and Everett Ross and forge a new path for the kingdom of Wakanda.
          </p>
        </div>
        <div className="content1">
          <h1>Top 5 Movies in Kenya</h1>
          <div className="containerZ">
            <div className="box">
              <img className="u1" src={img1} alt="img1" />
            </div>
            <div className="box">
              <img className="u2" src={img2} alt="img2" />
            </div>
            <div className="box">
              <img className="u3" src={img3} alt="img3" />
            </div>
            <div className="box">
              <img className="u4" src={img4} alt="img4" />
            </div>
            <div className="box">
              <img className="u5" src={img5} alt="img5" />
            </div>
          </div>
          <div className="reviewz">
            <h2>Reviews</h2>
            <p>
              How sufficient is our services. Give us your Review on the Button
              below
            </p>
          </div>
          <div className="feedback"></div>
        </div>
      </div>
    );
  }
 
  
  export default Home;