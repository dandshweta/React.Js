import { useEffect, useState } from "react";

function TimerComp() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = localStorage.getItem("startTime");

    if (startTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(startTime);
      setElapsedTime(elapsedTime);
    } else {
      localStorage.setItem("startTime", new Date().getTime());
    }

    window.addEventListener("beforeunload", handlePageReload);

    return () => {
      window.removeEventListener("beforeunload", handlePageReload);
    };
  }, []);

  const handlePageReload = () => {
    const currentTime = new Date().getTime();
    const totalTime =
      elapsedTime + (currentTime - parseInt(localStorage.getItem("startTime")));

    console.log(`Total time spent on the website: ${totalTime} milliseconds`);
  };

  const seconds = parseInt(elapsedTime / 1000);

  return (
    <div>
      <h1>Time Spent on Website</h1>
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
}

export default TimerComp;
