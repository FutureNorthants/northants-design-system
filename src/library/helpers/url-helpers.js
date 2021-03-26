import Uri from 'jsuri';

/**
 * We're currently working by sending a request to the server to display what we want on the page.
 * This means that url params are important and we dont want to be getting confused.
 * I'm proposing we use this helper to route all window.location redirects through to keep our sanity!
 */

 // https://github.com/derek-watson/jsUri

 export const handleParams = (postTo, newParams) => {
   var uri = new Uri(window.location)

    // check where we're posting to (news / search etc)
   const path = (uri.path().substring(0,1) === '/') ? uri.path().substring(1) : uri.path();
   if(postTo !== path) {
      postTo = (postTo.substring(0,1) === '/') ? postTo.substring(1) : postTo;
      // console.log('updating path to /' + postTo)
      uri.setPath(`/${postTo}`);
   }

   // first check for existance of any query params
   if(uri.query() === '') {
      newParams.forEach(param => {
         // console.info('No existing params adding new ' + param.key + ' value with ' + param.value)
         uri.addQueryParam(param.key, param.value) 
      });
   } else {
      // we already have params
      newParams.forEach(param => {    
            if(uri.hasQueryParam(param.key)) {
               // param already exists but value not null
               if(uri.getQueryParamValue(param.key) !== param.value) {
                     // param not the same - update it
                     // console.info('Updating ' + param.key + ' value with ' + param.value)
                     uri.replaceQueryParam(param.key, param.value);
               }
            } else {
               // param doesnt exist - add it
               // console.info('Adding new ' + param.key + ' value with ' + param.value)
               uri.addQueryParam(param.key, param.value);
            }
      });


   }

   // if anything has no value remove the url param for it
   const removeEmpty = uri.queryPairs.filter(query => query[1] === "");
   removeEmpty.map(emptyQuery => uri.deleteQueryParam(emptyQuery[0]))

   // console.log(uri.toString());
   window.location.href = uri.toString();

 }

 /**
  * Remove specific key from the url
  * @param {array of values to remove} params 
  */
 export const removeParams = (params) => {
   var uri = new Uri(window.location);
    [...params].map(param => {
      uri.deleteQueryParam(param);
    })
   //  console.log(uri.toString());
    window.location.href = uri.toString();
 }

 /**
  * Removes a specific value from a given parameter
  * @param {*} param 
  * @param {*} value 
  */
 export const removeValueFromParam = (param, searchValue) => {
   var uri = new Uri(window.location);
   if(uri.hasQueryParam(param)) {
      let vals = uri.getQueryParamValues(param);

      if(vals.length === 1 && vals[0].includes(',')) {
         vals = vals[0].split(',')
      }

      let removedVal = vals.filter(val => val !== searchValue)

      if(removedVal.length === 0) {
         uri.deleteQueryParam(param);
         window.location.href = uri.toString();
      }
      else {
         uri.replaceQueryParam(param, removedVal)
         window.location.href = uri.toString();
      }

   }
 }

 /**
  * From a list of params - returns how many of them are set in the url
  * @param {*} params 
  */
 export const countParams = (params) => {
   let count = 0;
   var uri = new Uri(window.location);
   [...params].map(param => {
     if(uri.hasQueryParam(param)) count++
   })
   return count;
 }

  /**
  * 
  * Get plain values from url
  * @param {*} param 
  * @returns 
  */
   export const getParamValue = (param) => {
      const uri = new Uri(window.location);
      if(uri.hasQueryParam(param)) {
         return uri.getQueryParamValues(param);
      }
      return []
    }

 /**
  * 
  * Get an array of all the values for a given dropdown parameter
  * @param {*} param 
  * @returns 
  */
 export const getDropDownValues = (param) => {
   const uri = new Uri(window.location);
   if(uri.hasQueryParam(param)) {
      return uri.getQueryParamValues(param);
   }
   return []
 }

  /**
  * 
  * Get an array of all the values for a given checkbox parameter
  * @param {*} param 
  * @returns 
  */
   export const getCheckboxValues = (param) => {
      const uri = new Uri(window.location);
      if(uri.hasQueryParam(param)) {
         return uri.getQueryParamValues(param)[0].split(',');
      }
      return []
    }
   


 export const deSlug = (slug) => {
   var words = slug.split('-');
 
   for (var i = 0; i < words.length; i++) {
     var word = words[i];
     words[i] = word.charAt(0).toUpperCase() + word.slice(1);
   }
 
   return words.join(' ');
 }