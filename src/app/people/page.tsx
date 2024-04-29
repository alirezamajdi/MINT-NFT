import React from "react";

interface Props {
  searchParams: { page: string };
}

const People = async ({ searchParams: { page } }: Props) => {
  const responsive = await fetch(
    `https://reqres.in/api/users?page=${page || 1}&per_page=2`,
    {
      next: { revalidate: 1000 * 60 },
    }
  );
  const res = await responsive.json();
  // console.log("ccc", res);

  return (
    <div>
      {res.data.map((item: any) => (
        <p key={item.id}>{item.email}</p>
      ))}
      {/* <Pagination limit={res.per_page} count={res.total} /> */}
    </div>
  );
};

export default People;
