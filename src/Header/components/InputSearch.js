import './Input.css'
import Input from '../../common/Input';
import Button from '../../common/Button';
import { useUiContext } from '../../Context/UiProvider';
const InputSearch = ({input, inputHandler, onClickEventHandler, closeVisibleForm}) => {
    const {toggleInputVisibility} = useUiContext();
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
            <span className="close-btn" onClick={() => toggleInputVisibility(false)}>×</span>
        </div>
        <Button size="medium" type="primary" onClick={onClickEventHandler}>
            SEARCH
        </Button>
        </div>
    )
}

export default InputSearch;