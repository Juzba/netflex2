import Button from "./components/Button";
import Card from "./components/Card";
import data from "./data";

const App = () => {
	const category = ["Komedie", "Romantika", "Akční"];

	return (
		<div>
			<h1 className='nadpis'>Netflex 2</h1>
			<div className='buttonContainer'>
				{category.map((element, index) => {
					return <Button text={element} key={index} />;
				})}
			</div>
			<div className='cardContainer'>
				{data.map((element) => {
					return <Card element={element} key={element.id} />;
				})}
			</div>
		</div>
	);
};

export default App;
