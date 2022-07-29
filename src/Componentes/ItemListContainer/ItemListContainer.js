import './Container.css';
import Contador from '../ItemCount/ItemCount';
function Container(props) {
    return (
        <div className='base-productos'>
            { props.children }
            <Contador />
        </div>    
    );
}
export default Container;