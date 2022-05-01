import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import 'tailwindcss/tailwind.css';

ReactDOM.render(
    <Router basename={import.meta.env.BASE_URL}>
        <App />
    </Router>,
    document.querySelector('#root')
);
