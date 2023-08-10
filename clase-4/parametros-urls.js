//url de ejemplo
//https://app.silabuz.com/activity/MTgyM0pETQ==?id=3&name=tarea1

const params = new URLSearchParams(location.search)
params.get("id") // '3'
params.get("name") // 'tarea1'
location.search // '?id=3&name=tarea1'

/* -------------- */
location.href  //'https://app.silabuz.com/activity/MTgyM0pETQ==?id=3&name=tarea1'

location.host  // 'app.silabuz.com'

const params2 = location.search.replace("?","")  // 'id=3&name=tarea1'

const newParams = params2.split("&") // ['id=3', 'name=tarea1']