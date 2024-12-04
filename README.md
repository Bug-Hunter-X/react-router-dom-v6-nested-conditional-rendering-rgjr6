# React Router Dom v6 Nested Route Rendering Issue
This repository demonstrates a bug in React Router Dom v6 where nested routes fail to render correctly when a parent route's element is a functional component that conditionally returns null.  The issue occurs when a parent route's component might return null based on certain conditions, preventing the nested routes from mounting.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that navigating to nested routes under the parent route will not render the expected content.

## Solution
The solution involves preventing the parent route's component from returning null.  Instead, it should always return a valid React element, even if it's an empty div. This allows the nested routes to render correctly.