import React from "react";
import { useDispatch } from "react-redux";
import AddTest from "../../components/forms/AddTest";
import { addTestThunk } from "../../redux/tests/tests.actions";
import { useParams } from "react-router-dom";

const AddTestPage = () => {
  //dispatch the action to the store
  const { languageId } = useParams();
  const dispatch = useDispatch();
  const handleSubmit = (test) => {
    dispatch(addTestThunk(test));
  };

  return (
    <div>
      <AddTest onSubmit={handleSubmit} languageId={languageId} />
    </div>
  );
};

export default AddTestPage;
