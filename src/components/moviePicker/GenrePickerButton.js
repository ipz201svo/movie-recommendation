import { ButtonCheckbox } from "../primitives/checkbox";

const GenrePickerButton = ({ genre, onToggle }) => {
    const { id, name } = genre;

    return (
        <ButtonCheckbox
            id={`genre_${id}`}
            handleClick={() => onToggle(id)}
            labelText={name}
        />
    );
};

export default GenrePickerButton;
