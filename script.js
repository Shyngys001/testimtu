/************************************************************
  1) Простейшая проверка логина.
     - Для реального сайта нужна серверная аутентификация.
*************************************************************/
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
  
    // Пример: логин/пароль = admin / 1234
    if (username === "admin" && password === "1234") {
      // Переходим на страницу меню
      window.location.href = "menu.html";
    } else {
      errorMsg.textContent = "Логин немесе пароль қате!";
    }
  }
  
  function logout() {
    // Для упрощения просто возвращаемся на index.html
    window.location.href = "index.html";
  }
  
  /************************************************************
    2) Вопросы теста (демо-данные).
       Можно добавлять вопросы для каждого раздела.
  *************************************************************/
  const testData = {
    part1: {
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
    part2: {
      title: "2-бөлім. Компьютерлік графика",
      questions: [
        {
          text: "Растрлық кескін деген не?",
          options: ["Пиксельдерден тұратын сурет", "Шексіз масштабталатын сурет", "3D модель"],
          correctIndex: 0
        }
      ]
    },
    part3: {
      title: "3-бөлім. Роботтехника",
      questions: [
        {
          text: "Роботтың негізгі бөлшектері?",
          options: ["Монитор, пернетақта", "Датчиктер, қозғалтқыш, басқару блогы", "Тек конструктор бөлшектері"],
          correctIndex: 1
        }
      ]
    },
    part4: {
      title: "4-бөлім. Роботтардың жарысы",
      questions: [
        {
          text: "Робот жарысында не бағаланады?",
          options: ["Роботтың жылдамдығы және дәлдігі", "Тек дизайн", "Тек түсі"],
          correctIndex: 0
        }
      ]
    },
    part5: {
      title: "5-бөлім. Компьютер және қауіпсіздік",
      questions: [
        {
          text: "Компьютерде вирусқа қарсы бағдарлама орнату не үшін керек?",
          options: ["Компьютерді сәндеу үшін", "Зиянды ПО-дан қорғау үшін", "Жылдамдығын азайту үшін"],
          correctIndex: 1
        }
      ]
    }
  };
  
  /************************************************************
    3) Функция загрузки вопросов при клике на кнопку раздела
  *************************************************************/
  function loadQuestions(partKey) {
    const testForm = document.getElementById("test-form");
    const testTitle = document.getElementById("test-title");
  
    // Проверка, что такие вопросы существуют
    if (!testData[partKey]) return;
  
    // Заголовок
    testTitle.textContent = testData[partKey].title;
  
    // Очищаем форму
    testForm.innerHTML = "";
  
    // Генерируем вопросы
    testData[partKey].questions.forEach((q, index) => {
      const block = document.createElement("div");
      block.className = "question-block";
      
      const questionText = document.createElement("p");
      questionText.textContent = (index+1) + ". " + q.text;
      block.appendChild(questionText);
  
      q.options.forEach((option, i) => {
        const label = document.createElement("label");
        label.style.display = "block";
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question_${index}`;
        radio.value = i;
        label.appendChild(radio);
  
        const text = document.createTextNode(" " + option);
        label.appendChild(text);
  
        block.appendChild(label);
      });
  
      testForm.appendChild(block);
    });
  
    // Сохраняем текущий раздел в localStorage (чтобы знать, что сдаём)
    localStorage.setItem("currentPart", partKey);
  }
  
  /************************************************************
    4) Отправка теста и переход к результатам
  *************************************************************/
  function submitTest() {
    const partKey = localStorage.getItem("currentPart");
    if (!partKey || !testData[partKey]) return;
  
    const questions = testData[partKey].questions;
    const userAnswers = [];
  
    // Собираем ответы пользователя
    for (let i = 0; i < questions.length; i++) {
      const radios = document.getElementsByName(`question_${i}`);
      let answer = -1;
      for (let r = 0; r < radios.length; r++) {
        if (radios[r].checked) {
          answer = parseInt(radios[r].value);
          break;
        }
      }
      userAnswers.push(answer);
    }
  
    // Сохраняем в localStorage для показа на result.html
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    // Сохраняем ключ раздела (какой сдавали)
    localStorage.setItem("partKey", partKey);
  
    // Переход на страницу результатов
    window.location.href = "result.html";
  }
  
  /************************************************************
    5) На result.html показываем итог + правильные ответы
  *************************************************************/
  window.onload = function() {
    if (document.title === "Нәтижелер") {
      const partKey = localStorage.getItem("partKey");
      const answersDiv = document.getElementById("answers");
      const scoreDiv = document.getElementById("score");
  
      if (!partKey || !testData[partKey]) return;
  
      const questions = testData[partKey].questions;
      const userAnswers = JSON.parse(localStorage.getItem("userAnswers") || "[]");
  
      let correctCount = 0;
      let total = questions.length;
  
      questions.forEach((q, i) => {
        const userAnswer = userAnswers[i];
        const correctAnswer = q.correctIndex;
  
        const block = document.createElement("div");
        block.className = "question-block";
        const questionText = document.createElement("p");
        questionText.textContent = (i+1) + ". " + q.text;
        block.appendChild(questionText);
  
        // Показать, что выбрал пользователь и что правильно
        q.options.forEach((option, idx) => {
          const p = document.createElement("p");
          // Помечаем правильный ответ и ответ пользователя
          let prefix = "";
          if (idx === correctAnswer) {
            prefix = "(Дұрыс) ";
          }
          if (idx === userAnswer) {
            prefix += "(Сіздің таңдауыңыз) ";
          }
          p.textContent = prefix + option;
          block.appendChild(p);
        });
  
        // Подсчитываем количество правильных ответов
        if (userAnswer === correctAnswer) correctCount++;
  
        answersDiv.appendChild(block);
      });
  
      scoreDiv.textContent = `Сіздің ұпайыңыз: ${correctCount} / ${total}`;
    }
  };