import {} from "../main.css"

import { Nav } from "../components/Nav"
import Banner from "../components/Banner"
import { Cta } from "../components/Cta"

export function Home() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Cta/>
        </div>
    )
}