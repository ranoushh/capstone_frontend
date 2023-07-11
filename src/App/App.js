import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/campuses' element={<Campuses />} />
        <Route path="/campuses/:campusId" Component={SingleCampus} />
        <Route path="/student/:studentId" Component={SingleStudent} />
        <Route path='/student' element={<AddStudent />} />
        <Route path='/campus' element={<AddCampus />} />
        <Route path="/student/:studentId" element={<EditStudent />} />
        <Route path="/campus/:campusId" element={<EditCampus />} />
      </Routes>
    </Router>
  );
}

export default App;
