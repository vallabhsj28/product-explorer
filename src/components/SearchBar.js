function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
}

export default SearchBar;
