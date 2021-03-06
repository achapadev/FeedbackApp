import { createContext, useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// used to generate new ids

const FeedbackContext = createContext();

// Our provider with our state
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  // const [feedback, setFeedback] = useState([
  //   {
  //     id: 1,
  //     text: 'This is feedback item 1',
  //     rating: 10,
  //   },
  //   {
  //     id: 2,
  //     text: 'This is feedback item 2',
  //     rating: 9,
  //   },
  //   {
  //     id: 3,
  //     text: 'This is feedback item 3',
  //     rating: 7,
  //   },
  // ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    console.log(response);
    const data = await response.json();
    // load state with data fetched from backend
    setFeedback(data);
    setIsLoading(false);
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    // add id to newFeedback object
    // newFeedback.id = uuidv4();
    // set feedback to an array w/ all current feedback items and our new one
    setFeedback([data, ...feedback]);
  };

  return (
    //   Providing feedback through this value in our Provider
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        isLoading,
        addFeedback,
        // editFeedback is the function that runs when we click edit button in UI
        editFeedback,
        // this is the actual state that holds the item and the boolean
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
