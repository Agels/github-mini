// import './App.css';

// import {useEffect, useState} from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router'
// import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  // const navigate = useNavigate();
  // const [getUser, setUser] = useState([]);
  // const [name, setName] = useState('');
  // const [loading, setLoading] = useState(false)
  // useEffect(()=> {
  //   if(name !== ''){
  //     setLoading(true) 
  //     axios.get(`https://api.github.com/search/users?q=${name}&per_page=5`,{
  //       method: "GET",
  //       headers: {
  //         'Authorization': 'token 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',
  //       }
  //     })
  //     .then(res => {
  //       setUser(res.data.items);
  //       setLoading(false)
  //     })
  
  //   } else {
    
  //     setUser([])
  //   }
    
  // },[name]);

  // // useEffect(()=> {
  // //   if(repo){

  // //     setLoading(true)
  // //     axios.get(`https://api.github.com/users/${repo}/repos`,{
  // //       method: "GET",
  // //       headers: {
  // //         'Authorization': 'token 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',
  // //       }
  // //     })
  // //     .then(res => {
  // //       setListRepo(res.data)
  // //       setLoading(false)
  // //     })
  // //   }
  // // },[repo]);
 

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div className="col-lg-3 col-md-3 col-sm-6"> 
  //       <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} autoFocus={true} />

  //        <Dropdown.Menu show={name !== '' ? true : false } className="col-lg-3 col-md-3 col-sm-6">
  //       {loading ? <p>loading ...</p> : getUser.map((el,index) => {
  //         return(
  //           <>
  //           <Dropdown.Item eventKey={index} onClick={() => {navigate(`/cards/${el.login}/${el.id}`)} }>{el.login}</Dropdown.Item>
  //           </>
  //       ) })}
  //       </Dropdown.Menu>
  //       </div>
  //     </header>
  //   </div>
  //);

}

export default App;
