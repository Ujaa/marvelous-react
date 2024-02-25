import { useEffect, useState } from "react";

import styles from "../styles/home.module.css";

import Loading from "../components/Loading/Loading";
import Aside from "../components/Aside/Aside";
import CharacterListItem from "../components/CharacterListItem/CharacterListItem";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();

    setCharacters(json.data.results);
    setIndex(0);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <Aside subTitle={"Marvel Characters"} />

          <ul className={styles.character_list}>
            <div className={styles.character_list_margin}></div>
            {characters.map((character, idx) => (
              <CharacterListItem
                index={idx}
                character={character}
                onMouseEnter={() => setIndex(idx)}
              />
            ))}
            <div className={styles.character_list_margin}></div>
          </ul>
          <section className={styles.character_img_wrapper}>
            <img
              className={styles.character_img}
              alt={characters[index].name}
              src={`${characters[index].thumbnail.path}.${characters[index].thumbnail.extension}`}
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
