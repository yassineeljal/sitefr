"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

export type Avatar = {
  id: string
  name: string
  texture: string
  resolution: string
  sublimeLevel: number
  density: number
  fatigueSuppressed: boolean
  timestamp: number
  status: "Éternelle"
}

interface AppState {
  quizPassed: boolean
  avatars: Avatar[]
  addAvatar: (newAvatar: Avatar) => void
  setQuizPassed?: (value: boolean) => void
}

export const StateContext = createContext<AppState | undefined>(undefined)

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [quizPassed, setQuizPassed] = useState<boolean>(false)
  const [avatars, setAvatars] = useState<Avatar[]>([])

  const addAvatar = (newAvatar: Avatar) => {
    setAvatars((prev) => [...prev, newAvatar])
  }

  const value: AppState = {
    quizPassed,
    avatars,
    addAvatar,
    setQuizPassed,
  }

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export const useAppState = () => {
  const ctx = useContext(StateContext)
  if (!ctx) throw new Error("useAppState must be used within a StateProvider")
  return ctx
}
