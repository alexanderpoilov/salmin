import React from 'react';
import style from './Menu.module.css';
import {Text} from "../../UI/Text";

export const Menu = props => {
    return (
      <div className={style.menu}>
          <ul className={style.menu__list}>
              <li className={style.menu__item}>
                  <Text As='a' size={24}
                        href={'https://shop.proshloe.com/product/koroli-za-moryami-mezhdu-dvumya-zakatami/'}
                        color='tomato'
                  >
                      Купить
                  </Text>
              </li>
              <li className={style.menu__item}>
                  <Text As='a' size={24} href={'#'} color='tomato'>Хочу продолжение</Text>
              </li>
              <li className={style.menu__item}>
                  <Text As='a' size={24} href={'#'} color='tomato'>Арты</Text>
              </li>
              <li className={style.menu__item}>
                  <Text As='a' size={24} href={'#'} color='tomato'>Сообщество</Text>
              </li>
              <li className={style.menu__item}>
                  <Text As='a' size={24} href={'#'} color='tomato'>Об авторе</Text>
              </li>
          </ul>
      </div>
    )
}