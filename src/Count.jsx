import { useEffect } from "react";

function Count({ number }) {
  useEffect(() => {
    document.title = `You clicked ${number} times.`;

    // Cleanup function to reset the document title when the component unmounts or number changes
    return () => {
      document.title = "React App";
    };
  }, [number]);

  return <div>{number}</div>;
}

export default Count;
