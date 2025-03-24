import React from "react";

function CategoryCard({ name, image }) {
  const styles = {
    card: {
      background: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      cursor: "pointer",
      width: "200px", // Adjust size as needed
      height: "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    cardImage: {
      width: "100%",
      height: "70%",
      objectFit: "cover",
      borderBottom: "2px solid #ddd",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      padding: "10px",
      color: "#333",
      background: "#f8f8f8",
      borderTop: "1px solid #ddd",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={image} alt={name} style={styles.cardImage} />
      <p style={styles.cardTitle}>{name}</p>
    </div>
  );
}

export default CategoryCard;
