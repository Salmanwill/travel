window.onload = function() {
  const items = [
    "Passport & Visa Documents",
    "Bangladeshi Taka (Local Cash)",
    "Breathable Cotton Clothes",
    "Mosquito Repellent Spray",
    "Universal Power Adapter",
    "Reusable Water Bottle & Purifier",
    "Compact Umbrella for Monsoon Rain",
    "Power Bank & Phone Charger"
  ];

  const divList = document.getElementById("div-list");
  const tallySpan = document.getElementById("tally");

  function updateTally() {
    const checkedBoxes = divList.querySelectorAll("input[type='checkbox']:checked");
    tallySpan.textContent = checkedBoxes.length;
  }

  items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "item-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "item-" + index;

    const label = document.createElement("label");
    label.htmlFor = "item-" + index;
    label.textContent = item;

    checkbox.addEventListener("change", updateTally);

    row.appendChild(checkbox);
    row.appendChild(label);
    divList.appendChild(row);
  });
};