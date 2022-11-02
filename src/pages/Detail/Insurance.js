const Insurance = ({ insurances }) => {
  return (
    <div>
      <header>보험</header>
      <ul>
        {insurances.map((insurance) => (
          <li key={insurance.name}>
            <div>{insurance.name}</div>
            <div>{insurance.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insurance;
