import { ColorfulRadioGroup } from "./components/ColorfulRadioGroup";

function App() {
  return (
    <>
      <ColorfulRadioGroup
        defaultValue="1"
        options={[
          { label: "选项1", value: "1", color: "#52C41A" },
          { label: "选项2", value: "2", color: "#F53F3F" },
          { label: "选项3", value: "3", color: "orange" },
        ]}
      />
    </>
  );
}

export default App;
