import './App.css'
import Table from "./Table.tsx";
import {useEffect, useState} from "react";

interface Cat {
    reference_image_id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
}

interface CatAPIResponse {
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
}

function App() {

    const api_key = 'live_mWlGIlpVKE9qVjGDoFmRm3JaRA0tVMRsXu5xc6WrGhpFpeM5l6GpaP4NFcNgGJ3s'

    const [dataIsLoading, setDataIsLoading] = useState(true)

    const [cats, setCats] = useState<Cat[]>([])
    const BASE = `https://api.thecatapi.com/v1/breeds?api_key=${api_key}`

    const [searchText, setSearchText] = useState('')
    const [searchOrigin, setSearchOrigin] = useState('')

    const fetchDataFromAPI = () => {
        fetch(BASE)
            .then(response => response.json())
            .then((data: CatAPIResponse[]) => {
                const mappedData = data.map((item: CatAPIResponse) => ({
                    id: item.id,
                    reference_image_id: item.reference_image_id,
                    name: item.name || 'unknown',
                    description: item.description || 'unknown',
                    temperament: item.temperament || 'unknown',
                    origin: item.origin || 'unknown',
                }))

                setCats(mappedData)
                console.log(data)
                setDataIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setDataIsLoading(false)
            })
    }

    useEffect(() => {
        fetchDataFromAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const originFilteredCats = cats.filter((cat) => cat.origin.toLowerCase().includes(searchOrigin.toLowerCase()))
    const nameFilteredCats = originFilteredCats.filter((cat) => cat.name.toLowerCase().includes(searchText.toLowerCase()));

    let content;
    if (dataIsLoading) {
        content = <section className={"loading-container"}><img src="../src/assets/cat-silly.gif" alt="loading..." className={"cat-loading"}/><h3>Loading...</h3></section>
    }
    else {
        content = <Table nameFilteredCats={nameFilteredCats}/>
    }
    
    return (
        <>
            <header>
                <h1>The Cattalog</h1>
                <section className="filters-section">
                    <section className="filter-by-name-section">
                        <span className="filter-span">Filter by name:</span>
                        <input
                            type="text"
                            placeholder={"Search..."}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </section>
                    <section className="filter-by-origin-section">
                        <span className="filter-span">Filter by origin:</span>
                        <select
                            name="country-of-origin"
                            id="country-of-origin"
                            value={searchOrigin}
                            onChange={(e) => setSearchOrigin(e.target.value)}
                            defaultValue={""}
                        >
                            <option value=""/>
                            <option value="Australia">Australia</option>
                            <option value="Burma">Burma</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Egypt">Egypt</option>
                            <option value="France">France</option>
                            <option value="Greece">Greece</option>
                            <option value="Iran">Iran</option>
                            <option value="Isle Of Man">Isle Of Man</option>
                            <option value="Japan">Japan</option>
                            <option value="Norway">Norway</option>
                            <option value="Russia">Russia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Somalia">Somalia</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                        </select>
                    </section>
                </section>
                <a href="https://github.com/ignacy11/react_rest-api-zadanie">GitHub</a>
            </header>
            <main>
                {content}
            </main>
        </>
    )
}

export default App