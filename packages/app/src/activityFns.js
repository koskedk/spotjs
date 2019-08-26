export function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => (
            location.href.indexOf(`${location.origin}/#/${prefix}`) !== -1
        )
    )
}

export function navbar(location) {
    return true
}

export function stats(location) {
  return  location.hash.startsWith('#/stats') || !location.hash.startsWith('#/globe')
}

export function globe(location) {
    return  location.hash.startsWith('#/globe')
}
