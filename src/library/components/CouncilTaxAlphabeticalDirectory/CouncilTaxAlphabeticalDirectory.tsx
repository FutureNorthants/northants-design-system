
import React, {useState} from "react";

import { CouncilTaxAlphabeticalDirectoryProps } from "./CouncilTaxAlphabeticalDirectory.types";
import * as Styles from "./CouncilTaxAlphabeticalDirectory.styles";
import Heading from "../../components/Heading/Heading";

const CouncilTaxAlphabeticalDirectory: React.FC<CouncilTaxAlphabeticalDirectoryProps>  = ({ data }) => {

    const [parish, setCurrentParish] = useState(null);
    
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
    {parish === null ?    
        <>
            {sortedData.map((letter,i) => 
                <Styles.Row key={i}>
                    <Styles.Letter>{letter.group}</Styles.Letter>
                    <Styles.Data>
                        {letter.children.map((letterData,i) => 
                                <Styles.Link href="#" onClick={() => setCurrentParish(letterData)} key={i}>
                                    {letterData.title}
                                </Styles.Link>
                        )}
                    </Styles.Data>
                </Styles.Row>
            )}
        </>
    :
        <>
            <Styles.BackButton onClick={() => setCurrentParish(null)}>Back</Styles.BackButton>

            {/* <Heading level={2} text={`Council tax charges for ${parish.title}`} /> */}

            {/* this assumes that the first year listed is the latest / that we're even going to get more than the latest years data */}
            {/* this data will need to be re-formed when we get the final data structures */}
            <div className="table-container">
                <table>
                    <caption>{`Council tax charges for ${parish.title}`}</caption>
                    <thead>
                    <tr>
                        <th scope="col">Bands</th>
                        <th scope="col">{parish.values[0].financialYear}</th>
                    </tr>
                    </thead>
                    <tbody>

                    {Object.keys(parish.values[0].bands).map((vals, i) =>
                          <tr key={i}>
                            <th scope="row">{vals}</th>
                            <td>{parish.values[0].bands[vals]}</td>
                          </tr>
                    )} 
                    
                    </tbody>
                </table>
            </div>

        </>
    }
    </Styles.Container>
)
    };


export default CouncilTaxAlphabeticalDirectory;

