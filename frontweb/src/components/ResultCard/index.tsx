import "./styles.css";

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description}: Props) => {
  return (
    <div className="result-container">
      <div className="result-container-info">
        <h1 className="result-title">{title}</h1>
        <p className="result-description">{description}</p>
      </div>
    </div>
  );
};

export default ResultCard;
