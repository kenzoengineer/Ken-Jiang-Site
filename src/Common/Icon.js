import './Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '../Common/Tooltip'
library.add(fab, fas);

function Icon(props) {
    return (
        <div className="Icon-Container">
            <FontAwesomeIcon  icon={[props.type, props.icon]}/>
            <Tooltip>
                {props.alt}
            </Tooltip>
        </div>
    );
}



export default Icon;