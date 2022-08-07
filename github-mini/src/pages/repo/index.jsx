import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../../component/search";
import Detail from "../../component/detail";
import Paginations from "../../component/pagination";
import Cards from "../../component/cards";
import Avatar from "../../component/avatar";
const Repo = () => {
  const { repo, id } = useParams();
  const urlAvatar = `https://avatars.githubusercontent.com/u/${id}?v=4`;
  const [listRepo, setListRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);
  const [skip, setSkip] = useState(0);
  const [postPerPage, setPostPerPage] = useState(5);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = listRepo.slice(firstPost, lastPost);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(listRepo.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  const ChangePage = (pageNumber) => {
    setSkip(skip + currentPost);
    setNumber(pageNumber);
  };
  useEffect(() => {
    if (repo) {
      setLoading(true);
      axios
        .get(
          `https://api.github.com/users/${repo}/repos?per_page=${currentPost}?sort=created&direction=desc`,
          {
            method: "GET",
            headers: {
              Authorization: "token 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",
            },
          }
        )
        .then((res) => {
          setListRepo(res.data);
          setLoading(false);
        });
    }
  }, [repo]);
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
      
            <Avatar urlAvatar={urlAvatar} repo={repo} />
          </Col>
          <Col lg={9}>
            <Search
              onChange={() => alert("coming soon")}
              onClick={(e) => setPostPerPage(e)}
            />
            <Row>
              {loading ? (
                <p>loading...</p>
              ) : (
                currentPost.map((el, index) => {
                  return (
                    <Col lg={6} className="mt-2">
                      <Cards
                        index={index}
                        name={el.name}
                        id={el.id}
                        language={el.language}
                        onClick={() => setDetail(el)}
                        setShow={() => setShow(true)}
                      />
                    </Col>
                  );
                })
              )}
            </Row>
            <div className="d-flex justify-content-center mt-3">
              <Paginations
                number={number}
                setNumber={(e) => setNumber(e)}
                pageNumber={pageNumber}
                ChangePage={(e) => ChangePage(e)}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Detail detail={detail} show={show} onHide={() => setShow(false)} />

    </div>
  );
};

export default Repo;
