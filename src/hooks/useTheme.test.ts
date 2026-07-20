import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTheme } from './useTheme'

// 🧑‍🏫 导师讲解：Hook 不能直接渲染成组件来测，要用 renderHook 把它"挂"到测试环境里，
// 再用 act() 包裹会触发状态更新的操作（如 toggleTheme）。
// 这覆盖了三种关键行为：读 localStorage / 跟随系统兜底 / toggle 翻转并持久化。
describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('reads saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
  })

  it('falls back to light when nothing saved and no dark preference', () => {
    // jsdom 里 window.matchMedia 未定义 → 走兜底分支 → 'light'
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('toggleTheme flips theme and persists to localStorage', () => {
    const { result } = renderHook(() => useTheme())
    act(() => result.current.toggleTheme())
    expect(result.current.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')

    act(() => result.current.toggleTheme())
    expect(result.current.theme).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
