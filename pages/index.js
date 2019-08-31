import React from 'react';
const Joi = require('@hapi/joi');
// import Home from 'components/atoms';

const schema = Joi.object().keys({
  url: Joi.string().required(),
});


export default ()=>{
  return (
    <form action="/parse" methos="post" onSubmit={(event => {
      event.preventDefault();
      const url = document.getElementById('article-url').value;
      const result = Joi.validate({ url }, schema);
    })}>
      <fieldset>
        <label htmlFor="article-url">Введите URL статьи:</label>
        <input 
          autoFocus
          id="article-url" 
          name="url"
          type="url"
          placeholder="https://www.smashingmagazine.com/2019/07/essential-guide-javascript-newest-data-type-bigint/"
          pattern="http(s)?://.*"
          size="120"
          required
          spellCheck="false"
           />
        <button>сгенерировать slug</button>
      </fieldset>
      <fieldset>
        <label htmlFor="article-slug">Слаг:</label>
        <input 
          autoFocus
          id="article-slug" 
          name="slug"
          type="text"
          placeholder=""
          size="80"
          required
          spellCheck="false"
           />
        <button>распарсить статью</button>
      </fieldset>
      <fieldset>
        <label htmlFor="article-tag">Добавить тэг:</label>
        <input 
          autoFocus
          id="article-tag" 
          name="tag"
          type="text"
          placeholder=""
          size="80"
          required
          spellCheck="false"
           />
        <button>распарсить статью</button>
      </fieldset>
    </form>
  );
};