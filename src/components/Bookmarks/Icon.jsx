import React from 'react'
import { useFela } from 'react-fela'
import { icon } from './styles'

const Icon = props => {
    const { css } = useFela(props)
    return (
        <svg
            height={50}
            width={50}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className={css(icon)}>
            <path id="secondary" d="
                M 384,48
                v 464
                L 192 400 0 512
                V 48
                A 48 48 0 0 1 48 0
                h 32
                v 326.11
                a 16 16 0 0 0 23.16 14.31
                L 192 296
                l 88.84 44.42
                A 16 16 0 0 0 304 326.11
                V 0
                h 32
                a 48 48 0 0 1 48 48
                z" 
            />
            <path d="
                M 304,0
                v 326.11
                a 16 16 0 0 1-23.16 14.31
                L 192 296
                l -88.84 44.42
                A 16 16 0 0 1 80 326.11
                V 0
                z"
            />
        </svg>
    )
}

export default Icon
