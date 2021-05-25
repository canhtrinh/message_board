import './App.css';
import Navigation from '../components/Navigation/Navigation';
import EditorPanel from '../components/EditorPanel/EditorPanel';
import NavigationContainer from '../components/Navigation/NavigationContainer';
import MessageListContainer from '../components/MessageList/MessageListContainer';

const App = () => (
	<div className="container">
		<NavigationContainer />
		<MessageListContainer />
		<EditorPanel />
	</div>
);

export default App;
