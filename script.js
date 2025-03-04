/************************************************************
  1) Простейшая проверка логина (index.html)
*************************************************************/
function login() {
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;
  const errorMsg = document.getElementById("error-msg");

  // Пример: admin / 1234
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
  2) Массив глав (3 примера). В каждой - 10 вопросов.
     Можно расширить до 15 и т.д.
*************************************************************/
const chapters = [
  {
    title: "1-бөлім. Ақпаратты ұсыну",
    questions: [
      {
        text: "1) Ақпарат дегеніміз не?",
        options: ["Кез келген мәлімет", "Есептеу құрылғысы", "Компьютерлік бағдарлама"],
        correctIndex: 0
      },
      {
        text: "2) Бит және байт деген не?",
        options: ["Компьютер вирусы", "Ақпарат өлшем бірліктері", "Операциялық жүйе атауы"],
        correctIndex: 1
      },
      {
        text: "3) Есептеу техникасының негізі неде?",
        options: ["Принтер", "Процессор", "Интернет"],
        correctIndex: 1
      },
      {
        text: "4) Дербес компьютердің құрамына не кіреді?",
        options: ["Жүйелік блок, монитор, пернетақта, тінтуір", "Сахна, микрофон", "Тек монитор"],
        correctIndex: 0
      },
      {
        text: "5) Файл деген не?",
        options: ["Маңызды жүйелік элемент", "Ақпарат сақтаудың бірлігі", "Компьютер желісі"],
        correctIndex: 1
      },
      {
        text: "6) Папка деген не?",
        options: ["Желілік кабель", "Файлдардың контейнері", "Қағаз құжат"],
        correctIndex: 1
      },
      {
        text: "7) Ақпарат түрлерін көрсетіңіз",
        options: ["Мәтін, сан, графика, дыбыс, видео", "Бір ғана текст", "Тек видео"],
        correctIndex: 0
      },
      {
        text: "8) Енгізу құрылғыларына не жатады?",
        options: ["Пернетақта, тінтуір, сканер", "Монитор, принтер", "Процессор, қатты диск"],
        correctIndex: 0
      },
      {
        text: "9) Шығару құрылғылары?",
        options: ["Монитор, принтер, динамик", "Сканер, клавиатура", "Тінтуір, флешка"],
        correctIndex: 0
      },
      {
        text: "10) Компьютер жадының негізгі түрлері?",
        options: ["Оперативтік, тұрақты, сыртқы", "Оптикалық", "Кэш және вирустық"],
        correctIndex: 0
      }
    ]
  },
  {
    title: "2-бөлім. Компьютерлік графика",
    questions: [
      {
        text: "1) Растрлық кескін деген не?",
        options: ["Пиксельдерден тұратын сурет", "Шексіз масштабталатын сурет", "3D модель"],
        correctIndex: 0
      },
      {
        text: "2) Векторлық кескіннің артықшылығы?",
        options: ["Пиксельге тәуелді", "Шексіз масштабталалады", "Сапасы төмен"],
        correctIndex: 1
      },
      {
        text: "3) 3D графика қандай салада қолданылады?",
        options: ["Мультфильмдер, ойындар", "Тек офис", "Браузерлерде"],
        correctIndex: 0
      },
      {
        text: "4) Paint – қандай редактор?",
        options: ["Векторлық", "Растрлық", "3D"],
        correctIndex: 1
      },
      {
        text: "5) Photoshop көбінесе қандай кескінмен жұмыс істейді?",
        options: ["Растрлық", "Векторлық", "3D"],
        correctIndex: 0
      },
      {
        text: "6) CorelDRAW деген не?",
        options: ["ОС Windows", "Векторлық графика редакторы", "Браузер"],
        correctIndex: 1
      },
      {
        text: "7) Компьютерлік графика саласында анимация деген не?",
        options: ["Қозғалыс иллюзиясын жасау", "Файлды сығу", "Киберқауіпсіздік әдісі"],
        correctIndex: 0
      },
      {
        text: "8) Пиксель деген не?",
        options: ["Желілік ресурс", "Суреттің ең кішкентай элементі", "Программалау тілі"],
        correctIndex: 1
      },
      {
        text: "9) Компьютерлік графика екі негізгі түрге бөлінеді:",
        options: ["Векторлық және растрлық", "Әмбебап және арнайы", "2D және 4D"],
        correctIndex: 0
      },
      {
        text: "10) Бір кадрдан келесі кадрға ақырын өзгеру – бұл ...",
        options: ["Морфинг (morphing)", "Копирование", "Фильтр"],
        correctIndex: 0
      }
    ]
  },
  {
    title: "3-бөлім. Робототехника",
    questions: [
      {
        text: "1) Робототехника деген не?",
        options: ["Құрылыс саласы", "Роботтарды жобалау, жасау және қолдану ғылымы", "Автомобиль жөндеу"],
        correctIndex: 1
      },
      {
        text: "2) Роботтың негізгі бөлшектері?",
        options: ["Монитор, пернетақта", "Датчиктер, қозғалтқыш, басқару блогы", "Тек конструктор бөлшектері"],
        correctIndex: 1
      },
      {
        text: "3) Робот жарысында не бағаланады?",
        options: ["Роботтың жылдамдығы және дәлдігі", "Тек дизайн", "Тек түсі"],
        correctIndex: 0
      },
      {
        text: "4) Arduino деген не?",
        options: ["Сервомотор", "Микроконтроллерлік плата", "Интернет-протокол"],
        correctIndex: 1
      },
      {
        text: "5) Датчик деген не?",
        options: ["Электр тогын күшейтетін құрылғы", "Роботқа ақпарат беретін өлшеу құралы", "Жарық шығаратын диод"],
        correctIndex: 1
      },
      {
        text: "6) Сервомотордың ерекшелігі?",
        options: ["Бұрылу бұрышын дәл басқару", "Жарық түсіру", "Процессор қызметін атқару"],
        correctIndex: 0
      },
      {
        text: "7) Робототехникада қандай тілдер қолданылады?",
        options: ["Python, C/C++, Java", "Photoshop, CorelDRAW", "HTML, CSS, без JS"],
        correctIndex: 0
      },
      {
        text: "8) LEGO Mindstorms – бұл ...",
        options: ["Мотор бренді", "Робот жинау және бағдарламалау платформасы", "Ұялы телефон"],
        correctIndex: 1
      },
      {
        text: "9) Роботтардың категориялары?",
        options: ["Өндірістік, мобильді, әскери және т.б.", "Тек ойыншық", "Тек әуе және суасты"],
        correctIndex: 0
      },
      {
        text: "10) Жарысу роботтары ...",
        options: ["Музыка жүктейді", "Берілген трассаны жылдам өтеді", "Тек жазба жасайды"],
        correctIndex: 1
      }
    ]
  }
];

/************************************************************
  3) Глобальные переменные для menu.html:
     currentChapter – текущая глава
     userAnswers – массив ответов
     chapterScores – [{correct, total}, ...]
*************************************************************/
let currentChapter = null;
let userAnswers = [];
let chapterScores = [];

/************************************************************
  4) При загрузке menu.html:
     - Инициализируем userAnswers и chapterScores
     - (Можно сразу загрузить 0-ю главу, если хотите)
*************************************************************/
window.addEventListener("load", () => {
  if (document.title === "Меню") {
    // Инициализация
    userAnswers = chapters.map(() => []);
    chapterScores = chapters.map(ch => ({ correct: 0, total: ch.questions.length }));

    // Можно сразу открывать 1-ю главу, если хотите
    // selectChapter(0);
  }
});

/************************************************************
  5) Выбираем главу (клик в левом меню)
     - Сохраняем индекс
     - Отображаем вопросы
     - Скрываем предыдущие результаты
*************************************************************/
function selectChapter(index) {
  currentChapter = index;
  loadChapter(index);
}

function loadChapter(index) {
  const chapterTitleEl = document.getElementById("chapter-title");
  const formEl = document.getElementById("test-form");
  const resultBlock = document.getElementById("chapter-result");
  const overallBlock = document.getElementById("overall-results");
  const nextBtn = document.getElementById("next-chapter-btn");

  const chapter = chapters[index];
  if (!chapter) return;

  // Заголовок
  chapterTitleEl.textContent = chapter.title;

  // Очищаем
  formEl.innerHTML = "";
  resultBlock.style.display = "none";
  resultBlock.innerHTML = "";
  overallBlock.style.display = "none";
  overallBlock.innerHTML = "";
  nextBtn.style.display = "none";

  // Генерируем вопросы
  chapter.questions.forEach((q, qIndex) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const questionText = document.createElement("p");
    questionText.textContent = q.text;
    block.appendChild(questionText);

    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question_${qIndex}`;
      radio.value = optIndex;

      // Если ранее что-то выбирали
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
  6) Завершить главу:
     - Считываем ответы
     - Подсчитываем correctCount
     - Показываем результат (chapter-result)
     - Если не последняя глава, «Следующая глава» – видна
     - Если последняя – показываем общую сводку
*************************************************************/
function finishChapter() {
  // Проверим, что глава выбрана
  if (currentChapter === null) return;

  const questions = chapters[currentChapter].questions;
  const resultBlock = document.getElementById("chapter-result");
  const overallBlock = document.getElementById("overall-results");
  const nextBtn = document.getElementById("next-chapter-btn");

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
    userAnswers[currentChapter][qIndex] = chosen;
    if (chosen === q.correctIndex) {
      correctCount++;
    }
  });

  // Сохраняем результат
  chapterScores[currentChapter].correct = correctCount;

  // Выводим результат
  resultBlock.style.display = "block";
  resultBlock.innerHTML = `
    <h2>Нәтиже (Глава ${currentChapter + 1}): ${correctCount} / ${total}</h2>
    <p>Сіздің жауаптарыңыз:</p>
  `;

  questions.forEach((q, qIndex) => {
    const div = document.createElement("div");
    div.className = "question-block";

    const chosen = userAnswers[currentChapter][qIndex];
    const correct = q.correctIndex;

    const title = document.createElement("p");
    title.textContent = q.text;
    div.appendChild(title);

    // Детализация
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

  // Если не последняя глава – показать «Следующая глава»
  if (currentChapter < chapters.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    // Если последняя глава – показываем общую сводку
    overallBlock.style.display = "block";
    overallBlock.innerHTML = "<h2>Жалпы қорытынды</h2>";

    chapterScores.forEach((score, idx) => {
      const p = document.createElement("p");
      p.textContent = `Глава ${idx + 1}: ${score.correct} / ${score.total} балл`;
      overallBlock.appendChild(p);
    });
  }
}

/************************************************************
  7) Следующая глава (нажали внизу)
*************************************************************/
function goToNextChapter() {
  if (currentChapter < chapters.length - 1) {
    selectChapter(currentChapter + 1);
  }
}