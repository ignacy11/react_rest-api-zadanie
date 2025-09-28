import Entry from "./Entry.tsx";

const Table = ({nameFilteredCats}) => {
    return(
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Breed</th>
                <th>Description</th>
                <th>Temperament</th>
                <th>Country of origin</th>
            </tr>
            </thead>
            <tbody>
            {
                nameFilteredCats.map((v) => (
                    <Entry
                        key = {v.reference_image_id}
                        reference_image_id= {v.reference_image_id}
                        name = {v.name}
                        description = {v.description}
                        temperament = {v.temperament}
                        origin= {v.origin}
                    />)
                )
            }
            </tbody>
        </table>
    )
}

export default Table