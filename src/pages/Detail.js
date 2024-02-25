import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/detail.module.css";

import Loading from "../components/Loading/Loading";
import Aside from "../components/Aside/Aside";
import Scroll from "../components/Scroll/Scroll";
import DetailInformation from "../components/DetailInformation/DetailInformation";
import DetailHeader from "../components/DetailHeader/DetailHeader";

function Detail() {
  const { id } = useParams();

  const contentRef = useRef([]);

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();

    setLoading(false);
    setCharacter(json.data.results[0]);
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      handleScrollRight();
    }

    if (event.deltaY < 0) {
      handleScrollLeft();
    }
  };

  const handleScrollRight = () => {
    if (currentIndex >= contentRef.current.length - 1) {
      return;
    }
    scrollViewTo(currentIndex + 1);
    setCurrentIndex((current) => current + 1);
  };

  const handleScrollLeft = () => {
    if (currentIndex <= 0) {
      return;
    }
    scrollViewTo(currentIndex - 1);
    setCurrentIndex((current) => current - 1);
  };

  const scrollViewTo = (index) => {
    contentRef.current[index].scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <Aside subTitle={"About the character"} />

          <main>
            <DetailHeader character={character} />

            <section className={styles.content_wrapper} onWheel={handleScroll}>
              <DetailInformation
                setRef={(el) => (contentRef.current[0] = el)}
                title={"Comics"}
                index={0}
                currentIndex={currentIndex}
                information={character.comics}
              />
              <DetailInformation
                setRef={(el) => (contentRef.current[1] = el)}
                title={"Series"}
                index={1}
                currentIndex={currentIndex}
                information={character.series}
              />
              <DetailInformation
                setRef={(el) => (contentRef.current[2] = el)}
                title={"Stories"}
                index={2}
                currentIndex={currentIndex}
                information={character.stories}
              />
              <DetailInformation
                setRef={(el) => (contentRef.current[3] = el)}
                title={"Events"}
                index={3}
                currentIndex={currentIndex}
                information={character.events}
              />
            </section>
          </main>
          <Scroll />
        </div>
      )}
    </div>
  );
}

export default Detail;
