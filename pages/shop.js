import Items from '../components/Items';

// TODO -- consider renaming to STORE ??
const Home = props => {
  return (
    <div>
      <Items page={parseFloat(props.query.page) || 1} />
    </div>
  );
};

export default Home;