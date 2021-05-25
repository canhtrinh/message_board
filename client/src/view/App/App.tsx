import './App.css';
import EditorPanelContainer from '../components/EditorPanel/EditorPanelContainer';
import NavigationContainer from '../components/Navigation/NavigationContainer';
import MessageListContainer from '../components/MessageList/MessageListContainer';
import Header from '../components/Header/Header';

const App = () => (
	<div className="top-container">
		<Header />
		<div className="contents-container">
			<NavigationContainer />
			<MessageListContainer />
			<EditorPanelContainer />
		</div>
	</div>

);

export default App;
