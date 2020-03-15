import React from 'react'
import { useFela } from 'react-fela'
import { hexagon } from './styles'

const Hex = props => {
    const { css } = useFela(props)
    return (
        <svg
            className={css(hexagon)}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="640"
            height="640"
            viewBox="0 0 640 640"
        >
            <defs>
                <path id="a" d="
                    M 115.27,323.38
                    C 198.15,162.34 266.4,68.54 320,41.96"
                />
                <path id="b" d="
                    M 320,41.96
                    L76.08 182.67" 
                />
                <path id="c" d="
                    M 320,604.8
                    l 243.92,-141.72"
                />
                <path id="d" d="
                    M 216.65,500.74
                    C 121.6 354.8 74.75 248.6 76.08 182.16"
                />
                <path id="e" d="
                    M 76.08,463.58
                    v -280.4"
                />
                <path id="f" d="
                    M 562.37,182.16
                    L 319.53,41.96"
                />
                <path id="g" d="
                    M 217.97,146.01
                    c 189.19,-7.65 304.51 4.73 345.95 37.17"
                />
                <path id="h" d="
                    M 320,604.8
                    L 76.08,463.08"
                />
                <path id="i" d="
                    M 419.8,500.74
                    c -181.53,9.91 -296.11,-2.47 -343.72,-37.16"
                />
                <path id="j" d="
                    M 563.92,183.68
                    v 279.9"
                />
                <path id="k" d="
                    M 424.05,148.04
                    c 78.38,108.11 125,213.12 139.87,315.04"
                />
                <path id="l" d="
                    M 524.23,321.88
                    c -82.88,161.03 -151.12,255.34 -204.7,282.92"
                />
            </defs>
            <use
                fillOpacity="0"
                stroke="#6f04d9"
                strokeWidth="2"
                xlinkHref="#a"
            ></use>
            <use fill="#ef3f22" xlinkHref="#b"></use>
            <use
                fillOpacity="0"
                stroke="#6f04d9"
                strokeWidth="2"
                xlinkHref="#b"
            ></use>
            <use
                fillOpacity="0"
                stroke="#a61f5e"
                strokeWidth="2"
                xlinkHref="#c"
            ></use>
            <use
                fillOpacity="0"
                stroke="#620ef3"
                strokeWidth="2"
                xlinkHref="#d"
            ></use>
            <use
                fillOpacity="0"
                stroke="#620ef3"
                strokeWidth="2"
                xlinkHref="#e"
            ></use>
            <use
                fillOpacity="0"
                stroke="#9303a6"
                strokeWidth="2"
                xlinkHref="#f"
            ></use>
            <use
                fillOpacity="0"
                stroke="#9303a6"
                strokeWidth="2"
                xlinkHref="#g"
            ></use>
            <use
                fillOpacity="0"
                stroke="#6726c9"
                strokeWidth="2"
                xlinkHref="#h"
            ></use>
            <use
                fillOpacity="0"
                stroke="#6726c9"
                strokeWidth="2"
                xlinkHref="#i"
            ></use>
            <use
                fillOpacity="0"
                stroke="#a61f5e"
                strokeWidth="2"
                xlinkHref="#j"
            ></use>
            <use
                fillOpacity="0"
                stroke="#a61f5e"
                strokeWidth="2"
                xlinkHref="#k"
            ></use>
            <g>
                <use
                    fillOpacity="0"
                    stroke="#a61f5e"
                    strokeWidth="2"
                    xlinkHref="#l"
                ></use>
            </g>
        </svg>
    )
}

export default Hex