import type { Character } from '../../../../rest-clients/rick-and-morty/types';
import { Spinner } from '@react-monorepo/ui';

type CharacterListProps = {
  loading?: boolean;
  items?: Character[];
  error?: Error;
};

export default function CharacterList({
  loading,
  items,
}: Readonly<CharacterListProps>) {
  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (!items?.length) {
    return null;
  }

  return (
    <ul className="p-4">
      {items?.map((el: Character) => (
        <li
          key={el.id}
          className="flex items-center gap-8 bg-gray-100 p-8 rounded-lg shadow border-b border-gray-200 hover:bg-gray-200"
        >
          <img
            src={el.image}
            alt={el.name}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold">{el.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
