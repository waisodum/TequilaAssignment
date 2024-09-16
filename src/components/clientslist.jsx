import React from "react";

const ClientList = () => {
  const clients = [
    {
      id: 1,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/rayqube.webp",
      alt: "Rayqube",
    },
    {
      id: 2,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/xanara.webp",
      alt: "Xanara",
    },
    {
      id: 3,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/lucrum.webp",
      alt: "Lucrum",
    },
    {
      id: 4,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/bareeze.webp",
      alt: "Bareeze",
    },
    {
      id: 5,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/affinity.webp",
      alt: "Affinity",
    },
    {
      id: 6,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/zaza.webp",
      alt: "Zaza",
    },
    {
      id: 1,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/rayqube.webp",
      alt: "Rayqube",
    },
    {
      id: 2,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/xanara.webp",
      alt: "Xanara",
    },
    {
      id: 3,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/lucrum.webp",
      alt: "Lucrum",
    },
    {
      id: 4,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/bareeze.webp",
      alt: "Bareeze",
    },
    {
      id: 3,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/lucrum.webp",
      alt: "Lucrum",
    },
    {
      id: 4,
      src: "https://cdn-ilbgmnb.nitrocdn.com/BHNTQAYusySbVqCoUCPmOVVxMWSxMahO/assets/images/optimized/rev-4ef3b78/tequila.ae/wp-content/uploads/2023/09/bareeze.webp",
      alt: "Bareeze",
    },
  ];

  return (
    <ul className="client-list">
      {clients.map((client) => (
        <li key={client.id}>
          <img src={client.src} alt={client.alt} className="client-image" />
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
