export default function ListingQuizzes(props) {
    console.log("LIST OF QUIZZES COMPONENT");
  
    const filteredQuizzes = props.list.filter((quiz) => { //filters the quiz based on the specific language
      return quiz.languageId === props.languageId;
    });
  
    return filteredQuizzes.length > 0 ? (
      filteredQuizzes.map((item) => {
        return (
          <div className="quiz-grid" key={item.id}>
            <div className="container-lesson">
              <div className="div-card-name">
                <Link className="card-link" to={`/quiz/${item.id}`}>
                  <h1 className="item-name">{item.quizName}</h1>
                </Link>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="info-message">There are no quizzes in this language</h1>
    );
  }  