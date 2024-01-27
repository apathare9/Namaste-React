//  USe state issue --

import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>

      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
      />

      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of Instamart. The team has 50 members...."
        }
      />
    </div>
  );
};

export default Instamart;
