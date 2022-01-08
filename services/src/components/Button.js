import PropTypes from 'prop-types'


const Button = ({text, color, onClick}) => {


    return (
    <button 
        className="btn" 
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        {text}
    </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    color: "steelblue"
}


export default Button
