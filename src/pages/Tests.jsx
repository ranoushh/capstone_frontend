import React, { useEffect } from "react";
// import Navigation from "../components/Navigation";
import ListingTests from "../components/ListingTests";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTestsThunk } from "../redux/tests/tests.actions";

function Tests() {
  const allTests = useSelector((state) => state.tests.allTests);
  const dispatch = useDispatch();

  function fetchAllTests() {
    console.log("RUNNING DISPATCH FROM FETCHALLTestS");
    return dispatch(fetchAllTestsThunk());
  }

  useEffect(() => {
    console.log("FETCH ALL TestS FIRING IN USEEFFECT");
    fetchAllTests();
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <ListingTests list={allTests} />
    </div>
  );
}

export default Tests;
