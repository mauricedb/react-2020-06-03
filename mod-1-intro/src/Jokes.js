import React from "react";

function SingleJoke({ joke, setLiked }) {
  return (
    <li>
      {joke} <span onClick={() => setLiked(true)}>👍</span>
    </li>
  );
}

function Jokes() {
  const [liked, setLiked] = React.useState(false);

  const [jokes, setJokes] = React.useState(null);

  React.useEffect(function () {
    fetch("https://the-problem-solver-sample-data.azurewebsites.net/jon-skeet")
      .then((rsp) => rsp.json())
      .then((jokes) => {
        setJokes(jokes);
      });
  }, []);

  React.useEffect(
    function () {
      if (liked) {
        setTimeout(function () {
          setLiked(false);
        }, 5000);
      }
    },
    [liked]
  );

  //   console.table(jokes);

  //   if (liked) {
  //     return <div>Thank you</div>;
  //   }

  if (!jokes) {
    return "Loading...";
  }

  return (
    <div>
      {liked ? (
        <div>Thank you</div>
      ) : (
        <ul>
          {jokes.map((joke) => (
            <SingleJoke key={joke.id} joke={joke.joke} setLiked={setLiked} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Jokes;
