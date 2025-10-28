// We'll fill this step by step. Keep your console open!
console.log("JS loaded ✅");

// // 1. Variables: let vs var vs const
// var school = "GIC";
// let year = 2025;
// const maxScore = 100;
// school = "GIC Updated"; // var can be re-assigned
// year = 2026; // let can be re-assigned
// maxScore = 120; // const cannot be re-assigned (will throw an error)

// // 1.3 Hoisting demo — predict before running:
// console.log(a); // It is undefined because variable a declare after this line
// var a = 10;
// try {
//   console.log(b); // b error: Cannot access 'b' before initialization
//   let b = 20;
// } catch (e) {
//   console.log("b error:", e.message);
// }
//var is function-scoped and gets hoisted (initialized as undefined before execution), while let is block-scoped and not accessible before its declaration

// 2. Conditionals
//Write a function that returns a letter grade:

function letterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log("Grade(92) =", letterGrade(92));

//Use switch:
function mood(emoji) {
  switch (emoji) {
    case ":)":
      return "Happy";
    case ":(":
      return "Sad";
    case ":|":
      return "Neutral";
    default:
      return "Unknown";
  }
}
console.log("Mood :) =", mood(":)"));

//3. Loops
// for
let sumFor = 0;
for (let i = 1; i <= 5; i++) {
  sumFor += i;
}
console.log("Sum using For loop:", sumFor);

//while

let sumWhile = 0;
let i = 0;
while (i <= 5) {
  sumWhile += i;
  i++;
}
console.log("Sum using While loop:", sumWhile);

//for ... of
const nums = [1, 2, 3, 4, 5];
let sumOf = 0;
for (let num of nums) {
  sumOf += num;
}
console.log("Sum using For...of loop:", sumOf);
//4. arrays
const scores = [88, 95, 62];
scores.push(74);
scores.shift();
console.log("Scores array:", scores);
var max = Math.max(...scores);
console.log("Max score:", max);

//5. functions

// a) function declaration
function square1(n) {
  return n * n;
}

// b) function expression
const square2 = function (n) {
  return n * n;
};

// c) arrow function
const square3 = (n) => n * n;
console.log(square1(4), square2(4), square3(4));

//6. object
const student = { name: "Dana", score: 84 };
student.passed = student.score >= 60;

function describeStudent(s) {
  return `${s.name} scored ${s.score} (${s.passed ? "pass" : "fail"})`;
}
console.log(describeStudent(student));

//7. DOM: selecting & updating
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const stats = document.getElementById("stats");
const sortPass = document.getElementById("sortPass");

output.textContent = "Ready to practice DOM!";

//8. DOM: events, creating elements, rendering (Mini App)
const state = { students: [] }; // { name: string, score: number }

function computeAverage(arr) {
  // return 0 if empty, else average of arr[i].score
  if (arr.length == 0) return 0;
  //   const total = arr.reduce((sum, student) => sum + student.score, 0);
  //   return (total / arr.length).toFixed(2);
  let total = 0;
  for (let student of arr) {
    total += student.score;
  }
  return (total / arr.length).toFixed(2);
}

function render() {
  list.innerHTML = "";
  const avg = computeAverage(state.students);
  let passCount = 0;
  const showPassOnly = false;
  const studentsToShow = showPassOnly
    ? state.students.filter((s) => s.score >= 60)
    : state.students;

  studentsToShow.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = `${s.name} — ${s.score}`;
    li.className = s.score >= 60 ? "pass" : "fail";
    if (s.score >= 60) passCount++;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "8px";
    removeBtn.onclick = () => {
      state.students.splice(i, 1);
      render();
    };

    // Letter Grade display
    const gradeSpan = document.createElement("span");
    gradeSpan.textContent = ` ,You got ${letterGrade(s.score)} grade.`;

    list.appendChild(li);
    li.appendChild(gradeSpan);
    li.appendChild(removeBtn);
  });

  stats.textContent = `Count: ${
    state.students.length
  } | Avg: ${avg} | Pass: ${passCount} | Fail: ${
    state.students.length - passCount
  }`;
}

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value);
  if (!name || isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid name and score (0–100).");
    return;
  }
  state.students.push({ name, score });
  sortScore(state.students);
  render();
});

clearBtn.addEventListener("click", () => {
  state.students = [];
  render();
});
render();

//9. Bonus

// sort by score (desc)
const sortScore = (arr) => {
  arr.sort((a, b) => b.score - a.score);
};

//sort pass only

sortPass.addEventListener("click", () => {
  state.students = state.students.filter((s) => s.score >= 60);
  render();
});
