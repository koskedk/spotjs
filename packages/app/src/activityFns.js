export function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => (
            location.href.indexOf(`${location.origin}/${prefix}`) !== -1
        )
    )
}

export function navbar(location) {
    return true
}

export function stats(location) {
  console.log(location);
    return prefix(location, '')||prefix(location, 'stats')
}

export function globe(location) {
    return prefix(location, 'globe')
}
