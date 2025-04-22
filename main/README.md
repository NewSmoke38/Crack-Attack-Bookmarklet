<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GlitShock Bookmarklet</title>
  <style>
    body {
      margin: 0;
      padding: 2rem;
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      color: #ff2c8b;
      margin-bottom: 1rem;
    }

    p.subtitle {
      font-size: 1.2rem;
      color: #ccc;
      margin-bottom: 3rem;
    }

    a.button {
      display: inline-block;
      background-color: #ff2c8b;
      color: white;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 12px;
      text-decoration: none;
      transition: transform 0.2s ease;
      margin-bottom: 4rem;
    }

    a.button:hover {
      transform: scale(1.05);
    }

    h2 {
      font-size: 1.5rem;
      color: #00ffe0;
      margin-bottom: 1rem;
    }

    code {
      display: block;
      background: #1c1c1c;
      padding: 1rem;
      border: 2px solid #ff2c8b;
      border-radius: 8px;
      color: #f0f0f0;
      font-size: 0.95rem;
      word-break: break-word;
      margin: 2rem auto;
      max-width: 90%;
    }

    .how-to {
      margin-top: 4rem;
      text-align: left;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .how-to h3 {
      color: #00ffe0;
      font-size: 1.4rem;
    }

    .how-to ul {
      list-style-type: none;
      padding: 0;
      font-size: 1.1rem;
    }

    .how-to ul li {
      margin-bottom: 0.75rem;
    }

    .how-to ul li::before {
      content: "💥";
      margin-right: 0.6rem;
    }
  </style>
</head>
<body>
  <h1>🔮 GlitShock</h1>
  <p class="subtitle">A glitchy chaos injection for your webpage. One click to shake things up!</p>

  <h2>🔖 Drag this to your bookmarks bar:</h2>
  <a class="button" href="javascript:(function(){document.body.style.transition='all 0.2s';document.body.style.transform='rotate(1deg)';setTimeout(()=>{document.body.style.transform='rotate(-1deg)';},100);setInterval(()=>{document.body.style.transform=`rotate(${(Math.random() - 0.5) * 2}deg)`;},200);})();">⚡ GlitShock It</a>

  <h2>📋 Or manually add this:</h2>
  <code>
javascript:(function(){document.body.style.transition='all 0.2s';document.body.style.transform='rotate(1deg)';setTimeout(()=>{document.body.style.transform='rotate(-1deg)';},100);setInterval(()=>{document.body.style.transform=`rotate(${(Math.random() - 0.5) * 2}deg)`;},200);})();  
  </code>

  <div class="how-to">
    <h3>🛠️ How to Use</h3>
    <ul>
      <li>Drag the <strong>GlitShock It</strong> button to your bookmarks bar.</li>
      <li>Visit any website you want to test.</li>
      <li>Click the bookmarklet from your bookmarks bar.</li>
      <li>Watch your page start to **wiggle and glitch** — pure visual chaos!</li>
      <li>Reload the page to reset everything to normal.</li>
    </ul>
  </div>
</body>
</html>
