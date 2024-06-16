import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search?.value;
    if (!searchValue) return;
    setSearchValue(searchValue);
  };

  return (
    <main>
      <h1 className='title'>Unsplash API</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Cat'
          className='form-input search-input'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </main>
  );
};
export default SearchForm;
