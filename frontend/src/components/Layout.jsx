// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SearchResults from './SearchResults';

function Layout() {
  const [query, setQuery] = useState('');

  return (
    <>
      <NavBar query={query} setQuery={setQuery} />
      <main>
        {query ? <SearchResults query={query} /> : <Outlet />}
      </main>
    </>
  );
}

export default Layout;
