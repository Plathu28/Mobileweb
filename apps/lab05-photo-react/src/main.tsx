import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// IMPORT: เพิ่มบรรทัดนี้
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// SETUP: เรียกใช้ loader ก่อน render
defineCustomElements(window);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);