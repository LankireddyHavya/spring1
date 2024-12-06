import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './components/Welcome.jsx'
import Comp2 from './components/Comp2.jsx'
import Parent1 from './components/Parent1.jsx'
createRoot(document.getElementById('root')).render(
 //<Welcome></Welcome>,
 //<Comp2></Comp2>,
 <Parent1></Parent1>
)
