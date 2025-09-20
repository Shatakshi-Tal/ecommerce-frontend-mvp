import { renderHook, act } from '@testing-library/react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('useFetchProducts', () => {
  const wrapper = ({ children }: { children?: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useFetchProducts(), { wrapper });
    expect(result.current.search).toBe('');
    expect(result.current.category).toBe('');
    expect(result.current.page).toBe(1);
    expect(result.current.totalPages).toBeGreaterThanOrEqual(0);
  });

  it('should update search and category', () => {
    const { result } = renderHook(() => useFetchProducts(), { wrapper });
    act(() => {
      result.current.setSearch('test');
      result.current.setCategory('cat');
    });
    expect(result.current.search).toBe('test');
    expect(result.current.category).toBe('cat');
  });
});
