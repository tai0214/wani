const data = [
  { faculty: "医学部", url: "https://i.ibb.co/wht7TkWj/image.png" },
  { faculty: "外国語学部", url: "https://i.ibb.co/RkLMbtvT/image.png" },
  { faculty: "基礎工学部", url: "https://i.ibb.co/bM7jc6pk/image.png" },
  { faculty: "経済学部", url: "https://i.ibb.co/Vpwdz7XT/image.png" },
  { faculty: "工学部", url: "https://i.ibb.co/hJk2gxC7/image.png" },
  { faculty: "歯学部", url: "https://i.ibb.co/d0vbnB65/image.png" },
  { faculty: "人間科学部", url: "https://i.ibb.co/h5Hjq97/image.png" },
  { faculty: "文学部", url: "https://i.ibb.co/hxbSMDtV/image.png" },
  { faculty: "法学部", url: "https://i.ibb.co/ZzRdSPJS/image.png" },
  { faculty: "薬学部", url: "https://i.ibb.co/Mxq371s7/image.png" },
  { faculty: "理学部", url: "https://i.ibb.co/nqyVVDGn/image.png" }
];

let currentAnswer = "";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function nextQuestion() {
  const question = data[Math.floor(Math.random() * data.length)];
  currentAnswer = question.faculty;
  document.getElementById("wani-image").src = question.url;

  const options = shuffle(data.map(d => d.faculty));
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    container.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === currentAnswer) {
    feedback.textContent = "正解！🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `不正解 😢 正解は「${currentAnswer}」でした。`;
    feedback.style.color = "red";
  }
}

nextQuestion();
