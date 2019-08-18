import React from 'react';
// import Home from 'components/atoms';

export default ()=>{
  return (
    <form action="/parse" methos="post">
      <fieldset>
        <label for="article-url">Введите URL статьи:</label>
        <input 
          autoFocus
          id="article-url" 
          name="url"
          type="url"
          placeholder="https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/"
          pattern="http(s)?://.*"
          size="120"
          required
          spellcheckSection="false"
           />
        <button>сгенерировать slug</button>
      </fieldset>
      <fieldset>
        <label for="article-url">Слаг:</label>
        <input 
          autoFocus
          id="article-url" 
          name="url"
          type="url"
          placeholder=""
          pattern="http(s)?://.*"
          size="80"
          required
          spellcheckSection="false"
           />
        <button>распарсить статью</button>
      </fieldset>
      <fieldset>
        <label for="article-url">Добавить тэг:</label>
        <input 
          autoFocus
          id="article-url" 
          name="url"
          type="url"
          placeholder=""
          pattern="http(s)?://.*"
          size="80"
          required
          spellcheckSection="false"
           />
        <button>распарсить статью</button>
      </fieldset>
    </form>
  );
};