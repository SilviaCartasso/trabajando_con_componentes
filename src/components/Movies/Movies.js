export const Movies = (props) => {
    return (
          <>
                <li className="d-sm-flex align-items-center justify-content-around">
                      {props.movies.map((item, i) => (
                            <li className="card-header py-3" key={i} style={{ width: "20%", textAlign: "center", listStyle: "none" }}>
                                  {(() => {
                                        if (Array.isArray(item)) {
                                              return item.map((movie, i) => (
                                                    <li key={i} style={{ textAlign: "center", listStyle: "none" }}>
                                                          {movie}
                                                    </li>
                                              ));
                                        } else {
                                              return item;
                                        }
                                  })()}
                            </li>
                      ))}
                </li>
          </>
    );
};