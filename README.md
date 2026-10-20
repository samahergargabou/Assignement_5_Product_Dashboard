## Challenges Faced & Solutions

1. **Project Hierarchy & Git Tracking:**
   - *Issue:* During initial scaffolding with Vite inside GitHub Codespaces, a duplicate nested folder (`Assignement_5_Product_Dashboard/Assignement_5_Product_Dashboard`) was inadvertently created. Moving the component files and root configuration files caused Git to stage the original files as deleted and list the root files as untracked, temporarily bundling `Card.jsx` into an earlier setup commit.
   - *Solution:* Flattened the directory structure using the command line (`mv` and directory cleanups), staged the changes systematically, and ensured subsequent components (`Product.jsx`, `ProductList.jsx`, and `App.jsx`) were isolated into atomic, progressive Git commits.

2. **Component Composition via `props.children`:**
   - *Challenge:* Ensuring `Card.jsx` functioned strictly as an agnostic layout container without hardcoding or anticipating the data structure of `Product.jsx`.
   - *Solution:* Used React's `children` prop to allow `Product.jsx` to inject its content directly while letting `Card` handle container styling, borders, and margins independently.

3. **Controlled Input State Synchronization:**
   - *Challenge:* Guaranteeing the input element remained purely controlled without direct DOM manipulation (`document.getElementById` or `useRef`).
   - *Solution:* Bound the input's `value` directly to `name` state and updated it synchronously via the `onChange` event handler, keeping React state as the single source of truth.