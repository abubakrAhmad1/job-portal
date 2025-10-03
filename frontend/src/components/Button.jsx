export default function Button({type , onClickFunction }) {
  return (
    <button
      type={type}
      onClick={onClickFunction}
      className="border rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-250 transition duration-200"
    >Search</button>
  );
}
