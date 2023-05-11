// import React  from "react";
// import axios from "axios";


// export function ImageInfo {
// state = {
//     URL: 'https://pixabay.com/api/',
//     KEY: '34696106-88b2027f4b58668cbaef654c9',
//     images:[],
//     page: 1,
//     searchQuery: '',
//     amount:12,
// }
// fetchApi = () =>{
//     axios.get(`${this.state.URL}/?key=${this.state.KEY}&q=${this.state.searchQuery}&image_type=photo&per_page=${this.state.amount}`)
//     .then(res => res.json())
//     .then(res => this.SetState({images:res.data.hits}))
//     .catch(error => console.log(error));
// }
// }