import { renderHook, act } from "@testing-library/react";
import useLoading from "./use-loading";

test("useLoading returns initial loading state as false", () => {
  const { result } = renderHook(() => useLoading());
  expect(result.current.loading).toBe(false);
});

test("useLoading sets loading state to true when on is called", () => {
  const { result } = renderHook(() => useLoading());
  act(() => {
    result.current.on();
  });
  expect(result.current.loading).toBe(true);
});

test("useLoading sets loading state to false when off is called", () => {
  const { result } = renderHook(() => useLoading());
  act(() => {
    result.current.on();
  });
  expect(result.current.loading).toBe(true);
  act(() => {
    result.current.off();
  });
  expect(result.current.loading).toBe(false);
});
