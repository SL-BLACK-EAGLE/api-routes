

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  await wait (5000)
  const  res   = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data =  await res.json()

  return <div>{JSON.stringify(data)}</div>;
};

export default page;
