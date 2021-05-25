import './App.css';
import Navigation from '../components/Navigation/Navigation';
import EditorPanel from '../components/EditorPanel/EditorPanel';
import NavigationContainer from '../components/Navigation/NavigationContainer';
import MessageListContainer from '../components/MessageList/MessageListContainer';
import Header from '../components/Header/Header';

const App = () => (
	<div>
		<Header />
		<div className="container">
			<NavigationContainer />
			<MessageListContainer />
			<EditorPanel />
		</div>
	</div>

);

export default App;
