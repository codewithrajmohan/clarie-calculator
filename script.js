const form = document.querySelector("#calorie-form");
const results = document.querySelector("#results");
const errorMessage = document.querySelector("#form-error");
const recalculateButton = document.querySelector("#recalculate");

const fields = {
  age: { element: document.querySelector("#age"), min: 15, max: 100, label: "age" },
  height: { element: document.querySelector("#height"), min: 120, max: 230, label: "height" },
  weight: { element: document.querySelector("#weight"), min: 35, max: 300, label: "weight" }
};

const output = {
  loss: document.querySelector("#loss-calories"),
  maintain: document.querySelector("#maintain-calories"),
  gain: document.querySelector("#gain-calories")
};

const formatCalories = value => Math.max(0, Math.round(value)).toLocaleString();

function validateFields() {
  for (const { element, min, max, label } of Object.values(fields)) {
    const value = Number(element.value);
    element.classList.remove("invalid");

    if (!element.value || !Number.isFinite(value) || value < min || value > max) {
      element.classList.add("invalid");
      element.focus();
      errorMessage.textContent = `Please enter a valid ${label} between ${min} and ${max}.`;
      return false;
    }
  }

  errorMessage.textContent = "";
  return true;
}

function calculateCalories({ age, height, weight, gender, activity }) {
  const genderAdjustment = gender === "male" ? 5 : -161;
  const basalMetabolicRate = (10 * weight) + (6.25 * height) - (5 * age) + genderAdjustment;
  const maintenance = basalMetabolicRate * activity;

  return {
    loss: maintenance - 500,
    maintain: maintenance,
    gain: maintenance + 500
  };
}

form.addEventListener("submit", event => {
  event.preventDefault();

  if (!validateFields()) return;

  const data = new FormData(form);
  const calorieTargets = calculateCalories({
    age: Number(data.get("age")),
    height: Number(data.get("height")),
    weight: Number(data.get("weight")),
    gender: data.get("gender"),
    activity: Number(data.get("activity"))
  });

  output.loss.textContent = formatCalories(calorieTargets.loss);
  output.maintain.textContent = formatCalories(calorieTargets.maintain);
  output.gain.textContent = formatCalories(calorieTargets.gain);

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "center" });
});

Object.values(fields).forEach(({ element }) => {
  element.addEventListener("input", () => {
    element.classList.remove("invalid");
    errorMessage.textContent = "";
  });
});

recalculateButton.addEventListener("click", () => {
  document.querySelector(".calculator-card").scrollIntoView({ behavior: "smooth", block: "center" });
  fields.age.element.focus({ preventScroll: true });
});

document.querySelector("#year").textContent = new Date().getFullYear();
