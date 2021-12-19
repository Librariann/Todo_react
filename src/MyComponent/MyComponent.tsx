import React from "react";

interface Myprops {
  nameIntro: string;
}

const MyComponent: React.FunctionComponent<Myprops> = (props) => {
  return <div>Hello My name is {props.nameIntro}</div>;
};

export default MyComponent;
