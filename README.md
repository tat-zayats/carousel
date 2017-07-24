# Carousel [Live demo](https://tat-zayats.github.io/carousel/)

**Requirements:**
* Необходимо реализовать карусельку, которая будет отображать карточки с английскими словами. В один момент отображаются две карточки.
* На каждой карточке отображается английское слово, и инпут в который необходимо ввести перевод слова. При сабмите формы делается запрос на перевод слова и сравнивается с введенным словом. При успешной валидации подсветить карточку зеленым, при неуспешной - красным.
* Добавить кнопку обновить, получающую новые 5 карточек. Кнопка "обновить" должна быть отключена, если обновление сейчас уже в процессе
* Если человек успешно разгадал за сессию 5 или более слов - выводить попап (красивый, не confirm), предлагающий вступить в группу Javascript.Ninja в ВК. * Закрывать попап либо при клике по крестику, либо при клике по ссылке. 
* Для получения списка рандомных слов использовать `http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`
* Для получения перевода `https://glosbe.com/gapi/translate?from=eng&dest=rus&format=json&phrase=${СЛОВО ДЛЯ ПЕРЕВОДА}&pretty=true&pageSize=1&callback=test`. Необходимо сравнивать введенный перевод с каждым предложенным вариантом из ответа.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
