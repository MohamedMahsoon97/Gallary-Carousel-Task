import axios from "axios";
import { useState, useEffect } from "react";

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './CarouselGallary.css';

const pictureApiUrl = "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy"

const CarouselGallary = () => {
      const [items , setItems] = useState([]);
      const [name , setName] = useState([]);

      useEffect(() => {
            axios.get(pictureApiUrl).then((pic) => {
                  setItems(pic.data);
            }).catch((Error) => {console.log(Error)});
      } , [] );

      const images = items.map((img) => ({
            src: `${img.url}`
      }));

      // const names = items.map((name) => (
      //       setName(name.name)
      //       // console.log(name)
      // ));

	return (
            <Carousel images={images} style={{ height: 500, width: 1000 }} />
      )
};

export default CarouselGallary;