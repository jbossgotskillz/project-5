import React, { useState } from 'react';

export default function Thread () {
        
    const [replies, setReplies] = useState('');
    const [topic, setTopic] = useState([]);

    const addReply = () => {

        let post = "Are you sure you want to post this reply, player?"

        if(confirm(post) === true) {
            setTopic([...topic, replies]);
            setReplies('');            
        }

        //confirm("Are you sure you want to post this reply, player?")
  }

  return (
    <div>

        <textarea value={replies} onChange={event => setReplies(event.target.value)} rows="3" cols="50"
            className="reply-input form-group row" placeholder="Enter a reply"></textarea>
        <button disabled={!replies} onClick={addReply} className="btn btn-light form-group row my-3">Post reply</button>

        <div>
            {topic.map(reply => (
                <div>
                    <p className="reply-post">{reply}</p>
                </div>
            ))}
        </div>
    
    </div>
  )
}