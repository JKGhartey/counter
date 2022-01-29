import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(true);

  console.log(submit);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          {submit ? (
            <div className="name">
              <input
                className="input"
                placeholder="Enter your name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="submit"
                type="submit"
                onClick={() => setSubmit(false)}
              />
            </div>
          ) : (
            ""
          )}
        </label>
      </form>
      <h1>Welcome {name} !</h1>
    </>
  );
};
export default Greeting;
