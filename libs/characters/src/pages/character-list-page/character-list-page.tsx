import '../../styles.css';
import CharacterDataGrid from './components/character-data-grid';
import CharacterListProvider from './providers/character-list-provider';

export default function CharacterListPage() {
  return (
    <CharacterListProvider>
      <CharacterDataGrid />
    </CharacterListProvider>
  );
}
