import React, { useEffect, useMemo } from 'react';
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from './App.module.css';
import articlesReducer from '../../services/articles/reducer';
import { setArticles } from '../../services/articles/actions';
import Home from './Routes/Home/Home';

export default () => {
  // creo lo store all'interno del componente,
  // in modo che più istanze di App non condividato lo stesso store
  const articlesStore = useMemo(() => createStore(articlesReducer), []);
  useEffect(() => {
    fetch('http://172.104.142.224/articles.php')
      .then(response => response.json())
      .then(data => articlesStore.dispatch(setArticles(data)));
  }, [articlesStore]);
  return (
    <StoreProvider store={articlesStore}>
      <div className={style.Root}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    </StoreProvider>
  );
};
