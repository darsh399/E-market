import './Input.css';

const Input = ({ type,name, value, placeholder, onChangeInput, tag , typeText }) => {

  const onChangeInputHandler = (e) => {
    onChangeInput(e);
  }
  return (
    <div className="input-wrapper">
      {tag && <span className="input-tag">{tag}</span>}
      {type === 'input' ? (
        <input
          name={name}
          type={typeText || 'text'}
          placeholder={placeholder}
          className="input-field"
          value={value}
          onChange = {onChangeInputHandler}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          onChange={onChangeInputHandler}
          className="textarea-field"
          cols="30"
          rows="10"
          value={value}
          name={name}
        />
      )}
    </div>
  );
};

export default Input;
