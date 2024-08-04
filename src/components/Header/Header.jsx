
import coreImg from '../../logo.svg';
import './Header.css';

const conceptsDescription = ["Crucial", "Basic", "Core"];
let descrLength = conceptsDescription.length;
console.log(descrLength);

function getDescription(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    // const [value, setValue]=useState(descrLength)
    const description = conceptsDescription[getDescription(descrLength)];
    // setValue=setTimeout(getDescription(descrLength),2000)
    return (
        <>
            <header>
                <img src={coreImg} defaultChecked="src/logo.svg" alt="React" />
                <h1>
                    React Essentials
                </h1>
                <p>
                    {description} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </>
    );
}
