let selectedPhone1 = null;
let selectedPhone2 = null;

// 검색하기 쉽게 글자를 정리
function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/galaxy/g, "")
    .replace(/갤럭시/g, "")
    .replace(/iphone/g, "")
    .replace(/아이폰/g, "");
}

// 검색창 설정
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
      const noResult = document.createElement("div");
      noResult.className = "search-item";
      noResult.textContent = "검색 결과가 없습니다.";
      results.appendChild(noResult);
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

// 정보가 없는 경우
function getSpec(phone, key) {
  const value = phone[key];

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return "정보 없음";
  }

  return value;
}

// 숫자 하나 가져오기
function firstNumber(value) {
  if (!value) return null;

  const match = String(value)
    .replace(/,/g, "")
    .match(/[\d.]+/);

  if (!match) return null;

  return Number(match[0]);
}

// RAM을 MB 단위로 변환
function ramToMB(value) {
  if (!value) return null;

  const text = String(value).toLowerCase();
  const number = firstNumber(text);

  if (number === null) return null;

  if (text.includes("gb")) {
    return number * 1024;
  }

  if (text.includes("mb")) {
    return number;
  }

  return null;
}

// 배터리 mAh 가져오기
function batteryNumber(value) {
  if (!value) return null;

  const text = String(value).toLowerCase();

  if (!text.includes("mah")) {
    return null;
  }

  return firstNumber(text);
}

// 주사율의 최대 Hz 가져오기
function refreshNumber(value) {
  if (!value) return null;

  const matches = String(value).match(/\d+(?:\.\d+)?/g);

  if (!matches) return null;

  return Math.max(...matches.map(Number));
}

// 무게 가져오기
function weightNumber(value) {
  if (!value) return null;

  const text = String(value).toLowerCase();

  if (!text.includes("g")) {
    return null;
  }

  return firstNumber(text);
}

// 출시년도
function yearNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

// 비교 가능한 항목의 승자 결정
function compareNumeric(value1, value2, type) {
  let number1 = null;
  let number2 = null;

  if (type === "ram") {
    number1 = ramToMB(value1);
    number2 = ramToMB(value2);
  }

  if (type === "battery") {
    number1 = batteryNumber(value1);
    number2 = batteryNumber(value2);
  }

  if (type === "refresh") {
    number1 = refreshNumber(value1);
    number2 = refreshNumber(value2);
  }
if (type === "benchmark") {
  number1 = Number(value1);
  number2 = Number(value2);

  if (!Number.isFinite(number1)) number1 = null;
  if (!Number.isFinite(number2)) number2 = null;
}
  if (type === "year") {
    number1 = yearNumber(value1);
    number2 = yearNumber(value2);
  }

  if (type === "weight") {
    number1 = weightNumber(value1);
    number2 = weightNumber(value2);
  }

  if (number1 === null || number2 === null) {
    return 0;
  }

  if (number1 === number2) {
    return 0;
  }

  // 무게는 숫자가 작은 쪽 승리
  if (type === "weight") {
    return number1 < number2 ? 1 : 2;
  }

  // 나머지는 숫자가 큰 쪽 승리
  return number1 > number2 ? 1 : 2;
}

// 셀 강조
function highlightWinner(cell1, cell2, winner) {
  if (winner === 1) {
    cell1.style.fontWeight = "700";
    cell1.style.background = "#e8f7ed";
    cell1.textContent += " ✓";
  }

  if (winner === 2) {
    cell2.style.fontWeight = "700";
    cell2.style.background = "#e8f7ed";
    cell2.textContent += " ✓";
  }
}

// 비교하기
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

  const specs = [{
  label: "Geekbench 6 싱글코어",
  key: "geekbenchSingle",
  compare: "benchmark"
},
{
  label: "Geekbench 6 멀티코어",
  key: "geekbenchMulti",
  compare: "benchmark"
},
    {
      label: "제조사",
      key: "brand"
    },
    {
      label: "출시년도",
      key: "year",
      compare: "year"
    },
    {
      label: "칩셋",
      key: "chipset"
    },
    {
      label: "RAM",
      key: "ram",
      compare: "ram"
    },
    {
      label: "디스플레이",
      key: "display"
    },
    {
      label: "주사율",
      key: "refreshRate",
      compare: "refresh"
    },
    {
      label: "배터리",
      key: "battery",
      compare: "battery"
    },
    {
      label: "카메라",
      key: "camera"
    },
    {
      label: "무게",
      key: "weight",
      compare: "weight"
    },
    {
      label: "출시 OS",
      key: "os"
    }
  ];

  const tableBody = document.getElementById("specTableBody");

  tableBody.innerHTML = "";

  let phone1Score = 0;
  let phone2Score = 0;

  specs.forEach(spec => {
    const row = document.createElement("tr");

    const labelCell = document.createElement("td");
    const phone1Cell = document.createElement("td");
    const phone2Cell = document.createElement("td");

    const value1 = getSpec(selectedPhone1, spec.key);
    const value2 = getSpec(selectedPhone2, spec.key);

    labelCell.textContent = spec.label;
    phone1Cell.textContent = value1;
    phone2Cell.textContent = value2;

    labelCell.style.fontWeight = "700";

    if (spec.compare) {
      const winner = compareNumeric(
        value1,
        value2,
        spec.compare
      );

      highlightWinner(
        phone1Cell,
        phone2Cell,
        winner
      );

      if (winner === 1) {
        phone1Score++;
      }

      if (winner === 2) {
        phone2Score++;
      }
    }

    row.appendChild(labelCell);
    row.appendChild(phone1Cell);
    row.appendChild(phone2Cell);

    tableBody.appendChild(row);
  });

  showWinner(phone1Score, phone2Score);

  comparison.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// 종합 결과
function showWinner(score1, score2) {
  const winner = document.getElementById("winner");

  if (score1 > score2) {
    winner.innerHTML =
      `🏆 <strong>${selectedPhone1.name}</strong> 우세 ` +
      `(${score1} : ${score2})`;
  }

  else if (score2 > score1) {
    winner.innerHTML =
      `🏆 <strong>${selectedPhone2.name}</strong> 우세 ` +
      `(${score2} : ${score1})`;
  }

  else {
    winner.innerHTML =
      `🤝 비교 가능한 항목 기준 동점 (${score1} : ${score2})`;
  }
}

// 검색 결과 밖을 클릭하면 닫기
document.addEventListener("click", function (event) {
  if (!event.target.closest(".phone-search")) {
    document.getElementById("results1").style.display = "none";
    document.getElementById("results2").style.display = "none";
  }
});

// 검색창 시작
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
