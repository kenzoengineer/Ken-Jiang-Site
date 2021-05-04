import './Tooltip.css'
function Tooltip(props) {
    return (
        <div className="Tool-Tip">
            {props.children}
        </div>
    );
}

export default Tooltip;