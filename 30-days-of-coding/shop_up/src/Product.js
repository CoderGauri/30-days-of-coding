import React from "react";

function Product() {
  const products = [
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipZ4e4pBbZWAQD27nroaXZr-oFkPojd97qw&s",

      name: "women fashion",
    },
    // {
    //   img: (
    //     <img
    //       src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.width-1300.jpg"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Electronics",
    //   imgsrc : "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.width-1300.jpg"
    // },
    // {
    //   img: (
    //     <img
    //       src="https://ecommercephotographyindia.com/assets/img/gallery/cosmetics-products-photography1.jpg"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Beauty Products",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://hips.hearstapps.com/hmg-prod/images/gh-012021-best-hair-products-1642523366.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Hair Products",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.502xw:1.00xh;0.256xw,0&resize=640:*"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Skin Care",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://www.imagesbof.in/wp-content/uploads/2023/02/shutterstock_555060100.jpg"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Footware",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/09/20/201274-homedecor.gif?itok=qtlX6pyE"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Home Decor",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://vaya.in/wp-content/uploads/2021/06/10-Kitchen-Essentials-You-Need-To-Have.jpg"
    //       className="image"
    //     ></img>
    //   ),

    //   name: "Kitchen Essentials",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://m.media-amazon.com/images/I/61ZTvVYxKtL._AC_UF1000,1000_QL80_.jpg"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Organizer",
    // },
    // {
    //   img: (
    //     <img
    //       src="https://images-cdn.ubuy.co.in/635b17232ae82a0d4b713907-ubuy-online-shopping.jpg"
    //       className="image"
    //     ></img>
    //   ),
    //   name: "Perfume",
    // },
  ];
  return (
    <div className="Product">
      {products.map((item, index) => (
        <div key={index} className="ProductList">
          <img src={item.imgsrc} className="image"></img>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Product;
