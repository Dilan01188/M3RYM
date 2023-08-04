import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from '../NavBar/NavBar.Module.css';


const NavBar = (props) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== `/` ? (
        <div className={styles.felxxx}>
          <div className={styles.navBarTop}>


            <button className={styles.buttonNav}>
              <NavLink to='/about' className={styles.deleteLine}>
                Sobre mi🤝
              </NavLink>
            </button>

            <button className={styles.buttonLogOut} onClick={() => props.logout()}>
              Salir ❌
            </button>
          </div>
          <div className={styles.imgContainer}>
           
         
            
          </div>

          <br />

          <SearchBar onSearch={props.onSearch} />

          <div className={styles.acomodadorb}>
            <div className={styles.navBarBottom}>
              {/* Dejamos un espacio flexible para empujar los botones hacia el centro */}
            </div>

            <div className={styles.middleButtons}>
              <button className='buttonHome' >
                <NavLink to='/home' className={styles.Botonmedio}>
                  Home 🏠
                </NavLink>
              </button>

              <button className='buttonNav'>
                <NavLink to='/favorites' className={styles.Botonmedio}>
                  Favoritos 🤩
                </NavLink>
              </button>
            </div>
            <div className={styles.navBarBottom}>
              {/* Dejamos otro espacio flexible para empujar los botones hacia el centro */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;









