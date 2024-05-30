import React, { useState, useEffect } from 'react';
import './Stylesheets/product.css';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import TopBar from './Componentes/topBar';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/producto/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleBuy = () => {
    history.push(`/pasarela/${id}`);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <TopBar />
      <div className="product-page">
        <div className="product-card">
          <img src={product.Imagen} alt={product.Nombre} className="product-image" />
          <div className="product-info">
            <h2>{product.Nombre}</h2>
            <span className="product-price">{product.Precio} €</span>
            <p className="product-description">{product.Descripcion}</p>
            <div className="product-actions">
              <button className="btn-favorite">❤ Añadir a Favoritos</button>
              <button className="btn-buy" onClick={handleBuy}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;