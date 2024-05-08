export default function Home() {
    return(
        <>
      <nav>
        <section>
        <img src="src\assets\img\Poké_Ball_icon.svg" alt="" />
        <a>Pokédex</a>
        </section>
        <section>
          <a href="Teams">Teams</a>
          <p>Søk:</p>
          <input type="text" />
        </section>
      </nav>
      <main>
        <h1>Pokémons</h1>
        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0001</p>
          <h2><a href="">Bulbasaur</a></h2>
          <p>Grass</p>
          <p>Poison</p>
        </section>
        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0002</p>
          <h2><a href="">Ivysaur</a></h2>
          <p>Grass</p>
          <p>Poison</p>
        </section>
        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0003</p>
          <h2><a href="">Venusaur</a></h2>
          <p>Grass</p>
          <p>Poison</p>
        </section>
        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0004</p>
          <h2><a href="">Charmander</a></h2>
          <p>Fire</p>
          <p></p>
        </section>

        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0005</p>
          <h2><a href="">Charmeleon</a></h2>
          <p>Fire</p>
          <p></p>
        </section>

        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0006</p>
          <h2><a href="">Charizard</a></h2>
          <p>Fire</p>
          <p>Flying</p>
        </section>

        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0007</p>
          <h2><a href="">Squirtle</a></h2>
          <p>Water</p>
          <p></p>
        </section>

        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0008</p>
          <h2><a href="">Wartortle</a></h2>
          <p>Water</p>
          <p></p>
        </section>

        <section>
          <img src="src\assets\img\001.png" alt="" />
          <p>#0009</p>
          <h2><a href="">Blastoise</a></h2>
          <p>Water</p>
          <p></p>
        </section>

        <section id="types">
          <button>Normal</button>
          <button>Fire</button>
          <button>Water</button>
          <button>Grass</button>
          <button>Flying</button>
          <button>Fighting</button>
          <button>Poison</button>
          <button>Electric</button>
          <button>Ground</button>
          <button>Rock</button>
          <button>Psychic</button>
          <button>Ice</button>
          <button>Bug</button>
          <button>Ghost</button>
          <button>Steel</button>
          <button>Dragon</button>
          <button>Dark</button>
          <button>Fairy</button>
        </section>
      </main>
      </>
    )
}