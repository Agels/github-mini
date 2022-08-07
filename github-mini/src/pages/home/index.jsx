import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Dropdown from "react-bootstrap/Dropdown";
import images from "../../image-3.svg";
function Home() {
  const navigate = useNavigate();
  const [getUser, setUser] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (name !== "") {
      setLoading(true);
      axios
        .get(`https://api.github.com/search/users?q=${name}&per_page=5`)
        .then((res) => {
          setUser(res.data.items);
          setLoading(false);
        });
    }
  }, [name]);

  return (
    <>
      <div className="container col-lg-12">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div
              className="logo fs-1 "
              style={{ fontFamily: "oxygen", color: "#3D61F5" }}
            >
              Github Mini
            </div>
            <h3 className="mt-5">Github sederhana </h3>
            <p className="fs-5 fw-light mt-5">
              Github mini adalah web sederhana untuk mencari dan melihat
              repository dari pengguna github dan saya gunakan untuk salah satu
              syarat tes di tebengan
            </p>
            <div className="mt-5 col-lg-10">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus={true}
                placeholder="search..."
              />

              <Dropdown.Menu
                show={name !== "" ? true : false}
                className="col-lg-4 col-md-6 col-sm-12 "
              >
                {loading ? (
                  <p>loading ...</p>
                ) : (
                  getUser.map((el, index) => {
                    return (
                      <>
                        <Dropdown.Item
                          eventKey={index}
                          onClick={() => {
                            navigate(`/cards/${el.login}/${el.id}`);
                          }}
                        >
                          {el.login}
                        </Dropdown.Item>
                      </>
                    );
                  })
                )}
              </Dropdown.Menu>
            </div>
          </div>
          <div class="col-lg-6 mt-5">
            <img src={images} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
