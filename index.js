class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function solution(U, N) {
  return new Promise((resolve, reject) => {
    Promise.all([getLikedBrands(U.id), getTopBrandsForGender(U.gender)])
      .then(([likedBrands, topBrands]) => {
        const mergedBrands = mergeBrands(likedBrands, topBrands);
        if (mergedBrands.length < N) {
          reject(new CustomError("Not enough data"));
        } else {
          resolve(mergedBrands.slice(0, N).map((brand) => brand.name));
        }
      })
      .catch((error) => reject(error));
  });
}

function getLikedBrands(userId) {
  return Promise.resolve([
    { id: 1, name: "Logestyx" },
    { id: 10, name: "Gladlear" },
  ]);
}

function getTopBrandsForGender(gender) {
  return Promise.resolve([
    { id: 6, name: "Burylaze Slapgalt" },
    { id: 1, name: "Logestyx" },
    { id: 7, name: "Izarpure" },
  ]);
}

function mergeBrands(likedBrands, topBrands) {
  const mergedMap = new Map();
  likedBrands.forEach((brand) => mergedMap.set(brand.id, brand));
  topBrands.forEach((brand) => mergedMap.set(brand.id, brand));
  return Array.from(mergedMap.values());
}

// Example usage
const user = { id: 123, gender: "male" };
const N = 3;

solution(user, N)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
