import { configureStore } from '@reduxjs/toolkit'
import { RootApiService } from './index'

export const store = configureStore({
  reducer: {
    [RootApiService.reducerPath]: RootApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RootApiService.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
