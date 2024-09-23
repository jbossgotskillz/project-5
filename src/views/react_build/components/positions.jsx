import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Thread from './thread.jsx';

export default function Positions() {

    const navigate = useNavigate();

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

    const vernacular = () => {
        navigate('/forum/vernacular')
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
                      <button disabled className="btn btn-light">Make a play</button>            
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
                      <button onClick={vernacular} className="btn btn-light">Make a play</button>            
                  </section>
              </div>
              <div className="col-7 discussion-box text-center">
                  <h1>Discussion Thread</h1>
                  <h3>Insert your post here</h3>

                  <p className="question-post">What is the "2" position called?</p>
                  <p className="reply-post">Uh...I believe that would be the shooting guard.</p>
           
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
            <h1>What it do?</h1>
            <button onClick={layout}>Layout</button>            
            <button onClick={strategies}>Strategies</button>            
            <button onClick={possession}>Possession</button>            
            <button onClick={rules}>Rules</button>            
            <button onClick={vernacular}>Vernacular</button>            
        </div>*/



/*export default function Forum() {
      
  /*const [questions, setQuestions] = useState('');
  const [thread, setThread] = useState([]);

  const addQuestion = () => {
    setThread([...thread, questions]);
    setQuestions('');
  }

  const [replies, setReplies] = useState('');
  const [topic, setTopic] = useState([]);

  const addReply = () => {
    setTopic([...topic, replies]);
    setReplies('');

    
  return (
    <div>
       <div className="row">
            <div className="col-3 offset-1 category-box text-center">
                <h1>Category List</h1>
                <section>
                <Positions>
                <button type="submit" class="btn btn-light" id="position" onSubmit={handleSubmit}>Make a play</button>
              </Positions>
                </section>
                <section>
                    <h3>Court Layout</h3>
                    <button type="submit" className="btn btn-light">Make a play</button>
                </section>
                <section>
                    <h3>Offense and Defense</h3>
                    <button type="submit" className="btn btn-light">Make a play</button>
                </section>
                <section>
                    <h3>Strategies and Formations</h3>
                    <button type="submit" className="btn btn-light">Make a play</button>
                </section>
                <section>
                    <h3>Rules and Violations</h3>
                    <button type="submit" className="btn btn-light">Make a play</button>
                </section>
                <section>
                    <h3>Basketball Vernacular</h3>
                    <button type="submit" className="btn btn-light">Make a play</button>
                </section>
            </div>
            <div className="col-7 discussion-box text-center">
                <h1>Discussion Thread</h1>
                <h3>Insert your post here</h3>

                <form className="my-4">
                    <textarea value={questions} onChange={event => setQuestions(event.target.value)} rows="3" cols="50"
                        className="question-input form-group row" placeholder="Enter a question"></textarea>
                    <button disabled={!questions} onClick={addQuestion} className="btn btn-light form-group row">Post question</button>
                </form>
 

                <div>
                    {thread.map(question => (
                        <div>
                            <p className="question-post">{question}</p>
                            <textarea value={replies} onChange={event => setReplies(event.target.value)} rows="3" cols="50"
                                className="reply-input form-group row" placeholder="Enter a reply"></textarea>
                            <button disabled={!replies} onClick={addReply} className="btn btn-light form-group row">Post reply</button>
                        </div>
                    ))}
                </div>

                {topic.map(reply => (
                    <div>
                        <p className="reply-post">{reply}</p>
                    </div>
                ))}
                


            </div>
        </div>
    </div>
  )
}*/



//import axios from "axios";

/*export default function Category() {

    const [topic, setTopic] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    const response = await axios.post("/index/threads", {topic});

    if (response.data.success) {
      alert("Thread created successfully");
    } else {
      alert("An error occurred");
    }

    return (
      <div>
          <h1>Category List</h1>
          <section>
              <h3>Player Positions</h3>
              <Positions>
                <button type="submit" class="btn btn-light" id="position" onSubmit={handleSubmit}>Make a play</button>
              </Positions>
          </section>
          <section>
              <h3>Court Layout</h3>
              <Layout>
                <button type="submit" class="btn btn-light" id="layout">Make a play</button>
              </Layout>
          </section>
          <section>
              <h3>Offense and Defense</h3>
              <Possession>
                <button type="submit" class="btn btn-light" id="possession">Make a play</button>
              </Possession>
          </section>
          <section>
              <h3>Strategies and Formations</h3>
              <Strategies>
                <button type="submit" class="btn btn-light" id="strategies">Make a play</button>
              </Strategies>
          </section>
          <section>
              <h3>Rules and Violations</h3>
              <Rules>
                <button type="submit" class="btn btn-light" id="rules">Make a play</button>
              </Rules>
          </section>
          <section>
              <h3>Basketball Vernacular</h3>
              <Vernacular>
                <button type="submit" class="btn btn-light" id="vernacular">Make a play</button>
              </Vernacular>
          </section>
      </div>
    )
}



    return (
        <div className="container text-center">
            <section>
                <header>Category 1:  Player Positions</header>
                <button className="btn btn-light" type="submit">
                    Make a play
                    <Positions />
                </button>
            </section>
            <section>
                <header>Category 2:  Court Layout</header>
                <button className="btn btn-light" type="submit">
                    Join the game
                    <Layout />
                </button>
            </section>
            <section>
                <header>Category 3:  Offense and Defense</header>
                <button className="btn btn-light" type="submit">
                    Join the game
                    <Possession />
                </button>
            </section>
            <section>
                <header>Category 4:  Strategies and Formations</header>
                <button className="btn btn-light" type="submit">
                    Join the game
                    <Strategies />
                </button>
            </section>
            <section>
                <header>Category 5:  Rules and Violations</header>
                <button className="btn btn-light" type="submit">
                    Join the game
                </button>
                    <Rules />
            </section>
            <section>
                <header>Category 6:  Basketball Vernacular</header>
                <button className="btn btn-light" type="submit">
                    Join the game
                </button>
                <Vernacular />
            </section>
        </div>
    )
}*/


/*function ReplyForm({ threadId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(`/api/threads/${threadId}/replies`, {
      content,
    });

    if (response.data.success) {
      alert("Reply posted successfully");
    } else {
      alert("An error occurred");
    }
  };

  return (
    <div className="ReplyForm">
      <form onSubmit={handleSubmit}>
        <label>
          Your Reply:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <input type="submit" value="Post Reply" />
      </form>
    </div>
  );
}

export default ReplyForm;*/
