import './Container.css';

function Container(props) {
    return (
        <div className='base-productos'>
            { props.children }
        </div>    
    );
}
export default Container;