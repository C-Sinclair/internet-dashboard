import React, { useState, useEffect } from 'react';
import { useFela } from 'react-fela';
import useTimer from '../../hooks/useTimer';
import Lambda from './Lambda'
import Hex from './Hex'
import { container } from './styles'

const Logo = props => {
  const { css } = useFela(props)
  const [rotation, setRotation] = useState(0);

  const { iteration } = useTimer()

  useEffect(() => setRotation(iteration * 4), [setRotation, iteration])

  return (
    <div className={css(container)}>
      <Hex rotation={rotation} />
      <Lambda />
    </div>
  );
};

export default Logo;


