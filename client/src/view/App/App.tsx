import './App.css';
import Navigation from '../components/Navigation/Navigation';
import MessageList from '../components/MessageList/MessageList';
import EditorPanel from '../components/EditorPanel/EditorPanel';
import NavigationContainer from '../components/Navigation/NavigationContainer';

const App = () => (
	<div className="container">
		<NavigationContainer />
		<MessageList />
		<EditorPanel />
	</div>
);

export default App;
