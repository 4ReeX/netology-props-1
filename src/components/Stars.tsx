import {StarsProps} from "../interfaces/models";

function Stars({count = 0}: StarsProps) {
    return (
        <div>
            {'⭐'.repeat(count)}
        </div>
    )
}

export default Stars
