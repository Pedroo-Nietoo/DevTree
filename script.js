function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    const icon = document.querySelector("link[rel='icon']")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        icon.setAttribute("href", "./assets/chain-light.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        icon.setAttribute("href", "./assets/chain-dark.png")
    }
}
