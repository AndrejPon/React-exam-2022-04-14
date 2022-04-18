import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Button from '../UI/Button/Button';
import Container from '../UI/Container/Container';
import Grid from '../UI/Grid/Grid';

function CardsList(props) {
  if (props.items.length === 0) {
    <div>
      <h2>There are no skills to display...</h2>
      <p>
        Please
        <Link to={'/add'}>
          <Button>Add</Button>
        </Link>
        your first skill!
      </p>
    </div>;
  }

  return (
    <Container>
      <Grid>
        {props.items.map((skillObj) => (
          <Card key={skillObj.id} {...skillObj} onDelete={props.onDelete} />
        ))}
      </Grid>
    </Container>
  );
}

export default CardsList;
