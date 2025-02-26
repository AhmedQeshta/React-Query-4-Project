import React from 'react';

function Form({ handleSubmit, title, setTitle }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
