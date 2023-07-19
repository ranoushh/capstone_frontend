import React from 'react';
import { Link } from "react-router-dom";
import "../style/singleLanguage.css";
import { useParams } from "react-router";

export default function ListingLessons(props) { 
    const { languageId } = useParams();
     if (!props.list) {
       return <h1 className="info-message">There are no lessons here</h1>;
     }
      const filteredLessons = props.list.filter((lesson) => {
        return lesson.languageId === props.languageId;
      });
    return filteredLessons.length > 0 ? (
      <div className="item-grid">
        {filteredLessons.map((item) => (
          <Link key={item.id} className="card-link" to={`/lesson/${item.id}`}>
            <div className="container-item">
              <h2 className="item-name">{item.lessonName}</h2>
              <Link
                to={`/language/${languageId}/lesson/edit/${item.id}`}
                className="text"
              >
                <button className="edit-btn">Edit</button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <h1 className="info-message">There are no lessons here</h1>
    );
}
