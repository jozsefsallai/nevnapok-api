const ServerErrorPage = () => {
  return (
    <>
      <h1>500 - Szerverhiba</h1>
      <p>
        Valami gond van a szerveren. Kérlek, próbáld meg később. Ha a probléma
        továbbra is fennáll, kérlek, <a href="https://github.com/jozsefsallai/nevnapok-api/issues"
          target="_blank" rel="noopener noreferrer">jelentsd azt GitHub-on</a>.
      </p>
    </>
  );
};

export default ServerErrorPage;
