export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <>
      <h2>Add new Activity:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="isForGoodWeather">Good-weather activity:</label>
        <input type="checkbox" name="isForGoodWeather" id="isForGoodWeather" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
