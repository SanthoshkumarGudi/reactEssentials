import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./Data";
import Section from "./Section";

export default function Examples() {

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
        <>
            <Section title="Examples" id="examples">
                <menu>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Comonents</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
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
        </Section>
        </>
    )
}