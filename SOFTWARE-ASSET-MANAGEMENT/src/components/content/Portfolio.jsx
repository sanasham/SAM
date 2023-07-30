import { useEffect, useState } from 'react';
import sampleData from '../static-data/sample.json';
import ResultContainer from './ResultContainer';

const fetchSampleData = () => Promise.resolve(() => sampleData);
function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSampleData().then((jsonData) => setData(jsonData));
  }, []);
  return (
    <div className="border">
      <h1>SAM Service Portfolio</h1>
      <ResultContainer data={data} />
    </div>
  );
}

export default Portfolio;
