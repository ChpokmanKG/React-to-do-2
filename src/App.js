import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import AddTask from "./containers/addTask";
import Tasks from './containers/showTasks';
import Modal from "./components/Modal";
import Footer from './components/Footer';
import {CSSTransitionGroup} from 'react-transition-group';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Tasks />
      <ModalSwitch />
      <Footer />
    </BrowserRouter>
  );
}

function ModalSwitch() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
      <CSSTransitionGroup
        transitionName="modal"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={500}>
        <Switch key={location.key} location={location}>
          {background && <Route path="/add-task" children={<Modal Component={AddTask} title="Добавить задачу"/>}/>}
        </Switch>
      </CSSTransitionGroup>
  )
}

export default App;
