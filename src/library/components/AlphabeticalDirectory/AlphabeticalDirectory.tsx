
import React from "react";

import { AlphabeticalDirectoryProps } from "./AlphabeticalDirectory.types";
import * as Styles from "./AlphabeticalDirectory.styles";

const AlphabeticalDirectory: React.FC<AlphabeticalDirectoryProps> = ({ data }) => {
    
    // makes sure everything is in the right order
    const sortedData = data.sort(function(a, b){
        if(a.group.toLowerCase() < b.group.toLowerCase()) { return -1; }
        if(a.group.toLowerCase() > b.group.toLowerCase()) { return 1; }
        return 0;
    }).map(letterData => {
        letterData.children.sort(function(a, b){
            if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
            if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
            return 0;
        })

        return letterData
    });


    return (


    <Styles.Container data-testid="AlphabeticalDirectory">
 

    {sortedData.map((letter,i) => 
        <Styles.Row key={i}>
            <Styles.Letter>{letter.group}</Styles.Letter>
            <Styles.Data>
                {letter.children.map((letterData,i) => 
                        <Styles.Link key={i} href={letterData.url} className={(i > letter.children.length / 2) ? 'second-column' : 'first-column'}>
                            {letterData.title}
                        </Styles.Link>
                )}
            </Styles.Data>
        </Styles.Row>
    )}
    </Styles.Container>
)
    };

export default AlphabeticalDirectory;

