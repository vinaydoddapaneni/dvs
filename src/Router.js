import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import App from './App'
import Disney from './Component/pages'

function Root() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/disney" element={<Disney />} />
        </Routes>
    </Router>
    )
}

export default Root