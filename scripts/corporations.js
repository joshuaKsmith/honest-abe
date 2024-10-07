

export const GetCorporations = async () => {
    const response = await fetch("http://localhost:8088/corporations")
    const corporations = await response.json()

    return corporations.map((corporation) => {
        return `<section class="corporation">
            <header class="corporation__name">
                <h1>${corporation.company}</h1>
            </header>
            <div class="corporation__info">
                <div>Address: ${corporation.address}</div>
            </div>
        </section>`
    }).join("")
}