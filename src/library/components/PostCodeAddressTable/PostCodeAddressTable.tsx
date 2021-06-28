
import React from "react";

import { PostCodeAddressTableProps } from "./PostCodeAddressTable.types";
import * as Styles from "./PostCodeAddressTable.styles";


import {usePostcodeAddressContext} from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';

const PostCodeAddressTable: React.FC<PostCodeAddressTableProps> = () => {
    const {postcodeValue: {state: {postcode}, actions: {setPostCode}}, resultsValue: {state: {results}, actions: {setResults}}} = usePostcodeAddressContext();

    const hasResults = (Object.keys(results).length > 0) ? true : false;
    
    return (
        <>
            {hasResults &&
                <Styles.Container data-testid="PostCodeAddressTable">
                     <div className="table-container">
                        <table>
                            <caption>List of addresses</caption>
                            <thead>
                            <tr>
                                <th scope="col">Address</th>
                                <th scope="col">Band</th>
                                <th scope="col">Annual charge</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.addresses.map((addr, i) => 

                                <tr key={i}>
                                <th scope="row">{addr.DPA.ADDRESS}</th>
                                <td>A</td>
                                <td>£1500.00</td>
                                </tr>                                                                  
                            )}
                           
                            </tbody>
                        </table>
                    </div>
                </Styles.Container>
            }
        </>
            
        )

};


export default PostCodeAddressTable;

