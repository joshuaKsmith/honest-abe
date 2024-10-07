import { GetPoliticians } from "./politicians.js"
import { GetCorporations } from "./corporations.js"
import { GetPacs } from "./pacs.js"


const container = document.querySelector("#container")

const render = async () => {
    const politicianListHTML = await GetPoliticians()
    const corporationListHTML = await GetCorporations()
    const pacListHTML = await GetPacs()

    container.innerHTML = `
        <article class="politicians">
            ${politicianListHTML}
        </article>
        ----------------------------------------------------------------------------------------------------
        <article class="corporations">
            ${corporationListHTML}
        </article>
        ----------------------------------------------------------------------------------------------------
        <article class="pacs">
            ${pacListHTML}
        </article>
    `
}

render()