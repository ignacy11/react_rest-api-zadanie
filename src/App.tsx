import './App.css'

function App() {

    const BASE = 'https://api.thecatapi.com/v1/'

    /*const fetchDataFromSwapi = async () => {
        const data: Response = await fetch(`${BASE}people/1`)
        console.log(data)
    }*/

    return (
        <>
            <header>
                <h1>(something) Rest API</h1>
                <a href="https://github.com/ignacy11/react_rest-api-zadanie">GitHub</a>
            </header>
            <main>
                <table>
                    <tbody>
                    <tr>
                        <td>dane</td>
                    </tr>
                    </tbody>
                </table>
            </main>

        </>
    )
}

export default App