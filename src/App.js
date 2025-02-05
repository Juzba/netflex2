import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import data from "./data";

const App = () => {
	const category = ["All", "Komedie", "Romantika", "Akční"];
	const [cat, setCat] = useState("All");

	const newData = data.filter((item) => {
		return item["category"] === cat || cat === "All"
	});
	console.log(newData)

	return (
		<div>
			<h1 className='nadpis'>Netflex 2</h1>
			<div className='buttonContainer'>
				{category.map((element, index) => {
					return <Button text={element} click={() => setCat(element)} key={index} />;
				})}
			</div>
			<div className='cardContainer'>
				{newData.map((element) => {
					return <Card element={element} key={element.id} />;
				})}
			</div>
		</div>
	);
};

export default App;
