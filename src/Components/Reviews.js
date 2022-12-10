import React, { useState } from 'react'

const Review = ({onAddReview}) => {

  const [movieTitle, setMovieTitle] = useState("")
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState("")

  function handleMovieChange(e){
    setMovieTitle(e.target.value)
  }

  function handleReviewChange(e){
    setNewReview(e.target.value)
  }

  function handleRatingChange(e){
    setNewReview(e.target.value)
  }

  function addReview(e) {
    e.preventDefault();

    fetch("https://moviesreviews-production.up.railway.app/reviews",{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ movie_title: movieTitle, body: newReview }),
    })
    .then(res => res.json())
    .then((review) => {
      onAddReview(review);
      setMovieTitle("")
      setNewReview("");
      setNewRating("")
    })
  }

  return (
    <div className='mwili'>
      <form onSubmit={addReview} className="container2">
        <div className="movie-title">
        <h5>Movie_Id</h5>
        <input type="text" value={movieTitle} onChange={handleMovieChange} placeholder='Type movie id'/>
        </div>
        <div className="comments">
          <h5>Comment</h5>
          <textarea type="text" value={newReview} onChange={handleReviewChange} placeholder='whats your feedback?' />
        </div>
        <div className="rating">
          <h5>Rating</h5>
          <textarea type="text" value={newRating} onChange={handleRatingChange} placeholder='whats your rating?' />
        </div>
        <button id='submit' >Submit</button>
      </form>
    </div>
  )
}
export default Review