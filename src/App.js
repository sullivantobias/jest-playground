import './App.less';
import { Button } from './components/button';
import { Link } from './components/links';
import { Image } from './components/image';

export const App = () => {
  return (
    <div className="App">
      <h2>Link Test</h2>
      <Link page="http://www.facebook.com">Facebook</Link>

      <h2>Button Test</h2>
      <Button clickedText='You clicked me' />

      <h2>Image Test</h2>
      <Image alt='testImage' src='https://i.picsum.photos/id/980/200/300.jpg?hmac=HeQeE7MnUiOHTOqHUI4GrY3wL5tloq1zukVClSAcUB8' />
    </div>
  );
}