import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
if (!document.getElementById('modal-root')) {
  const m = document.createElement('div'); m.id = 'modal-root'; document.body.appendChild(m);
}
