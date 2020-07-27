import React from 'react';


const Form = ({formSubmit,input,setInput,buttonText}) => {

  const {title,date} = input;
  console.log(date);

  return (
    <form onSubmit={formSubmit}>
      <div className="form-group">
        <input
          placeholder="Добавить задачу"
          value={title}
          onChange={e => setInput({...input, title: e.target.value})}
          className="form-control mb-2" type="text"
          minLength={5} required/>
      </div>
      <div className="form-group">
        <input type='date'
               value={date} onChange={e => setInput({...input,date: e.target.value})}
               className="form-control" required/>
      </div>
      <button type="submit" className="btn btn-primary form-control">{buttonText}</button>
    </form>
  )
}

export default Form;
