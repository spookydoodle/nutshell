import { createRoot } from 'react-dom/client';
import { instantiateSlideshows } from './slideshows';
import App from "./App";
import "./index.css";

const container = document.getElementById('app');
const root = createRoot(container!);

instantiateSlideshows();

root.render(<App />);
