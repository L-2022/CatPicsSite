import React, { useState, useEffect } from "react";
import SearchBarButtons from "../../components/SearchBarButtons";
import ListVotes from "../../components/ListVotes";
import { connect } from 'react-redux';
import { setFiltersButton } from "../../actions";
import { fetchHistoricVotes, fetchVote, fetchImageToVoteOn } from "../../http/fatcAPI";
const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY =
  "live_QUVQHHPmw6D7q52PTU3aSu2UwkRxGv8as5orzgUmJH0whYCE0tHYDgx1DImSEHQW";

function Voting({ filtersButton, setFiltersButton }) {
  const [currentImageToVoteOn, setCurrentImageToVoteOn] = useState(null);
  const [votes, setVotes] = useState([]);
  const [showVoteOptions, setShowVoteOptions] = useState(true);
  
  useEffect(() => {
    fetchHistoricVotes()
    .then((data) => setVotes(data))
      .then((response) => {
        response.json();
        setShowVoteOptions(false);
      })
      // .then((data) => {
      //   setShowVoteOptions(false);
      // })
      .catch((error) => {
        console.log(error);
      });

    showImageToVoteOn();
  }, [filtersButton]);

  const showImageToVoteOn = () => {
    // const url = `${API_URL}images/search`;

    // fetch(url, {
    //   headers: {
    //     "x-api-key": API_KEY,
    //   },
    // })
    fetchImageToVoteOn()
      // .then((res) => res.json())
      .then((data) => {
        console.log(data, 'data2')
        setCurrentImageToVoteOn(data[0])
      });
  };

  const vote = (value) => {
    fetchVote({value, currentImageToVoteOn})
    .then(() => {
      setShowVoteOptions(true)
      showImageToVoteOn()

    });
  };
  // const vote = (value) => {
  //   const url = `${API_URL}votes/`;
  //   const body = {
  //     image_id: currentImageToVoteOn.id,
  //     value,
  //   };

  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: {
  //       "content-type": "application/json",
  //       "x-api-key": API_KEY,
  //     },
  //   }).then(() => {
  //     setShowVoteOptions(true);
  //     showImageToVoteOn();
  //   });
  // };

  return (
    <div>
      <SearchBarButtons />
      <div>
        <button>Back</button>
        <button onClick={() => setFiltersButton(0)}>Voting</button>
      </div>
      {filtersButton === 0 ? (
        <div id="vote-options" className="vote-options">
          <button onClick={() => vote(2)}>Add to likes</button>
          <button onClick={() => vote(1)}>Add to favourites</button>
          <button onClick={() => vote(-1)}>Add to dislikes</button>
          <div>
            <img
              src={currentImageToVoteOn ? currentImageToVoteOn.url : ""}
              alt="Cat Image"
              width={200}
              height={200}
            />
          </div>

          <div id="grid" className="imgrid">
            {votes.map((voteData, index) => {
              return (
                <div key={index}>
                  {index <= 3 ? (
                    <p>
                      {voteData.created_at.slice(11, 16)}
                      {` Image ID: ${voteData.image_id} was added to ${
                        voteData.value === 1 ? "Favourite" : ""
                      }
                      ${voteData.value === 2 ? "Like" : ""}
                      ${voteData.value === -1 ? "Dislike" : ""}`}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <ListVotes list={votes} filtersButton={filtersButton} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  filtersButton: state.filters.filtersButton,
});

export default connect(mapStateToProps, { setFiltersButton })(Voting);

