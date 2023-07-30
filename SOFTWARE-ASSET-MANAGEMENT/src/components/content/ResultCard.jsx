import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ResultCard(props) {
  const { names } = props;
  return (
    <div className="d-flex justify-content-start">
      {names.map(({ name, number, address, website }) => {
        return (
          <div key={number}>
            <Card
              bg="Primary"
              key={number}
              text={name}
              style={{ width: '18rem', 'margin-left': '5rem' }}
              className="mb-2"
            >
              <Card.Header>{name}</Card.Header>
              <Card.Body>
                <Card.Title>{name} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

ResultCard.propTypes = {
  names: PropTypes.array.isRequired,
};

export default ResultCard;
