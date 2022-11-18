import React from 'react';
import style from './Footer.module.css';
import Layout from "../Layout";
import {Text} from "../../UI/Text";

export const Footer = props => {
    return (
      <footer className={style.footer}>
          <Layout>
              <div className={style.wrapper}>
                  <Text
                    As={'p'}
                    size={18}
                    color='tomato'
                  >
                      coded by:
                      <Text
                        As='a'
                        size={18}
                        href={'mailto:alexanderpoilov@gmail.com'}
                        color='tomato'>
                          Alexander Poilov
                      </Text>
                  </Text>
              </div>
          </Layout>
      </footer>
    )
}