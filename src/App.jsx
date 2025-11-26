import './index.css';

function App() {
  return (
    <main className="container">
      <img src="/logo.png" alt="tookalook Logo" className="logo" />
      <h1>Demnächst bei tookalook.de</h1>
    

      <section className="apps">
        <AppCard name="Lotto App" />
        <AppCard name="Terminplaner" />
        <AppCard name="Elternsprecher App" />
        <AppCard name="Anzeigen App" />
      </section>
      <br>
      </br>

      <footer>© 2025 tookalook.de</footer>
    </main>
  );
}

function AppCard({ name }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>In Arbeit – bald verfügbar</p>
    </div>
  );
}

export default App;
