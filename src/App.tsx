import './App.css'
import Entry from "./Entry.tsx";
import {useEffect} from "react";

interface Cat {
    image: string;
    description: string;
    temperament: string;
    origin: string;
}

function App() {

    const api_key = '&api_key=live_mWlGIlpVKE9qVjGDoFmRm3JaRA0tVMRsXu5xc6WrGhpFpeM5l6GpaP4NFcNgGJ3s'

    const BASE = 'https://api.thecatapi.com/v1'
    const fetchDataFromAPI = async () => {
        try {
            const data: Response = await fetch(`${BASE}people/1`)
            const jsonData: Cat = await data.json()
            console.log(jsonData)
        } catch(error){
            if(error instanceof Error){
                console.log(error.message)
                // TODO: wyświetlić w error box
            }else {
                console.log('Unknown error')
                // TODO: wyświetlić w error box
            }
        }
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
                    <Entry/>
                    </tbody>
                </table>
            </main>

        </>
    )
}

export default App