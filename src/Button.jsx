function Button({ setNumber }) {

function handleClick() {
  setNumber((prev) => prev + 1 );
}

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      +
    </button>
  );
}


export default Button;
