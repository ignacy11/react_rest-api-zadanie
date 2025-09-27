interface EntryProps {
    image: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
}

const Entry = ({image, name, description, temperament, origin}: EntryProps ) => {
    return (
        <>
            <tr>
                <td><img src={image} alt={""}></img></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{temperament}</td>
                <td>{origin}</td>
            </tr>
        </>
    )
}

export default Entry