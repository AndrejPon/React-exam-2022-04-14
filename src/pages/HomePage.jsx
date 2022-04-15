import { useEffect, useState } from 'react';
import CardsList from '../components/CardsList/CardsList';
import Container from '../components/UI/Container/Container';
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

  return (
    <Container>
      <h2 className='page-title'>Your skills</h2>
      <CardsList items={skillsArr} />
    </Container>
  );
}

export default HomePage;
