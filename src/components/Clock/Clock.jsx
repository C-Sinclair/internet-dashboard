import React from 'react'
import { useFela } from 'react-fela'
import { container, bar } from './styles'

const HOURS_IN_DAY = 24;
const MINS_IN_HOUR = 60;
const SECS_IN_MIN = 60;
const MS_IN_SECS = 1000;

const START_HOUR = 0;
const HOURS_TO_DISPLAY = 24;

const zeroPad = num => '0'.repeat(2 - String(num).length) + num

const HourLabel = hour => <label>{ zeroPad(props.hour) }</label>

const shiftHours = h => (h + START_HOUR) % HOURS_IN_DAY

const Bar = props => {
    const { hour } = props
    const { css } = useFela(props)
    return (
        <div className={css(bar)}>
            <HourLabel hour={hour} />
        </div>
    )
}

const Clock = props => {
    const { css } = useFela(props)
    return (
        <div className={css(container)}>
            { Array(HOURS_TO_DISPLAY)
                .map(h => shiftHours(h))
                .map(hour => <Bar hour={hour} />)}
        </div>
    )
}

export default Clock
