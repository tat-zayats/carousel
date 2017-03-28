import loadTranslations from './loadTranslations';

const isCorrect = (translation, translations) => {
    const correct = translations.tuc.filter(tr => {
                        if (!tr.phrase) { 
                            return;
                        }
                        return tr.phrase.text === translation; 
                    });
    return !!correct.length;
};

export default (word, translation) => 
    loadTranslations(word)
        .then(r => isCorrect(translation, r))
        .catch(er => { throw new Error(er); });

/* ERROR CASE

export default () => Promise.reject('Check translation ERROR');
*/
