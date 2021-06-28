

  /**
   * A temporary helper to format the data how we want it for the alphabetic listing
   * @param {*} data 
   */
  export const correctedWestData = (data) => {

    // NB I used this to convert the csv to json https://www.convertcsv.com/csv-to-json.htm
    // const correctedWestData = data.reduce((data, d) => ({...data, [d.Parish]: d}), {} );
    const sortWestData = data.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.parish[0];
        // if there is no property in accumulator with this letter create it
        if(!r[group]) r[group] = {group, children: [{title: e.parish, values: e.values}]}
        // if there is push current element to children array for that letter
        else r[group].children.push({title: e.parish, values:e.values});
        // return accumulator
        return r;
    }, {});


    const correctedWestData = Object.keys(sortWestData).map((west,i) => {
        return sortWestData[west];
    });

    return correctedWestData;


  }