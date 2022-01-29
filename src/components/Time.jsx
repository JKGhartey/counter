import React, { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className="date">
      <p>
        {date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p>
        {date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
};

export default Time;
