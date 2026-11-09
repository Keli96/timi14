type ProfileCardProps = {
  name: string;
  role?: string;
  age?: number;
  isLeader: boolean;
};

function ProfileCard({
  name,
  role = "Aðstoð",
  age,
  isLeader,
}: ProfileCardProps) {
  return (
    <article className="card">
      <div className="avatar">{name[0]}</div>
      <h2>{name}</h2>
      {isLeader && <span className="badge">Hópstjóri</span>}
      <p>{role}</p>
      {age && <p className="age">{age} ára</p>}
    </article>
  );
}

export default ProfileCard;
