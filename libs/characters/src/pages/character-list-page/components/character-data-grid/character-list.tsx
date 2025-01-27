import type { Character } from '../../../../rest-clients/rick-and-morty/types';

type CharacterListProps = {
  results?: Character[];
};

export default function CharacterList({
  results,
}: Readonly<CharacterListProps>) {
  if (!results?.length) {
    return null;
  }

  return (
    <ul className="border-t border-gray-200 p-4">
      {results?.map((el: Character) => (
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
