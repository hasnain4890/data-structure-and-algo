// promise pactice

const Promise_Obj = new Promise((reslove, reject) => {
  setTimeout(() => {
    let job = ["lead software Engineer", "junior software engineer"];
    reslove(job);
    //reject("something wrong!");
  }, 2000);
});

const getBioData = (job) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (job) => {
        let bioData = {
          name: "hasnain",
          age: 24,
        };
        resolve(
          `My Job is ${job}. My name is ${bioData.name} and I am ${bioData.age} years Old`
        );
      },
      2000,
      job
    );
  });
};

Promise_Obj.then((job) => {
  console.log(job);
  return getBioData(job[1]);
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
