/* ── Helpers ── */

function showOnly(boxId) {
  document.getElementById("infoBox").classList.add("hidden");
  document.getElementById("homeBox").classList.add("hidden");
  document.getElementById("output").classList.add("hidden");
  if (boxId) document.getElementById(boxId).classList.remove("hidden");
}

function setOutput(text) {
  showOnly("output");
  document.getElementById("output").textContent = text;
}

function setOutputHTML(html) {
  showOnly("output");
  document.getElementById("output").innerHTML = html;
}

function showSidebar() {
  document.getElementById("sidebar").style.display = "block";
}

function hideSidebar() {
  document.getElementById("sidebar").style.display = "none";
}

/* ── Nav ── */

function goHome() {
  hideSidebar();
  showOnly("homeBox");
  document.getElementById("homeBox").innerHTML = `
    <h2>Welcome to my JavaScript Portfolio 👋</h2>
    <p>Explore interactive JavaScript exercises through the Activities menu above.</p>
    <p style="margin-top:16px;color:#444;">Click <strong style="color:#00ff7f;">Activities</strong> in the menu to get started.</p>
  `;
}

function goAbout() {
  hideSidebar();
  showOnly("infoBox");
  document.getElementById("infoBox").innerHTML = `
    <h2>About</h2>
    <p><strong>Name:</strong> FRANCIS R. MANCOL</p>
    <p><strong>Section:</strong> BSCS 2C</p>
    <p><strong>Subject:</strong> ITE6</p>
    <p><strong>Instructor:</strong> DR. FRANCISCO B. BACAMANTE JR.</p>
  `;
}

function showActivities() {
  showSidebar();
  setOutput("Select an exercise on the left.");
}

/* ── Sidebar toggles ── */

function toggleExercise2() {
  document.getElementById("exercise2List").classList.toggle("hidden");
}

function toggleExercise3() {
  document.getElementById("exercise3List").classList.toggle("hidden");
}

function toggleExercise4() {
  document.getElementById("exercise4List").classList.toggle("hidden");
}

/* ── Body listener cleanup ── */

let currentBodyHandler = null;
let currentBodyEvent = null;

function setBodyListener(eventName, handler) {
  if (currentBodyHandler && currentBodyEvent) {
    document.body.removeEventListener(currentBodyEvent, currentBodyHandler);
  }
  currentBodyEvent = eventName;
  currentBodyHandler = function(e) {
    if (e.target.closest(".activitiesBox") || e.target.closest(".header")) return;
    handler(e);
  };
  document.body.addEventListener(eventName, currentBodyHandler);
}

/* ── Activity router ── */

function showActivity(num) {
  setBodyListener("click", function(){});
  setOutput("");
  if (num === 1)  activity1();
  else if (num === 2)  activity2();
  else if (num === 3)  activity3();
  else if (num === 4)  activity4();
  else if (num === 5)  activity5();
  else if (num === 6)  activity6();
  else if (num === 7)  activity7();
  else if (num === 8)  exercise3_1();
  else if (num === 9)  exercise3_2();
  else if (num === 10) exercise3_3();
  else if (num === 11) exercise3_4();
  else if (num === 12) exercise3_5();
  else if (num === 13) exercise3_6();
  else if (num === 14) exercise3_7();
  else if (num === 15) exercise3_8();
  else if (num === 16) exercise4_1();
}

/* ── Exercise 2 ── */

function activity1() {
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  setOutput("Alert shown. Console message printed.");
}

function activity2() {
  let name = prompt("Enter your name:");
  let age = prompt("Enter your age:");
  let isStudent = prompt("Are you a student? (true/false)") === "true";
  setOutput(
`Name: ${name}
Age: ${age}
Student: ${isStudent}
My name is ${name}, I am ${age} years old.`
  );
}

function activity3() {
  let a = Number(prompt("Enter first number:"));
  let b = Number(prompt("Enter second number:"));
  setOutput(
`Sum: ${a + b}
Difference: ${a - b}
Product: ${a * b}
Quotient: ${b !== 0 ? (a / b) : "Cannot divide by 0"}`
  );
}

function activity4() {
  let userName = prompt("Enter your name:");
  let favNumber = prompt("Enter your favorite number:");
  alert("Hello " + userName + "! Your favorite number is " + favNumber + ".");
  setOutput(`Hello ${userName}! Your favorite number is ${favNumber}.`);
}

function activity5() {
  let age = Number(prompt("Enter your age:"));
  setOutput((age >= 18) ? "You are eligible." : "You are not eligible.");
}

function activity6() {
  let result = "For loop (1 to 10):\n";
  for (let i = 1; i <= 10; i++) result += i + " ";
  result += "\n\nWhile loop (10 to 1):\n";
  let x = 10;
  while (x >= 1) { result += x + " "; x--; }
  setOutput(result);
}

function activity7() {
  setOutputHTML(`<button class="btn" id="act7btn">Click Me</button>`);
  document.getElementById("act7btn").addEventListener("click", function() {
    alert("Button Clicked!");
  });
}

/* ── Exercise 3 ── */

function exercise3_1() {
  setOutputHTML(`<button class="btn" id="bgBtn">Change Background</button>`);
  const colors = ["#a8d8ea","#f9c6c9","#c3f0ca","#fde9a2","#d5c5f7","#ffd9b3","#e0e0e0"];
  let idx = 0;
  document.getElementById("bgBtn").addEventListener("click", function() {
    const color = colors[idx % colors.length];
    document.getElementById("mainApp").style.backgroundColor = color;
    document.body.style.backgroundColor = color;
    idx++;
  });
}

function exercise3_2() {
  setOutputHTML(`<button class="btn" id="darkBtn">Toggle Dark Mode</button>`);
  let dark = false;
  document.getElementById("darkBtn").addEventListener("click", function() {
    dark = !dark;
    const bg = dark ? "#000000" : "#ffffff";
    const fg = dark ? "#ffffff" : "#000000";
    document.getElementById("mainApp").style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
    document.body.style.color = fg;
  });
}

function exercise3_3() {
  setOutputHTML(`
    <button class="btn" id="addItemBtn">Add Item</button>
    <ul id="listArea"></ul>
  `);
  let count = 1;
  document.getElementById("addItemBtn").addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    document.getElementById("listArea").appendChild(li);
  });
}

function exercise3_4() {
  setOutputHTML(`
    <p id="para" style="color:#c9d1d9;">This paragraph will be removed.</p>
    <button class="btn" id="removeParaBtn">Remove Paragraph</button>
  `);
  document.getElementById("removeParaBtn").addEventListener("click", function() {
    const p = document.getElementById("para");
    if (p) p.remove();
  });
}

function exercise3_5() {
  setOutputHTML(`
    <input id="textInput" placeholder="Type here..." />
    <div id="countText" style="margin-top:12px;color:#00ff7f;">Characters: 0</div>
  `);
  document.getElementById("textInput").addEventListener("input", function() {
    document.getElementById("countText").textContent = "Characters: " + this.value.length;
  });
}

function exercise3_6() {
  setOutputHTML(`
    <input id="numA" type="number" placeholder="Number 1" />
    <input id="numB" type="number" placeholder="Number 2" style="margin-top:8px;" />
    <br/>
    <button class="btn" id="addBtn" style="margin-top:10px;">Add</button>
    <div id="sumOut" style="margin-top:12px;color:#00ff7f;font-size:16px;"></div>
  `);
  document.getElementById("addBtn").addEventListener("click", function() {
    const sum = Number(document.getElementById("numA").value) +
                Number(document.getElementById("numB").value);
    document.getElementById("sumOut").textContent = "Result: " + sum;
  });
}

function exercise3_7() {
  setOutputHTML(`
    <p style="color:#8b949e;margin-bottom:12px;">Click the button to switch the image.</p>
    <img id="imgDemo" src="images/img1.jpg"
         alt="demo" style="border-radius:10px;display:block;margin:0 auto 14px;width:280px;height:160px;object-fit:cover;" />
    <button class="btn" id="imgBtn">Change Image</button>
  `);
  let toggle = false;
  document.getElementById("imgBtn").addEventListener("click", function() {
    toggle = !toggle;
    document.getElementById("imgDemo").src = toggle ? "images/img2.jpg" : "images/img1.jpg";
  });
}

function exercise3_8() {
  setOutputHTML(`
    <input id="todoInput" placeholder="New task..." />
    <button class="btn" id="todoAdd">Add</button>
    <ul id="todoList"></ul>
  `);
  document.getElementById("todoAdd").addEventListener("click", function() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  });
}

/* ── Exercise 4 ── */

function exercise4_1() {
  setOutputHTML(`
    <div id="gradeApp" style="text-align:left;max-width:360px;margin:0 auto;">
      <p style="color:#8b949e;margin-bottom:16px;text-align:center;font-size:14px;">
        Enter how many quizzes and MCOs to score.
      </p>
      <div style="margin-bottom:12px;">
        <label style="color:#c9d1d9;font-size:14px;display:block;margin-bottom:4px;">Number of Quizzes</label>
        <input type="number" id="numQuizzes" min="1" placeholder="e.g. 3" style="width:100%;" />
      </div>
      <div style="margin-bottom:16px;">
        <label style="color:#c9d1d9;font-size:14px;display:block;margin-bottom:4px;">Number of MCOs</label>
        <input type="number" id="numMcos" min="1" placeholder="e.g. 2" style="width:100%;" />
      </div>
      <div style="text-align:center;margin-bottom:20px;">
        <button class="btn" id="generateBtn">Generate Fields</button>
      </div>
      <div id="scoreFields"></div>
      <div id="gradeError" style="display:none;margin-top:12px;color:#ff6b6b;font-size:14px;text-align:center;"></div>
      <div id="gradeResult" style="display:none;margin-top:24px;background:#1c2128;border:1px solid #30363d;border-radius:10px;padding:20px;text-align:center;">
        <div style="font-size:13px;color:#8b949e;margin-bottom:6px;">Final Grade</div>
        <div id="finalGrade" style="font-size:42px;font-weight:bold;color:#00ff7f;"></div>
        <div id="gradeEquiv" style="font-size:20px;color:#c9d1d9;margin-top:8px;"></div>
      </div>
    </div>
  `);

  document.getElementById("generateBtn").addEventListener("click", function() {
    let numQuizzes = parseInt(document.getElementById("numQuizzes").value);
    let numMcos = parseInt(document.getElementById("numMcos").value);
    let err = document.getElementById("gradeError");

    if (isNaN(numQuizzes) || numQuizzes < 1 || isNaN(numMcos) || numMcos < 1) {
      err.textContent = "Please enter valid numbers (at least 1).";
      err.style.display = "block";
      return;
    }

    err.style.display = "none";
    document.getElementById("gradeResult").style.display = "none";

    let html = "";

    for (let i = 1; i <= numQuizzes; i++) {
      html += `
        <div style="margin-bottom:10px;">
          <label style="color:#c9d1d9;font-size:14px;display:block;margin-bottom:4px;">Quiz ${i} Score (20% weight)</label>
          <input type="number" class="quizScore" min="0" max="100" placeholder="0 – 100" style="width:100%;" />
        </div>`;
    }

    html += `
      <div style="margin-bottom:10px;">
        <label style="color:#c9d1d9;font-size:14px;display:block;margin-bottom:4px;">Exam Score (30%)</label>
        <input type="number" id="calcExam" min="0" max="100" placeholder="0 – 100" style="width:100%;" />
      </div>`;

    for (let j = 1; j <= numMcos; j++) {
      html += `
        <div style="margin-bottom:10px;">
          <label style="color:#c9d1d9;font-size:14px;display:block;margin-bottom:4px;">MCO ${j} Score (50% weight)</label>
          <input type="number" class="mcoScore" min="0" max="100" placeholder="0 – 100" style="width:100%;" />
        </div>`;
    }

    html += `
      <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;">
        <button class="btn" id="calcBtn">Calculate Grade</button>
        <button class="btn" id="resetBtn" style="background:#333;">Reset</button>
      </div>`;

    document.getElementById("scoreFields").innerHTML = html;

    document.getElementById("calcBtn").addEventListener("click", function() {
      let quizFields = document.querySelectorAll(".quizScore");
      let mcoFields = document.querySelectorAll(".mcoScore");
      let exam = parseFloat(document.getElementById("calcExam").value);
      let err = document.getElementById("gradeError");
      let res = document.getElementById("gradeResult");

      let quizScores = [], mcoScores = [], valid = true;

      quizFields.forEach(function(f) {
        let v = parseFloat(f.value);
        if (isNaN(v) || v < 0 || v > 100) valid = false;
        else quizScores.push(v);
      });

      mcoFields.forEach(function(f) {
        let v = parseFloat(f.value);
        if (isNaN(v) || v < 0 || v > 100) valid = false;
        else mcoScores.push(v);
      });

      if (!valid || isNaN(exam) || exam < 0 || exam > 100) {
        err.textContent = "Please fill all fields correctly (0 – 100).";
        err.style.display = "block";
        res.style.display = "none";
        return;
      }

      err.style.display = "none";

      let quizAvg = quizScores.reduce((a, b) => a + b, 0) / quizScores.length;
      let mcoAvg = mcoScores.reduce((a, b) => a + b, 0) / mcoScores.length;
      let finalGrade = (quizAvg * 0.20) + (exam * 0.30) + (mcoAvg * 0.50);
      let rounded = Math.round(finalGrade * 100) / 100;
      let letter = rounded >= 90 ? "A" : rounded >= 80 ? "B" : rounded >= 70 ? "C" : rounded >= 60 ? "D" : "F";

      document.getElementById("finalGrade").textContent = rounded.toFixed(2);
      document.getElementById("gradeEquiv").textContent = "Grade: " + letter;
      res.style.display = "block";
    });

    document.getElementById("resetBtn").addEventListener("click", function() {
      document.querySelectorAll(".quizScore, .mcoScore").forEach(f => f.value = "");
      document.getElementById("calcExam").value = "";
      document.getElementById("gradeResult").style.display = "none";
      document.getElementById("gradeError").style.display = "none";
    });
  });
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("landingClickMe").addEventListener("click", function() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("mainHeader").style.display = "block";
    document.getElementById("mainApp").style.display = "block";
    goHome();
  });
});