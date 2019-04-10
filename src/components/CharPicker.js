import React, { useState, useEffect} from 'react';

import './CharPicker.css';

// class CharPicker extends Component {
const CharPicker = props => {
  // state = { characters: [], isLoading: false };
  const [loadedChars, setLoadedChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch('https://swapi.co/api/people')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch.');
  //       }
  //       return response.json();
  //     })
  //     .then(charData => {
  //       const selectedCharacters = charData.results.slice(0, 5);
  //       this.setState({
  //         characters: selectedCharacters.map((char, index) => ({
  //           name: char.name,
  //           id: index + 1
  //         })),
  //         isLoading: false
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  useEffect(() => {
    // console.log('useEffect runs');

    // this.setState({ isLoading: true });
    setIsLoading(true);
    fetch('https://swapi.co/api/people')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then(charData => {
          const selectedCharacters = charData.results.slice(0, 5);
          // this.setState({
          //   characters: selectedCharacters.map((char, index) => ({
          //     name: char.name,
          //     id: index + 1
          //   })),
          //   isLoading: false
          // });
          setIsLoading(false);
          setLoadedChars(selectedCharacters.map((char, index) => ({
            name: char.name,
            id: index + 1
          })));
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
  }, []);
  // https://reactjs.org/docs/hooks-effect.html
    // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.
    // This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
    // This isn’t handled as a special case — it follows directly from how the inputs array always works.
    // If you pass an empty array ([]), the props and state inside the effect will always have their initial values.
    // While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model


  // render() {
  //   let content = <p>Loading characters...</p>;
  //
  //   if (
  //     !this.state.isLoading &&
  //     this.state.characters &&
  //     this.state.characters.length > 0
  //   ) {
  //     content = (
  //       <select
  //         onChange={this.props.onCharSelect}
  //         value={this.props.selectedChar}
  //         className={this.props.side}
  //       >
  //         {this.state.characters.map(char => (
  //           <option key={char.id} value={char.id}>
  //             {char.name}
  //           </option>
  //         ))}
  //       </select>
  //     );
  //   } else if (
  //     !this.state.isLoading &&
  //     (!this.state.characters || this.state.characters.length === 0)
  //   ) {
  //     content = <p>Could not fetch any data.</p>;
  //   }
  //   return content;
  // }
  let content = <p>Loading characters...</p>;

  if (
      !isLoading &&
      loadedChars &&
      loadedChars.length > 0
  ) {
    content = (
        <select
            onChange={props.onCharSelect}
            value={props.selectedChar}
            className={props.side}
        >
          {loadedChars.map(char => (
              <option key={char.id} value={char.id}>
                {char.name}
              </option>
          ))}
        </select>
    );
  } else if (
      !isLoading &&
      (!loadedChars || loadedChars.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;

};

export default CharPicker;
