import './Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas);
function Icon(props) {
    return (
        <div className="Icon-Container">
            <FontAwesomeIcon  icon={[props.type, props.icon]}/>
            <Tooltip text={props.alt}/>
        </div>
    );
}

function Tooltip(props) {
    return (
        <div className="Tool-Tip">
            {props.text}
        </div>
    );
}

export default Icon;