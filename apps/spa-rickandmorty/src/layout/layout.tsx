import { Outlet } from 'react-router-dom';
import LayoutMenu from './layout-menu';

export default function Layout() {
  return (
    <div className={`h-dvh w-dvw flex flex-col overflow-hidden`}>
      <div className={`flex items-center border-b gap-2`}>
        <h1 className={`text-3xl p-2`}>Rick And Morty</h1>
      </div>
      <div className={`flex-1 flex`}>
        <div className={`divide-y w-56`}>
          <LayoutMenu />
        </div>
        <div className={`flex-1 border-l`}>
          <div className="w-full h-full flex overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
