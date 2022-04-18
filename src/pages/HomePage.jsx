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
    // console.log('skillsFromDb', skillsArr);
  }

  function onDeleteHandler(skillsIdToDelete) {
    setSkillsArr((prevState) => {
      return prevState.filter((skillObj) => skillObj.id !== skillsIdToDelete);
    });
  }

  return (
    <Container>
      <h2 className='page-title'>Your skills</h2>
      <CardsList items={skillsArr} onDelete={onDeleteHandler} />
    </Container>
  );
}

export default HomePage;
