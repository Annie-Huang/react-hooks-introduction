import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

// class App extends Component {
const App = props => {
  // state = {
  //   selectedCharacter: 1,
  //   side: 'light',
  //   destroyed: false
  // };
  const [state, setState] = useState({
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  });

  // sideHandler = side => {
  //   this.setState({ side: side });
  // };
  const sideHandler = side => {
    setState({ ...state, side: side });     // Don't have 'this' keyword because it is no longer a class component.
  };

  // charSelectHandler = event => {
  //   const charId = event.target.value;
  //   this.setState({ selectedCharacter: charId });
  // };
  const charSelectHandler = event => {
    const charId = event.target.value;
    setState({ ...state, selectedCharacter: charId });
  };

  // destructionHandler = () => {
  //   this.setState({ destroyed: true });
  // };
  const destructionHandler = () => {
    setState({ ...state, destroyed: true });
  };

  // render() {
  //   let content = (
  //     <React.Fragment>
  //       <CharPicker
  //         side={this.state.side}
  //         selectedChar={this.state.selectedCharacter}
  //         onCharSelect={this.charSelectHandler}
  //       />
  //       <Character selectedChar={this.state.selectedCharacter} />
  //       <button onClick={this.sideHandler.bind(this, 'light')}>
  //         Light Side
  //       </button>
  //       <button onClick={this.sideHandler.bind(this, 'dark')}>Dark Side</button>
  //       {this.state.side === 'dark' && (
  //         <button onClick={this.destructionHandler}>DESTROY!</button>
  //       )}
  //     </React.Fragment>
  //   );
  //
  //   if (this.state.destroyed) {
  //     content = <h1>Total destruction!</h1>;
  //   }
  //   return content;
  // }
  let content = (
      <React.Fragment>
        <CharPicker
            side={state.side}
            selectedChar={state.selectedCharacter}
            onCharSelect={charSelectHandler}
        />
        <Character selectedChar={state.selectedCharacter} />
        <button onClick={sideHandler.bind(this, 'light')}>
          Light Side
        </button>
        <button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        {state.side === 'dark' && (
            <button onClick={destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
  );

  if (state.destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;

};

export default App;
