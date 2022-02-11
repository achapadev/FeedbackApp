import React from 'react';
// will have state to represent which rating is selected
import { useState } from 'react';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  //  output will be unordered list of radio buttons styled to look like circled numbers
  const handleChange = (e) => {
    //    the + infront changes the value from a string type number
    setSelected(+e.currentTarget.value);
    // by using this select function passed as prop from Feedback
    //     Form we are able to set the rating (state) in the FeedbackForm
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num6"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num7"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num8"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num9"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num10"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}
export default RatingSelect;
