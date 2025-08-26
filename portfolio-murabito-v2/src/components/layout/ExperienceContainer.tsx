import { useState } from "react";
import Experience, { IExperience } from "./Experience";

interface IExperienceContainer {
  experiences: IExperience[]
}

const ExperienceContainer = ({ experiences }: IExperienceContainer) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <>
      {experiences.map((experience, index) =>
        <Experience 
          key={index}
          title={experience.title}
          subtitle={experience.subtitle}
          description={experience.description}
          skills={experience.skills}
        />
      )}
      
    </>
  );
}

export default ExperienceContainer;