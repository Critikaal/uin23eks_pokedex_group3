export default function Pokemons() {
    return(
        <>
      <nav>
        <section>
        <img src="src\assets\img\Poké_Ball_icon.svg" alt="" />
        <a>Pokédex</a>
        </section>
        <section>
          <a href="Teams">Teams</a>
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
          <button className="normal"><img src="src/assets/img/type/normal.png" alt="" />Normal</button>
          <button className="fire"><img src="src/assets/img/type/fire.png" alt="" />Fire</button>
          <button className="water"><img src="src/assets/img/type/water.png" alt="" />Water</button>
          <button className="grass"><img src="src/assets/img/type/grass.png" alt="" />Grass</button>
          <button className="flying"><img src="src/assets/img/type/flying.png" alt="" />Flying</button>
          <button className="fighting"><img src="src/assets/img/type/fighting.png" alt="" />Fighting</button>
          <button className="poison"><img src="src/assets/img/type/poison.png" alt="" />Poison</button>
          <button className="electric"><img src="src/assets/img/type/electric.png" alt="" />Electric</button>
          <button className="ground"><img src="src/assets/img/type/ground.png" alt="" />Ground</button>
          <button className="rock"><img src="src/assets/img/type/rock.png" alt="" />Rock</button>
          <button className="psychic"><img src="src/assets/img/type/psychic.png" alt="" />Psychic</button>
          <button className="ice"><img src="src/assets/img/type/ice.png" alt="" />Ice</button>
          <button className="bug"><img src="src/assets/img/type/bug.png" alt="" />Bug</button>
          <button className="ghost"><img src="src/assets/img/type/ghost.png" alt="" />Ghost</button>
          <button className="steel"><img src="src/assets/img/type/steel.png" alt="" />Steel</button>
          <button className="dragon"><img src="src/assets/img/type/dragon.png" alt="" />Dragon</button>
          <button className="dark"><img src="src/assets/img/type/dark.png" alt="" />Dark</button>
          <button className="fairy"><img src="src/assets/img/type/fairy.png" alt="" />Fairy</button>
        </section>
      </main>
      </>
    )
}