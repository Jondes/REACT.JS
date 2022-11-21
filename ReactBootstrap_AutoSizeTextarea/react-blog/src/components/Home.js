import React from "react";
const Home = () => {
  const textRef = React.useRef();
  const [value, setValue] = React.useState();
  const onChnage = (event) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);
  return (
    <div>
      <h2>React Textarea Auto Size Example</h2>
      <textarea className="form-control" ref={textRef} onChange={onChnage}>
        {value}
      </textarea>
    </div>
  );
};
export default Home;