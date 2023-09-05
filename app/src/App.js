import Button from './components/Button/Button';
import TabButton from './components/TabButton/TabButton';

function App() {
  return (
    <div className='App fixed w-full h-full bg-slate-100 dark:bg-slate-900'>
      <header className='header absolute flex items-center justify-center top-2 start-2 right-2 h-16'>
        <div className='header-left h-full gap-2 flex items-center justify-center'>
          <Button type='icon' icon='music' title="Abrir pestaña Himnario" ariaLabel="Abrir pestaña Himnario" className='h-8 w-8 rounded-full text-black dark:text-white bg-white hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600 transition-colors' />
          <Button type='icon' icon='book-bible' title="Abrir pestaña Santa Bilia" ariaLabel="Abrir pestaña Santa Bilia" className='h-8 w-8 rounded-full text-black dark:text-white bg-white hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600 transition-colors' />
        </div>
        <div className='header-center h-full w-full flex items-center justify-start overflow-x-scroll whitespace-nowrap pt-0.5 ms-2'>
          <TabButton active={true} projecting={true} title="De gloria en gloria" subtitle="Himnario" className='text-black bg-white hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600' classNameSubTitle='text-slate-500 dark:text-slate-300' classNameCloseButton='hover:bg-slate-300 active:bg-slate-400 dark:hover:bg-slate-600 dark:active:bg-slate-500' />
          <TabButton title="De gloria en gloria" subtitle="Himnario" className='text-black bg-white hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600' classNameSubTitle='text-slate-500 dark:text-slate-300' classNameCloseButton='hover:bg-slate-300 active:bg-slate-400 dark:hover:bg-slate-600 dark:active:bg-slate-500' />
          <TabButton title="Libro 105:15" subtitle="Santa Biblia" className='text-black bg-white hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600' classNameSubTitle='text-slate-500 dark:text-slate-300' classNameCloseButton='hover:bg-slate-300 active:bg-slate-400 dark:hover:bg-slate-600 dark:active:bg-slate-500' />
        </div>
        <div className='header-right h-full items-center justify-center flex items-center justify-center top-2 start-2 right-2 h-16'>
          <Button type='icon' icon='gear' title="Configuración" ariaLabel="Configuración" className='h-8 w-8 text-black dark:text-white bg-white rounded-full hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:active:bg-slate-600 transition-colors' />
        </div>
      </header>
      <main className='main bg-white absolute dark:bg-slate-800 bottom-2 start-2 right-2 top-20 rounded-lg'>
        
      </main>
    </div>
  );
}

export default App;
