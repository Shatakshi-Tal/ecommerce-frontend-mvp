import { useState } from 'react';
import { useGetProductsQuery } from '../api/productApi';

export function useFetchProducts() {
  const { data, isLoading, error } = useGetProductsQuery();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filtered = data?.filter(
    (p) =>
      (!search || p.title.toLowerCase().includes(search.toLowerCase())) &&
      (!category || p.category === category)
  ) || [];

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return {
    products: paginated,
    isLoading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    page,
    setPage,
    totalPages,
  };
}
