function Gallery() {
  const images = [
    { 
      id: 1, 
      title: "Coding Competition", 
      src: "https://picsum.photos/id/0/300/200" 
    },
    { 
      id: 2, 
      title: "Robotics Workshop", 
      src: "https://picsum.photos/id/1/300/200" 
    },
    { 
      id: 3, 
      title: "Gaming Tournament", 
      src: "https://picsum.photos/id/96/300/200" 
    },
    { 
      id: 4, 
      title: "Cultural Night", 
      src: "https://picsum.photos/id/1062/300/200" 
    },
  ];

  return (
    <div className="page">
      <h1>Event Gallery</h1>
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.id} className="gallery-card">
            <img 
              src={img.src} 
              alt={img.title} 
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;