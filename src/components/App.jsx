/* eslint-disable array-callback-return */
import { Component } from 'react'
import { Searchbar } from './Elements/Searchbar'
import { ImageGallery } from './Elements/ImageGallery/ImageGallery'
import { Button } from './Elements/Button'
import { Loader } from './Elements/Loader'
//import { Modal } from './Elements/Modal'
import axios from "axios"
import styles from './Elements/Style.module.css'

export class App extends Component {
  state = {
    search: '',
    nextPage: 1,
    currentValue: '',
    picsToRender: []
  }

  handleChange = evt => {
    const { value } = evt.target
    this.setState({ search: value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const { search } = this.state
    if (this.state.currentValue === this.state.search) {
      this.setState(prevState => {
        return { nextPage: prevState.nextPage + 1 }
      })
    } else {
        this.setState({ currentValue: search })
        this.setState({ picsToRender: [] })
        this.setState({ nextPage: 1 })
    }
    this.imgRender()
  }

  findImg = () => {
    const key = "39209213-26e6de3edfb0581cbb486c9d2"
    const { search, nextPage } = this.state
    const responce = axios.get(`https://pixabay.com/api/?q=${search}&page=${nextPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
    return(responce)
  }

  imgRender = () => {
    this.findImg()
        .then(resp => {
            if(resp.data.total === 0) {
                console.log('Sorry, there are no images matching your search query. Please try again.')
            } else {
              const pics = this.state.picsToRender
              resp.data.hits.map(function (item) {
                const { id, tags, webformatURL, largeImageURL } = item
                pics.push({ id: id, tags: tags, webformatURL: webformatURL, largeImageURL: largeImageURL })
              })
              this.setState({ picsToRender: pics })
            }
        })
        .catch(error => {
            console.log(error)
        })
}

  render() {
    const { picsToRender, search } = this.state
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSubmit} onChange={this.handleChange} value={search}/>
        <ImageGallery items={picsToRender} />
        <div className={styles.Container}>
          <Loader />
          <Button />
        </div>
      </div>
    )
  }
}
