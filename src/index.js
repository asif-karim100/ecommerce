import ReactDOM from "react-dom/client";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import './index.css';
import CartContext from './components/CartContext';
import App from './App';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
root.render(
<BrowserRouter>
    <CartContext>
        <App />
    </CartContext>
    </BrowserRouter>
   

);
