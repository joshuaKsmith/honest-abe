import { GetPoliticians } from "./politicians.js"
import { GetCorporations } from "./corporations.js"

const container = document.querySelector("#container")

const render = async () => {
    const politicianListHTML = await GetPoliticians()
    const corporationListHTML = await GetCorporations()

    container.innerHTML = `
        <article class="politicians">
            ${politicianListHTML}
        </article>
        <article class="corporations">
            ${corporationListHTML}
        </article>
    `
}

render()