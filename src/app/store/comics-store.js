import { observable, action, runInAction } from 'mobx'
import { Toast } from 'native-base'

class ComicsStore {
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
  resetFlags = () => {
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

  @action
  fetchComics = async () => {
    this.resetFlags()
    try {
      const response = await fetch('http://gcomics.nerfthis.xyz/api/v1/comics')
      const { data } = await response.json()

      runInAction(() => {
        this.comics = data
        this.fetching = false
      })
    } catch (error) {
      runInAction(() => {
        this.hasError = true
        this.fetching = false
      })

      Toast.show({
        text: error.message,
        duration: 2000,
        type: 'danger',
      })
    }
  }

  selectComicById = id => this.comics.find(c => c.id === id)
}

const comicsStore = new ComicsStore()
export default comicsStore
