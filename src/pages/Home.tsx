import {} from "../main.css"


import { Nav } from "../components/Nav"
import Banner from "../components/Banner"
import { Cta } from "../components/Cta"
import Video from "../components/Video"
import { Person } from "../components/Person"

export function Home() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Cta/>
            <Video/>
            <Person/>
        </div>
    )
}