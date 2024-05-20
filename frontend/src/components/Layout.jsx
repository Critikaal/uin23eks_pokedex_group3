import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
      <nav>
      <section>
        <Link to="/">
          <img src="src/assets/img/Poké_Ball_icon.svg" alt="Poké Ball"/>
        </Link>
        <a><Link to="/">UIN POKÉDEX</Link></a>
        <a><Link to="/teams">Teams</Link></a>
      </section>
      <section>
        
        <input type="text" />
      </section>
    </nav>
      </header>
      <main>
        {/* The Outlet component renders the matched child route element */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
