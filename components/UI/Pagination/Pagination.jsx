import { number, object, string } from "prop-types";
import Link from "next/link";

const Pagination = ({ count, link, query, activePage }) => {
  const pagination = [];

  for (let i = 1; i <= count; i++) {
    pagination.push(
      <li key={i}>
        <Link href={{ pathname: link, query: { ...query, page: i } }}>
          <a className={activePage === i ? "active" : ""}>{i}</a>
        </Link>
      </li>
    );
  }

  return <ul className="pagination justify-content-center">{pagination}</ul>;
};

Pagination.propTypes = {
  count: number,
  link: string,
  query: object,
  activePage: number,
};

export default Pagination;
