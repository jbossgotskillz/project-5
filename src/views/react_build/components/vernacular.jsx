import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Thread from './thread.jsx';

export default function Positions() {

    const navigate = useNavigate();

    const positions = () => {
        navigate('/forum/positions')
    };

    const layout = () => {
        navigate('/forum/layout')
    };

    const strategies = () => {
        navigate('/forum/strategies')
    };

    const possession = () => {
        navigate('/forum/possession')
    };

    const rules = () => {
        navigate('/forum/rules')
    };

    const base = () => {
        navigate('/forum')
    }

    const [questions, setQuestions] = useState('');
    const [thread, setThread] = useState([]);

    const addQuestion = () => {
    setThread([...thread, questions]);
    setQuestions('');
  }

    return (
      <div>
          <div className="row">
              <div className="col-3 offset-1 category-box text-center">
                  <h1>Category List</h1>
                  <section>
                      <h3>Player Positions</h3>
                      <button onClick={positions} className="btn btn-light">Make a play</button>            
                  </section>
                  <section>
                      <h3>Court Layout</h3>
                      <button onClick={layout} className="btn btn-light">Make a play</button>            
                  </section>
                  <section>
                      <h3>Strategies and Formation</h3>
                      <button onClick={strategies} className="btn btn-light">Make a play</button>            
                  </section>
                  <section>
                      <h3>Offense and Defense</h3>
                      <button onClick={possession} className="btn btn-light">Make a play</button>            
                  </section>                  
                  <section>
                      <h3>Rules and Violations</h3>
                      <button onClick={rules} className="btn btn-light">Make a play</button>            
                  </section>
                  <section>
                      <h3>Basketball Vernacular</h3>
                      <button disabled className="btn btn-light">Make a play</button>            
                  </section>
              </div>
              <div className="col-7 discussion-box text-center">
                  <h1>Discussion Thread</h1>
                  <h3>Insert your post here</h3>

                  <p className="question-post">What does it mean to "break someone's ankles"?</p>
                  <p className="reply-post">Basically, this term is used to describe a situation when the ball handler forces the player who's guarding 
                    him to fall over.  This usually happens when the defender reaches for the ball or while the offensive player is executing a dribble 
                    move...and personally, it's also funny to watch.  However, if you're the player who falls over, it's embarrassing.</p>
           
                  <input value={questions} onChange={event => setQuestions(event.target.value)}
                     className="question-input form-group row" placeholder="Enter a question"></input>
                  <button disabled={!questions} onClick={addQuestion} className="btn btn-light form-group row my-3">Post question</button>

                  <div>
                    {thread.map(newQuestion => (
                        <div>
                            <p className="question-post">{newQuestion}</p>
                            <Thread />
                        </div>
                    ))}
                </div>  
    
              </div>
          </div>
          <div class="home-box my-2 text-center">
              <h3>Click on the button below to close the forum before you finish...or else.</h3>
              <button onClick={base} className="btn btn-light">Close forum</button>
          </div>
      </div>
    )
}     



        /*<div>
            <h1>Life is a drag</h1>
            <button onClick={positions}>Positions</button>            
            <button onClick={layout}>Layout</button>            
            <button onClick={strategies}>Strategies</button>            
            <button onClick={possession}>Possession</button>            
            <button onClick={rules}>Rules</button>            
        </div>*/