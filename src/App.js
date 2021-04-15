import './App.less';
import { Button } from './components/button';
import { Link } from './components/links';

export const App = () => {
  return (
    <div className="App">
      <Link page="http://www.facebook.com">Facebook</Link>
      <Button clickedText='You clicked me' />
    </div>
  );
}