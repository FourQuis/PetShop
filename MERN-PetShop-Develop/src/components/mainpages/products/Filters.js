import React, { useContext, useRef } from 'react';
import { GlobalState } from '../../../GlobalState';
import searchIcon from './download.png';
import axios from 'axios';
const apidomins = 'http://3.106.209.73:8080';
function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const fileInputRef = useRef(null);

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch('');
    
  };

  const handleIconClick = () => {
    // Trigger click on the file input element
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
        const formData = new FormData();
        formData.append('image', file);
      
        // Update the URL to your Flask server endpoint for file uploads
      let response =  await axios.post(apidomins+'/api/uploads', formData);
      setSearch(response.data.predicted_class)
        console.log('Image uploaded successfully');
    } catch (error) {
        console.error('Error uploading image:', error.message);
    }
};
  return (
    <div className="filter_menu">
      <div className="row">
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">Tất cả danh mục</option>
          {categories.map((category) => (
            <option value={'category=' + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={search}
        placeholder="Tìm kiếm sản phẩm"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Hidden file input for image upload */}
      <input
        type="file"
        name = "image"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      
      <button onClick={handleIconClick}>
        <img className="icon-seach" src={searchIcon} alt="Search" />
      </button>

      <div className="row sort">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sản phẩm mới</option>
          <option value="sort=oldest">Sản phẩm cũ</option>
          <option value="sort=-sold">Sản phẩm nổi bật</option>
          <option value="sort=-price">Giá: cao đến thấp</option>
          <option value="sort=price">Giá: thấp đến cao</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
