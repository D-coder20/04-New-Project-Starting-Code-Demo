import { useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";
import Form, { type formHandle } from "./Form";

function App() {
  // const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<formHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      {/* <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" /> */}
      {/* <Button />
      <Button href="http://google.com" /> */}
      {/* <Container as={Button}>Click Me</Container> */}
      {/* <Input label="test" id="test" ref={input} /> */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
