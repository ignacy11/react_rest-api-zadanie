import './App.css'
import Entry from "./Entry.tsx";
import {useEffect, useState} from "react";

interface Cat {
    url: string;
    image: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
}

interface CatAPIResponse {
    id: string;
    url: string;
    breeds: {
        weight: {
            imperial: string;
            metric: string;
        };
        id: string;
        name: string;
        cfa_url: string;
        vetstreet_url: string;
        vcahospitals_url: string;
        temperament: string;
        origin: string;
        country_codes: string;
        country_code: string;
        description: string;
        life_span: string;
        indoor: number;
        lap: number;
        alt_names: string;
        adaptability: number;
        affection_level: number;
        child_friendly: number;
        dog_friendly: number;
        energy_level: number;
        grooming: number;
        health_issues: number;
        intelligence: number;
        shedding_level: number;
        social_needs: number;
        stranger_friendly: number;
        vocalisation: number;
        experimental: number;
        hairless: number;
        natural: number;
        rare: number;
        rex: number;
        suppressed_tail: number;
        short_legs: number;
        wikipedia_url: string;
        hypoallergenic: number;
        reference_image_id: string;
    }[];
    width: number;
    height: number;
}

function App() {

    const api_key = '&api_key=live_mWlGIlpVKE9qVjGDoFmRm3JaRA0tVMRsXu5xc6WrGhpFpeM5l6GpaP4NFcNgGJ3s'

    const [cats, setCats] = useState<Cat[]>([])

    const BASE = `https://api.thecatapi.com/v1/images/search?limit=10${api_key}`



    const fetchDataFromAPI = () => {
        fetch(BASE)
            .then(response => response.json())
            .then((data: CatAPIResponse[]) => {
                const mappedData = data.map((item: CatAPIResponse) => ({
                    url: item.id,
                    image: item.url,
                    name: item.breeds[0]?.name || 'Unknown',
                    description: item.breeds[0]?.description || 'unknown',
                    temperament: item.breeds[0]?.temperament || 'unknown',
                    origin: item.breeds[0]?.origin || 'unknown',
                }));
                setCats(mappedData);
                console.log(mappedData);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchDataFromAPI()
    }, [])

    return (
        <>
            <header>
                <section className="header-group">
                    <h1>Cat Rest API</h1>
                    <button onClick={fetchDataFromAPI}>Fetch data</button>
                </section>
                <a href="https://github.com/ignacy11/react_rest-api-zadanie">GitHub</a>
            </header>
            <main>
                <table>
                    <tbody>
                    <tr>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Temperament</td>
                        <td>Country of origin</td>
                    </tr>
                    {
                        cats.map((v) => (
                            <Entry
                                key = {v.url}
                                image = {v.image}
                                name = {v.name}
                                description = {v.description}
                                temperament = {v.temperament}
                                origin= {v.origin}
                            />)
                        )
                    }
                    </tbody>
                </table>
            </main>

        </>
    )
}

export default App