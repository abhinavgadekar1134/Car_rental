import React, { useState } from 'react';
import './RatingInput.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const RatingInput = ({ onSubmit }) => {
  const usermail = localStorage.getItem("validatedUserName");
  const carrnamee = localStorage.getItem("carname");
  const navigate = useNavigate();
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState('');
  const [validated, setValidated] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  const handleSubmit = (event) => {
    if (onSubmit) {
      onSubmit({ rating, description });
      // Reset state after submitting
      setRating(0);
      setDescription('');
    }

    const setdata = {
      name: carrnamee,
      usermail: usermail,
      feedBack: description,
      ratings: rating
    }

    axios({
      url: `${process.env.REACT_APP_BACKEND_LINK_IMG2}/postFeedBack`,
      method: 'POST',
      data: setdata

    }).then(res => {
      console.log(res.data);
      window.alert("Thank You For FeedBack");
      navigate("/")
    })
      .catch((err) => {
        console.log(err);
      })

    setValidated(true);

  }

  return (
    <div className='myclassrat'>
    <div className="rating-input">
      <h2>Rate <span className='carnamespan'>{carrnamee}</span> Car</h2>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star active' : 'star'}
            id='starrat'
            onClick={() => handleRatingChange(star)}
          >
            &#9733; {/* Render a star character */}
          </span>
        ))}
      </div>
      <p>Selected Rating: {rating} / 5</p>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write a description (optional)"
        value={description}
        onChange={handleDescriptionChange}

      />
      <button className='btn btn-success' onClick={handleSubmit}>Submit Rating</button>
    </div>
    </div>
  );
};

export default RatingInput;
