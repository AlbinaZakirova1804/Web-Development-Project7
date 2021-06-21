  import '../styles/banner.css';
  //import Register from './Register';
  function Banner() {
    return <nav class="navbar navbar-light bg-primary">
      
      <a class="navbar-brand" href="index.html">Messager</a>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link" href="index.html">Register</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="index.html">Login</a>
        </li>
    </ul>

      </nav>
}

export default Banner