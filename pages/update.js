import UpdateItem from '../components/UpdateItem';

const Update = (props) => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

// is this supposed to be sell?
export default Update;