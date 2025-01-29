import type { Character } from '../../../../rest-clients/rick-and-morty/types';
import { Spinner } from '@react-monorepo/ui';
import useCharacterListContext from '../../providers/character-list-provider.hook';

export default function CharacterList() {
  const { state } = useCharacterListContext();

  if (state?.isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        {Math.random() < 0.1 ? (
          <img
            className="w-20 h-20"
            src="https://media.tenor.com/BgR83Df82t0AAAAj/portal-rick-and-morty.gif"
            alt="Loading..."
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }

  if (!state?.data?.results?.length) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="text-xl text-gray-500">No items found.</p>
      </div>
    );
  }

  return (
    <ul className="p-4">
      {state?.data?.results?.map((el: Character) => (
        <li
          key={el.id}
          className="flex items-center gap-8 bg-gray-100 p-8 rounded-lg shadow border-b border-gray-200 hover:bg-gray-200"
        >
          <img
            className="w-20 h-20 rounded-full"
            src={el.image}
            alt={el.name}
          />
          <div>
            <h2 className="text-2xl font-semibold">{el.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
