/************************************************************
  1) Простейшая проверка логина.
     (В реальности должна быть серверная аутентификация.)
*************************************************************/
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  // Допустим, логин/пароль = admin / 1234
  if (username === "admin" && password === "1234") {
    window.location.href = "menu.html";
  } else {
    if (errorMsg) {
      errorMsg.textContent = "Логин немесе пароль қате!";
    }
  }
}

function logout() {
  window.location.href = "index.html";
}

/************************************************************
  2) Структура теста: 5 частей, в каждой - массив вопросов.
*************************************************************/
const testData = [
  {
    title: "1-бөлім. Ақпаратты ұсыну",
    questions: [
      {
        text: "Ақпарат дегеніміз не?",
        options: ["Кез келген мәлімет", "Есептеу құрылғысы", "Компьютерлік бағдарлама"],
        correctIndex: 0
      },
      {
        text: "Бит және байт деген не?",
        options: ["Компьютер вирусы", "Ақпарат өлшем бірліктері", "Операциялық жүйе атауы"],
        correctIndex: 1
      }
    ]
  },
  {
    title: "2-бөлім. Компьютерлік графика",
    questions: [
      {
        text: "Растрлық кескін деген не?",
        options: ["Пиксельдерден тұратын сурет", "Шексіз масштабталатын сурет", "3D модель"],
        correctIndex: 0
      },
      {
        text: "Векторлық кескіннің ерекшелігі?",
        options: ["Уақытпен жойылады", "Шексіз масштабталалады", "Жоғары сапалы фото"],
        correctIndex: 1
      }
    ]
  },
  {
    title: "3-бөлім. Роботтехника",
    questions: [
      {
        text: "Роботтың негізгі бөлшектері?",
        options: ["Монитор, пернетақта", "Датчиктер, қозғалтқыш, басқару блогы", "Тек конструктор бөлшектері"],
        correctIndex: 1
      }
    ]
  },
  {
    title: "4-бөлім. Роботтардың жарысы",
    questions: [
      {
        text: "Робот жарысында не бағаланады?",
        options: ["Роботтың жылдамдығы және дәлдігі", "Тек дизайн", "Тек түсі"],
        correctIndex: 0
      }
    ]
  },
  {
    title: "5-бөлім. Компьютер және қауіпсіздік",
    questions: [
      {
        text: "Компьютерде вирусқа қарсы бағдарлама орнату не үшін керек?",
        options: ["Компьютерді сәндеу үшін", "Зиянды ПО-дан қорғау үшін", "Жылдамдығын азайту үшін"],
        correctIndex: 1
      }
    ]
  }
];

/************************************************************
  3) Хранение ответов: userAnswers – массив массивов.
     - userAnswers[номер_части][номер_вопроса] = индекс_варианта
     - при загрузке части подставляем ранее выбранные ответы
*************************************************************/
let userAnswers = [ [], [], [], [], [] ];

// Текущая часть
let currentPartIndex = 0;

/************************************************************
  4) При загрузке menu.html и result.html - проверяем, 
     какая страница открыта. (title проверяется в onload)
*************************************************************/
window.addEventListener("load", () => {
  if (document.title === "Меню") {
    // При загрузке страницы теста
    // Изначально показываем 0-ю часть
    loadPart(0);
  } else if (document.title === "Нәтижелер") {
    // Показ результатов
    showResults();
  }
});

/************************************************************
  5) Выбор части через меню (слева).
     Сохраняем ответы с текущей формы, затем загружаем нужную часть.
*************************************************************/
function selectPart(partIndex) {
  saveCurrentAnswers();
  currentPartIndex = partIndex;
  loadPart(currentPartIndex);
}

/************************************************************
  6) Загрузка части (отображаем вопросы и ответы, если есть).
*************************************************************/
function loadPart(index) {
  const part = testData[index];
  const titleEl = document.getElementById("part-title");
  const formEl = document.getElementById("test-form");

  if (!part || !titleEl || !formEl) return;

  // Обновляем заголовок
  titleEl.textContent = part.title;

  // Очищаем форму
  formEl.innerHTML = "";

  // Генерируем вопросы
  part.questions.forEach((q, qIndex) => {
    const block = document.createElement("div");
    block.className = "question-block";

    // Текст вопроса
    const questionText = document.createElement("p");
    questionText.textContent = (qIndex + 1) + ". " + q.text;
    block.appendChild(questionText);

    // Варианты
    q.options.forEach((option, optIndex) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question_${qIndex}`;
      radio.value = optIndex;
      // Если ранее уже был выбран этот вариант - отмечаем
      if (userAnswers[index][qIndex] === optIndex) {
        radio.checked = true;
      }
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + option));
      block.appendChild(label);
    });

    formEl.appendChild(block);
  });

  // Показываем/скрываем кнопки навигации
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  if (index === 0) {
    // Если это первая часть - "Назад" недоступен
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  if (index === testData.length - 1) {
    // Если это последняя часть - вместо "Далее" появляется "Отправить тест"
    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
}

/************************************************************
  7) Сохраняем ответы пользователя из текущей формы
*************************************************************/
function saveCurrentAnswers() {
  const part = testData[currentPartIndex];
  if (!part) return;

  part.questions.forEach((q, qIndex) => {
    const radios = document.getElementsByName(`question_${qIndex}`);
    for (let r = 0; r < radios.length; r++) {
      if (radios[r].checked) {
        userAnswers[currentPartIndex][qIndex] = parseInt(radios[r].value);
        break;
      }
    }
  });
}

/************************************************************
  8) Навигация: Назад / Далее
*************************************************************/
function prevPart() {
  // Сохраняем ответы с текущей формы
  saveCurrentAnswers();
  if (currentPartIndex > 0) {
    currentPartIndex--;
    loadPart(currentPartIndex);
  }
}

function nextPart() {
  saveCurrentAnswers();
  if (currentPartIndex < testData.length - 1) {
    currentPartIndex++;
    loadPart(currentPartIndex);
  }
}

/************************************************************
  9) Отправка теста (только на последней части)
     Переход на result.html
*************************************************************/
function submitTest() {
  // Сохраняем последние ответы
  saveCurrentAnswers();
  
  // Сохраняем userAnswers в localStorage, чтобы
  // прочитать на странице результатов.
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

  // Переходим на страницу результатов
  window.location.href = "result.html";
}

/************************************************************
  10) На result.html показываем итог + правильные ответы
*************************************************************/
function showResults() {
  const answersDiv = document.getElementById("answers");
  const scoreDiv = document.getElementById("score");

  // Загружаем ответы
  const loadedAnswers = JSON.parse(localStorage.getItem("userAnswers") || "[]");
  
  let correctCount = 0;
  let total = 0;

  // Проходим по каждой части
  testData.forEach((part, partIndex) => {
    part.questions.forEach((q, qIndex) => {
      total++;
      const userAnswer = loadedAnswers[partIndex]?.[qIndex] ?? -1;
      const correctAnswer = q.correctIndex;

      // Блок вопроса
      const block = document.createElement("div");
      block.className = "question-block";

      const questionText = document.createElement("p");
      questionText.textContent = part.title + " | " + (qIndex+1) + ". " + q.text;
      block.appendChild(questionText);

      // Варианты
      q.options.forEach((option, optIndex) => {
        const p = document.createElement("p");
        let prefix = "";
        if (optIndex === correctAnswer) {
          prefix = "(Дұрыс) ";
        }
        if (optIndex === userAnswer) {
          prefix += "(Сіздің таңдауыңыз) ";
        }
        p.textContent = prefix + option;
        block.appendChild(p);
      });

      // Если совпали
      if (userAnswer === correctAnswer) correctCount++;

      answersDiv.appendChild(block);
    });
  });

  scoreDiv.textContent = `Сіздің ұпайыңыз: ${correctCount} / ${total}`;
}