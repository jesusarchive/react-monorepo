import { Outlet } from 'react-router-dom';
import LayoutMenu from './layout-menu';

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="flex items-center border-b gap-2">
        <h1 className="text-3xl p-2">Rick And Morty</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-56 border-r overflow-hidden">
          <LayoutMenu />
        </div>
        <div className="flex-1 border-l overflow-hidden">
          <div className="w-full h-full flex flex-col overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
