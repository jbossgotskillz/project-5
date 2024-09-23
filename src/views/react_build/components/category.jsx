import React from 'react';
import Base from './base.jsx';
import Positions from './positions.jsx';
import Layout from './layout.jsx';
import Strategies from './strategies.jsx';
import Possession from './possession.jsx';
import Rules from './rules.jsx';
import Vernacular from './vernacular.jsx';

import { BrowserRouter, Routes as Categories, Route } from 'react-router-dom';

export default function Forum() {

  return (
    <div>
      
        <BrowserRouter>
          <Categories>
            <Route exact path="/forum" element={<Base />} />
            <Route exact path="/forum/positions" element={<Positions />} />
            <Route exact path="/forum/layout" element={<Layout />} />
            <Route exact path="/forum/strategies" element={<Strategies />} />
            <Route exact path="/forum/possession" element={<Possession />} />
            <Route exact path="/forum/rules" element={<Rules />} />
            <Route exact path="/forum/vernacular" element={<Vernacular />} />
          </Categories>
        </BrowserRouter>
        
    </div>
  )
}
