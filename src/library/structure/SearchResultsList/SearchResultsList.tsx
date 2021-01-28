
import React from "react";

import { SearchResultsListProps } from "./SearchResultsList.types";
import * as Styles from "./SearchResultsList.styles";
import SignpostLinksList from "../../components/SignpostLinksList/SignpostLinksList";

const SearchResultsList: React.FC<SearchResultsListProps> = ({ searchTerm, results }) => {

    const totalResults = results.length;

    if(totalResults === 0) {
        return (
            <Styles.Container data-testid="SearchResultsList">
                <Styles.ResultInfo>No results found</Styles.ResultInfo>
            </Styles.Container>
        );
    }
    else {
        return (

            <Styles.Container data-testid="SearchResultsList">


                <Styles.ResultInfo>{totalResults} results for '{searchTerm}'</Styles.ResultInfo>
                
                {results.map((result,i) => 
                    
                    <Styles.Result key={i}>
                        <Styles.Title href={result.link}>{result.title}</Styles.Title>
                        <Styles.Summary>{result.summary}</Styles.Summary>
                        {result.signpostLinksArray &&
                            <SignpostLinksList signpostLinksArray={result.signpostLinksArray} />
                        }
                    </Styles.Result>
                    
                )}

            
            
    
        </Styles.Container>
        );
    }

}

export default SearchResultsList;

