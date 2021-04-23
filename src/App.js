import './App.less';
import { Button } from './components/button';
import { Link } from './components/links';
import { Image } from './components/image';
import { Title } from './components/title';
import { Tabs } from './components/tabs';

export const App = () => {
  return (
    <div className="App">
      <h2>Link Test</h2>
      <Link page="http://www.facebook.com">Facebook</Link>

      <h2>Button Test</h2>
      <Button clickedText='You clicked me' />

      <h2>Image Test</h2>
      <Image alt='testImage' src='https://i.picsum.photos/id/980/200/300.jpg?hmac=HeQeE7MnUiOHTOqHUI4GrY3wL5tloq1zukVClSAcUB8' />

      <h2>Title Test</h2>
      <Title title='You clicked me' tag={3} />

      <h2>Tabs Test</h2>
      <Tabs tabs={
        [
          { title: 'Tab1', content: 'Tab1 Content' },
          { title: 'Tab2', content: 'Tab2 Content' },
          { title: 'Tab3', content: 'Tab3 Content' }
        ]} />
    </div>
  );
}