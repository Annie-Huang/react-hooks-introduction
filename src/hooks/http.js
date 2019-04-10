import { useState } from 'react';

// use 'use' prefix to imply this is a hook. You don't have to but will be easy to read later.
export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    fetch('https://swapi.co/api/people')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        // .then(charData => {
        .then(data => {

            // const selectedCharacters = charData.results.slice(0, 5);
            // // this.setState({
            // //   characters: selectedCharacters.map((char, index) => ({
            // //     name: char.name,
            // //     id: index + 1
            // //   })),
            // //   isLoading: false
            // // });
            // setIsLoading(false);
            // setLoadedChars(selectedCharacters.map((char, index) => ({
            //     name: char.name,
            //     id: index + 1
            // })));

            setIsLoading(false);
            setFetchedData(data);
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        });
};
