type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  isVegan: boolean;
  emoji?: string;
};

function MenuItem({
  name,
  description,
  price,
  isVegan,
  emoji = "☕",
}: MenuItemProps) {
  return (
    <article className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price} kr.</p>
      {isVegan && <span className="badge">Vegan</span>}
      {emoji && <span className="emoji">{emoji}</span>}
    </article>
  );
}

export default MenuItem;
