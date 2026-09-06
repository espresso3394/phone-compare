let selectedPhone1 = null;
let selectedPhone2 = null;

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/galaxy/g, "")
    .replace(/갤럭시/g, "")
    .replace(/iphone/g, "")
    .replace(/아이폰/g, "");
}

function setupSearch(inputId, resultsId, selectedId, phoneNumber) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  const selected = document.getElementById(selectedId);

  input.addEventListener("input", function () {
    const query = normalize(input.value);

    results.innerHTML = "";

    if (!query) {
      results.style.display = "none";
      return;
    }

    const matches = phones.filter(phone => {
      const searchableText = normalize(
        `${phone.name} ${phone.search || ""} ${phone.brand || ""}`
      );

      return searchableText.includes(query);
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

        selected.textContent = `선택됨: ${phone.name}`;
        selected.className = "selected-phone active";

        results.style.display = "none";
      });

      results.appendChild(item);
    });

    results.style.display = "block";
  });

  input.addEventListener("focus", function () {
    if (input.value.trim() !== "") {
      input.dispatchEvent(new Event("input"));
    }
  });
}

function getSpec(phone, key) {
  const value = phone[key];

  if (value === undefined || value === null || value === "") {
    return "정보 추가 예정";
  }

  return value;
}

function comparePhones() {
  if (!selectedPhone1 || !selectedPhone2) {
    alert("비교할 스마트폰 2개를 먼저 선택해줘!");
    return;
  }

  const comparison = document.getElementById("comparison");
  comparison.style.display = "block";

  document.getElementById("phone1Name").textContent =
    selectedPhone1.name;

  document.getElementById("phone2Name").textContent =
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
    ["출시 OS", "os"]
  ];

  const tableBody = document.getElementById("specTableBody");
  tableBody.innerHTML = "";

  specs.forEach(([label, key]) => {
    const row = document.createElement("tr");

    const specName = document.createElement("td");
    const phone1Value = document.createElement("td");
    const phone2Value = document.createElement("td");

    specName.textContent = label;
    phone1Value.textContent = getSpec(selectedPhone1, key);
    phone2Value.textContent = getSpec(selectedPhone2, key);

    row.appendChild(specName);
    row.appendChild(phone1Value);
    row.appendChild(phone2Value);

    tableBody.appendChild(row);
  });

  showWinner();

  comparison.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function showWinner() {
  const winner = document.getElementById("winner");

  winner.textContent =
    "현재 기본 모델 데이터가 등록되었습니다. 상세 성능 비교 기능은 다음 단계에서 추가됩니다.";
}

document.addEventListener("click", function (event) {
  if (!event.target.closest(".phone-search")) {
    document.getElementById("results1").style.display = "none";
    document.getElementById("results2").style.display = "none";
  }
});

setupSearch("search1", "results1", "selected1", 1);
setupSearch("search2", "results2", "selected2", 2);
