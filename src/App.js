// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './components/Pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
import FeedbackList from './components/FeedbackList';
// import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  // No longer need the state in here because we are managing now in Context

  // const [feedback, setFeedback] = useState(FeedbackData);

  //Moved function below to Context file

  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  //Moved function below to Context

  // const addFeedback = (newFeedback) => {
  //   // add id to newFeedback object
  //   newFeedback.id = uuidv4();
  //   // set feedback to an array w/ all current feedback items and our new one
  //   setFeedback([newFeedback, ...feedback]);
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {/* <FeedbackForm handleAdd={addFeedback} /> */}
                  <FeedbackForm />
                  {/* pass addFeedback function to FeedbackForm as a prop */}
                  {/* <FeedbackStats feedback={feedback} /> */}
                  {/* No longer passing props to these components ..changed to useContext instead */}
                  <FeedbackStats />
                  {/* <FeedbackList handleDelete={deleteFeedback} /> */}
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
