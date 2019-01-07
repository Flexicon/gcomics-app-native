import { observable, action } from 'mobx'
import { Toast } from 'native-base'

class ComicsListStore {
  @observable comics = []

  @observable fetching = null

  @observable hasError = null

  @action
  addComic = comic => {
    this.comics.push(comic)
  }

  @action
  addComics = comics => {
    this.comics.push(...comics)
  }

  @action
  resetState = () => {
    this.comics = []
    this.hasError = null
    this.fetching = true
  }

  @action
  startFetching = () => {
    this.fetching = true
  }

  @action
  stopFetching = () => {
    this.fetching = false
  }

  @action
  setError = hasError => {
    this.hasError = hasError
  }

  @action.bound
  async fetchComics() {
    this.resetState()
    try {
      const response = await fetch('http://gcomics.nerfthis.xyz/api/v1/comics')
      const { data } = await response.json()

      this.addComics(data)
      this.stopFetching()
    } catch (error) {
      this.setError(true)
      this.stopFetching()

      Toast.show({
        text: error.message,
        duration: 2000,
      })
    }
  }
}

const comicsListStore = new ComicsListStore()
export default comicsListStore
