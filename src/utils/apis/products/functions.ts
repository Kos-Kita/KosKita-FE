export const buildQueryParams = (searchQuery: string, state: any, checkboxValues: any) => {
  const queryParams = new URLSearchParams();
  if (searchQuery !== "") {
    queryParams.set("address", searchQuery);
  } else if (state?.data) {
    queryParams.set("address", state.data);
  }

  const categories = [];
  if (checkboxValues.putra) categories.push("putra");
  if (checkboxValues.putri) categories.push("putri");
  if (checkboxValues.campur) categories.push("campur");
  if (categories.length > 0) {
    queryParams.set("category", categories.join(","));
  }

  if (checkboxValues.hargaDibawah) {
    queryParams.set("maxPrice", "1000000");
    queryParams.set("minPrice", "0");
  }

  if (checkboxValues.hargaDiatas) {
    queryParams.set("minPrice", "1000000");
    queryParams.set("maxPrice", "5000000");
  }

  return queryParams.toString();
};

export const calculatePagination = (currentPage: number, itemsPerPage: number, searchResults: any[]) => {
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  return { totalPages, indexOfLastItem, indexOfFirstItem, currentItems };
};
