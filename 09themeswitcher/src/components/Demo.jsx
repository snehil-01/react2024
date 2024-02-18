import useTheme from "../context/theme.js";

const Demo = () => {
  const value = useTheme()
  console.log(value) // this will use default value
  return <div>Demo</div>;
};

export default Demo;
