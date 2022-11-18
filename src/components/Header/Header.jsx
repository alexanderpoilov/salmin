import React from 'react';
import style from './Header.module.css';
import Layout from "../Layout";
import {Text} from "../../UI/Text";

export const Header = props => {
    return (
      <header className={style.header}>
        <Layout>
          <div className={style.wrapper}>
            <Text As='h1' size={66} center color='tomato'>Короли за морями - Между двумя закатами</Text>
          </div>
        </Layout>
      </header>
    )
}