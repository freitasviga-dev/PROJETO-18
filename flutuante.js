// ===== BOTÕES FLUTUANTES (MÚSICA + WHATSAPP) =====

// cria botão WhatsApp
const zap = document.createElement("a");
zap.href = "https://wa.me/5583996469538";
zap.target = "_blank";
zap.id = "zapFlutuante";
zap.innerHTML = "📲";
document.body.appendChild(zap);

// cria botão Música
const musicBtn = document.createElement("button");
musicBtn.id = "musicToggle";
musicBtn.innerHTML = "🎵";
document.body.appendChild(musicBtn);

// estilo dos botões
const style = document.createElement("style");
style.innerHTML = `
#musicToggle,
#zapFlutuante{
  position:fixed;
  right:20px;
  width:60px;
  height:60px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  cursor:pointer;
  border:none;
  z-index:9999;
  box-shadow:0 0 22px rgba(0,0,0,0.6);
  transition:transform .2s, box-shadow .3s, background .3s;
}

#zapFlutuante{
  bottom:95px;
  background:gold;
  color:black;
  text-decoration:none;
}
#zapFlutuante:hover{
  transform:scale(1.08);
  box-shadow:0 0 35px gold;
}

#musicToggle{
  bottom:20px;
  background:#b00000;
  color:white;
}
#musicToggle.active{
  background:#0bb300;
  box-shadow:0 0 30px #0bb300;
}
`;
document.head.appendChild(style);

// música MP3 local
const musica = new Audio("musica.mp3");
musica.loop = true;
let tocando = false;

musicBtn.addEventListener("click", () => {
  if(!tocando){
    musica.play();
    musicBtn.classList.add("active");
    musicBtn.innerHTML = "🔊";
    tocando = true;
  }else{
    musica.pause();
    musicBtn.classList.remove("active");
    musicBtn.innerHTML = "🎵";
    tocando = false;
  }
});