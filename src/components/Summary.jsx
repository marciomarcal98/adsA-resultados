import { Rectangle } from './Rectangle'

import iconReaction from '../assets/icon-reaction.svg'
import iconMemory from '../assets/icon-memory.svg'
import iconVerbal from '../assets/icon-verbal.svg'
import iconVisual from '../assets/icon-visual.svg'

export function Summary() {
    return (
        <section>
            <h2>Summary</h2>

            <Rectangle icon={iconReaction} text="Reaction" number={80} color="red" />
            <Rectangle icon={iconMemory} text="Memory" number={92} color="yellow" />
            <Rectangle icon={iconVerbal} text="Verbal" number={61} color="green" />
            <Rectangle icon={iconVisual} text="Visual" number={73} color="blue" />

            <button>Continue</button>
        </section>
    )
}