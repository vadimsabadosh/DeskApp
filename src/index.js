import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";

import App from "./components/App";
import * as router from './router';
import * as backend from './models/firebase';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

const route = router.initialize();
backend.init();
  // Init VK  Mini App
// bridge.send("VKWebAppInit");


ReactDOM.render(<App router={route}/>, document.getElementById("root"));
