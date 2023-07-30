import PropTypes from 'prop-types';
import ResultCard from './ResultCard';

function ResultContainer(props) {
  const { data } = props;
  return (
    <div>
      {data.map(({ id, family, names }) => {
        return (
          <div key={id}>
            <h4 style={{ 'margin-left': '5rem', 'margin-top': '2rem' }}>
              {family}
            </h4>
            <ResultCard key={id} names={names} />
          </div>
        );
      })}
    </div>
  );
}

ResultContainer.propTypes = {
  data: PropTypes.array.isRequired,
};
export default ResultContainer;
