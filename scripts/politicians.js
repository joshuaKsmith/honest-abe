

export const GetPoliticians = async () => {
    const response = await fetch("http://localhost:8088/politicians")
    const politicians = await response.json()

    return politicians.map((politician) => {
        return `<section class="politician">
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
        </section>`
    }).join("")
}