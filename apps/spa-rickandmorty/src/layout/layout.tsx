import { Outlet } from 'react-router-dom';
import LayoutMenu from './layout-menu';

export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-100">
      <div className="flex items-center border-b gap-4 bg-white shadow-md">
        <h1 className="text-3xl p-4 text-gray-800">Rick And Morty</h1>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-56 border-r overflow-hidden bg-white shadow-md">
          <LayoutMenu />
        </div>
        <div className="flex-1 border-l overflow-hidden bg-gray-50">
          <div className="w-full h-full flex flex-col overflow-hidden p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
