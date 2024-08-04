import reactImg from "./assets/logo192.png";
import coreImg from "./logo.svg";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./components/Data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabButton = selectedTopic;

  function handleClick(topic) {
    setSelectedTopic(topic);
    console.log(tabButton);
  }

  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>
        {EXAMPLES[selectedTopic].description}
      </p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get Started</h2>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
              <CoreConcepts
                key={conceptItem.title}
                {...conceptItem} />)}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[3]}

            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} handleSelect={() => handleClick('components')}>Comonents</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} handleSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} handleSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} handleSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}
          {/* {!selectedTopic? <p>Please select a topic</p>:( <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>
            {EXAMPLES[selectedTopic].description}
          </p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>)}      */}
        </section>
      </main>
    </div>
  );
}

export default App;
