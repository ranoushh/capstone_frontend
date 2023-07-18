import React from 'react';
import { Link } from "react-router-dom";
import "../styling/LessonStyle.css"


export default function ListingLessons(props) { //CSS
    console.log("LIST LESSONS COMPONENT");
    return props.list.length > 0 ? (
        props.list.map((item) => {
            return (
                <div className="item-grid">
                    <div className="container-item" key={item.id}>
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
