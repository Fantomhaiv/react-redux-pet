// TODO lesson 6 01.19.15
import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

/* const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities; */
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(
  ({ articles: { entities } }) => entities, // state.articles.entities
  ({ filters }) => filters, // state.filters
  (articles, filters) => {
    const { dateRange: { from, to } } = filters;
    const selected = filters.selected.map(item => item.value);

    return mapToArr(articles).filter((article) => {
      const published = Date.parse(article.date);

      return (!selected.length || selected.includes(article.id)) &&
        (!from || !to || (published > from && published < to));
    });
  },
);

export const commentSelectorFactory = () => createSelector(
  commentsGetter, idGetter,
  // (comments, id) => comments.find(comment => comment.id === id),
  (comments, id) => comments[id],
);
