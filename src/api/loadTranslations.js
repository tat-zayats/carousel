import fetchJsonp from 'fetch-jsonp';

export default word =>
    fetchJsonp(`https://glosbe.com/gapi/translate?from=eng&dest=rus&format=json&phrase=${word}&pretty=true&pageSize=1`)
        .then(r => r.json())
        .catch(er => { throw new Error(er); });

/* ERROR CASE

export default () => Promise.reject('Load translations ERROR');
*/
