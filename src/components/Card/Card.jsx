import css from './Card.module.css';
function Card(props) {
  function onDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className={css.card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <i onClick={onDelete} className='fa fa-trash' aria-hidden='true'></i>
    </div>
  );
}

export default Card;
