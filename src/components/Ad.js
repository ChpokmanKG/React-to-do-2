import React, {useEffect, useState} from "react";

const Ad = ({close,showTime = 3000}) => {

  let [restTime,setRestTime] = useState((showTime / 1000));

  const progress = (id,duration) => {
    const progressBar = document.getElementById(id);
    progressBar.style.animationDuration = duration;
    progressBar.style.animationPlayState = 'running';
  }

  useEffect(() => {

    const timeOut = setTimeout(close,showTime);

    const countDown = setInterval(() => {
      restTime--;
      setRestTime(restTime);
    },1000)

    progress('prog',`${showTime / 1000}s`);

    if(!restTime) close();

    return () => {
      clearTimeout(timeOut);
      clearInterval(countDown);
    }
  },[close,showTime,restTime])

  return (
    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="ad text-decoration-none position-fixed w-100 h-100 bg-dark d-flex justify-content-center align-items-center flex-column">

      <div className="progress fixed-top ml-3 mr-3 mt-3">
        <div className="progress-bar ad__progress-bar" id={"prog"}/>
      </div>

      <div className="pl-3 pr-3 d-flex flex-column-landscape">

        <div className="col-landscape d-flex justify-content-center align-items-center">
          <img
            src='https://24smi.org/public/media/celebrity/2020/03/17/ndyuq11dpxep-rikardo-milos.jpg'
            alt="Ricardo" className="img-fluid ad__img"/>
        </div>

        <div className="col-landscape d-flex justify-content-center align-items-center">
          <div className="text-center">
            <p className="mb-0 mt-3">Этот мужчина завоевывает сердца дам по щелчку пальцев... Оказывается нужно всего лишь...</p>
            <p className="mb-0 text-light">Реклама закроется через {restTime}</p>
          </div>
        </div>

      </div>

    </a>
  )
};

export default Ad;
