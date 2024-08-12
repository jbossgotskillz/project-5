//import React, { useState, useEffect } from 'react';
import React from 'react';

import Category from './components/category.jsx';
//import Discussion from './components/discussion.jsx';
import './project_5.css';

function Forum() {

    return (
        <div>
            <main className="forum-box text-center my-2">
                <Category />
            </main>
        </div>
    )
}

export default Forum()
