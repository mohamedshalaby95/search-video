import App  from './component/app'
import ReactDom from'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.bundle.js';


ReactDom.render(<App />,document.querySelector('#root'))