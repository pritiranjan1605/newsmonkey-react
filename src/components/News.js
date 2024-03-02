import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updatenews = async () => {
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?apiKey=d3541826b615413ebfc7c9716455127b&country=in&category=${props.category}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);

    let parsedata = await data.json();
    props.setProgress(50);

    setArticles(parsedata.articles);
    setLoading(false);
    setTotalResults(parsedata.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    updatenews();
  }, []);

  const handlepreviousclick = async () => {
    setPage(page-1)
    updatenews()
  };

  const handlenextclick = async () => {
    setPage(page+1)
    updatenews()
  };

  return (
    <div className="container my-3">
      <h2
        style={{ textAlign: "center", marginTop: "80px", marginBottom: "30px" }}
      >
        NewsMonkey-"stay till date"
      </h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4  my-3 " key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            disabled={page <= 1}
            type="button"
            class="btn btn-secondary"
            onClick={handlepreviousclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pagesize)
            }
            type="button"
            class="btn btn-secondary"
            onClick={handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "general",
};
export default News;
