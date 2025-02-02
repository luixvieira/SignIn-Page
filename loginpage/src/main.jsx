import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Signin } from './screens/signin.jsx';
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signin />
  </StrictMode>,
)
