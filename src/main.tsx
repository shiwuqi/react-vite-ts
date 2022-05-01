import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import 'tailwindcss/tailwind.css';

import 'antd/dist/antd.less';

const root = createRoot(document.querySelector('#root') as Element);
root.render(<Router basename={import.meta.env.BASE_URL}>
    <App />
</Router>);
