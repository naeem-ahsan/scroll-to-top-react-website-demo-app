import React, { useEffect, useState } from "react";
import products from "../products";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  let { productSlug } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });

    // Code to fetch products
    products.map((item) => {
      if (item.slug === productSlug) {
        setProduct(item);
      }
    });
  }, [productSlug]);

  return (
    <div>
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <h1 class="display-5 fw-bolder">{product.name}</h1>
              <div class="fs-5 mb-5">
                <span>{product.price}</span>
              </div>

              <div class="d-flex">
                <input
                  class="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value="1"
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  class="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i class="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">Related products</h2>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((item) => {
              return (
                <Link to={`/${item.slug}`}>
                  <div class="col mb-5">
                    <div class="card h-100">
                      <img
                        class="card-img-top"
                        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                        alt="..."
                      />

                      <div class="card-body p-4">
                        <div class="text-center">
                          <h5 class="fw-bolder">{item.name}</h5>
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
