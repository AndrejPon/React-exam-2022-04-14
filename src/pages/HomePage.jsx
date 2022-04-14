import { useEffect, useState } from 'react';
import Container from '../components/UI/Container';
import { getFetch } from '../helpers/helper';

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    const skillsFromDb = await getFetch('content/skills');
    setSkillsArr(skillsFromDb);
  }

  return <Container>HomePage</Container>;
}

export default HomePage;
