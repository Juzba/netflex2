import Button from './components/Button';
import Card from './components/Card';

const App = () => {
    const category = ['Komedie', 'Romantika', 'Akční'];

    return (
        <div>
            <h1>Nadpis</h1>
            <div>
               { category.forEach((item)=>{
                   <Button text={item} key={i} />



               })
                
               }

               }
                <Button text={'Romantický'} />
                <Button text={'Akční'} />
            </div>
        </div>
    );
};

export default App;
