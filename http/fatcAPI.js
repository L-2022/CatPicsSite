const SECRET_KEY = `live_QUVQHHPmw6D7q52PTU3aSu2UwkRxGv8as5orzgUmJH0whYCE0tHYDgx1DImSEHQW`;

export const fetchData = async ({ limit, order, breed }) => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?&limit=${limit}&breed_ids=${breed}&has_breeds=1&order=${order}&api_key=${SECRET_KEY}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
    return [];
  }
};

export const fetchAnimals = async ({ limit, typeDate }) => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&mime_types=${typeDate}&api_key=${SECRET_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
  }
};

export const fetchBreed = async ({ limit, breed }) => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?&limit=${limit}&breed_ids=${breed}&has_breeds=1&api_key=${SECRET_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
  }
};

export const fetchHistoricVotes = async () => {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/votes?limit=15&order=DESC`,
      {
        headers: {
          "x-api-key": SECRET_KEY,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
  }
};
export const fetchImageToVoteOn = async () => {
  try {
    const url = `https://api.thecatapi.com/v1/images/search`;

    const res = await fetch(url, {
      headers: {
        "x-api-key": SECRET_KEY,
      },
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
  }

};

export const fetchVote = async ({value, currentImageToVoteOn}) => {
  try {
    const url = `https://api.thecatapi.com/v1/votes/`;
    const body = {
      image_id: currentImageToVoteOn.id,
      value,
    };

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        "x-api-key": SECRET_KEY,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка під час отримання даних:", error);
  }

};
// export const fetchReviews = async (id) => {
//   const { data } = await $host.get("api/review/getreview/" + id);
//   return data;
// };

// export const createLogo = async (logo) => {
//   const { data } = await $authHost.post("api/logo", logo);

//   return data;
// };

// export const fetchLogo = async () => {
//   const { data } = await $host.get("api/logo");
//   return data;
// };

// export const fetchOneLogo = async (id) => {
//   const { data } = await $host.get("api/logo/" + id);
//   return data;
// };

// export const createReview = async ({ id, review }) => {
//   const { data } = await $authHost.post("api/review/add/" + id, { review });
//   return data;
// };

// export const selectedRating = async ({
//   id,
//   listRatingsId,
//   logoId,
//   postedRating,
// }) => {
//   console.log(logoId, listRatingsId, postedRating, "ApI");
//   const { data } = await $authHost.post("api/user/addreting/" + id, {
//     listRatingsId,
//     logoId,
//     postedRating,
//   });
//   return data;
// };

// export const fetchReting = async ({ id, logoId, listRatingsId }) => {
//   const { data } = await $authHost.get("api/user/getreting/" + id, {
//     params: { logoId, listRatingsId },
//   });
//   console.log(data, "data")
//   return data;
// };
