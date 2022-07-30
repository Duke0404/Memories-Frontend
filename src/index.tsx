//Boilerplate
import React from "react";
import ReactDOM from "react-dom/client"

//Components
import App from "./Components/App/App"

const root: ReactDOM.Root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
