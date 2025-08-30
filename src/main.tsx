import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './components/pages/TeamSection.tsx'
import './components/layout/Navigation.tsx'
createRoot(document.getElementById("root")!).render(<App />);
import './components/pages/AgentsPage.tsx'