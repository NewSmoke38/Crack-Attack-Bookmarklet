// This script is the logic behind the Rainbow Reader bookmarklet.

(function() {
    const colors = ['#FF69B4', '#FFD700', '#00FFFF', '#ADFF2F', '#FF4500', '#00FF7F', '#FF1493', '#8A2BE2', '#00CED1', '#FF6347'];
    const style = document.createElement('style');
    style.textContent = `
      .rainbow-reader {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: inline-block;
        position: relative;
      }
      .rainbow-reader:hover {
        transform: scale(1.1) rotate(-2deg);
        z-index: 9999;
        position: relative;
        box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
      }
      .rainbow-reader::after {
        content: "";
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        border: 2px solid #fff;
        border-radius: 10px;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  
    document.querySelectorAll('p').forEach(p => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      p.classList.add('rainbow-reader');
      p.style.backgroundColor = randomColor;
  
      const brightness = (
        parseInt(randomColor.slice(1, 3), 16) * 0.299 +
        parseInt(randomColor.slice(3, 5), 16) * 0.587 +
        parseInt(randomColor.slice(5, 7), 16) * 0.114
      );
  
      p.style.color = (brightness > 186) ? 'black' : 'white';
      p.style.textShadow = (brightness > 186)
        ? '2px 2px 3px rgba(0, 0, 0, 0.5)'
        : '2px 2px 3px rgba(255, 255, 255, 0.5)';
  
      p.style.padding = '0.5rem';
      p.style.borderRadius = '10px';
      p.style.fontFamily = 'monospace';
      p.style.fontSize = '1rem';
      p.style.marginBottom = '1rem';
    });
  })();