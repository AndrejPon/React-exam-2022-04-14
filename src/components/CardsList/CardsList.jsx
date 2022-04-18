import Card from '../Card/Card';
import Container from '../UI/Container/Container';
import Grid from '../UI/Grid/Grid';

function CardsList(props) {
  return (
    <Container>
      <Grid>
        {props.items.map((skillObj) => (
          <Card key={skillObj.id} {...skillObj} />
        ))}
      </Grid>
    </Container>
  );
}

export default CardsList;
