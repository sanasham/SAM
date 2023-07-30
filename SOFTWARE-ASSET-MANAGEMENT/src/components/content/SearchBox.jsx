import { FormControl } from 'react-bootstrap';
import './SearchBox.css'; // Custom CSS for the search box
function SearchBox() {
  return (
    <div className="search-box w-100">
      <FormControl
        type="text"
        placeholder="Search..."
        className="rounded-pill"
      />
    </div>
  );
}

export default SearchBox;
