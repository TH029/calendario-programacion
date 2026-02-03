const calendar = document.getElementById("calendar");
const opened = JSON.parse(localStorage.getItem("openedDays")) || [];

// elementos de la cajita
const overlay = document.getElementById("cuteBox");
const startBtn = document.querySelector(".start-btn");

const loveBox = document.getElementById("loveMessage");
const loveText = document.getElementById("loveText");

let currentDay = null;

function playSound(id) {
  const audio = document.getElementById(id);
  if (!audio) return;

  const sound = audio.cloneNode();
  sound.volume = 0.6;
  sound.play().catch(() => {});
}
startBtn.addEventListener("click", () => {
  playSound("openSound");

  overlay.classList.add("hidden");

  loveText.textContent =
    loveMessages[currentDay] ||
    "💝 Sigue creando, tu camino apenas comienza.";

  loveBox.classList.remove("hidden");
});

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

let musicStarted = false;



// 👉 20 cajitas SIN bloqueo por fecha
for (let i = 1; i <= 20; i++) {
  const d = document.createElement("div");
  d.className = "day";
  d.textContent = i;

  if (opened.includes(i)) d.classList.add("opened");

  d.addEventListener("click", () => {
    
  // 🔊 click
  clickSound.currentTime = 0;
  clickSound.play();
    currentDay = i;
    overlay.classList.remove("hidden");

  if (!musicStarted) {
    bgMusic.volume = 0.25; // ✔ valor válido
    bgMusic.play().catch(e => console.error("Audio:", e));
    musicStarted = true;
  }
    currentDay = i;
  overlay.classList.remove("hidden");
  });

  calendar.appendChild(d);
}


//////////////////////


// 👉 un SOLO listener correcto
startBtn.addEventListener("click", () => {
    const loveMessages = {
  1:  "💖 Desde que llegaste a mi vida, todo se transformó en un universo lleno de estrellas. Cada instante contigo es como viajar a una galaxia distinta, donde la luz de tu sonrisa ilumina mis días y la fuerza de tu abrazo me protege de cualquier oscuridad. No necesito nada más que tu compañía para sentirme en casa, porque tú eres mi destino y mi lugar favorito en todo el cosmos.",
  2:  "✨ Tu sonrisa ilumina mi universo más que cualquier estrella. Amar contigo es descubrir que la felicidad no está en los grandes momentos, sino en los pequeños detalles que compartimos juntos.",
  3:  "🌠 Nuestro amor brilla más que cualquier constelación, y cada día juntos es una nueva aventura que me inspira a seguir creciendo.",
  4:  "💫 No necesitas saberlo todo, solo seguir aprendiendo. Cada paso que das te acerca a tus sueños y fortalece nuestro camino juntos.",
  5:  "💗 Tu mente es capaz de cosas increíbles, y tu corazón aún más. Nunca dudes del poder que tienes para transformar tu mundo.",
  6:  "🌸 El esfuerzo que haces hoy florecerá mañana. Igual que nuestro amor, que crece con cada detalle y cada gesto sincero.",
  7:  "⭐ Incluso cuando dudas, sigues avanzando. Tu valentía me inspira y me recuerda que juntos podemos con todo.",
  8:  "🧠 Pensar, fallar y volver a intentar es amor propio. Y yo admiro tu capacidad de levantarte siempre con más fuerza.",
  9:  "💞 Tu constancia vale más que la perfección. Gracias a ella, nuestro amor se mantiene firme y lleno de esperanza.",
  10: "✨ Cada línea de código también cuenta tu historia, y cada día contigo escribe un capítulo inolvidable en la mía.",
  11: "🌙 Descansar también es parte del proceso. Permítete respirar, porque incluso las estrellas necesitan la noche para brillar.",
  12: "💎 No te compares, tu camino es único. Y en ese camino, yo quiero caminar siempre a tu lado.",
  13: "🌷 Aprender es un acto de valentía. Gracias por enseñarme cada día que el amor también se aprende y se construye.",
  14: "🔥 Hoy eres mejor que ayer, aunque no lo notes. Tu crecimiento me inspira y me llena de orgullo.",
  15: "💖 Tu curiosidad es tu superpoder. Gracias a ella descubrimos juntos nuevas formas de amar y de vivir.",
  16: "🌟 Crear algo desde cero es un regalo. Igual que nuestro amor, que nació de un encuentro y hoy es un universo infinito.",
  17: "💌 Confía en ti, incluso cuando el bug no se va. Yo confío en ti siempre, porque sé que tu fuerza es inagotable.",
  18: "🕊️ Paso a paso también se llega lejos. Y cada paso contigo me acerca más a la vida que siempre soñé.",
  19: "🎀 Lo que haces con amor siempre vale la pena. Nuestro amor es la prueba más hermosa de ello.",
  20: "💝 Gracias por no rendirte. Este logro es tuyo, y yo celebro cada victoria contigo, porque juntos somos imparables."

}


  overlay.classList.add("hidden");

  loveText.textContent =
    loveMessages[currentDay] ||
    "💝 Sigue creando, tu camino apenas comienza.";

  loveBox.classList.remove("hidden");
});

const closeLove = document.getElementById("closeLove");

closeLove.addEventListener("click", () => {
  loveBox.classList.add("hidden");
});


let isMuted = localStorage.getItem("muted") === "true";

bgMusic.muted = isMuted;
clickSound.muted = isMuted;
muteBtn.textContent = isMuted ? "🔇" : "🔊";

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  clickSound.muted = isMuted;
  localStorage.setItem("muted", isMuted);
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
});

