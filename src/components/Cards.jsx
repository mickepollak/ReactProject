export default function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.screenshot} alt="Screenshot"></img>
        <h2>{props.name}</h2>
        <p><i>{props.description}</i></p>
        <p><b>Technologies:</b><br /> {props.technologies}</p>

        <p><b>What the project does:</b> <br /> {props.whatItDoes}</p>
        <p><b>What you learned:</b> <br /> {props.whatYouLearned}</p>
        <p><b>Your role:</b> <br /> {props.yourRole}</p>
        <p><b>Challenges you solved:</b><br /> {props.challenges}</p>
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>    
      </div>
    </div>
  );
}   