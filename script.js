/************************************************************
  1) Простейшая проверка логина
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
  2) Массив глав (3 главы). В каждой - 10 вопросов для примера.
     Каждому вопросу: text, options[], correctIndex.
     Здесь можно добавить больше вопросов (до 15, как просите).
*************************************************************/
const chapters = [
  {
    title: "1-бөлім. Ақпаратты ұсыну",
    questions: [
      {
        text: "1) Ақпарат дегеніміз не?",
        options: [
          "Кез келген мәлімет",
          "Есептеу құрылғысы",
          "Компьютерлік бағдарлама"
        ],
        correctIndex: 0
      },
      {
        text: "2) Бит және байт деген не?",
        options: [
          "Компьютер вирусы",
          "Ақпарат өлшем бірліктері",
          "Операциялық жүйе атауы"
        ],
        correctIndex: 1
      },
      {
        text: "3) Есептеу техникасының негізі неде?",
        options: [
          "Принтер",
          "Процессор",
          "Интернет"
        ],
        correctIndex: 1
      },
      {
        text: "4) Дербес компьютердің құрамына не кіреді?",
        options: [
          "Сахна, микрофон, камера",
          "Жүйелік блок, монитор, пернетақта, тінтуір",
          "Тек монитор мен тінтуір"
        ],
        correctIndex: 1
      },
      {
        text: "5) Файл деген не?",
        options: [
          "Маңызды жүйелік элемент",
          "Ақпаратты сақтаудың негізгі бірлігі",
          "Компьютер желісі"
        ],
        correctIndex: 1
      },
      {
        text: "6) Папка деген не?",
        options: [
          "Желілік кабель",
          "Файлдардың ортасы",
          "Қағаз құжат"
        ],
        correctIndex: 1
      },
      {
        text: "7) Ақпарат түрлерін көрсетіңіз",
        options: [
          "Мәтін, сан, графика, дыбыс, видео",
          "Бір ғана текст",
          "Тек видео"
        ],
        correctIndex: 0
      },
      {
        text: "8) Енгізу құрылғыларына не жатады?",
        options: [
          "Монитор, принтер",
          "Процессор, қатты диск",
          "Пернетақта, тінтуір, сканер"
        ],
        correctIndex: 2
      },
      {
        text: "9) Шығару құрылғылары?",
        options: [
          "Монитор, принтер, динамик",
          "Сканер, клавиатура",
          "Тінтуір, флешка"
        ],
        correctIndex: 0
      },
      {
        text: "10) Компьютер жадының негізгі түрлері?",
        options: [
          "Оперативтік, тұрақты, сыртқы (қатты диск)",
          "Оптикалық, сығымдалған",
          "Барлық жауап дұрыс емес"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    title: "2-бөлім. Компьютерлік графика",
    questions: [
      {
        text: "1) Растрлық кескін деген не?",
        options: [
          "Пиксельдерден тұратын сурет",
          "Шексіз масштабталатын сурет",
          "3D модель"
        ],
        correctIndex: 0
      },
      {
        text: "2) Векторлық кескіннің артықшылығы?",
        options: [
          "Шексіз масштабталалады",
          "Пиксельге тәуелді",
          "Сапасы төмен"
        ],
        correctIndex: 0
      },
      {
        text: "3) 3D графика қандай салада қолданылады?",
        options: [
          "Мультфильмдер мен ойындарда",
          "Еш жерде қолданылмайды",
          "Тек қана офистік бағдарламаларда"
        ],
        correctIndex: 0
      },
      {
        text: "4) Paint – қандай редактор?",
        options: [
          "Векторлық",
          "Растрлық",
          "3D"
        ],
        correctIndex: 1
      },
      {
        text: "5) Photoshop көбінесе қандай кескінмен жұмыс істейді?",
        options: [
          "Растрлық",
          "Векторлық",
          "3D"
        ],
        correctIndex: 0
      },
      {
        text: "6) CorelDRAW деген не?",
        options: [
          "Операциялық жүйе",
          "Векторлық графикалық редактор",
          "Браузер"
        ],
        correctIndex: 1
      },
      {
        text: "7) Компьютерлік графика саласында анимация деген не?",
        options: [
          "Қозғалыс иллюзиясын жасау",
          "Файлды сығу технологиясы",
          "Киберқауіпсіздік әдісі"
        ],
        correctIndex: 0
      },
      {
        text: "8) Пиксель деген не?",
        options: [
          "Желілік ресурс",
          "Суреттің ең кішкентай элементі",
          "Программалау тілі"
        ],
        correctIndex: 1
      },
      {
        text: "9) Компьютерлік графика екі негізгі түрге бөлінеді:",
        options: [
          "Векторлық және растрлық",
          "Әмбебап және арнайы",
          "2D және 4D"
        ],
        correctIndex: 0
      },
      {
        text: "10) Бір кадрдан келесі кадрға ақырын өзгеру – бұл ...",
        options: [
          "Морфинг (morphing)",
          "Копирование",
          "Фильтр"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    title: "3-бөлім. Роботтехника",
    questions: [
      {
        text: "1) Робототехника деген не?",
        options: [
          "Тек құрылыс саласы",
          "Роботтарды жобалау, жасау және қолдану ғылымы",
          "Автомобиль жөндеу жұмыстары"
        ],
        correctIndex: 1
      },
      {
        text: "2) Роботтың негізгі бөлшектері?",
        options: [
          "Монитор, пернетақта",
          "Датчиктер, қозғалтқыш, басқару блогы",
          "Тек конструктор бөлшектері"
        ],
        correctIndex: 1
      },
      {
        text: "3) Робот жарысында не бағаланады?",
        options: [
          "Роботтың жылдамдығы және дәлдігі",
          "Тек дизайн",
          "Тек түсі"
        ],
        correctIndex: 0
      },
      {
        text: "4) Arduino деген не?",
        options: [
          "Роботтың сервомоторы",
          "Микроконтроллерлік платформа",
          "Интернет-протокол"
        ],
        correctIndex: 1
      },
      {
        text: "5) Датчик деген не?",
        options: [
          "Электр тогын күшейту құралы",
          "Ақпаратты өлшеп, роботқа беретін құрылғы",
          "Тек жарық шығаратын диод"
        ],
        correctIndex: 1
      },
      {
        text: "6) Сервомотордың ерекшелігі?",
        options: [
          "Бұрылу бұрышын дәл басқару",
          "Жарық түсіру",
          "Процессор қызметін атқару"
        ],
        correctIndex: 0
      },
      {
        text: "7) Робототехникада қандай бағдарламалау тілдері жиі қолданылады?",
        options: [
          "Python, C/C++, Java",
          "Photoshop, CorelDRAW",
          "HTML, CSS без JS"
        ],
        correctIndex: 0
      },
      {
        text: "8) LEGO Mindstorms – бұл ...",
        options: [
          "Көлік қозғалтқышының бренді",
          "Робот жинау және бағдарламалау платформасы",
          "Ұялы телефон"
        ],
        correctIndex: 1
      },
      {
        text: "9) Роботтардың қандай категориялары бар?",
        options: [
          "Өндірістік, мобильді, қызмет көрсетуге арналған, әскери және т.б.",
          "Тек ойыншық және өндірістік",
          "Тек әуе және суасты"
        ],
        correctIndex: 0
      },
      {
        text: "10) Жарысу роботтары негізінен не істейді?",
        options: [
          "Музыка жүктейді",
          "Берілген трасса бойынша ең жылдам жүріп өтеді",
          "Тек жазба жасап отырады"
        ],
        correctIndex: 1
      }
    ]
  }
];

/************************************************************
  3) Глобальные переменные (для test.html):
     - currentChapter: индекс текущей главы
     - userAnswers: массив массивов
     - chapterScores: [{correct, total}, ...] - результат каждой главы
*************************************************************/
let currentChapter = 0;
let userAnswers = [];
let chapterScores = [];

/************************************************************
  4) При загрузке test.html инициализируем:
     userAnswers, chapterScores и показываем 1-ю главу
*************************************************************/
window.addEventListener("load", () => {
  if (document.title === "Тест по главам") {
    // Подготавливаем пустые ответы и счётчики
    userAnswers = chapters.map(() => []);
    chapterScores = chapters.map(ch => ({ correct: 0, total: ch.questions.length }));

    // Загружаем 1-ю главу
    loadChapter(0);
  }
});

/************************************************************
  5) Функция loadChapter(index): подгружает вопросы главы
*************************************************************/
function loadChapter(index) {
  currentChapter = index;

  const chapterTitleEl = document.getElementById("chapter-title");
  const formEl = document.getElementById("test-form");
  const resultBlock = document.getElementById("chapter-result");
  const overallBlock = document.getElementById("overall-results");
  const nextBtn = document.getElementById("next-chapter-btn");

  if (!chapters[index]) return;

  // Обновляем заголовок
  chapterTitleEl.textContent = chapters[index].title;

  // Очищаем форму и прячем блоки результатов
  formEl.innerHTML = "";
  resultBlock.style.display = "none";
  resultBlock.innerHTML = "";
  overallBlock.style.display = "none";
  overallBlock.innerHTML = "";
  nextBtn.style.display = "none";

  // Генерируем вопросы для текущей главы
  const questions = chapters[index].questions;
  questions.forEach((q, qIndex) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const questionText = document.createElement("p");
    questionText.textContent = q.text;
    block.appendChild(questionText);

    // Радиокнопки
    q.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question_${qIndex}`;
      radio.value = optIndex;

      // Если ранее пользователь отвечал – восстанавливаем
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
  6) finishChapter(): завершить текущую главу
     - Считать ответы, подсчитать правильные
     - Показать результат главы
     - Если есть следующая глава – показать кнопку
     - Если это последняя – показать общую сводку
*************************************************************/
function finishChapter() {
  const resultBlock = document.getElementById("chapter-result");
  const overallBlock = document.getElementById("overall-results");
  const nextBtn = document.getElementById("next-chapter-btn");

  const questions = chapters[currentChapter].questions;

  let correctCount = 0;
  let total = questions.length;

  // Считываем ответы пользователя
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
    if (chosen === q.correctIndex) {
      correctCount++;
    }
  });

  // Записываем в chapterScores
  chapterScores[currentChapter].correct = correctCount;

  // Выводим результат главы
  resultBlock.style.display = "block";
  resultBlock.innerHTML = `
    <h2>Нәтиже (Глава ${currentChapter + 1}): ${correctCount} / ${total}</h2>
    <p>Сіздің жауаптарыңыз:</p>
  `;

  // Подробный вывод ответа на каждый вопрос
  questions.forEach((q, qIndex) => {
    const chosen = userAnswers[currentChapter][qIndex];
    const correct = q.correctIndex;

    const div = document.createElement("div");
    div.className = "question-block";

    const title = document.createElement("p");
    title.textContent = q.text;
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

  // Если это НЕ последняя глава
  if (currentChapter < chapters.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    // Если последняя глава: показываем общую сводку
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
  7) Переход к следующей главе
*************************************************************/
function goToNextChapter() {
  if (currentChapter < chapters.length - 1) {
    loadChapter(currentChapter + 1);
  }
}