document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.querySelector('.btn-no');
    const siBtn = document.querySelector('.btn-si');
    let noClickCount = 0;
  
    document.querySelectorAll('.candle').forEach(candle => {
      const flame = candle.querySelector('.flame');
      const smoke = candle.querySelector('.smoke');
  
      flame.addEventListener('click', () => {
        flame.style.display = 'none';
        smoke.classList.add('active');
      });
    });
  
    noBtn.addEventListener('mouseover', () => {
      noClickCount++;
      const frases = [
        "¿Segura? :0",
        "¿Estás completamente segura? :0",
        "Enserio? :0",
        "Piensa bien... ",
        "Una última oportunidad >:("
      ];
      noBtn.innerText = frases[noClickCount % frases.length];
  
      const offsetX = Math.random() * 200 - 100;
      const offsetY = Math.random() * 60 - 30;
      noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  
    siBtn.addEventListener('click', () => {
        document.querySelector('.pregunta-section').style.display = 'none';
        document.getElementById('respuesta-si').style.display = 'block';
      });
  });

