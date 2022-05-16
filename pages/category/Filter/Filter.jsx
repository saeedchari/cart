import { array, func, string } from "prop-types";
import { useRouter } from "next/router";

const Filter = ({ category, color, size, url, setQueryString }) => {
  const router = useRouter(),
    { push, query } = router;

  const filterCategory = (name) => {
    if (query.category === name) {
      push({ pathname: `/category` });
    } else {
      push({ pathname: `/category/${name}` });
    }
  };

  const filter = (name, value) => {
    if (query[name] === value) {
      push({
        pathname: url,
        query: setQueryString({ ...query }, ["category", "page", name]),
      });
    } else {
      push({
        pathname: url,
        query: setQueryString({ ...query, [name]: value }, [
          "category",
          "page",
        ]),
      });
    }
  };

  return category && color && size ? (
    <div className="category-filter">
      <h4 className="category-filter-title">دسته بندی ها</h4>
      <ul>
        {category.map(({ id, name }) => {
          return (
            <li
              key={id}
              onClick={() => filterCategory(name)}
              className={
                query.category && query.category.join(" ") === name
                  ? "active"
                  : ""
              }
            >
              {name}
            </li>
          );
        })}
      </ul>
      <h4 className="category-filter-title">رنگ ها</h4>
      <ul>
        {color.map(({ id, name }) => {
          return (
            <li
              key={id}
              onClick={() => filter("color", name)}
              className={query.color === name ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <h4 className="category-filter-title">سایز ها</h4>
      <ul>
        {size.map(({ id, name }) => {
          return (
            <li
              key={id}
              onClick={() => filter("size", name)}
              className={query.size === name ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    ""
  );
};

Filter.propTypes = {
  category: array,
  color: array,
  size: array,
  url: string,
  setQueryString: func,
};

export default Filter;
