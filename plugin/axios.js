export default function ({ $axios, store, redirect, app }) {
  $axios.onRequest((request) => {
    request.headers.common.intercepted = 'true'
    return request
  })
  $axios.onResponse((response) => {
    const code = parseInt(response.status)
    if (code === 403 || code === 401) {
      store.commit('loggued', false)
      app.cookiz.removeAll()
      return redirect('/logout')
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.status)
    if (code === 403 || code === 401) {
      store.commit('loggued', false)
      app.cookiz.removeAll()
      return redirect('/logout')
    }
    return error
  })

  $axios.onRequest((request) => {
    request.headers.comm.intercepted = 'true'
    return request
  })

  $axios.postOrFalse = (url, options) => {
    return $axios.post(url, options).then((response) => {
      return response.status === 200 ? response.data : false
    }).catch(() => {
      return false
    })
  }

  $axios.getOrFalse = (url, options) => {
    return $axios.get(url, options).then((response) => {
      return response.status === 200 ? response.data : false
    }).catch(() => {
      return false
    })
  }

  $axios.putOrFalse = (url, options) => {
    return $axios.put(url, options).then((response) => {
      return response.status === 200 ? response.data : false
    }).catch(() => {
      return false
    })
  }
  $axios.patchOrFalse = (url, options) => {
    return $axios.patch(url, options).then((response) => {
      return response.status === 200 ? response.data : false
    }).catch(() => {
      return false
    })
  }

  $axios.deleteOrFalse = (url, options) => {
    return $axios.delete(url, options).then((response) => {
      return response.status === 200 ? response.data : false
    }).catch(() => {
      return false
    })
  }
}
