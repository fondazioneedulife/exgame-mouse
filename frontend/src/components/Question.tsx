export default function Question({ text, options, name }) {
  return (
    <div>
      <form>
        <p>{text}</p>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name}
              value={option}
            />
            {option}
            <br />
          </label>
        ))}
      </form>
    </div>
  );
}