let selectedPhone1 = null;
let selectedPhone2 = null;


// 검색어를 비교하기 쉽게 바꾸는 함수
function normalize(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/galaxy/g, "")
        .replace(/갤럭시/g, "")
        .replace(/iphone/g, "")
        .replace(/아이폰/g, "");
}


// 검색 기능
function setupSearch(inputId, resultsId, selectedId, phoneNumber) {

    const input = document.getElementById(inputId);
    const results = document.getElementById(resultsId);
    const selected = document.getElementById(selectedId);

    input.addEventListener("input", function () {

        const originalQuery = input.value.trim();
        const query = normalize(originalQuery);

        results.innerHTML = "";

        if (query.length === 0) {
            results.style.display = "none";
            return;
        }

        const matches = phones.filter(phone => {

            const searchableText =
                phone.name + " " +
                phone.search + " " +
                phone.brand;

            return normalize(searchableText).includes(query);
        });


        if (matches.length === 0) {

            results.innerHTML =
                '<div class="search-item">검색 결과가 없습니다.</div>';

            results.style.display = "block";
            return;
        }


        matches.forEach(phone => {

            const item = document.createElement("div");

            item.className = "search-item";
            item.textContent = phone.name;

            item.addEventListener("click", function () {

                if (phoneNumber === 1) {
                    selectedPhone1 = phone;
                } else {
                    selectedPhone2 = phone;
                }

                input.value = phone.name;

                selected.textContent = "✓ " + phone.name;
                selected.classList.add("active");

                results.style.display = "none";
            });

            results.appendChild(item);
        });

        results.style.display = "block";
    });


    // 검색창을 다시 클릭하면 검색 결과 표시
    input.addEventListener("focus", function () {

        if (input.value.trim() !== "") {
            input.dispatchEvent(new Event("input"));
        }

    });
}


// 비교하기
function comparePhones() {

    if (!selectedPhone1 || !selectedPhone2) {

        alert("비교할 스마트폰 두 개를 모두 선택해주세요.");
        return;
    }


    document.getElementById("comparison").style.display = "block";

    document.getElementById("phoneName1").textContent =
        selectedPhone1.name;

    document.getElementById("phoneName2").textContent =
        selectedPhone2.name;


    const specs = [

        ["제조사", "brand"],
        ["출시년도", "year"],
        ["칩셋", "chipset"],
        ["RAM", "ram"],
        ["디스플레이", "display"],
        ["주사율", "refreshRate"],
        ["배터리", "battery"],
        ["카메라", "camera"],
        ["무게", "weight"],
        ["운영체제", "os"]

    ];


    const table =
        document.getElementById("specTable");

    table.innerHTML = "";


    specs.forEach(spec => {

        const title = spec[0];
        const key = spec[1];

        const row =
            document.createElement("div");

        row.className = "spec-row";


        const specName =
            document.createElement("div");

        specName.className = "spec-name";
        specName.textContent = title;


        const value1 =
            document.createElement("div");

        value1.textContent =
            selectedPhone1[key] ?? "정보 없음";


        const value2 =
            document.createElement("div");

        value2.textContent =
            selectedPhone2[key] ?? "정보 없음";


        row.appendChild(specName);
        row.appendChild(value1);
        row.appendChild(value2);

        table.appendChild(row);
    });


    showWinner();

    document
        .getElementById("comparison")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// 간단한 비교 결과
function showWinner() {

    const winnerText =
        document.getElementById("winnerText");

    winnerText.innerHTML =
        "<strong>" +
        selectedPhone1.name +
        "</strong>과(와) <strong>" +
        selectedPhone2.name +
        "</strong>의 상세 사양을 위에서 비교해보세요.<br>" +
        "성능 점수 기반 승자 판정은 다음 단계에서 추가됩니다.";
}


// 검색창 밖을 클릭하면 결과창 닫기
document.addEventListener("click", function (event) {

    const searchAreas =
        document.querySelectorAll(".phone-search");

    searchAreas.forEach(area => {

        if (!area.contains(event.target)) {

            const results =
                area.querySelector(".search-results");

            results.style.display = "none";
        }

    });

});


// 검색 기능 시작
setupSearch(
    "search1",
    "results1",
    "selected1",
    1
);

setupSearch(
    "search2",
    "results2",
    "selected2",
    2
);
