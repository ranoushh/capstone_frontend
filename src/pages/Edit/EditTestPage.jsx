import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchSingleTestThunk } from "../../redux/tests/tests.actions";
import EditTest from "../../components/forms/EditTest";

const EditTestPage = () => {
  const { id, languageId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleTestThunk(id));
  }, [id, dispatch]);

  return (
    <div>
      <EditTest languageId={languageId} />
    </div>
  );
};

export default EditTestPage;
