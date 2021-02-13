import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { RouterProvider, useRoute } from 'react-router5';
import {Panel, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Desks from './Desks';
import Columns from './Columns';
import './Columns.css';
const panels = {
	desks: 'desks',
	columns: 'columns'
}


const App = ({ router }) => {
	const [activePanel, setActivePanel] = useState(panels.desks);
	const [activeDesk, setActiveDesk] = useState(null);
	const goToColumns = (deskId) => {
		setActivePanel(panels.columns);
		setActiveDesk(desks.find( ({id}) => id === deskId ));

	}

	const goToDesks = () => setActivePanel(panels.desks);

	const [desks, setDesks] = useState([]);
    const addDesk = (desk) => setDesks([...desks, desk]);
	const removeDesk = (removeId) => setDesks(desks.filter(({ id }) => id !== removeId));
	
	const [columns, setColumns] = useState([]);
    const addColumn = (column) => setColumns([...columns, column]);
	const removeColumn = (removeId) => setColumns(columns.filter(({ id }) => id !== removeId));
	
	const [popout, setPopout] = useState(null);

	const a = useRoute();
	return (
		<RouterProvider router={router}>
			<ErrorBoundary>
				<View activePanel={activePanel} header={false} popout={popout}>
					<Panel id={panels.desks}>
						<Desks 
						onChangePanel={goToColumns}
						setDesks={setDesks}
						addDesk={addDesk}
						removeDesk={removeDesk}
						desks={desks}></Desks>
					</Panel>
					<Panel id={panels.columns} className="Columns">
						{activeDesk && (
						<Columns 
						desk={activeDesk}
						goBack={goToDesks}
						addColumn={addColumn}
						setColumns={setColumns}
						removeColumn={removeColumn}
						columns={columns}
						setPopout={setPopout}
						/>)}
					</Panel>
				</View>
			</ErrorBoundary>
		</RouterProvider>
		
	);
}

export default App;

