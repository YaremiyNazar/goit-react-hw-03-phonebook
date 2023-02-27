import PropTypes from 'prop-types';

const Filter = ({ value, onChange}) => {
  return (
    <div>
      <p>Find contats by name</p>
      <input 
        onChange={onChange}
        type="text"    
        value={value}
        required
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
