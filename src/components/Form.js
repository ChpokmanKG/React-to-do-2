import React from 'react';


const Form = ({formSubmit,input,setInput,buttonText}) => {

  return (
    <form onSubmit={formSubmit}>
      <div className="form-group">
        <input
          placeholder="Добавить задачу"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="form-control mb-2" type="text"
          minLength={5} required/>
        <button type="submit" className="btn btn-primary form-control">{buttonText}</button>
      </div>
    </form>
  )
}

export default Form;
