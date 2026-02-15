function fetchField(element, url, property) {
    element.innerText = "Loading...";
    element.classList.remove("fetch")
    fetch(url)
        .then((response) => response.json()
        .then((data) => element.innerText = data[property])
    );
}

function fechAll(e) {
    let elements = document.getElementsByClassName("fetch");
    Array.from(elements).forEach(element => {
        let location = element.innerText.split(":");
        fetchField(element, location[0], location[1]);
    });
}

document.addEventListener("DOMContentLoaded", fechAll)