/************************************************************
  1) Простейшая проверка логина (для index.html).
*************************************************************/
function login() {
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;
  const errorMsg = document.getElementById("error-msg");

  // Демо: admin / 1234
  if (username === "admin" && password === "1234") {
    window.location.href = "test.html";
  } else {
    if (errorMsg) {
      errorMsg.textContent = "Логин немесе пароль қате!";
    }
  }
}

/************************************************************
  2) Массив глав. В каждой - questions[].
     Вопрос: { text, options[], correctIndex }
*************************************************************/
const chapters = [
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
        options: ["Уақытпен жойылады", "Шексіз масштабталалады", "Төмен сапалы сурет"],
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
      },
      {
        text: "Робот жарысында не бағаланады?",
        options: ["Роботтың жылдамдығы және дәлдігі", "Тек дизайн", "Тек түсі"],
        correctIndex: 0
      }
    ]
  }
  // При необходимости добавьте 4-ю, 5-ю главы и т.д.
];

/************************************************************
  3) Глобальные переменные (для test.html):
     - currentChapter: индекс главы
     - userAnswers: массив массивов
     - chapterScores: [{correct, total}, ...] - результаты каждой главы
*************************************************************/
let currentChapter = 0;
let userAnswers = [];
let chapterScores = [];

// При загрузке test.html
window.addEventListener("load", () => {
  if (document.title === "Тест по главам") {
    // Инициализируем userAnswers и chapterScores
    userAnswers = chapters.map(() => []);
    chapterScores = chapters.map(() => ({ correct: 0, total: 0 }));

    // Загружаем первую главу
    loadChapter(0);
  }
});

/************************************************************
  4) Загрузка главы по индексу
*************************************************************/
function loadChapter(index) {
  currentChapter = index;

  const chapterTitleEl = document.getElementById("chapter-title");
  const formEl = document.getElementById("test-form");
  const resultBlock = document.getElementById("chapter-result");
  const overallBlock = document.getElementById("overall-results");
  const nextBtn = document.getElementById("next-chapter-btn");

  if (!chapters[index]) return;

  // Заголовок
  chapterTitleEl.textContent = chapters[index].title;

  // Очищаем форму
  formEl.innerHTML = "";

  // Скрываем блоки результатов
  resultBlock.style.display = "none";
  resultBlock.innerHTML = "";
  overallBlock.style.display = "none";
  overallBlock.innerHTML = "";
  nextBtn.style.display = "none";

  // Генерируем вопросы
  const questions = chapters[index].questions;
  questions.forEach((q, qIndex) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const questionText = document.createElement("p");
    questionText.textContent = (qIndex + 1) + ". " + q.text;
    block.appendChild(questionText);

    // Радиокнопки
    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question_${qIndex}`;
      radio.value = optIndex;

      // Если ранее пользователь что-то выбирал
      if (userAnswers[index][qIndex] === optIndex) {
        radio.checked = true;
      }

      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + opt));
      block.appendChild(label);
    });

    formEl.appendChild(block);
  });
}

/************************************************************
  5) Завершить текущую главу
     - Считать ответы
     - Подсчитать кол-во правильных
     - Показать результат
     - Если это не последняя глава - показать "Следующая глава"
     - Если последняя - показать общую сводку (overall)
*************************************************************/
function finishChapter() {
  const formEl = document.getElementById("test-form");
  const resultBlock = document.getElementById("chapter-result");
  const overallBlock = document.getElementById("overall-results");
  const nextBtn = document.getElementById("next-chapter-btn");

  const questions = chapters[currentChapter].questions;

  let correctCount = 0;
  let total = questions.length;

  // Считываем ответы
  questions.forEach((q, qIndex) => {
    const radios = document.getElementsByName(`question_${qIndex}`);
    let chosen = -1;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        chosen = parseInt(radios[i].value);
        break;
      }
    }
    // Сохраняем
    userAnswers[currentChapter][qIndex] = chosen;
    // Считаем правильные
    if (chosen === q.correctIndex) {
      correctCount++;
    }
  });

  // Запишем в chapterScores
  chapterScores[currentChapter] = {
    correct: correctCount,
    total: total
  };

  // Показываем блок результата
  resultBlock.style.display = "block";
  resultBlock.innerHTML = `
    <h2>Нәтиже (Глава ${currentChapter+1}): ${correctCount} / ${total}</h2>
    <p>Сіздің жауаптарыңыз:</p>
  `;

  // Подробности по каждому вопросу
  questions.forEach((q, qIndex) => {
    const chosen = userAnswers[currentChapter][qIndex];
    const correct = q.correctIndex;

    const div = document.createElement("div");
    div.className = "question-block";

    const title = document.createElement("p");
    title.textContent = (qIndex + 1) + ". " + q.text;
    div.appendChild(title);

    // Список вариантов
    q.options.forEach((opt, optIndex) => {
      const p = document.createElement("p");
      let prefix = "";
      if (optIndex === correct) prefix = "(Дұрыс) ";
      if (optIndex === chosen) prefix += "(Сіздің таңдауыңыз) ";
      p.textContent = prefix + opt;
      div.appendChild(p);
    });

    resultBlock.appendChild(div);
  });

  // Если НЕ последняя глава -> показать "Следующая глава"
  if (currentChapter < chapters.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    // Если это была последняя глава – показываем общий итог
    overallBlock.style.display = "block";
    overallBlock.innerHTML = "<h2>Жалпы қорытынды</h2>";

    chapterScores.forEach((score, idx) => {
      const p = document.createElement("p");
      p.textContent = `Глава ${idx+1}: ${score.correct} / ${score.total} балл`;
      overallBlock.appendChild(p);
    });
  }
}

/************************************************************
  6) Перейти к следующей главе
*************************************************************/
function goToNextChapter() {
  if (currentChapter < chapters.length - 1) {
    loadChapter(currentChapter + 1);
  }
}