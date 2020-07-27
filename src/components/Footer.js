import React from "react";
import {Link, useLocation} from "react-router-dom";


const Footer = () => {

  const location = useLocation();

  return (
    <footer className="fixed-bottom add-task-wrap w-100 pt-3 pb-3 bg-white border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to={{pathname:'/add-task',state: { background: location }}} className="btn btn-block btn-primary">Добавить задачу</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
