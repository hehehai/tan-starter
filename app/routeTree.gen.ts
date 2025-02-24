/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as authSignupImport } from './routes/(auth)/signup'
import { Route as authSigninImport } from './routes/(auth)/signin'
import { Route as wwwPostRouteImport } from './routes/(www)/post/route'
import { Route as wwwDashboardRouteImport } from './routes/(www)/dashboard/route'
import { Route as wwwPostIndexImport } from './routes/(www)/post/index'
import { Route as wwwDashboardIndexImport } from './routes/(www)/dashboard/index'
import { Route as wwwPostIdImport } from './routes/(www)/post/$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authSignupRoute = authSignupImport.update({
  id: '/(auth)/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const authSigninRoute = authSigninImport.update({
  id: '/(auth)/signin',
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const wwwPostRouteRoute = wwwPostRouteImport.update({
  id: '/(www)/post',
  path: '/post',
  getParentRoute: () => rootRoute,
} as any)

const wwwDashboardRouteRoute = wwwDashboardRouteImport.update({
  id: '/(www)/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const wwwPostIndexRoute = wwwPostIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => wwwPostRouteRoute,
} as any)

const wwwDashboardIndexRoute = wwwDashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => wwwDashboardRouteRoute,
} as any)

const wwwPostIdRoute = wwwPostIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => wwwPostRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(www)/dashboard': {
      id: '/(www)/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof wwwDashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/(www)/post': {
      id: '/(www)/post'
      path: '/post'
      fullPath: '/post'
      preLoaderRoute: typeof wwwPostRouteImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/signin': {
      id: '/(auth)/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof authSigninImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/signup': {
      id: '/(auth)/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof authSignupImport
      parentRoute: typeof rootRoute
    }
    '/(www)/post/$id': {
      id: '/(www)/post/$id'
      path: '/$id'
      fullPath: '/post/$id'
      preLoaderRoute: typeof wwwPostIdImport
      parentRoute: typeof wwwPostRouteImport
    }
    '/(www)/dashboard/': {
      id: '/(www)/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof wwwDashboardIndexImport
      parentRoute: typeof wwwDashboardRouteImport
    }
    '/(www)/post/': {
      id: '/(www)/post/'
      path: '/'
      fullPath: '/post/'
      preLoaderRoute: typeof wwwPostIndexImport
      parentRoute: typeof wwwPostRouteImport
    }
  }
}

// Create and export the route tree

interface wwwDashboardRouteRouteChildren {
  wwwDashboardIndexRoute: typeof wwwDashboardIndexRoute
}

const wwwDashboardRouteRouteChildren: wwwDashboardRouteRouteChildren = {
  wwwDashboardIndexRoute: wwwDashboardIndexRoute,
}

const wwwDashboardRouteRouteWithChildren =
  wwwDashboardRouteRoute._addFileChildren(wwwDashboardRouteRouteChildren)

interface wwwPostRouteRouteChildren {
  wwwPostIdRoute: typeof wwwPostIdRoute
  wwwPostIndexRoute: typeof wwwPostIndexRoute
}

const wwwPostRouteRouteChildren: wwwPostRouteRouteChildren = {
  wwwPostIdRoute: wwwPostIdRoute,
  wwwPostIndexRoute: wwwPostIndexRoute,
}

const wwwPostRouteRouteWithChildren = wwwPostRouteRoute._addFileChildren(
  wwwPostRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof wwwDashboardRouteRouteWithChildren
  '/post': typeof wwwPostRouteRouteWithChildren
  '/signin': typeof authSigninRoute
  '/signup': typeof authSignupRoute
  '/post/$id': typeof wwwPostIdRoute
  '/dashboard/': typeof wwwDashboardIndexRoute
  '/post/': typeof wwwPostIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/signin': typeof authSigninRoute
  '/signup': typeof authSignupRoute
  '/post/$id': typeof wwwPostIdRoute
  '/dashboard': typeof wwwDashboardIndexRoute
  '/post': typeof wwwPostIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(www)/dashboard': typeof wwwDashboardRouteRouteWithChildren
  '/(www)/post': typeof wwwPostRouteRouteWithChildren
  '/(auth)/signin': typeof authSigninRoute
  '/(auth)/signup': typeof authSignupRoute
  '/(www)/post/$id': typeof wwwPostIdRoute
  '/(www)/dashboard/': typeof wwwDashboardIndexRoute
  '/(www)/post/': typeof wwwPostIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/post'
    | '/signin'
    | '/signup'
    | '/post/$id'
    | '/dashboard/'
    | '/post/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/signin' | '/signup' | '/post/$id' | '/dashboard' | '/post'
  id:
    | '__root__'
    | '/'
    | '/(www)/dashboard'
    | '/(www)/post'
    | '/(auth)/signin'
    | '/(auth)/signup'
    | '/(www)/post/$id'
    | '/(www)/dashboard/'
    | '/(www)/post/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  wwwDashboardRouteRoute: typeof wwwDashboardRouteRouteWithChildren
  wwwPostRouteRoute: typeof wwwPostRouteRouteWithChildren
  authSigninRoute: typeof authSigninRoute
  authSignupRoute: typeof authSignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  wwwDashboardRouteRoute: wwwDashboardRouteRouteWithChildren,
  wwwPostRouteRoute: wwwPostRouteRouteWithChildren,
  authSigninRoute: authSigninRoute,
  authSignupRoute: authSignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(www)/dashboard",
        "/(www)/post",
        "/(auth)/signin",
        "/(auth)/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(www)/dashboard": {
      "filePath": "(www)/dashboard/route.tsx",
      "children": [
        "/(www)/dashboard/"
      ]
    },
    "/(www)/post": {
      "filePath": "(www)/post/route.tsx",
      "children": [
        "/(www)/post/$id",
        "/(www)/post/"
      ]
    },
    "/(auth)/signin": {
      "filePath": "(auth)/signin.tsx"
    },
    "/(auth)/signup": {
      "filePath": "(auth)/signup.tsx"
    },
    "/(www)/post/$id": {
      "filePath": "(www)/post/$id.tsx",
      "parent": "/(www)/post"
    },
    "/(www)/dashboard/": {
      "filePath": "(www)/dashboard/index.tsx",
      "parent": "/(www)/dashboard"
    },
    "/(www)/post/": {
      "filePath": "(www)/post/index.tsx",
      "parent": "/(www)/post"
    }
  }
}
ROUTE_MANIFEST_END */
