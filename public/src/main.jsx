import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import GenderDOBForm from './pages/GenderDOBForm'
import KidneyForm from './pages/KidneyForm'
import AllergenForm from './pages/AllergenForm'
import ExerciseForm from './pages/ExerciseForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gender" element={<GenderDOBForm />} />
        <Route path="/kidney" element={<KidneyForm />} />
        <Route path="/allergen" element={<AllergenForm />} />
        <Route path="/exercise" element={<ExerciseForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
