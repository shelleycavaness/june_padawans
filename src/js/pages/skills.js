import React, {useState,useEffect } from 'react';
import api from "../utils/api"


export const Skills = () => {
  const [arrayRubrics, setRubrics] = useState([]);
  const [arrySkills, setSkills]  = useState([]);
//  http://localhost:3010/api/skills/module/2
// useEffect prepares the data before displaying it  
useEffect(() => {
  api.get("/modules/")
    .then((modulesResponse) => {
      // setRubrics(moduleResponse.data.data);
      let modules = modulesResponse.data.data;
      let modulesWithSkills = [];
      let x = 0;
      // console.log('modulesResponse', modulesResponse)
    modules.forEach((module, index) => {
      api.get("/skills/module/" + module.id)
      .then((skillsResponse) => {
        let skills = skillsResponse.data.data;
        // console.log('############skillsResponse', skillsResponse)
        let moduleWithSkills = { ...module, skills: skills };
        console.log('=======================:', moduleWithSkills)
        modulesWithSkills.push(moduleWithSkills);
        x++;
        if (x === modules.length) { //when all 3 modules are iterated stop and set them to render
          // setRubrics(modulesWithSkills);
        }
      });
    });
  });
}, []);

  return (
    <div>
      lo
    </div>
  )
}
export default Skills