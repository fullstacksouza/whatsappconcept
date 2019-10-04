import React from "react";
import Main from "./src";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Accessing view"]);
export default function App() {
  return <Main></Main>;
}
