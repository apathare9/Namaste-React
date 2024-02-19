//  USe state issue --

import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-md">{title}</h3>

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
  const [visibleSection, setIsVisibleSection] = useState();

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section of Instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />

      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of Instamart. The team has 50 members...."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />

      <Section
        title={"Carrers"}
        description={
          "This is the team section of Instamart. The team has 50 members...."
        }
        isVisible={visibleSection === "carrers"}
        setIsVisible={() => setIsVisibleSection("carrers")}
      />
    </div>
  );
};

export default Instamart;
