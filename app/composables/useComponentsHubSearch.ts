export function useComponentsHubSearch() {
  const search = useState("components-hub-search", () => "");

  function clearSearch() {
    search.value = "";
  }

  return { search, clearSearch };
}
