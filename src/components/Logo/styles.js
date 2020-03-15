export const container = () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const lambda = () => ({
    fontFamily: 'cursive',
    fontSize: '7em',
    position: 'absolute'
})

export const hexagon = ({ rotation }) => ({
    transition: "all 1s cubic-bezier(0, 0, 1, 1)",
    transform: `rotate(-${rotation}deg)`,
})