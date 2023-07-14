import React from 'react';
import { Link } from "react-router-dom";

export default function ListingTests(props) {
    console.log("LIST OF TESTS COMPONENT");
  
    const filteredTests = props.list.filter((test) => { //filters the test based on the specific language
      return test.languageId === props.languageId;
    });
  
    return filteredTests.length > 0 ? (
      filteredTests.map((item) => {
        return (
          <div className="test-grid" key={item.id}>
            <div className="container-lesson">
              <div className="div-card-name">
                <Link className="card-link" to={`/test/${item.id}`}>
                  <h1 className="item-name">{item.testName}</h1>
                </Link>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="info-message">There are no tests in this language</h1>
    );
  }  