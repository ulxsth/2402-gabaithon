const addButton = document.getElementById("add-flag");
let deleteButtons = [];
const nextButton = document.getElementById("next-button");
const firstLat = document.getElementById("pac-lat").value;
const firstLng = document.getElementById("pac-lng").value;

let count = 1;

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const flagsLength = document.querySelectorAll(".flag").length;
    if (flagsLength > 9) {
        alert("通過地点は９つまでしか選べません");
        return;
    }
    let inputValue = document.getElementById("pac-input").value;
    if (inputValue === "") {
        alert("通過地点を入力してください");
        return;
    }

    // ここでカウンターを使用して、id 属性の値を動的に生成
    const latInputId = `pac-lat-${count}`;
    const lngInputId = `pac-lng-${count}`;
    
    const latInput = document.getElementById("pac-lat").value;
    const lngInput = document.getElementById("pac-lng").value;

    const addFlag = `
        <div class="flag">
            <div class="flag__header">
                <h3 class="flag__checkpoint">到着地点</h3>
                <button class="flag__delete-btn" id="delete-btn-${count}" >削除</button>
            </div>
            <p class="flag__name">${inputValue}</p>
            <div class="place-wrap">
                <input type="hidden" name="pac-lat" id="${latInputId}" value=${latInput}>
                <input type="hidden" name="pac-lng" id="${lngInputId}" value=${lngInput}>
            </div>
        </div>
    `;

    count++;

    const flagsWrap = document.querySelector(".flags-wrap");
    flagsWrap.innerHTML += addFlag;
    document.getElementById("pac-input").value = "";

    const flags = document.querySelectorAll(".flag");
    flags.forEach((flag, index) => {
        const checkpoint = flag.querySelector(".flag__checkpoint");
        if (index === 0) {
            checkpoint.textContent = "出発地点";
        } else if (index < flags.length - 1) {
            checkpoint.textContent = `第${index}通過地点`;
        } else {
            checkpoint.textContent = "到着地点";
        }
    });

    deleteButtons = document.querySelectorAll(".flag__delete-btn");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const deleteButton = event.target;
            const flagElement = deleteButton.closest(".flag");
            if (flagElement) {
                flagElement.remove();
            }
        });
    });
});

nextButton.addEventListener("click", (event) => {
    localStorage.clear();
    const places = document.querySelectorAll(".place-wrap");
    let arrayPlaces = Array.from(places).map((place) => {
        const lat = place.querySelector('input[name="pac-lat"]').value;
        const lng = place.querySelector('input[name="pac-lng"]').value;
        return [lat, lng];
    });
    arrayPlaces = [[firstLat, firstLng], ...arrayPlaces];
    if (window.localStorage) {
        let json = JSON.stringify(arrayPlaces, undefined, 1);
        localStorage.setItem('location', json);
    }
});
