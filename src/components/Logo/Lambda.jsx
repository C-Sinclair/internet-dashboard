import React from 'react'
import { useFela } from 'react-fela'
import * as styles from './styles'

const Lambda = props => {
    const { css } = useFela(props)
    return <span className={css(styles.lambda)}>λ</span>
}

export default Lambda