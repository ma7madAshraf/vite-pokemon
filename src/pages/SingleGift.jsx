import React from "react";
import { Link, useParams } from "react-router-dom";
import { usePokemon } from "../context/context";

const SingleGift = () => {
  const { id } = useParams();
  const { giftImages } = usePokemon();
  const img = giftImages.find((e) => e.id === id);

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-4 mb-8 w-fit mx-auto pb-3 ">
        {img.title}
      </h2>
      <img src={img.url} alt={img.title} className="rounded-btn mx-auto" />
      <Link
        to="/gifts"
        className="btn btn-primary btn-wide flex items-center mx-auto mt-8 capitalize text-xl font-semibold "
      >
        back to gifts
      </Link>
    </section>
  );
};

export default SingleGift;
