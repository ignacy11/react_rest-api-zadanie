interface EntryProps {
    reference_image_id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
}

const Entry = ({reference_image_id, name, description, temperament, origin}: EntryProps ) => {
    return (
        <>
            <tr>
                <td className={"image-td"}><img src={`https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`} alt={"Image not found"}/></td>
                <td className={"breed-td"}><span>{name}</span></td>
                <td className={"description-td"}><span>{description}</span></td>
                <td className={"temperament-td"}><span>{temperament}</span></td>
                <td className={"origin-td"}><span>{origin}</span></td>
            </tr>
        </>
    )
}

export default Entry