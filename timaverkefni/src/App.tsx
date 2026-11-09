import "./App.css";
import Header from "./components/Header";
import MenuItem from "./components/MenuItems";

const menu = [
  {
    id: "1",
    name: "Kaffi",
    description: "gamla góða",
    price: 399,
    isVegan: true,
  },
  {
    id: "2",
    name: "Espresso",
    description: "þetta sterka",
    price: 499,
    isVegan: true,
  },
  {
    id: "3",
    name: "Latte",
    description: "Espresso með mjólk",
    price: 599,
    isVegan: false,
  },
  {
    id: "4",
    name: "croissant",
    description: "croissant með smjör, ost og skinku",
    price: 899,
    isVegan: false,
    emoji: "🥐",
  },
];

function App() {
  return (
    <>
      <main>
        <Header name={"Kela Kaffi"} slogan={"Namm Kaffi"} />
        <section className="menu">
          {menu.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              isVegan={item.isVegan}
              emoji={item?.emoji}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
