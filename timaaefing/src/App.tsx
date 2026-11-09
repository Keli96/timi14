import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/header";
const team = [
  { id: 1, name: "Anna", role: "Hönnuður", age: 29, isLeader: false },
  { id: 2, name: "Jón", role: "Forritari", isLeader: false },
  { id: 3, name: "Kinga", role: "Forritari", isLeader: true },
  { id: 4, name: "Hjalti", age: 33, isLeader: false },
];

function App() {
  return (
    <main>
      <Header />
      <section className="team">
        {team.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            age={person?.age}
            role={person?.role}
            isLeader={person.isLeader}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
