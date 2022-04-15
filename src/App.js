

function App() {
  return (
    <html data-theme="dracula">
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><href>Item 1</href></li>
        <li><href>Item 3</href></li>
      </ul>
    </div>
    <href className="btn btn-ghost normal-case text-xl">Logo</href>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><href>Vehiculos</href></li>
      <li><href>Electrónica</href></li>
      <li><href>Libros</href></li>
    </ul>
  </div>
  <div className="navbar-end">
    <href className="btn">Login</href>
  </div>
</div>
</html>
  );
}

export default App;
