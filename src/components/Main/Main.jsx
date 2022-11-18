import React, { useEffect } from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import Menu from '../Menu'
import {Text} from "../../UI/Text";

export const Main = props => {
  const slowScroll = () => {
    const synapse = document.querySelector('p')
    synapse.disabled = true;
    let count = 0;
    synapse.addEventListener('mousewheel', (e) => {
      e.preventDefault();
    })
    setInterval(() => {
      count += 1;
      synapse.scrollTo(0, count);
    }, 100);
  };

  useEffect(slowScroll,[]);

    return (
      <main className={style.main}>
        <Layout>
          <div className={style.wrapper}>
            <Menu />
            <Text As='p' className={style.sinopsis} size={44} bgtrans h80vh id='synopsis' color='tomato'>
              Давным-давно король Владивой переплыл море и основал в землях дивьих
              народов королевство Зелёных полей, расколовшееся вскоре на множество владений.
              О древних витязях, сражавшихся вместе с Владивоем или же противоборствовавших ему,
              теперь рассказывают сказки, а о многих забыли. Идёт повседневная жизнь волшебного мира:
              богатыри совершают подвиги, рыцари влюбляются, короли  ведут войны, и среди всей этой
              сказочной суеты живут, надеются и умирают люди... У славов, как теперь называют жителей
              "королевств за морями",  новые герои,  новые беды  и радости. Но по-прежнему человеческим
              землям угрожают драконы, великаны, оборотни,   чужеземные государи.  Тем, кто на протяжении
              веков сражался меж собой, непросто встать под единое знамя...   И  Сын Короля отправляется в путь.
            </Text>
          </div>
        </Layout>
      </main>
    )
}