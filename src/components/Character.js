import React, { useState, useEffect } from 'react';

import { useHttp } from '../hooks/http';
import Summary from './Summary';

// class Character extends Component {
const Character = props =>  {
  // state = { loadedCharacter: {}, isLoading: false };
  // const [loadedCharacter, setLoadedCharacter] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // console.log('Rendering...');

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   return (
  //     nextProps.selectedChar !== this.props.selectedChar ||
  //     nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
  //     nextState.isLoading !== this.state.isLoading
  //   );
  // }

  const [isLoading, fetchedData] = useHttp('https://swapi.co/api/people/' + props.selectedChar, [props.selectedChar]);

  let loadedCharacter = null;

  if (fetchedData) {
    loadedCharacter = {
      id: props.selectedChar,
      name: fetchedData.name,
      height: fetchedData.height,
      colors: {
        hair: fetchedData.hair_color,
        skin: fetchedData.skin_color
      },
      gender: fetchedData.gender,
      movieCount: fetchedData.films.length
    };
  }

  // // fetchData = () => {
  // const fetchData = () => {
  //   console.log(
  //       'Sending Http request for new character with id ' +
  //       props.selectedChar
  //   );
  //   // this.setState({ isLoading: true });
  //   setIsLoading(true);
  //   fetch('https://swapi.co/api/people/' + props.selectedChar)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Could not fetch person!');
  //         }
  //         return response.json();
  //       })
  //       .then(charData => {
  //         const loadedCharacter = {
  //           id: props.selectedChar,
  //           name: charData.name,
  //           height: charData.height,
  //           colors: {
  //             hair: charData.hair_color,
  //             skin: charData.skin_color
  //           },
  //           gender: charData.gender,
  //           movieCount: charData.films.length
  //         };
  //         // this.setState({ loadedCharacter: loadedCharacter, isLoading: false });
  //         setIsLoading(false);
  //         setLoadedCharacter(loadedCharacter);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         setIsLoading(false);
  //       });
  // };

  // useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

  // componentDidUpdate(prevProps) {
  //   console.log('Component did update');
  //   if (prevProps.selectedChar !== this.props.selectedChar) {
  //     this.fetchData();
  //   }
  // }
/*  useEffect(() => {
    fetchData();
    return () => {
      // It will run right before the useEffect got run the next time
      console.log('Cleaning up...');
    }
  }, [props.selectedChar]);*/

  // componentDidMount() {
  //   this.fetchData();
  // }
/*  useEffect(() => {
    fetchData();
  }, []);*/

  // componentWillUnmount() {
  //   console.log('Too soon...');
  // }
  // If you only want to do componentWillUnmount, follow this:
  useEffect(() => {
    return () => {
      console.log('component did unmount');
    }
  }, []);


  // render() {
  //   let content = <p>Loading Character...</p>;
  //
  //   if (!this.state.isLoading && this.state.loadedCharacter.id) {
  //     content = (
  //       <Summary
  //         name={this.state.loadedCharacter.name}
  //         gender={this.state.loadedCharacter.gender}
  //         height={this.state.loadedCharacter.height}
  //         hairColor={this.state.loadedCharacter.colors.hair}
  //         skinColor={this.state.loadedCharacter.colors.skin}
  //         movieCount={this.state.loadedCharacter.movieCount}
  //       />
  //     );
  //   } else if (!this.state.isLoading && !this.state.loadedCharacter.id) {
  //     content = <p>Failed to fetch character.</p>;
  //   }
  //   return content;
  // }
  let content = <p>Loading Character...</p>;

  // if (!isLoading && loadedCharacter.id) {
  if (!isLoading && loadedCharacter) {
    content = (
        <Summary
            name={loadedCharacter.name}
            gender={loadedCharacter.gender}
            height={loadedCharacter.height}
            hairColor={loadedCharacter.colors.hair}
            skinColor={loadedCharacter.colors.skin}
            movieCount={loadedCharacter.movieCount}
        />
    );
  // } else if (!isLoading && !loadedCharacter.id) {
  } else if (!isLoading && !loadedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

// export default Character;

// Class components can bail out from rendering when their input props are the same using PureComponent or shouldComponentUpdate.
// Now you can do the same with function components by wrapping them in React.memo.
export default React.memo(Character);

// // Or you can do this, but it work as a opposite logic of the shouldComponentUpdate
// // shouldComponentUpdate(nextProps, nextState) {
// //   console.log('shouldComponentUpdate');
// //   return (
// //     nextProps.selectedChar !== this.props.selectedChar ||
// //     nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
// //     nextState.isLoading !== this.state.isLoading
// //   );
// // }
// export default React.memo(Character, (prevProps, nextProps) => {
//   // You return true if you don't want to revender....
//   return nextProps.selectedChar === prevProps.selectedChar
// });
