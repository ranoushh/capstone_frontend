import React from 'react';
import { Link } from "react-router-dom";

export default function ListingLessons(props) { //CSS
    console.log("LIST LESSONS COMPONENT");
     if (!props.list) {
       return <h1 className="info-message">There are no lessons here</h1>;
     }
      const filteredLessons = props.list.filter((lesson) => {
        return lesson.languageId === props.languageId;
      });
    return filteredLessons.length > 0 ? (
        filteredLessons.map((item) => {
            return (
                <div className="lesson-grid">
                    <div className="container-lesson" key={item.id}>
                        <div className="div-card-name">
                            <Link className="card-link" to={`/lesson/${item.id}`}>
                                <h1 className="item-name">{item.lessonName}</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        })
    ) : (
        <h1 className="info-message">There are no lessons here</h1>
    );
}
