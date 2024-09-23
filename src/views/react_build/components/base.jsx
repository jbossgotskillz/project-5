import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Base() {
  
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

  const vernacular = () => {
      navigate('/forum/vernacular')
  };

  return (
    <div>
        <div className="row">
            <div className="col-10 offset-1 category-box text-center">
                <h3>Click on any of the buttons below to select a category and open the forum.  Once inside, 
                    you can switch categories.  Prior to returning to the dashboard, you must close the forum.  
                    Otherwise, you'll be playing foul.
                </h3>
                <div>
                    <button onClick={positions} className="btn btn-light">Players Positions</button>
                    <p><em>Knowing all five positions and what their strengths and weaknesses are is key to success.</em></p>            
                </div>
                <div>
                    <button onClick={layout} className="btn btn-light">Court Layout</button>            
                    <p><em>Every part of a basketball court has its own set of features, so you must know where you and your teammates are at all times.</em></p>            
                </div>
                <div>
                    <button onClick={strategies} className="btn btn-light">Strategies and Formations</button>
                    <p><em>Basketball is a team sport, so it is wise to study some playbooks and concentrate on teamwork.  No need to be a hero.</em></p>            
                </div>
                <div>
                    <button onClick={possession} className="btn btn-light">Offense and Defense</button>
                    <p><em>There is a massive difference between offense and defense.  Then again, you already understand that...or at least you should.</em></p>            
                </div>
                <div>
                    <button onClick={rules} className="btn btn-light">Rules and Violations</button>
                    <p><em>Want to learn how the game is played, or confused about a certain rule?  Then this is the place for you.</em></p>                        
                </div>
                <div>
                    <button onClick={vernacular} className="btn btn-light">Basketball Vernacular</button>
                    <p><em>Come here to practice speaking basketball lingo...or flex about how well you know it.</em></p>            
                </div>
            </div>
        </div>
    </div>
  )
}