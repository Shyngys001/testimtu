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
  2) Тестовые данные. По 10 вопросов на главу (пример).
     Можно расширить до 15 и более.
*************************************************************/
const chapters = [
  {
    title: "1-бөлім. Ақпаратты ұсыну",
    questions: [
      { text: "1) Ақпарат дегеніміз не?", 
        options: ["Кез келген мәлімет", "Есептеу құрылғысы", "Компьютерлік бағдарлама"], correctIndex: 0 },
      { text: "2) Бит және байт деген не?", 
        options: ["Компьютер вирусы", "Ақпарат өлшем бірліктері", "ОС атауы"], correctIndex: 1 },
      { text: "3) Есептеу техникасының негізі неде?", 
        options: ["Принтер", "Процессор", "Интернет"], correctIndex: 1 },
      { text: "4) ДК құрамына не кіреді?", 
        options: ["Жүйелік блок, монитор, пернетақта, тінтуір", "Тек микрофон", "Тек монитор"], correctIndex: 0 },
      { text: "5) Файл деген не?", 
        options: ["Желілік кабель", "Ақпарат сақтаудың бірлігі", "Компьютер желісі"], correctIndex: 1 },
      { text: "6) Папка деген не?", 
        options: ["Файлдардың контейнері", "Қағаз құжат", "Вирус анықтаушы"], correctIndex: 0 },
      { text: "7) Ақпарат түрлерін көрсетіңіз", 
        options: ["Мәтін, сан, графика, дыбыс, видео", "Бір ғана мәтін", "Тек видео"], correctIndex: 0 },
      { text: "8) Енгізу құрылғылары?", 
        options: ["Пернетақта, тінтуір, сканер", "Монитор, принтер", "Процессор, диск"], correctIndex: 0 },
      { text: "9) Шығару құрылғылары?", 
        options: ["Монитор, принтер, динамик", "Сканер, клавиатура", "Тінтуір, флешка"], correctIndex: 0 },
      { text: "10) Компьютер жадының негізгі түрлері?", 
        options: ["Оперативтік, тұрақты, сыртқы", "Оптикалық", "Кэш/вирустық"], correctIndex: 0 }
    ]
  },
  {
    title: "2-бөлім. Компьютерлік графика",
    questions: [
      { text: "1) Растрлық кескін деген не?", 
        options: ["Пиксельдерден тұратын сурет", "Шексіз масштабталатын", "3D модель"], correctIndex: 0 },
      { text: "2) Векторлық кескіннің артықшылығы?", 
        options: ["Пиксельге тәуелді", "Шексіз масштабталалады", "Сапасы төмен"], correctIndex: 1 },
      { text: "3) 3D графика қайда қолданылады?", 
        options: ["Мультфильм, ойындар", "Тек офис", "Браузер"], correctIndex: 0 },
      { text: "4) Paint – қандай редактор?", 
        options: ["Векторлық", "Растрлық", "3D"], correctIndex: 1 },
      { text: "5) Photoshop көбінесе қандай кескінмен жұмыс істейді?", 
        options: ["Растрлық", "Векторлық", "3D"], correctIndex: 0 },
      { text: "6) CorelDRAW деген не?", 
        options: ["Windows ОС", "Векторлық редактор", "Браузер"], correctIndex: 1 },
      { text: "7) Анимация деген не?", 
        options: ["Қозғалыс иллюзиясы", "Файл сығу", "Киберқауіпсіздік"], correctIndex: 0 },
      { text: "8) Пиксель деген не?", 
        options: ["Желі ресурсы", "Суреттің ең кішкентай элементі", "Программалау тілі"], correctIndex: 1 },
      { text: "9) Компьютерлік графика екіге бөлінеді:", 
        options: ["Векторлық, растрлық", "Әмбебап, арнайы", "2D, 4D"], correctIndex: 0 },
      { text: "10) Бір кадрдан келесіге ақырын өзгеру – ...", 
        options: ["Морфинг", "Копирование", "Фильтр"], correctIndex: 0 }
    ]
  },
  {
    title: "3-бөлім. Робототехника",
    questions: [
      { text: "1) Робототехника деген не?", 
        options: ["Құрылыс саласы", "Роботтарды жобалау, жасау және қолдану", "Автомобиль жөндеу"], correctIndex: 1 },
      { text: "2) Роботтың негізгі бөлшектері?", 
        options: ["Монитор, пернетақта", "Датчиктер, қозғалтқыш, басқару блогы", "Тек конструктор"], correctIndex: 1 },
      { text: "3) Робот жарысында не бағаланады?", 
        options: ["Робот жылдамдығы, дәлдігі", "Тек дизайн", "Тек түсі"], correctIndex: 0 },
      { text: "4) Arduino деген не?", 
        options: ["Сервомотор", "Микроконтроллерлік плата", "Интернет-протокол"], correctIndex: 1 },
      { text: "5) Датчик деген не?", 
        options: ["Электр тогын күшейтетін құрылғы", "Роботқа өлшеу ақпаратын беретін құрылғы", "Жарықдиод"], correctIndex: 1 },
      { text: "6) Сервомотордың ерекшелігі?", 
        options: ["Бұрылу бұрышын дәл басқару", "Жарық түсіру", "Процессор қызметі"], correctIndex: 0 },
      { text: "7) Робототехникада қандай тілдер қолданылады?", 
        options: ["Python, C/C++, Java", "Photoshop, CorelDRAW", "HTML, CSS"], correctIndex: 0 },
      { text: "8) LEGO Mindstorms – бұл ...", 
        options: ["Мотор бренді", "Робот жинау платформасы", "Ұялы телефон"], correctIndex: 1 },
      { text: "9) Роботтардың категориялары?", 
        options: ["Өндірістік, мобильді, әскери т.б.", "Тек ойыншық", "Тек әуе"], correctIndex: 0 },
      { text: "10) Жарысу роботтары ...", 
        options: ["Музыка жүктейді", "Трассаны жылдам өтеді", "Тек жазба жасайды"], correctIndex: 1 }
    ]
  }
];

/************************************************************
  3) Глобальные переменные (для menu.html)
     - currentChapter: текущая
     - userAnswers: массив ответов
     - chapterScores: [{correct, total}, ...]
     - unlockedChapterIndex: до какой главы дошли (0 = доступна глава 0)
*************************************************************/
let currentChapter = null;
let userAnswers = [];
let chapterScores = [];
let unlockedChapterIndex = 0; // Изначально доступна только глава 0

/************************************************************
  4) При загрузке menu.html:
     - Инициализируем массивы
     - Сразу (по желанию) загружаем 0-ю главу
     - Обновляем кнопки меню (disable/enable)
*************************************************************/
window.addEventListener("load", () => {
  if (document.title === "Меню") {
    userAnswers = chapters.map(() => []);
    chapterScores = chapters.map(ch => ({ correct: 0, total: ch.questions.length }));
    // Хотите – сразу открыть 1-ю главу:
    selectChapter(0);
    // Включаем/выключаем кнопки
    updateMenuButtons();
  }
});

/************************************************************
  5) Функция, которая в menu.html включает/выключает кнопки
     в зависимости от unlockedChapterIndex.
*************************************************************/
function updateMenuButtons() {
  for (let i = 0; i < chapters.length; i++) {
    const btn = document.getElementById(`chapter${i}-btn`);
    if (!btn) continue;

    // Если i <= unlockedChapterIndex => разблокировать
    // иначе заблокировать
    btn.disabled = (i > unlockedChapterIndex);
  }
}

/************************************************************
  6) Выбор главы (клик из меню)
*************************************************************/
function selectChapter(index) {
  // Если пользователь кликнул на заблокированную главу, игнорируем
  if (index > unlockedChapterIndex) return;

  currentChapter = index;
  loadChapter(index);
}

/************************************************************
  7) Загрузка вопросов главы
*************************************************************/
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

  // Очищаем форму, скрываем результаты
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

      // Восстанавливаем если что-то выбирали
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
  8) Завершить главу
     - Если это именно та глава, которая "открыта", 
       то после подсчёта результата разблокируем следующую.
*************************************************************/
function finishChapter() {
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

  // Сохраняем в chapterScores
  chapterScores[currentChapter].correct = correctCount;

  // Показать результат
  resultBlock.style.display = "block";
  resultBlock.innerHTML = `
    <h2>Нәтиже (Глава ${currentChapter + 1}): ${correctCount} / ${total}</h2>
    <p>Сіздің жауаптарыңыз:</p>
  `;

  questions.forEach((q, qIndex) => {
    const chosen = userAnswers[currentChapter][qIndex];
    const correct = q.correctIndex;

    const div = document.createElement("div");
    div.className = "question-block";

    const title = document.createElement("p");
    title.textContent = q.text;
    div.appendChild(title);

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

  // Разблокируем следующую главу (если это именно та глава,
  // которую мы уже открыли в menu).
  if (currentChapter === unlockedChapterIndex) {
    // Если не последняя, увеличим
    if (unlockedChapterIndex < chapters.length - 1) {
      unlockedChapterIndex++;
    }
    // Обновляем кнопки слева
    updateMenuButtons();
  }

  // Если не последняя глава, покажем "Следующая глава"
  if (currentChapter < chapters.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    // Последняя глава – показать итог
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
  9) Переход к следующей главе
*************************************************************/
function goToNextChapter() {
  if (currentChapter < chapters.length - 1) {
    selectChapter(currentChapter + 1);
  }
}