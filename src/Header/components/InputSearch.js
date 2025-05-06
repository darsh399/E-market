import './Input.css'
import Input from '../../common/Input';
import Button from '../../common/Button';
const InputSearch = ({input, inputHandler, onClickEventHandler, closeVisibleForm}) => {
    return(
        <div className="header-search-popup">
        <div className="header-search-popup-searchdiv">
            <Input
                type="input"
                typeText='text'
                value={input}
                onChangeInput={(e) =>inputHandler(e.target.value)}
                placeholder="Search Here"
            />
            <span className="close-btn" onClick={() => closeVisibleForm(false)}>×</span>
        </div>
        <Button size="medium" type="primary" onClick={onClickEventHandler}>
            SEARCH
        </Button>
        </div>
    )
}

export default InputSearch;