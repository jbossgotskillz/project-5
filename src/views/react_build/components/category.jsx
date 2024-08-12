import React, { useState } from 'react';

import axios from "axios";

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

export default function Category() {
  return (
    <div>
      <p>What it do?</p>
    </div>
  )
}
