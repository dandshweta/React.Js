import { useEffect, useState } from "react";

function TimerComponent() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Check if there is a start time stored in localStorage
    const startTime = localStorage.getItem("startTime");

    if (startTime) {
      // Calculate the elapsed time
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(startTime);
      setElapsedTime(elapsedTime);
    } else {
      // If there is no start time, set a new one in localStorage
      localStorage.setItem("startTime", new Date().getTime());
    }

    // Add an event listener for page reloads
    window.addEventListener("beforeunload", handlePageReload);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("beforeunload", handlePageReload);
    };
  }, []);

  const handlePageReload = () => {
    // Calculate the total time spent on the website
    const currentTime = new Date().getTime();
    const totalTime =
      elapsedTime + (currentTime - parseInt(localStorage.getItem("startTime")));

    // Display the total time spent on the console
    console.log(`Total time spent on the website: ${totalTime} milliseconds`);
  };

  // Convert milliseconds to seconds for display
  const seconds = parseInt(elapsedTime / 1000);

  return (
    <div>
      <h1>Time Spent on Website</h1>
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
}

export default TimerComponent;
