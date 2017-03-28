export default () =>
    fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`)
        .then(r => r.json())
        .catch(er => { throw new Error(er); });

/* ERROR CASE

export default () => Promise.reject('Load words ERROR');
*/
