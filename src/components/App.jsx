import React from 'react';
import { useFela } from 'react-fela';
import {
  Logo,
  Clock,
  Bookmarks,
  Articles,
  Projects,
  Documentation,
  Social,
  Terminal,
} from ".";
import { reset, welcome } from '../styles/global'

const App = props => {
  const { css } = useFela(props)
  return (
    <main>
      <h1 className={css(reset, welcome)}>Welcome back Conski</h1>
      <Logo />
      <Clock />
      <Bookmarks />
      <Articles />
      <Projects />
      <Documentation />
      <Social />
      <Terminal />
    </main>
  )
}

export default App;
