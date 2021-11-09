import { camelCase } from 'loadsh'
import ValidationRule from '~/services/ValidationRule'

const clazzList = []

const requiredService = require.context(
  '~/services/api/',
  false,
  /[A-Z]\w+\.(js)$/
)

requiredService.keys().forEach((fileName) => {
  const clazz = requiredService(fileName)
  const serviceName = camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')) + 'Service'
  clazzList.push({ Clazz: clazz.default, serviceName })
})

export default function ({ app }, inject) {
  clazzList.forEach((clazzobject) => {
    const instance = new clazzobject.Clazz({
      $axios: app.$axios,
      i18n: app.i18n,
      $cookiz: app.$cookiz,
      $store: app.$store
    })
    inject(clazzobject.serviceName, instance)
  })
  const validationRule = new ValidationRule({ i18n: app.i18n })
  inject('rl', validationRule)
}
