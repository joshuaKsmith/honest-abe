

export const GetPacs = async () => {
    const responseA = await fetch("http://localhost:8088/pacs")
    const pacs = await responseA.json()

    const responseB = await fetch("http://localhost:8088/corporateDonations?_expand=corporation")
    const corporateDonations = await responseB.json()


    return pacs.map((pac) => {
        const filteredDonations = corporateDonations.filter((corporateDonation) => 
            pac.id === corporateDonation.pacId
        )
        return `<section class="pac">
            <header class="pac__name">
                <h1>${pac.registeredName}</h1>
            </header>
            <div class="pac__info">
                <div>${pac.address}</div>
            </div>
            <div class="pac__donors">
                <h2>Donors</h2>
                <ul>
                    ${filteredDonations.map((donation) => {
                        return `<li>${donation.corporation.company} (${donation.amount.toLocaleString("en-US", {style:"currency", currency:"USD"})})</li>`
                    }).join("")}
                </ul>
            </div>
        </section>`
    }).join("")
}