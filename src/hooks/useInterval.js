import { useEffect } from "react";

function useInterval(callback, delay) {
  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => callback(), delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay, callback]);
}

export default useInterval;
