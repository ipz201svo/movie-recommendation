const ButtonCheckbox = ({ id, isChecked = false, labelText, handleClick }) => {
    return (
        <>
            <input
                type="checkbox"
                className="btn-check"
                onClick={handleClick}
                id={id}
                autoComplete="off"
            />
            <label className="btn btn-outline-light" htmlFor={id}>{labelText}</label>
        </>
    );
};

export default ButtonCheckbox;
