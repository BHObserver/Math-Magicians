import React from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = () => React.createElement('h1');

root.render(<App />);
