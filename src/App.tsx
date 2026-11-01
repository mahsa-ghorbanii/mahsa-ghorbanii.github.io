import { useEffect, useState } from "react";

type IconName =
  | "home"
  | "game"
  | "bag"
  | "book"
  | "settings"
  | "heart"
  | "bolt"
  | "coin"
  | "bell"
  | "sparkle"
  | "arrow"
  | "close"
  | "check";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10M9 20v-6h6v6" /></>,
    game: <><path d="M8.7 8h6.6c3.1 0 5.7 2.5 5.7 5.7v1.8c0 2.5-3.1 3.6-4.7 1.7L14.5 15h-5l-1.8 2.2C6.1 19.1 3 18 3 15.5v-1.8C3 10.5 5.5 8 8.7 8Z" /><path d="M7 11v4M5 13h4M16.5 11.8h.01M18.5 14h.01" /></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    heart: <path d="M20.8 5.8a5.3 5.3 0 0 0-7.5 0L12 7.1l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 22l8.8-8.7a5.3 5.3 0 0 0 0-7.5Z" />,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    coin: <><circle cx="12" cy="12" r="9" /><path d="M14.5 8.5c-.5-.5-1.3-.8-2.3-.8-1.4 0-2.4.7-2.4 1.8 0 2.7 5.2 1.3 5.2 4.1 0 1.2-1.1 2-2.7 2-1.1 0-2.1-.4-2.8-1.1M12.3 6v12" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" /><path d="M10 21h4" /></>,
    sparkle: <path d="m12 2 1.5 5.1L18 10l-4.5 2.9L12 18l-1.5-5.1L6 10l4.5-2.9L12 2Z" />,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Pet({ celebrating }: { celebrating: boolean }) {
  return (
    <svg className={`pet-illustration ${celebrating ? "is-celebrating" : ""}`} viewBox="0 0 420 340" role="img" aria-label="Mochi, a happy cloud pet">
      <ellipse className="pet-shadow" cx="211" cy="305" rx="105" ry="18" />
      <path className="tail" d="M311 218c48-9 59 41 26 51-18 6-31-9-20-21 7-8 17-2 15 6" />
      <g className="pet-body">
        <path className="body-fill" d="M102 195c-19-36 10-68 43-65-2-39 35-63 70-44 25-34 79-15 79 27 38-5 63 34 43 66 27 18 21 63-11 73-13 37-62 43-86 19-25 29-77 22-89-14-37 3-67-32-49-62Z" />
        <path className="ear-fill" d="M157 122c-13-35-3-65 12-79 5 25 25 40 37 54M269 111c11-35 3-62-11-76-5 25-23 41-34 55" />
        <path className="ear-inner" d="M166 89c-1-11 0-20 3-28 5 13 13 24 23 32M260 83c1-10 0-20-3-29-4 13-12 24-21 33" />
        <ellipse className="eye" cx="178" cy="174" rx="7" ry="10" />
        <ellipse className="eye" cx="260" cy="174" rx="7" ry="10" />
        <ellipse className="cheek" cx="153" cy="196" rx="17" ry="9" />
        <ellipse className="cheek" cx="285" cy="196" rx="17" ry="9" />
        <path className="mouth" d="M207 190c6 8 17 8 23 0M219 190v-5" />
        <path className="paw" d="M156 253c3-14 15-22 27-17 9 3 15 12 15 24M280 253c-2-14-14-22-26-17-9 3-15 12-15 24" />
        <path className="belly-mark" d="M188 224c17 8 40 8 61 0" />
      </g>
      <g className="pet-sparkles">
        <path d="m76 133 4 12 11 4-11 4-4 12-4-12-11-4 11-4 4-12Z" />
        <path d="m350 105 3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9Z" />
      </g>
    </svg>
  );
}

const treats = [
  { id: "berry", name: "Moon berry", qty: 4, color: "berry", icon: "◆", boost: 8 },
  { id: "cookie", name: "Cloud cookie", qty: 2, color: "cookie", icon: "●", boost: 12 },
  { id: "juice", name: "Star juice", qty: 3, color: "juice", icon: "✦", boost: 10 },
];

export default function App() {
  const [happiness, setHappiness] = useState(82);
  const [energy, setEnergy] = useState(68);
  const [quantities, setQuantities] = useState<Record<string, number>>({ berry: 4, cookie: 2, juice: 3 });
  const [message, setMessage] = useState("Mochi is feeling cozy");
  const [celebrating, setCelebrating] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);
  const [target, setTarget] = useState({ x: 52, y: 42 });

  useEffect(() => {
    if (!gameActive) return;
    if (time === 0) {
      setGameActive(false);
      setEnergy((value) => Math.max(0, value - 6));
      setHappiness((value) => Math.min(100, value + Math.min(score * 2, 18)));
      return;
    }
    const timer = window.setTimeout(() => setTime((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [gameActive, time, score]);

  function feed(treat: (typeof treats)[number]) {
    if (quantities[treat.id] < 1) {
      setMessage(`You’re out of ${treat.name.toLowerCase()}s`);
      return;
    }
    setQuantities((items) => ({ ...items, [treat.id]: items[treat.id] - 1 }));
    setHappiness((value) => Math.min(100, value + treat.boost));
    setEnergy((value) => Math.min(100, value + Math.round(treat.boost / 2)));
    setMessage(`Mochi loved the ${treat.name.toLowerCase()}!`);
    setCelebrating(true);
    window.setTimeout(() => setCelebrating(false), 700);
  }

  function startGame() {
    setScore(0);
    setTime(10);
    setGameActive(true);
  }

  function catchStar() {
    if (!gameActive) return;
    setScore((value) => value + 1);
    setTarget({ x: 12 + Math.random() * 76, y: 16 + Math.random() * 66 });
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark" aria-label="Mochi home"><span>m</span></div>
        <nav className="main-nav" aria-label="Main navigation">
          <button className="nav-button active" aria-label="Home"><Icon name="home" /></button>
          <button className="nav-button" aria-label="Mini-games" onClick={() => setGameOpen(true)}><Icon name="game" /></button>
          <button className="nav-button" aria-label="Treat bag"><Icon name="bag" /></button>
          <button className="nav-button" aria-label="Pet journal"><Icon name="book" /></button>
        </nav>
        <button className="nav-button settings-button" aria-label="Settings"><Icon name="settings" /></button>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Monday, 14 October</p>
            <h1>Good morning, Alex!</h1>
          </div>
          <div className="top-actions">
            <div className="coin-balance"><Icon name="coin" size={18} /><strong>1,240</strong></div>
            <button className="icon-button" aria-label="Notifications"><Icon name="bell" /><span className="notification-dot" /></button>
            <button className="profile-button" aria-label="Open profile">AL</button>
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="pet-card">
            <div className="pet-card-top">
              <div>
                <div className="pet-name-row"><h2>Mochi</h2><span>Lv. 7</span></div>
                <p>{message}</p>
              </div>
              <button className="more-button" aria-label="More pet options">•••</button>
            </div>

            <div className="pet-stage">
              <div className="ambient ambient-one" />
              <div className="ambient ambient-two" />
              <Pet celebrating={celebrating} />
              <div className="speech-bubble">mrrp!</div>
            </div>

            <div className="stat-row">
              <div className="stat">
                <div className="stat-label"><span><Icon name="heart" size={17} /> Happiness</span><strong>{happiness}%</strong></div>
                <div className="progress-track"><div className="progress-fill happiness-fill" style={{ width: `${happiness}%` }} /></div>
              </div>
              <div className="stat">
                <div className="stat-label"><span><Icon name="bolt" size={17} /> Energy</span><strong>{energy}%</strong></div>
                <div className="progress-track"><div className="progress-fill energy-fill" style={{ width: `${energy}%` }} /></div>
              </div>
            </div>
          </section>

          <aside className="side-content">
            <section className="streak-card">
              <div className="section-heading">
                <div><p className="eyebrow">This week</p><h3>Care streak</h3></div>
                <div className="streak-count"><Icon name="sparkle" size={18} /><strong>5</strong><span>days</span></div>
              </div>
              <div className="week-row">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div className={`day ${index < 5 ? "complete" : ""} ${index === 5 ? "today" : ""}`} key={`${day}-${index}`}>
                    <span>{day}</span><i>{index < 5 ? <Icon name="check" size={14} /> : ""}</i>
                  </div>
                ))}
              </div>
            </section>

            <section className="activities-card">
              <div className="section-heading">
                <div><p className="eyebrow">Play together</p><h3>Mini-games</h3></div>
                <button className="text-button" onClick={() => setGameOpen(true)}>View all <Icon name="arrow" size={16} /></button>
              </div>
              <button className="featured-game" onClick={() => setGameOpen(true)}>
                <span className="game-art star-art"><Icon name="sparkle" size={28} /></span>
                <span className="game-copy"><strong>Star Catch</strong><small>Quick · +15 joy</small></span>
                <span className="play-arrow"><Icon name="arrow" size={17} /></span>
              </button>
              <button className="featured-game bubble-game" onClick={() => setGameOpen(true)}>
                <span className="game-art bubble-art"><span /><span /><span /></span>
                <span className="game-copy"><strong>Bubble Bounce</strong><small>Relaxed · +10 joy</small></span>
                <span className="play-arrow"><Icon name="arrow" size={17} /></span>
              </button>
            </section>
          </aside>

          <section className="treat-card">
            <div className="section-heading">
              <div><p className="eyebrow">A little something</p><h3>Treat time</h3></div>
              <p className="helper-text">Pick a snack for Mochi</p>
            </div>
            <div className="treat-list">
              {treats.map((treat) => (
                <button className="treat-button" key={treat.id} onClick={() => feed(treat)}>
                  <span className={`treat-icon ${treat.color}`}>{treat.icon}</span>
                  <span className="treat-name">{treat.name}</span>
                  <span className="treat-quantity">×{quantities[treat.id]}</span>
                  <span className="give-label">{quantities[treat.id] ? "Give" : "Empty"}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {gameOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setGameOpen(false)}>
          <section className="game-modal" role="dialog" aria-modal="true" aria-labelledby="game-title">
            <button className="modal-close" onClick={() => setGameOpen(false)} aria-label="Close game"><Icon name="close" /></button>
            <p className="eyebrow">Mini-game</p>
            <h2 id="game-title">Star Catch</h2>
            <p className="game-instructions">{gameActive ? "Catch as many stars as you can!" : time === 0 ? `Nice work! Mochi caught ${score} stars.` : "Tap the wandering star before time runs out."}</p>
            <div className="game-board">
              <div className="game-score"><span>Score <strong>{score}</strong></span><span>Time <strong>{time}s</strong></span></div>
              <div className="cloud cloud-a" /><div className="cloud cloud-b" />
              {gameActive && (
                <button className="catch-target" style={{ left: `${target.x}%`, top: `${target.y}%` }} onClick={catchStar} aria-label="Catch star">
                  <Icon name="sparkle" size={30} />
                </button>
              )}
              {!gameActive && <button className="start-button" onClick={startGame}>{time === 0 ? "Play again" : "Start game"} <Icon name="arrow" size={18} /></button>}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
