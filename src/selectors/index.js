import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

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
  ({ comments: { entities } }) => entities,
  (state, { id }) => id,
  // (comments, id) => comments.find(comment => comment.id === id),
  (comments, id) => comments.get(id),
);
