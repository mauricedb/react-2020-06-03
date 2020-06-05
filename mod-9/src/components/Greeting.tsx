import React from "react";

type Props = {
  theUserName: string;
};

// function Greeting({ theUserName }: Props) {
//   return <div>Hello {theUserName}</div>;
// }

const Greeting: React.FC<Props> = ({ theUserName }) => {
  return <div>Hello {theUserName}</div>;
};

export default Greeting;
